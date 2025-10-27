// components/BookingPanel.js
import React, { useState } from 'react';

const BookingPanel = ({ selectedFlight }) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    class: 'economy'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Flight booking request submitted! We will contact you shortly.');
  };

  return (
    <div className="booking-panel">
      <h2>Book Your Flight</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>From</label>
          <input 
            type="text" 
            name="from"
            value={formData.from}
            onChange={handleInputChange}
            placeholder="Departure city"
            required 
          />
        </div>
        
        <div className="form-group">
          <label>To</label>
          <input 
            type="text" 
            name="to"
            value={formData.to}
            onChange={handleInputChange}
            placeholder="Destination city"
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Departure Date</label>
          <input 
            type="date" 
            name="departureDate"
            value={formData.departureDate}
            onChange={handleInputChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Return Date</label>
          <input 
            type="date" 
            name="returnDate"
            value={formData.returnDate}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label>Passengers</label>
          <select 
            name="passengers"
            value={formData.passengers}
            onChange={handleInputChange}
          >
            {[1,2,3,4,5,6].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label>Class</label>
          <select 
            name="class"
            value={formData.class}
            onChange={handleInputChange}
          >
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First Class</option>
          </select>
        </div>
        
        <button type="submit" className="book-btn">
          Search Flights
        </button>
      </form>
      
      {selectedFlight && (
        <div className="selected-flight-booking">
          <h3>Quick Book: {selectedFlight.number}</h3>
          <p>Ready to book this flight? Call +1-800-FLY-NOW</p>
        </div>
      )}
    </div>
  );
};

export default BookingPanel;