// components/ControlTower.js
import React from 'react';

const ControlTower = ({ position }) => {
  return (
    <group position={position}>
      {/* Tower Base */}
      <mesh position={[0, 3, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[2, 2, 6, 8]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>

      {/* Control Room */}
      <mesh position={[0, 7, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[3, 3, 2, 8]} />
        <meshStandardMaterial color="#e8e8e8" />
      </mesh>

      {/* Glass Windows */}
      <mesh position={[0, 7, 0]} castShadow>
        <cylinderGeometry args={[2.9, 2.9, 1.8, 8]} />
        <meshStandardMaterial color="#87CEEB" transparent opacity={0.6} />
      </mesh>

      {/* Antenna */}
      <mesh position={[0, 10, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 3, 4]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
    </group>
  );
};

export default ControlTower;