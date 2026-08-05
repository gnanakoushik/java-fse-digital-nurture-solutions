import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <h1>Score Calculator App</h1>
      <CalculateScore name="John Doe" school="Central High" total={420} goal={5} />
    </div>
  );
}

export default App;
