import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const NOTIFY_ADDRESS = 'drake.krommenhoek@gmail.com';

// Constructed per-request rather than at module scope: `new Resend()` throws when the
// key is absent, and at module scope that failure happened during Next's page-data
// collection, breaking `next build` on any machine without RESEND_API_KEY set.
function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  return key ? new Resend(key) : null;
}

export async function POST(request: Request) {
  try {
    const { email } = (await request.json()) as { email?: string };

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const resend = getResend();
    if (!resend) {
      console.error('Subscribe attempted but RESEND_API_KEY is not configured.');
      return NextResponse.json(
        { error: 'Subscriptions are not configured right now. Try again later.' },
        { status: 503 },
      );
    }

    await resend.emails.send({
      from: 'Writing <onboarding@resend.dev>',
      to: NOTIFY_ADDRESS,
      subject: `New subscriber: ${email}`,
      html: `<p>A new reader subscribed to your writing: <strong>${email}</strong></p>`,
    });

    await resend.emails.send({
      from: 'Drake Krommenhoek <onboarding@resend.dev>',
      to: email,
      subject: "You're subscribed",
      html: `
        <div style="font-family: Georgia, serif; max-width: 520px; margin: 0 auto; color: #1f2937; padding: 2rem;">
          <p style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem;">You're in.</p>
          <p style="font-size: 0.95rem; line-height: 1.7; color: #4b5563;">
            I'll send you a note when something new is up. No noise — just writing worth reading.
          </p>
          <p style="font-size: 0.9rem; color: #9ca3af; margin-top: 2rem;">— Drake</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
