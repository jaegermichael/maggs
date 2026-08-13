import type { Metadata } from "next";
import { GateConfigurator } from "@/components/configurator/GateConfigurator";

export const metadata: Metadata = {
  title: "Gate Configurator",
  description:
    "Design a Maggs laser CNC gate in 3D. Choose pattern, material, finish and size for an instant estimate.",
};

export default function ConfiguratorPage() {
  return (
    <div className="container-maggs pb-20 pt-28">
      <GateConfigurator />
    </div>
  );
}
