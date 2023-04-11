import React from 'react';

const Statistics = ({ state: { good, neutral, bad, total } }) => {
  return (
    <>
      <h2>Statistics</h2>
      <span className="Statistics__item">Good: {good}</span>
      <span className="Statistics__item">Neutral: {neutral}</span>
      <span className="Statistics__item">Bad: {bad}</span>
      <span className="Statistics__item">Total: {total}</span>
    </>
  );
};

export default Statistics;
