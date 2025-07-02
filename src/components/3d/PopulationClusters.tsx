'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

interface ClusterData {
  name: string;
  color: string;
  position: [number, number, number];
  points: Float32Array;
}

// Generate mock population data
function generatePopulationData(): ClusterData[] {
  const populations = [
    { name: 'European', color: '#3B82F6', center: [2, 1, 0] },
    { name: 'East Asian', color: '#EF4444', center: [-2, -1, 1] },
    { name: 'African', color: '#10B981', center: [0, 2, -2] },
    { name: 'South Asian', color: '#F59E0B', center: [1, -2, 2] },
    { name: 'Native American', color: '#8B5CF6', center: [-1, 0, -1] },
    { name: 'Oceanian', color: '#06B6D4', center: [3, -1, 0] }
  ];

  return populations.map(pop => {
    const points = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      // Add gaussian noise around center
      points[i * 3] = pop.center[0] + (Math.random() - 0.5) * 2;
      points[i * 3 + 1] = pop.center[1] + (Math.random() - 0.5) * 2;
      points[i * 3 + 2] = pop.center[2] + (Math.random() - 0.5) * 2;
    }
    
    return {
      name: pop.name,
      color: pop.color,
      position: pop.center as [number, number, number],
      points
    };
  });
}

// Individual population cluster
function PopulationCluster({ data }: { data: ClusterData }) {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group>
      <Points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={data.points}
            count={100}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          color={data.color}
          size={0.08}
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </Points>
      <Text
        position={data.position}
        fontSize={0.3}
        color={data.color}
        anchorX="center"
        anchorY="middle"
      >
        {data.name}
      </Text>
    </group>
  );
}

// Main clusters component
function ClustersScene() {
  const groupRef = useRef<THREE.Group>(null);
  const clusters = useMemo(() => generatePopulationData(), []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {clusters.map((cluster, index) => (
        <PopulationCluster key={index} data={cluster} />
      ))}
    </group>
  );
}

export function PopulationClusters() {
  return (
    <div className="w-full h-96 bg-slate-50 rounded-xl overflow-hidden">
      <Canvas camera={{ position: [8, 6, 8], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <ClustersScene />
          <OrbitControls enableZoom={true} enablePan={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}