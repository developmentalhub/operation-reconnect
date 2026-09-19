import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value) {
  return value
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

    const email =
      typeof body.email === 'string'
        ? body.email.trim().toLowerCase()
        : '';

    const organisation =
      typeof body.organisation === 'string'
        ? body.organisation.trim()
        : '';

    const session =
      typeof body.session === 'string'
        ? body.session.trim()
        : '';

    if (!firstName || !email || !session) {
      return NextResponse.json(
        {
          error:
            'Please enter your name, email and choose a session.',
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

    if (!process.env.RESEND_API_KEY) {
      console.error(
        'RESEND_API_KEY is not configured.'
      );

      return NextResponse.json(
        {
          error:
            'Email registration is temporarily unavailable.',
        },
        {
          status: 500,
        }
      );
    }

    if (!process.env.RESEND_FROM_EMAIL) {
      console.error(
        'RESEND_FROM_EMAIL is not configured.'
      );

      return NextResponse.json(
        {
          error:
            'Email registration is temporarily unavailable.',
        },
        {
          status: 500,
        }
      );
    }

    const safeName =
      escapeHtml(firstName);

    const safeEmail =
      escapeHtml(email);

    const safeOrganisation =
      escapeHtml(
        organisation || 'Not provided'
      );

    const safeSession =
      escapeHtml(session);

    const teacherEmail =
      await resend.emails.send({
        from:
          process.env.RESEND_FROM_EMAIL,

        to: email,

        subject:
          "You're booked for Teacher Reconnect Live",

        html: `
          <div
            style="
              max-width:600px;
              margin:0 auto;
              font-family:Arial,Helvetica,sans-serif;
              color:#14121a;
              line-height:1.6;
            "
          >
            <div
              style="
                background:#ff2d55;
                color:#ffffff;
                padding:36px 30px;
                border-radius:20px 20px 0 0;
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
                  font-size:30px;
                  line-height:1.15;
                "
              >
                You're booked.
              </h1>
            </div>

            <div
              style="
                border:2px solid #14121a;
                border-top:0;
                padding:32px 30px;
                border-radius:0 0 20px 20px;
              "
            >
              <p>
                Hi ${safeName},
              </p>

              <p>
                You've reserved your place for
                <strong>
                  Teacher Reconnect Live
                </strong>.
              </p>

              <div
                style="
                  margin:26px 0;
                  padding:20px;
                  background:#fff3e2;
                  border:2px solid #14121a;
                  border-radius:14px;
                "
              >
                <strong
                  style="
                    display:block;
                    margin-bottom:6px;
                  "
                >
                  Your session
                </strong>

                ${safeSession}
              </div>

              <p>
                Teacher Reconnect Live is a short,
                practical session exploring ways
                teachers can help students practise
                real-world conversation, friendship
                and connection.
              </p>

              <p>
                You do not need to prepare anything.
                Bring a notebook if you'd like and
                we'll keep it practical.
              </p>

              <p>
                We'll send you the information you
                need for the live session.
              </p>

              <p
                style="
                  margin-top:30px;
                "
              >
                See you there,
                <br />
                <strong>
                  Hugh and Robyn
                </strong>
                <br />
                Operation Reconnect
              </p>
            </div>
          </div>
        `,
      });

    if (teacherEmail.error) {
      console.error(
        'Teacher confirmation failed:',
        teacherEmail.error
      );

      return NextResponse.json(
        {
          error:
            'We could not send your confirmation email. Please try again.',
        },
        {
          status: 500,
        }
      );
    }

    if (
      process.env.WEBINAR_NOTIFY_EMAIL
    ) {
      const ownerEmail =
        await resend.emails.send({
          from:
            process.env.RESEND_FROM_EMAIL,

          to:
            process.env
              .WEBINAR_NOTIFY_EMAIL,

          subject:
            `New Teacher Reconnect booking — ${firstName}`,

          html: `
            <div
              style="
                font-family:Arial,Helvetica,sans-serif;
                color:#14121a;
                line-height:1.6;
              "
            >
              <h2>
                New Teacher Reconnect Registration
              </h2>

              <p>
                <strong>Name:</strong>
                ${safeName}
              </p>

              <p>
                <strong>Email:</strong>
                ${safeEmail}
              </p>

              <p>
                <strong>
                  School / organisation:
                </strong>
                ${safeOrganisation}
              </p>

              <p>
                <strong>Session:</strong>
                ${safeSession}
              </p>
            </div>
          `,
        });

      if (ownerEmail.error) {
        console.error(
          'Owner notification failed:',
          ownerEmail.error
        );
      }
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(
      'Webinar registration error:',
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