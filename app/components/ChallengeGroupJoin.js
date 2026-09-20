'use client';

import { useState } from 'react';

export default function ChallengeGroupJoin() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [focus, setFocus] = useState('');

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [joinedName, setJoinedName] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(
        '/api/challenge-group/join',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            email,
            focus,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            'Could not join the challenge group.'
        );
      }

      setJoinedName(data.firstName || firstName);
      localStorage.setItem(
  "operation-reconnect-first-name",
  data.firstName || firstName
);
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
      <div className="challenge-join-success">
        <div className="success-tick">✓</div>

        <h2>
          You're in, {joinedName}.
        </h2>

        <p>
          You are now part of the Operation Reconnect
          challenge group.
        </p>

        <div className="challenge-privacy-box">
          <strong>Your identity stays private.</strong>

          <p>
            Only your first name may appear publicly in
            the challenge community. Your email and
            account details are never displayed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="challenge-join-card">
      <div className="challenge-join-intro">
        <p className="small-heading">
          JOIN THE CHALLENGE GROUP
        </p>

        <h2>
          You Don't Have to Do the Challenges Alone
        </h2>

        <p>
          Create a quick profile and become part of the
          Operation Reconnect community.
        </p>
      </div>

      <div className="challenge-privacy-box">
        <strong>Your identity stays private.</strong>

        <p>
          We only show your first name publicly. Your email,
          personal details and account information are kept
          private and are never displayed on the challenge page.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="challenge-join-form"
      >
        <label>
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

        <label>
          <span>Email</span>

          <input
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
            autoComplete="email"
            placeholder="you@email.com"
          />

          <small>
            Your email is private and will never appear
            publicly.
          </small>
        </label>

        <label>
          <span>
            What would you most like to work on?
          </span>

          <select
            value={focus}
            onChange={(event) =>
              setFocus(event.target.value)
            }
          >
            <option value="">
              Choose one — optional
            </option>

            <option value="confidence">
              Confidence
            </option>

            <option value="conversation">
              Starting conversations
            </option>

            <option value="friendship">
              Building friendships
            </option>

            <option value="screen-balance">
              Spending less time on screens
            </option>

            <option value="connection">
              Connecting with people more
            </option>
          </select>
        </label>

        {status === 'error' && (
          <p className="form-error">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          className="connection-button challenge-join-button"
          disabled={status === 'loading'}
        >
          {status === 'loading'
            ? 'Joining...'
            : 'Join the Challenge Group'}
        </button>

        <p className="challenge-join-note">
          By joining, you understand that only your first
          name may be shown publicly in the Operation
          Reconnect challenge community.
        </p>
      </form>
    </div>
  );
}