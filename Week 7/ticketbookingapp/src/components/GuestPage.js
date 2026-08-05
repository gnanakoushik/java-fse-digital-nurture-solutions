import React from 'react';
import FlightList from './FlightList';

export default function GuestPage({ onLogin }) {
  return (
    <div>
      <h2>Guest View</h2>
      <p>Browse available flights. Please login to book tickets.</p>
      <FlightList showBookButton={false} />
      <div style={{ marginTop: 12 }}>
        <button onClick={() => onLogin('guest')}>Login</button>
      </div>
    </div>
  );
}
