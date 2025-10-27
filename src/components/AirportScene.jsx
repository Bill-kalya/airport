// components/AirportScene.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import AirportTerminal from './AirportTerminal';
import Runway from './Runway';
import Airplane from './Airplane';
import ControlTower from './ControlTower';

const AirportScene = ({ selectedFlight, setSelectedFlight }) => {
  const groupRef = useRef();
  
  // Sample flight data
  const flights = [
    { id: 1, name: 'Flight BA123', position: [15, 2, -8], destination: 'London', status: 'Boarding' },
    { id: 2, name: 'Flight EK456', position: [8, 2, 12], destination: 'Dubai', status: 'Delayed' },
    { id: 3, name: 'Flight AA789', position: [-5, 2, -5], destination: 'New York', status: 'On Time' },
  ];

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#4a6572" />
      </mesh>

      {/* Airport Structures */}
      <AirportTerminal position={[0, 0, -15]} />
      <ControlTower position={[12, 0, 10]} />
      <Runway position={[0, 0.1, 20]} rotation={[0, Math.PI / 4, 0]} />
      <Runway position={[-15, 0.1, 0]} rotation={[0, Math.PI / 2, 0]} />

      {/* Airplanes */}
      {flights.map((flight) => (
        <Airplane
          key={flight.id}
          flight={flight}
          selected={selectedFlight?.id === flight.id}
          onClick={() => setSelectedFlight(flight)}
        />
      ))}

      {/* Taxiways */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.11, 0]}>
        <planeGeometry args={[8, 2]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
    </group>
  );
};

export default AirportScene;