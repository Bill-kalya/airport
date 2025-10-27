// components/Airplane.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Airplane = ({ flight, selected, onClick }) => {
  const planeRef = useRef();
  
  useFrame((state) => {
    if (planeRef.current && !selected) {
      // Gentle floating animation
      planeRef.current.position.y = flight.position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group 
      ref={planeRef} 
      position={flight.position}
      onClick={onClick}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'default'}
    >
      {/* Fuselage */}
      <mesh castShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 4, 8]} />
        <meshStandardMaterial color={selected ? '#ff6b6b' : '#ffffff'} />
      </mesh>

      {/* Wings */}
      <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
        <boxGeometry args={[6, 0.1, 1]} />
        <meshStandardMaterial color="#c0c0c0" />
      </mesh>

      {/* Tail */}
      <mesh position={[0, 0.5, -1.5]} castShadow>
        <boxGeometry args={[0.1, 1, 1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 0, 2]} castShadow>
        <sphereGeometry args={[0.4, 8, 8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Engine */}
      <mesh position={[1.2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 1, 8]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
    </group>
  );
};

export default Airplane;