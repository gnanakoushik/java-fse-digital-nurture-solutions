import React from 'react';

const flights = [
  { id: 1, from: 'Mumbai', to: 'London', time: '10:30' },
  { id: 2, from: 'Delhi', to: 'Dubai', time: '14:00' },
  { id: 3, from: 'Bengaluru', to: 'Singapore', time: '20:45' }
];

export default function FlightList({ showBookButton }) {
  return (
    <div>
      <table border="1" cellPadding="6">
        <thead>
          <tr><th>From</th><th>To</th><th>Time</th><th></th></tr>
        </thead>
        <tbody>
          {flights.map((f) => (
            <tr key={f.id}>
              <td>{f.from}</td>
              <td>{f.to}</td>
              <td>{f.time}</td>
              <td>{showBookButton ? <button>Book</button> : <em>Login to book</em>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
