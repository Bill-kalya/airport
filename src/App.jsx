import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Sky } from '@react-three/drei';
import AirportScene from './components/AirportScene';
import FlightInfoPanel from './components/FlightInfoPanel';
import BookingPanel from './components/BookingPanel';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [activePanel, setActivePanel] = useState('flights');
  const [selectedFlight, setSelectedFlight] = useState(null);

  return (
    <div className="app">
      <Navigation activePanel={activePanel} setActivePanel={setActivePanel} />
      
      <div className="canvas-container">
        <Canvas camera={{ position: [10, 5, 10], fov: 50 }}>
          <color attach="background" args={['#87CEEB']} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[0, 10, 0]} intensity={0.5} />
          
          <AirportScene 
            selectedFlight={selectedFlight}
            setSelectedFlight={setSelectedFlight}
          />
          
          <Environment preset="city" />
          <Sky sunPosition={[100, 10, 100]} />
          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={5}
            maxDistance={50}
          />
        </Canvas>
      </div>

      {activePanel === 'flights' && (
        <FlightInfoPanel 
          selectedFlight={selectedFlight}
          setSelectedFlight={setSelectedFlight}
        />
      )}
      
      {activePanel === 'booking' && (
        <BookingPanel selectedFlight={selectedFlight} />
      )}
    </div>
  );
}

export default App;