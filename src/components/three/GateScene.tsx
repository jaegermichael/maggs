"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Float, OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type GateSceneProps = {
  pattern?: string;
  color?: string;
  accent?: string;
  autoRotate?: boolean;
  className?: string;
};

function patternShape(pattern: string): THREE.Shape[] {
  const shapes: THREE.Shape[] = [];
  const outer = new THREE.Shape();
  outer.moveTo(-1.6, -1.1);
  outer.lineTo(1.6, -1.1);
  outer.lineTo(1.6, 1.1);
  outer.lineTo(-1.6, 1.1);
  outer.closePath();

  const cut = (pts: [number, number][]) => {
    const hole = new THREE.Path();
    pts.forEach(([x, y], i) => {
      if (i === 0) hole.moveTo(x, y);
      else hole.lineTo(x, y);
    });
    hole.closePath();
    outer.holes.push(hole);
  };

  if (pattern === "horizon") {
    for (let i = 0; i < 5; i++) {
      const y = -0.75 + i * 0.35;
      cut([
        [-1.25, y - 0.05],
        [1.25, y - 0.05],
        [1.25, y + 0.05],
        [-1.25, y + 0.05],
      ]);
    }
  } else if (pattern === "lattice") {
    for (let x = -1.1; x <= 1.1; x += 0.45) {
      for (let y = -0.7; y <= 0.7; y += 0.45) {
        cut([
          [x - 0.12, y - 0.12],
          [x + 0.12, y - 0.12],
          [x + 0.12, y + 0.12],
          [x - 0.12, y + 0.12],
        ]);
      }
    }
  } else if (pattern === "botanical") {
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const cx = Math.cos(a) * 0.55;
      const cy = Math.sin(a) * 0.4;
      cut([
        [cx, cy - 0.22],
        [cx + 0.12, cy],
        [cx, cy + 0.22],
        [cx - 0.12, cy],
      ]);
    }
  } else if (pattern === "monolith") {
    cut([
      [-0.35, -0.7],
      [0.35, -0.7],
      [0.35, 0.7],
      [-0.35, 0.7],
    ]);
  } else {
    // geo-slash default
    const slashes: [number, number][][] = [
      [
        [-1.2, 0.7],
        [-0.55, 0.95],
        [0.1, 0.15],
        [-0.55, -0.1],
      ],
      [
        [-0.2, 0.85],
        [0.45, 1.0],
        [1.15, 0.05],
        [0.5, -0.1],
      ],
      [
        [-1.15, 0.05],
        [-0.4, 0.25],
        [0.25, -0.7],
        [-0.5, -0.9],
      ],
      [
        [0.05, 0.1],
        [0.7, 0.3],
        [1.25, -0.55],
        [0.6, -0.75],
      ],
    ];
    slashes.forEach(cut);
  }

  shapes.push(outer);
  return shapes;
}

function GateMesh({
  pattern,
  color,
  accent,
}: {
  pattern: string;
  color: string;
  accent: string;
}) {
  const group = useRef<THREE.Group>(null);
  const shapes = useMemo(() => patternShape(pattern), [pattern]);
  const geom = useMemo(() => {
    const g = new THREE.ExtrudeGeometry(shapes, {
      depth: 0.08,
      bevelEnabled: true,
      bevelThickness: 0.015,
      bevelSize: 0.01,
      bevelSegments: 2,
    });
    g.center();
    return g;
  }, [shapes]);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.35) * 0.28 + 0.2;
    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.8) * 0.04;
  });

  return (
    <group ref={group}>
      <mesh geometry={geom} castShadow receiveShadow>
        <meshStandardMaterial
          color={color}
          metalness={0.72}
          roughness={0.32}
          envMapIntensity={1.1}
        />
      </mesh>
      {/* posts */}
      <mesh position={[-1.85, 0, 0]} castShadow>
        <boxGeometry args={[0.16, 2.5, 0.16]} />
        <meshStandardMaterial color={accent} metalness={0.4} roughness={0.45} />
      </mesh>
      <mesh position={[1.85, 0, 0]} castShadow>
        <boxGeometry args={[0.16, 2.5, 0.16]} />
        <meshStandardMaterial color={accent} metalness={0.4} roughness={0.45} />
      </mesh>
      {/* hinge accents */}
      <mesh position={[-1.55, 0.45, 0.06]}>
        <boxGeometry args={[0.12, 0.18, 0.08]} />
        <meshStandardMaterial color="#E65714" metalness={0.5} roughness={0.35} />
      </mesh>
      <mesh position={[-1.55, -0.45, 0.06]}>
        <boxGeometry args={[0.12, 0.18, 0.08]} />
        <meshStandardMaterial color="#E65714" metalness={0.5} roughness={0.35} />
      </mesh>
    </group>
  );
}

function Sparks() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(180);
    for (let i = 0; i < 60; i++) {
      arr[i * 3] = ((((i * 37) % 61) / 60) - 0.5) * 6;
      arr[i * 3 + 1] = (((i * 23) % 59) / 58) * 3 - 0.5;
      arr[i * 3 + 2] = ((((i * 43) % 67) / 66) - 0.5) * 4;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#E65714"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

export function GateScene({
  pattern = "geo-slash",
  color = "#2A2A2A",
  accent = "#1A1A1A",
  autoRotate = true,
  className = "",
}: GateSceneProps) {
  return (
    <div className={`canvas-frame relative h-full min-h-[320px] w-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0.4, 5.2], fov: 38 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#0f0f0f"]} />
        <ambientLight intensity={0.45} />
        <directionalLight
          position={[4, 6, 3]}
          intensity={1.35}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <spotLight
          position={[-4, 3, 2]}
          intensity={40}
          angle={0.4}
          penumbra={0.6}
          color="#E65714"
        />
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.35}>
          <GateMesh pattern={pattern} color={color} accent={accent} />
        </Float>
        <Sparks />
        <ContactShadows
          position={[0, -1.35, 0]}
          opacity={0.55}
          scale={12}
          blur={2.5}
          far={5}
        />
        <Environment preset="city" />
        <OrbitControls
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.7}
          minDistance={3.5}
          maxDistance={7}
          autoRotate={autoRotate}
          autoRotateSpeed={0.6}
        />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}
