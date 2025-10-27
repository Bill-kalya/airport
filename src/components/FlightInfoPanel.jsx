// components/FlightInfoPanel.js
import React from 'react';

const FlightInfoPanel = ({ selectedFlight, setSelectedFlight }) => {
  const flights = [
    { id: 1, airline: 'British Airways', number: 'BA123', destination: 'London', status: 'Boarding', time: '14:30', gate: 'A12' },
    { id: 2, airline: 'Emirates', number: 'EK456', destination: 'Dubai', status: 'Delayed', time: '15:45', gate: 'B05' },
    { id: 3, airline: 'American Airlines', number: 'AA789', destination: 'New York', status: 'On Time', time: '16:20', gate: 'C08' },
    { id: 4, airline: 'Lufthansa', number: 'LH321', destination: 'Frankfurt', status: 'On Time', time: '17:15', gate: 'A15' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Boarding': return '#4CAF50';
      case 'Delayed': return '#FF9800';
      case 'On Time': return '#2196F3';
      default: return '#666';
    }
  };

  return (
    <div className="flight-panel">
      <h2>Flight Information</h2>
      <div className="flight-list">
        {flights.map(flight => (
          <div 
            key={flight.id} 
            className={`flight-item ${selectedFlight?.id === flight.id ? 'selected' : ''}`}
            onClick={() => setSelectedFlight(flight)}
          >
            <div className="flight-header">
              <span className="flight-number">{flight.number}</span>
              <span className="flight-airline">{flight.airline}</span>
            </div>
            <div className="flight-details">
              <div className="flight-destination">
                <strong>To:</strong> {flight.destination}
              </div>
              <div className="flight-time">
                <strong>Departure:</strong> {flight.time}
              </div>
              <div className="flight-gate">
                <strong>Gate:</strong> {flight.gate}
              </div>
            </div>
            <div 
              className="flight-status" 
              style={{ backgroundColor: getStatusColor(flight.status) }}
            >
              {flight.status}
            </div>
          </div>
        ))}
      </div>
      
      {selectedFlight && (
        <div className="selected-flight-info">
          <h3>Selected Flight: {selectedFlight.number}</h3>
          <p>Click and drag to view the airplane in 3D</p>
        </div>
      )}
    </div>
  );
};

export default FlightInfoPanel;