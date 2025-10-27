// components/Runway.js
import React from 'react';

const Runway = ({ position, rotation }) => {
  return (
    <group position={position} rotation={rotation}>
      {/* Runway Surface */}
      <mesh receiveShadow>
        <planeGeometry args={[30, 3]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      
      {/* Runway Markings */}
      <mesh position={[0, 0.01, 0]}>
        <planeGeometry args={[28, 0.2]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Runway Numbers */}
      <mesh position={[-12, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1, 0.5]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
};

export default Runway;