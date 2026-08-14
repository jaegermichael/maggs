"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function GridPlate() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.04;
  });
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2.4, 0, 0]} position={[0, -0.6, 0]}>
      <planeGeometry args={[10, 10, 24, 24]} />
      <meshStandardMaterial
        color="#1a1a1a"
        wireframe
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}

function LaserBeam() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.x = Math.sin(t * 1.4) * 1.8;
    ref.current.position.z = Math.cos(t * 0.9) * 1.2;
  });
  return (
    <mesh ref={ref} position={[0, 0.2, 0]}>
      <boxGeometry args={[0.03, 0.03, 2.4]} />
      <meshStandardMaterial
        color="#E65714"
        emissive="#E65714"
        emissiveIntensity={4}
        toneMapped={false}
      />
    </mesh>
  );
}

function CutRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.35;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[1.35, 0.015, 12, 80]} />
      <meshStandardMaterial
        color="#E65714"
        emissive="#E65714"
        emissiveIntensity={2}
        toneMapped={false}
      />
    </mesh>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(300);
    for (let i = 0; i < 100; i++) {
      arr[i * 3] = ((((i * 47) % 101) / 100) - 0.5) * 8;
      arr[i * 3 + 1] = (((i * 31) % 97) / 96) * 3;
      arr[i * 3 + 2] = ((((i * 59) % 103) / 102) - 0.5) * 8;
    }
    return arr;
  }, []);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.08;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#ff8a4c" transparent opacity={0.7} />
    </points>
  );
}

export function LaserField({ className = "" }: { className?: string }) {
  return (
    <div className={`h-full min-h-[280px] w-full ${className}`}>
      <Canvas camera={{ position: [0, 2.2, 4.5], fov: 42 }} dpr={[1, 1.5]}>
        <color attach="background" args={["#101010"]} />
        <ambientLight intensity={0.35} />
        <pointLight position={[2, 3, 2]} intensity={30} color="#E65714" />
        <GridPlate />
        <LaserBeam />
        <CutRing />
        <Particles />
      </Canvas>
    </div>
  );
}
