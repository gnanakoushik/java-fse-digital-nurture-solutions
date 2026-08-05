import React from 'react';
import FlightList from './FlightList';

export default function UserPage({ onLogout }) {
  return (
    <div>
      <h2>User View</h2>
      <p>You are logged in. Choose a flight to book.</p>
      <FlightList showBookButton={true} />
      <div style={{ marginTop: 12 }}>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}
