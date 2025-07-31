import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedPoints() {
  const ref = useRef();
  const [positions, connections] = useMemo(() => {
    const positions = new Float32Array(300);
    const connections = [];
    
    for (let i = 0; i < 100; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    
    // Create connections between nearby points
    for (let i = 0; i < 100; i++) {
      for (let j = i + 1; j < 100; j++) {
        const distance = Math.sqrt(
          Math.pow(positions[i * 3] - positions[j * 3], 2) +
          Math.pow(positions[i * 3 + 1] - positions[j * 3 + 1], 2) +
          Math.pow(positions[i * 3 + 2] - positions[j * 3 + 2], 2)
        );
        if (distance < 3) {
          connections.push([i, j]);
        }
      }
    }
    
    return [positions, connections];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={ref}>
      <Points positions={positions}>
        <PointMaterial
          transparent
          color="#9F7AEA"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      {connections.map(([i, j], index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#9F7AEA" transparent opacity={0.3} />
        </line>
      ))}
    </group>
  );
}

const NeuralNetwork = () => {
  return (
    <div className="neural-bg">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <AnimatedPoints />
      </Canvas>
    </div>
  );
};

export default NeuralNetwork;