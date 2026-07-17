import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return Response.json({ message: 'Please enter a valid email.' }, { status: 400 });
    }

    const contactResult = await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID,
    });

    if (contactResult.error) {
      console.error('Resend contact error:', contactResult.error);
      return Response.json({ message: 'Could not subscribe right now. Try again later.' }, { status: 500 });
    }

    await resend.emails.send({
      from: 'Operation Reconnect <onboarding@resend.dev>',
      to: email,
      subject: "You're officially in 🎉",
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 24px;">
          <h1 style="color:#14121a;">Welcome to Operation Reconnect!</h1>
          <p style="color:#6b6470; font-size: 16px; line-height: 1.6;">
            You just made a great decision (or at least a mildly good one). Here's what you signed up for:
          </p>
          <ul style="color:#14121a; font-size: 16px; line-height: 1.8;">
            <li>New podcast episodes before anyone else finds out about them</li>
            <li>Behind-the-scenes stuff that doesn't make the final cut</li>
            <li>First dibs on webinar dates</li>
            <li>Zero spam. We're too busy to spam you anyway.</li>
          </ul>
          <p style="color:#6b6470; font-size: 14px; margin-top: 32px;">
            Didn't mean to sign up? No hard feelings — you can unsubscribe any time.
          </p>
        </div>
      `,
    });

    return Response.json({ message: 'Subscribed!' }, { status: 200 });
  } catch (err) {
    console.error('Subscribe route error:', err);
    return Response.json({ message: 'Something went wrong.' }, { status: 500 });
  }
}