import React from 'react';

function IndianPlayers() {
  const players = ['Rohit','Virat','Kohli','Jadeja','Bumrah','Dhoni','Sachin','Sehwag','Ganguly','Dravid','Zaheer'];

  // destructure first few to demonstrate ES6 destructuring
  const [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11] = players;
  const oddTeam = [p1, p3, p5, p7, p9, p11];
  const evenTeam = [p2, p4, p6, p8, p10];

  // merge two arrays example
  const T20players = ['Hardik','Shreyas'];
  const RanjiPlayers = ['PlayerA','PlayerB'];
  const merged = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Indian Players - Odd Team</h2>
      <ul>{oddTeam.map((n,i) => <li key={i}>{n}</li>)}</ul>

      <h2>Indian Players - Even Team</h2>
      <ul>{evenTeam.map((n,i) => <li key={i}>{n}</li>)}</ul>

      <h3>Merged Players (T20 + Ranji)</h3>
      <ul>{merged.map((n,i) => <li key={i}>{n}</li>)}</ul>
    </div>
  );
}

export default IndianPlayers;
