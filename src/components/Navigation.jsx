// components/Navigation.js
import React from 'react';

const Navigation = ({ activePanel, setActivePanel }) => {
  return (
    <nav className="navigation">
      <div className="logo">SkyPort International</div>
      <div className="nav-links">
        <button 
          className={`nav-link ${activePanel === 'flights' ? 'active' : ''}`}
          onClick={() => setActivePanel('flights')}
        >
          Flight Info
        </button>
        <button 
          className={`nav-link ${activePanel === 'booking' ? 'active' : ''}`}
          onClick={() => setActivePanel('booking')}
        >
          Book Flight
        </button>
        <button className="nav-link">Services</button>
        <button className="nav-link">Contact</button>
      </div>
    </nav>
  );
};

export default Navigation;