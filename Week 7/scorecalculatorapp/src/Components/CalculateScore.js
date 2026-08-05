import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore({ name, school, total, goal }) {
  const totalNum = Number(total) || 0;
  const goalNum = Number(goal) || 1;
  const average = (totalNum / goalNum).toFixed(2);

  return (
    <div className="score-card">
      <h2>Student: {name}</h2>
      <p>School: {school}</p>
      <p>Total: {totalNum}</p>
      <p>Goal/Subjects: {goalNum}</p>
      <p className="avg">Average Score: {average}</p>
    </div>
  );
}

export default CalculateScore;
