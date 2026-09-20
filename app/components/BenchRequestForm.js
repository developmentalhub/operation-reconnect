'use client';

import { useState } from 'react';

export default function BenchRequestForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [billingName, setBillingName] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [suburb, setSuburb] = useState('');
  const [state, setState] = useState('');
  const [postcode, setPostcode] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [abn, setAbn] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [locationNotes, setLocationNotes] = useState('');

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const total = quantity * 20;

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/bench-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          organisation,
          billingName,
          billingAddress,
          suburb,
          state,
          postcode,
          deliveryAddress,
          abn,
          quantity,
          locationNotes,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            'Something went wrong with your invoice request.'
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
      <div className="bench-request-success">
        <div className="success-tick">✓</div>

        <h3>Invoice Request Received</h3>

        <p>
          Thanks, {firstName}. We have received your request for{' '}
          {quantity} Connection Bench {quantity === 1 ? 'plaque' : 'plaques'}.
        </p>

        <p>
          We will send your invoice to <strong>{email}</strong> before
          anything is posted.
        </p>

        <div className="bench-cost-box">
          <strong>${total}</strong>

          <div>
            <h3>Invoice total</h3>
            <p>
              Includes the plaque{quantity > 1 ? 's' : ''} and Australia-wide
              delivery.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      className="bench-request-form"
      onSubmit={handleSubmit}
    >
      <div className="bench-request-heading">
        <h3>Request an Invoice</h3>

        <p>
          Connection Bench plaques are $20 each, including delivery
          anywhere in Australia.
        </p>
      </div>

      <div className="bench-request-grid">
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
          <span>Last name</span>

          <input
            type="text"
            value={lastName}
            onChange={(event) =>
              setLastName(event.target.value)
            }
            required
            placeholder="Last name"
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
            placeholder="you@email.com"
          />
        </label>

        <label>
          <span>School, organisation or community group</span>

          <input
            type="text"
            value={organisation}
            onChange={(event) =>
              setOrganisation(event.target.value)
            }
            placeholder="Optional"
          />
        </label>

        <label className="bench-request-full">
          <span>Name to appear on invoice</span>

          <input
            type="text"
            value={billingName}
            onChange={(event) =>
              setBillingName(event.target.value)
            }
            required
            placeholder="Person, school or organisation name"
          />
        </label>

        <label className="bench-request-full">
          <span>Billing address</span>

          <input
            type="text"
            value={billingAddress}
            onChange={(event) =>
              setBillingAddress(event.target.value)
            }
            required
            placeholder="Street address"
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
            placeholder="Suburb"
          />
        </label>

        <label>
          <span>State</span>

          <select
            value={state}
            onChange={(event) =>
              setState(event.target.value)
            }
            required
          >
            <option value="">Choose state</option>
            <option value="VIC">Victoria</option>
            <option value="NSW">New South Wales</option>
            <option value="QLD">Queensland</option>
            <option value="SA">South Australia</option>
            <option value="WA">Western Australia</option>
            <option value="TAS">Tasmania</option>
            <option value="ACT">Australian Capital Territory</option>
            <option value="NT">Northern Territory</option>
          </select>
        </label>

        <label>
          <span>Postcode</span>

          <input
            type="text"
            value={postcode}
            onChange={(event) =>
              setPostcode(event.target.value)
            }
            required
            inputMode="numeric"
            placeholder="Postcode"
          />
        </label>

        <label>
          <span>ABN</span>

          <input
            type="text"
            value={abn}
            onChange={(event) =>
              setAbn(event.target.value)
            }
            placeholder="Optional"
          />
        </label>

        <label className="bench-request-full">
          <span>Delivery address</span>

          <input
            type="text"
            value={deliveryAddress}
            onChange={(event) =>
              setDeliveryAddress(event.target.value)
            }
            required
            placeholder="Where should we send the plaque?"
          />
        </label>

        <label>
          <span>Number of plaques</span>

          <input
            type="number"
            min="1"
            max="20"
            value={quantity}
            onChange={(event) =>
              setQuantity(
                Math.max(1, Number(event.target.value) || 1)
              )
            }
            required
          />
        </label>

        <label className="bench-request-full">
          <span>
            Where would you like to place the Connection Bench plaque?
          </span>

          <textarea
            value={locationNotes}
            onChange={(event) =>
              setLocationNotes(event.target.value)
            }
            placeholder="For example: on an existing bench near our school library."
            rows="4"
          />
        </label>
      </div>

      <div className="bench-cost-box">
        <strong>${total}</strong>

        <div>
          <h3>
            {quantity} {quantity === 1 ? 'plaque' : 'plaques'}
          </h3>

          <p>
            $20 each, including Australia-wide delivery.
          </p>
        </div>
      </div>

      {status === 'error' && (
        <p className="form-error">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        className="connection-button bench-request-submit"
        disabled={status === 'loading'}
      >
        {status === 'loading'
          ? 'Sending Invoice Request...'
          : 'Request My Invoice'}
      </button>

      <p className="bench-request-note">
        No payment is taken now. We will email your invoice before
        anything is posted.
      </p>
    </form>
  );
}