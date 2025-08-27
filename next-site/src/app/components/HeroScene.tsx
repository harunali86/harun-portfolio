"use client";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

function Shapes() {
  return (
    <group>
      <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1.2}>
        <mesh position={[-1.8, 0.6, -1]}>
          <icosahedronGeometry args={[0.45, 0]} />
          <meshStandardMaterial color="#22d3ee" metalness={0.3} roughness={0.2} emissive="#22d3ee" emissiveIntensity={0.2} />
        </mesh>
        <mesh position={[1.6, 0.2, -1.2]} rotation={[0.4, 0.2, 0.1]}>
          <torusKnotGeometry args={[0.32, 0.1, 128, 16]} />
          <meshStandardMaterial color="#a855f7" metalness={0.4} roughness={0.15} emissive="#a855f7" emissiveIntensity={0.15} />
        </mesh>
        <mesh position={[0, -0.4, -0.8]} rotation={[0.2, -0.3, 0.1]}>
          <boxGeometry args={[0.7, 0.45, 0.05]} />
          <meshStandardMaterial color="#22c55e" metalness={0.3} roughness={0.25} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 3.5], fov: 55 }}>
          <color attach="background" args={["#000000"]} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 5, 2]} intensity={1.1} color="#ffffff" />
          <Shapes />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
        </Canvas>
      </Suspense>
    </div>
  );
}

