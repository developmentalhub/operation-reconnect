import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function POST(request) {
  try {
    const body = await request.json();

    const firstName =
      typeof body.firstName === 'string'
        ? body.firstName.trim()
        : '';

    const lastName =
      typeof body.lastName === 'string'
        ? body.lastName.trim()
        : '';

    const email =
      typeof body.email === 'string'
        ? body.email.trim().toLowerCase()
        : '';

    const organisation =
      typeof body.organisation === 'string'
        ? body.organisation.trim()
        : '';

    const billingName =
      typeof body.billingName === 'string'
        ? body.billingName.trim()
        : '';

    const billingAddress =
      typeof body.billingAddress === 'string'
        ? body.billingAddress.trim()
        : '';

    const suburb =
      typeof body.suburb === 'string'
        ? body.suburb.trim()
        : '';

    const state =
      typeof body.state === 'string'
        ? body.state.trim()
        : '';

    const postcode =
      typeof body.postcode === 'string'
        ? body.postcode.trim()
        : '';

    const deliveryAddress =
      typeof body.deliveryAddress === 'string'
        ? body.deliveryAddress.trim()
        : '';

    const abn =
      typeof body.abn === 'string'
        ? body.abn.trim()
        : '';

    const quantity =
      Number.isInteger(Number(body.quantity)) &&
      Number(body.quantity) > 0
        ? Number(body.quantity)
        : 1;

    const locationNotes =
      typeof body.locationNotes === 'string'
        ? body.locationNotes.trim()
        : '';

    if (
      !firstName ||
      !lastName ||
      !email ||
      !billingName ||
      !billingAddress ||
      !suburb ||
      !state ||
      !postcode ||
      !deliveryAddress
    ) {
      return NextResponse.json(
        {
          error:
            'Please complete all required invoice and delivery details.',
        },
        {
          status: 400,
        }
      );
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          error:
            'Please enter a valid email address.',
        },
        {
          status: 400,
        }
      );
    }

    const total = quantity * 20;

    const { error: insertError } = await supabase
      .from('bench_requests')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        organisation: organisation || null,
        billing_name: billingName,
        billing_address: billingAddress,
        suburb,
        state,
        postcode,
        delivery_address: deliveryAddress,
        abn: abn || null,
        quantity,
        invoice_requested: true,
        invoice_status: 'pending',
        location_notes: locationNotes || null,
      });

    if (insertError) {
      console.error(
        'Bench invoice request insert error:',
        insertError
      );

      return NextResponse.json(
        {
          error:
            'Could not save your invoice request.',
        },
        {
          status: 500,
        }
      );
    }

    const notifyEmail =
      process.env.BENCH_NOTIFY_EMAIL ||
      process.env.WEBINAR_NOTIFY_EMAIL;

    if (
      process.env.RESEND_API_KEY &&
      process.env.RESEND_FROM_EMAIL &&
      notifyEmail
    ) {
      const safeFirstName = escapeHtml(firstName);
      const safeLastName = escapeHtml(lastName);
      const safeEmail = escapeHtml(email);
      const safeOrganisation = escapeHtml(
        organisation || 'Not provided'
      );
      const safeBillingName = escapeHtml(billingName);
      const safeBillingAddress = escapeHtml(billingAddress);
      const safeSuburb = escapeHtml(suburb);
      const safeState = escapeHtml(state);
      const safePostcode = escapeHtml(postcode);
      const safeDeliveryAddress = escapeHtml(deliveryAddress);
      const safeAbn = escapeHtml(abn || 'Not provided');
      const safeLocationNotes = escapeHtml(
        locationNotes || 'Not provided'
      );

      const ownerEmail = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: notifyEmail,
        subject:
          `New Connection Bench invoice request — ${firstName} ${lastName}`,

        html: `
          <div
            style="
              max-width:650px;
              margin:0 auto;
              font-family:Arial,Helvetica,sans-serif;
              color:#14121a;
              line-height:1.6;
            "
          >
            <div
              style="
                background:#ffd23f;
                padding:30px;
                border-radius:18px 18px 0 0;
              "
            >
              <p
                style="
                  margin:0 0 8px;
                  font-size:13px;
                  font-weight:700;
                  letter-spacing:1px;
                "
              >
                OPERATION RECONNECT
              </p>

              <h1
                style="
                  margin:0;
                  font-size:28px;
                  line-height:1.2;
                "
              >
                Connection Bench Invoice Request
              </h1>
            </div>

            <div
              style="
                padding:30px;
                border:2px solid #14121a;
                border-top:0;
                border-radius:0 0 18px 18px;
              "
            >
              <h2 style="margin-top:0;">
                Customer Details
              </h2>

              <p>
                <strong>Name:</strong>
                ${safeFirstName} ${safeLastName}
              </p>

              <p>
                <strong>Email:</strong>
                ${safeEmail}
              </p>

              <p>
                <strong>Organisation:</strong>
                ${safeOrganisation}
              </p>

              <hr
                style="
                  margin:24px 0;
                  border:0;
                  border-top:1px solid #ddd;
                "
              />

              <h2>
                Invoice Details
              </h2>

              <p>
                <strong>Invoice name:</strong>
                ${safeBillingName}
              </p>

              <p>
                <strong>Billing address:</strong>
                ${safeBillingAddress}
              </p>

              <p>
                <strong>Suburb:</strong>
                ${safeSuburb}
              </p>

              <p>
                <strong>State:</strong>
                ${safeState}
              </p>

              <p>
                <strong>Postcode:</strong>
                ${safePostcode}
              </p>

              <p>
                <strong>ABN:</strong>
                ${safeAbn}
              </p>

              <hr
                style="
                  margin:24px 0;
                  border:0;
                  border-top:1px solid #ddd;
                "
              />

              <h2>
                Order
              </h2>

              <div
                style="
                  padding:18px;
                  background:#fff3e2;
                  border:2px solid #14121a;
                  border-radius:12px;
                "
              >
                <p style="margin:0 0 6px;">
                  <strong>Quantity:</strong>
                  ${quantity}
                </p>

                <p style="margin:0 0 6px;">
                  <strong>Price per plaque:</strong>
                  $20
                </p>

                <p
                  style="
                    margin:8px 0 0;
                    font-size:22px;
                    font-weight:700;
                  "
                >
                  Total: $${total}
                </p>
              </div>

              <p>
                <strong>Delivery address:</strong>
                <br />
                ${safeDeliveryAddress}
              </p>

              <p>
                <strong>Where they plan to place it:</strong>
                <br />
                ${safeLocationNotes}
              </p>

              <p
                style="
                  margin-top:28px;
                  font-weight:700;
                "
              >
                Invoice status: Pending
              </p>
            </div>
          </div>
        `,
      });

      if (ownerEmail.error) {
        console.error(
          'Bench invoice notification failed:',
          ownerEmail.error
        );
      }
    }

    return NextResponse.json({
      success: true,
      total,
    });
  } catch (error) {
    console.error(
      'Bench invoice request route error:',
      error
    );

    return NextResponse.json(
      {
        error:
          'Something went wrong. Please try again.',
      },
      {
        status: 500,
      }
    );
  }
}