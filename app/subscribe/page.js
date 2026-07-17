'use client';

import { useState } from 'react';
import confetti from 'canvas-confetti';

export default function SubscribePage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  function fireConfetti() {
    const colors = ['#ff2d55', '#2d5bff', '#ffd23f', '#00d9a3'];

    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors,
    });

    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.7 },
        colors,
      });
    }, 200);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus('success');
      fireConfetti();
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message);
    }
  }

  return (
    <main>
      <section className="subscribe-hero">
        <h1>Get the good stuff.</h1>
        <p className="hero-sub">
          New episodes, behind-the-scenes chaos, and the occasional questionable life update. One email. No essays.
        </p>

        {status === 'success' ? (
          <div className="success-card">
            <span className="success-emoji-free">🎉</span>
            <h2>You're in!</h2>
            <p>Check your inbox — we just sent you something.</p>
          </div>
        ) : (
          <form className="subscribe-form-big" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              className="email-input-big"
            />
            <button type="submit" disabled={status === 'loading'} className="subscribe-btn-big">
              {status === 'loading' ? 'Joining...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && <p className="form-error">{errorMessage}</p>}
      </section>
    </main>
  );
}