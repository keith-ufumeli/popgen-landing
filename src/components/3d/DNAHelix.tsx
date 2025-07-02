'use client';

import { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// DNA Helix Geometry Component
function HelixGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Create helix points
  const helixPoints = new Float32Array(1000 * 3);
  for (let i = 0; i < 1000; i++) {
    const t = (i / 1000) * Math.PI * 8; // 4 full turns
    const radius = 2;
    const height = 10;
    
    // Double helix pattern
    if (i % 2 === 0) {
      helixPoints[i * 3] = Math.cos(t) * radius;
      helixPoints[i * 3 + 1] = (i / 1000) * height - height / 2;
      helixPoints[i * 3 + 2] = Math.sin(t) * radius;
    } else {
      helixPoints[i * 3] = Math.cos(t + Math.PI) * radius;
      helixPoints[i * 3 + 1] = (i / 1000) * height - height / 2;
      helixPoints[i * 3 + 2] = Math.sin(t + Math.PI) * radius;
    }
  }

  // Animation loop
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group>
      {/* Main DNA strands */}
      <mesh ref={meshRef}>
        <tubeGeometry args={[
          new THREE.CatmullRomCurve3(
            Array.from({ length: 100 }, (_, i) => {
              const t = (i / 100) * Math.PI * 8;
              return new THREE.Vector3(
                Math.cos(t) * 2,
                (i / 100) * 10 - 5,
                Math.sin(t) * 2
              );
            })
          ),
          20, // tubularSegments
          0.05, // radius
          8, // radialSegments
          false // closed
        ]} />
        <meshBasicMaterial color="#3B82F6" transparent opacity={0.8} />
      </mesh>

      {/* Base pairs as connecting lines */}
      {Array.from({ length: 50 }, (_, i) => {
        const t = (i / 50) * Math.PI * 8;
        const y = (i / 50) * 10 - 5;
        return (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[
                  new Float32Array([
                    Math.cos(t) * 2, y, Math.sin(t) * 2,
                    Math.cos(t + Math.PI) * 2, y, Math.sin(t + Math.PI) * 2
                  ]),
                  3
                ]}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#8B5CF6" />
          </line>
        );
      })}

      {/* Particle effects */}
      <Points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[helixPoints, 3]}
          />
        </bufferGeometry>
        <PointMaterial
          color="#06B6D4"
          size={0.05}
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </Points>
    </group>
  );
}

// Camera controller
function CameraController() {
  const { camera, gl } = useThree();
  
  useEffect(() => {
    camera.position.set(8, 2, 8);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return <OrbitControls enableZoom={false} enablePan={false} />;
}

// Loading fallback
// function LoadingFallback() {
//   return (
//     <div className="absolute inset-0 flex items-center justify-center">
//       <div className="text-white/70 text-lg">Loading DNA visualization...</div>
//     </div>
//   );
// }

// Main DNA Helix component
export function DNAHelix() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [8, 2, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <HelixGeometry />
          <CameraController />
        </Suspense>
      </Canvas>
    </div>
  );
}