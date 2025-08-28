import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

function Orb() {
  return (
    <Float speed={1.4} rotationIntensity={1.1} floatIntensity={1.1}>
      <mesh>
        <icosahedronGeometry args={[1.0, 0]} />
        <meshStandardMaterial color="#22d3ee" metalness={0.35} roughness={0.2} emissive="#22d3ee" emissiveIntensity={0.2} />
      </mesh>
    </Float>
  );
}

export default function SceneOrb() {
  return (
    <div className="h-[360px] w-full">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 3.2], fov: 55 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 5, 2]} intensity={1.1} />
          <Orb />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </Suspense>
    </div>
  );
}

