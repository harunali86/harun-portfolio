"use client";
import { Canvas } from "@react-three/fiber";
import { Float, Points, PointMaterial, OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useMemo } from "react";

function Stars() {
  const positions = useMemo(() => {
    const count = 1500;
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) array[i] = (Math.random() - 0.5) * 8;
    return array;
  }, []);
  return (
    <Points positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#22d3ee" size={0.015} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

export default function ContactScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <color attach="background" args={["#000000"]} />
          <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1.2}>
            <Stars />
            <Sphere args={[1.2, 32, 32]} position={[0, 0, -1]}>
              <MeshDistortMaterial color="#0ea5e9" speed={2.5} distort={0.4} roughness={0.2} transparent opacity={0.25} />
            </Sphere>
          </Float>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#a855f7" />
          <pointLight position={[-5, -3, -5]} intensity={0.8} color="#22d3ee" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
        </Canvas>
      </Suspense>
    </div>
  );
}

