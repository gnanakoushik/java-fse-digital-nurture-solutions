import React from 'react';
import { useParams } from 'react-router-dom';
import trainers from '../TrainersMock';

function TrainerDetails() {
  const { id } = useParams();
  const trainer = trainers.find((t) => String(t.trainerId) === id);

  if (!trainer) return <div>Trainer not found</div>;

  return (
    <div>
      <h2>{trainer.name}</h2>
      <p><strong>ID:</strong> {trainer.trainerId}</p>
      <p><strong>Phone:</strong> {trainer.phone}</p>
      <p><strong>Email:</strong> {trainer.email}</p>
      <p><strong>Stream:</strong> {trainer.stream}</p>
      <p><strong>Skills:</strong> {trainer.skills.join(', ')}</p>
    </div>
  );
}

export default TrainerDetails;
