import React from 'react';
import CohortDetails from './components/CohortDetails';

const sampleCohorts = [
  { id: 1, name: 'Cohort Alpha', start: '2026-01-10', end: '2026-03-20', status: 'ongoing' },
  { id: 2, name: 'Cohort Beta', start: '2025-09-01', end: '2025-11-30', status: 'completed' },
  { id: 3, name: 'Cohort Gamma', start: '2026-04-01', end: '2026-06-30', status: 'upcoming' }
];

function App() {
  return (
    <div>
      <h1>Cohort Dashboard</h1>
      <CohortDetails cohorts={sampleCohorts} />
    </div>
  );
}

export default App;
