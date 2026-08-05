import React from 'react';

export default function Login({ isLoggedIn, onLogin, onLogout }) {
  return (
    <div style={{ marginBottom: 12 }}>
      {isLoggedIn ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <button onClick={() => onLogin('user')}>Login</button>
      )}
    </div>
  );
}
