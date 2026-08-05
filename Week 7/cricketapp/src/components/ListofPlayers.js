import React from 'react';

function ListofPlayers() {
  const players = [
    { name: 'Player1', score: 85 },
    { name: 'Player2', score: 67 },
    { name: 'Player3', score: 92 },
    { name: 'Player4', score: 45 },
    { name: 'Player5', score: 74 },
    { name: 'Player6', score: 61 },
    { name: 'Player7', score: 55 },
    { name: 'Player8', score: 88 },
    { name: 'Player9', score: 33 },
    { name: 'Player10', score: 77 },
    { name: 'Player11', score: 69 }
  ];

  // map players to list items
  const list = players.map((p, idx) => (
    <li key={idx}>{p.name} - {p.score}</li>
  ));

  // filter players with scores below 70 using arrow function
  const below70 = players.filter((p) => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>{list}</ul>

      <h3>Players with score below 70</h3>
      <ul>{below70.map((p, i) => <li key={i}>{p.name} - {p.score}</li>)}</ul>
    </div>
  );
}

export default ListofPlayers;
