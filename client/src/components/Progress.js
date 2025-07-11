import React, { useEffect, useState } from 'react';

export default function Progress({ token }) {
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/progress', {
      headers: { 'Authorization': token }
    })
      .then(res => res.json())
      .then(data => setProgress(data));
  }, [token]);

  if (!progress) return <div>Loading progress...</div>;

  return (
    <div>
      <h3>Your Progress</h3>
      <ul>
        {progress.subjects.map(s => (
          <li key={s.name}>{s.name}: {s.value}%</li>
        ))}
      </ul>
      <div>Achievements: {progress.achievements.join(', ')}</div>
    </div>
  );
}