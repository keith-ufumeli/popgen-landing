'use client';

import { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface TreeNode {
  id: string;
  name?: string;
  position: [number, number, number];
  children: TreeNode[];
  branchLength: number;
}

// Generate phylogenetic tree data
function generateTreeData(): TreeNode {
  return {
    id: 'root',
    position: [0, -4, 0],
    branchLength: 0,
    children: [
      {
        id: 'africa',
        name: 'African',
        position: [-3, 0, 0],
        branchLength: 2,
        children: [
          {
            id: 'west_africa',
            name: 'West African',
            position: [-4, 2, 0],
            branchLength: 1.5,
            children: []
          },
          {
            id: 'east_africa',
            name: 'East African',
            position: [-2, 2, 0],
            branchLength: 1.5,
            children: []
          }
        ]
      },
      {
        id: 'non_africa',
        position: [1, -2, 0],
        branchLength: 1,
        children: [
          {
            id: 'european',
            name: 'European',
            position: [0, 2, 0],
            branchLength: 2,
            children: []
          },
          {
            id: 'asian',
            position: [2, 0, 0],
            branchLength: 1.5,
            children: [
              {
                id: 'east_asian',
                name: 'East Asian',
                position: [3, 2, 0],
                branchLength: 1,
                children: []
              },
              {
                id: 'south_asian',
                name: 'South Asian',
                position: [1, 2, 0],
                branchLength: 1,
                children: []
              }
            ]
          },
          {
            id: 'oceania',
            name: 'Oceanian',
            position: [4, 0, 0],
            branchLength: 2,
            children: []
          },
          {
            id: 'americas',
            name: 'Native American',
            position: [2, -2, 0],
            branchLength: 2,
            children: []
          }
        ]
      }
    ]
  };
}

// Individual tree branch component
function TreeBranch({ 
  start, 
  end, 
  animated = false, 
  delay = 0 
}: { 
  start: [number, number, number]; 
  end: [number, number, number]; 
  animated?: boolean;
  delay?: number;
}) {
  const lineRef = useRef<any>(null);
  const [progress, setProgress] = useState(animated ? 0 : 1);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setProgress(1);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [animated, delay]);

  const points = [
    new THREE.Vector3(...start),
    new THREE.Vector3(
      start[0] + (end[0] - start[0]) * progress,
      start[1] + (end[1] - start[1]) * progress,
      start[2] + (end[2] - start[2]) * progress
    )
  ];

  return (
    <Line
      ref={lineRef}
      points={points}
      color="#64748B"
      lineWidth={2}
    />
  );
}

// Tree node component
function TreeNode({ 
  node, 
  parentPosition, 
  animated = false, 
  depth = 0 
}: { 
  node: TreeNode; 
  parentPosition?: [number, number, number]; 
  animated?: boolean;
  depth?: number;
}) {
  const nodeRef = useRef<THREE.Mesh>(null);
  const delay = depth * 0.5;

  return (
    <group>
      {/* Branch to parent */}
      {parentPosition && (
        <TreeBranch
          start={parentPosition}
          end={node.position}
          animated={animated}
          delay={delay}
        />
      )}
      
      {/* Node sphere */}
      <mesh ref={nodeRef} position={node.position}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial 
          color={node.name ? "#3B82F6" : "#94A3B8"} 
        />
      </mesh>
      
      {/* Node label */}
      {node.name && (
        <Text
          position={[node.position[0], node.position[1] + 0.3, node.position[2]]}
          fontSize={0.2}
          color="#1E293B"
          anchorX="center"
          anchorY="bottom"
        >
          {node.name}
        </Text>
      )}
      
      {/* Render children */}
      {node.children.map((child) => (
        <TreeNode
          key={child.id}
          node={child}
          parentPosition={node.position}
          animated={animated}
          depth={depth + 1}
        />
      ))}
    </group>
  );
}

// Main tree scene
function TreeScene({ animated = false }: { animated?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const treeData = generateTreeData();

  useFrame((state) => {
    if (groupRef.current && !animated) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <TreeNode node={treeData} animated={animated} />
    </group>
  );
}

export function PhylogeneticTree({ animated = false }: { animated?: boolean }) {
  return (
    <div className="w-full h-96 bg-slate-50 rounded-xl overflow-hidden">
      <Canvas camera={{ position: [6, 4, 6], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <pointLight position={[5, 5, 5]} intensity={0.6} />
          <TreeScene animated={animated} />
          <OrbitControls enableZoom={true} enablePan={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}