import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';
import Login from './components/Login';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username) => {
    // in real app, authenticate; here just toggle
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Ticket Booking App</h1>
      <Login isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />

      {/* Conditional rendering: show GuestPage when not logged-in, UserPage when logged-in */}
      {isLoggedIn ? <UserPage onLogout={handleLogout} /> : <GuestPage onLogin={handleLogin} />}
    </div>
  );
}
