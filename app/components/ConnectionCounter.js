'use client';

import { useEffect, useState } from 'react';

const OCTOBER_GOAL = 20;

export default function ConnectionCounter() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [suburb, setSuburb] = useState('');

  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    loadCount();
  }, []);

  async function loadCount() {
    try {
      const response = await fetch('/api/connections', {
        cache: 'no-store',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || 'Could not load connection count.'
        );
      }

      setCount(data.count || 0);
    } catch (error) {
      console.error(error);

      setErrorMessage(
        'The connection tally could not be loaded right now.'
      );
    } finally {
      setLoading(false);
    }
  }

  async function addConnection(event) {
    event.preventDefault();

    if (adding) return;

    setAdding(true);
    setMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('/api/connections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          suburb,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || 'Could not add your connection.'
        );
      }

      setCount(data.count || 0);

      setMessage(
        `Thanks ${firstName}. Your connection in ${suburb} has been added.`
      );

      setFirstName('');
      setSuburb('');
      setShowForm(false);
    } catch (error) {
      console.error(error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Could not add your connection.'
      );
    } finally {
      setAdding(false);
    }
  }

  const progress = Math.min(
    (count / OCTOBER_GOAL) * 100,
    100
  );

  return (
    <section className="connection-counter-section">
      <p className="small-heading">
        OCTOBER CONNECTION CHALLENGE
      </p>

      <h2>
        Help Us Reach 20 Connections
      </h2>

      <p className="connection-challenge-text">
        October is Mental Health Month. Our goal is for
        20 people to tell us they connected with someone
        on one of our Connection Benches.
      </p>

      <div className="connection-count">
        {loading ? '...' : count.toLocaleString('en-AU')}
      </div>

      <p className="connection-count-text">
        of {OCTOBER_GOAL} connections
      </p>

      <div className="connection-progress">
        <div
          className="connection-progress-fill"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      {!showForm && (
        <button
          type="button"
          className="connection-button"
          onClick={() => {
            setShowForm(true);
            setMessage('');
            setErrorMessage('');
          }}
          disabled={loading}
        >
          I Connected With Someone
        </button>
      )}

      {showForm && (
        <form
          className="connection-submit-form"
          onSubmit={addConnection}
        >
          <h3>
            Tell Us About Your Connection
          </h3>

          <p>
            Just your first name and the suburb where the
            Connection Bench was.
          </p>

          <label>
            <span>First name</span>

            <input
              type="text"
              value={firstName}
              onChange={(event) =>
                setFirstName(event.target.value)
              }
              required
              placeholder="First name"
            />
          </label>

          <label>
            <span>Suburb</span>

            <input
              type="text"
              value={suburb}
              onChange={(event) =>
                setSuburb(event.target.value)
              }
              required
              placeholder="Where was the bench?"
            />
          </label>

          <button
            type="submit"
            className="connection-button"
            disabled={adding}
          >
            {adding
              ? 'Adding Connection...'
              : 'Add My Connection'}
          </button>

          <button
            type="button"
            className="connection-cancel-button"
            onClick={() => {
              setShowForm(false);
              setErrorMessage('');
            }}
            disabled={adding}
          >
            Cancel
          </button>
        </form>
      )}

      {message && (
        <p className="connection-success-message">
          {message}
        </p>
      )}

      {errorMessage && (
        <p className="form-error">
          {errorMessage}
        </p>
      )}

      <p className="connection-button-note">
        Every connection stays part of the permanent
        Operation Reconnect community tally after October too.
      </p>
    </section>
  );
}