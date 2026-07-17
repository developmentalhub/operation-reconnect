'use client';

import { useEffect, useState } from 'react';

export default function Countdown({ targetDate }) {
  const [daysLeft, setDaysLeft] = useState(null);

  useEffect(() => {
    function calculate() {
      const now = new Date();
      const target = new Date(targetDate);
      const diff = target - now;
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      setDaysLeft(days);
    }

    calculate();
    const interval = setInterval(calculate, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (daysLeft === null) return null;

  if (daysLeft < 0) {
    return <div className="countdown-badge">Check back for the next date</div>;
  }

  if (daysLeft === 0) {
    return <div className="countdown-badge">It's today!</div>;
  }

  return (
    <div className="countdown-badge">
      <span className="countdown-number">{daysLeft}</span>
      <span className="countdown-label">{daysLeft === 1 ? 'day to go' : 'days to go'}</span>
    </div>
  );
}