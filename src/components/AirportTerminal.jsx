// components/AirportTerminal.js
import React from 'react';

const AirportTerminal = ({ position }) => {
  return (
    <group position={position}>
      {/* Main Terminal Building */}
      <mesh position={[0, 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[20, 4, 8]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
      
      {/* Glass Windows */}
      <mesh position={[0, 3, 4]} castShadow>
        <boxGeometry args={[18, 2, 0.1]} />
        <meshStandardMaterial color="#87CEEB" transparent opacity={0.7} />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 4.5, 0]} castShadow>
        <cylinderGeometry args={[12, 14, 1, 4]} />
        <meshStandardMaterial color="#a0a0a0" />
      </mesh>

      {/* Jet Bridges */}
      {[-6, -3, 0, 3, 6].map((x, index) => (
        <group key={index} position={[x, 1, 6]}>
          <mesh castShadow>
            <boxGeometry args={[1, 2, 8]} />
            <meshStandardMaterial color="#d0d0d0" />
          </mesh>
          <mesh position={[0, 1, 4]} castShadow>
            <boxGeometry args={[1.2, 0.2, 0.5]} />
            <meshStandardMaterial color="#b0b0b0" />
          </mesh>
        </group>
      ))}
    </group>
  );
};

export default AirportTerminal;