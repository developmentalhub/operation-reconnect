'use client';

import { useState, useRef } from 'react';

const lines = [
  "You got this.",
  "Go say hi to someone today.",
  "Friendship is a skill, not luck.",
  "Small talk leads to real talk.",
  "Someone's hoping you'll wave first.",
  "Confidence is just practice in disguise.",
  "Stop scrolling, start talking.",
];

export default function Mascot({ src }) {
  const [bounceKey, setBounceKey] = useState(0);
  const [quote, setQuote] = useState(null);
  const timeoutRef = useRef(null);

  function handleClick() {
    setBounceKey((k) => k + 1);
    const random = lines[Math.floor(Math.random() * lines.length)];
    setQuote(random);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setQuote(null), 2500);
  }

  return (
    <div className="mascot-wrap">
      {quote && <div className="mascot-bubble">{quote}</div>}
      <img
        key={bounceKey}
        src={src}
        alt="Operation Reconnect mascot"
        className="mascot-img"
        onClick={handleClick}
      />
    </div>
  );
}