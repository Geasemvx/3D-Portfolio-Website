import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function MistParticles() {
  const particles = Array.from({ length: 500 }, () => [
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
  ]);

  return (
    <Points positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="white"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function MistyCanvas() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <MistyParticles />
    </Canvas>
  );
}
