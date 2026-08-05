import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohorts }) {
  return (
    <div>
      {cohorts.map((c) => (
        <div key={c.id} className={styles.box}>
          <h3 style={{ color: c.status === 'ongoing' ? 'green' : 'blue' }}>{c.name}</h3>
          <dl>
            <dt>Start Date</dt>
            <dd>{c.start}</dd>
            <dt>End Date</dt>
            <dd>{c.end}</dd>
            <dt>Status</dt>
            <dd>{c.status}</dd>
          </dl>
        </div>
      ))}
    </div>
  );
}

export default CohortDetails;
