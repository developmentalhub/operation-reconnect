'use client';

import { useState } from 'react';

const sessions = [
  {
    id: '2026-10-01-1700',
    day: 'Thursday',
    date: '1 October 2026',
    time: '5:00–5:30 PM Melbourne time',
    label:
      'Thursday 1 October 2026 · 5:00–5:30 PM Melbourne time',
  },
  {
    id: '2026-10-03-1000',
    day: 'Saturday',
    date: '3 October 2026',
    time: '10:00–10:30 AM Melbourne time',
    label:
      'Saturday 3 October 2026 · 10:00–10:30 AM Melbourne time',
  },
  {
    id: '2026-10-08-1700',
    day: 'Thursday',
    date: '8 October 2026',
    time: '5:00–5:30 PM Melbourne time',
    label:
      'Thursday 8 October 2026 · 5:00–5:30 PM Melbourne time',
  },
  {
    id: '2026-10-10-1000',
    day: 'Saturday',
    date: '10 October 2026',
    time: '10:00–10:30 AM Melbourne time',
    label:
      'Saturday 10 October 2026 · 10:00–10:30 AM Melbourne time',
  },
];

export default function WebinarSignupForm() {
  const [selectedSession, setSelectedSession] =
    useState(sessions[0].id);

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [organisation, setOrganisation] =
    useState('');

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] =
    useState('');

  const session = sessions.find(
    (item) => item.id === selectedSession
  );

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(
        '/api/webinar-register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            email,
            organisation,
            session: session?.label,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            'Something went wrong with your booking.'
        );
      }

      setStatus('success');
    } catch (error) {
      console.error(error);

      setStatus('error');

      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
    }
  }

  if (status === 'success') {
    return (
      <div className="webinar-success-card">
        <div className="success-tick">
          ✓
        </div>

        <p className="small-heading">
          YOU'RE BOOKED
        </p>

        <h2>
          See You There, {firstName}.
        </h2>

        <p>
          We've sent your Teacher Reconnect Live
          confirmation to <strong>{email}</strong>.
        </p>

        {session && (
          <div className="confirmed-session">
            <strong>{session.day}</strong>

            <span>
              {session.date}
            </span>

            <span>
              {session.time}
            </span>
          </div>
        )}

        <p className="success-small">
          Check your junk or spam folder if the email
          does not arrive within a few minutes.
        </p>
      </div>
    );
  }

  return (
    <div className="webinar-registration-card">
      <form
        onSubmit={handleSubmit}
        className="webinar-registration-form"
      >
        <fieldset className="session-fieldset">
          <legend>
            1. Choose your live session
          </legend>

          <div className="session-choice-grid">
            {sessions.map((item) => {
              const selected =
                selectedSession === item.id;

              return (
                <label
                  key={item.id}
                  className={`session-choice ${
                    selected ? 'selected' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="session"
                    value={item.id}
                    checked={selected}
                    onChange={() =>
                      setSelectedSession(item.id)
                    }
                  />

                  <span className="session-day">
                    {item.day}
                  </span>

                  <span className="session-date">
                    {item.date}
                  </span>

                  <span className="session-time">
                    {item.time}
                  </span>

                  <span className="session-select-text">
                    {selected
                      ? 'Selected'
                      : 'Choose this session'}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="signup-divider" />

        <div className="signup-fields">
          <p className="signup-step">
            2. Tell us where to send your booking
          </p>

          <label className="signup-field">
            <span>First name</span>

            <input
              type="text"
              value={firstName}
              onChange={(event) =>
                setFirstName(event.target.value)
              }
              required
              autoComplete="given-name"
              placeholder="Your first name"
            />
          </label>

          <label className="signup-field">
            <span>Email</span>

            <input
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
              autoComplete="email"
              placeholder="you@school.edu.au"
            />
          </label>

          <label className="signup-field">
            <span>
              School or organisation
            </span>

            <input
              type="text"
              value={organisation}
              onChange={(event) =>
                setOrganisation(event.target.value)
              }
              autoComplete="organization"
              placeholder="Optional"
            />
          </label>
        </div>

        {status === 'error' && (
          <p className="form-error">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          className="webinar-submit-button"
          disabled={status === 'loading'}
        >
          {status === 'loading'
            ? 'Reserving your spot...'
            : 'Reserve My Free Spot'}
        </button>

        <p className="signup-note">
          Free to attend. We'll only use your email
          for information related to Teacher Reconnect.
        </p>
      </form>
    </div>
  );
}