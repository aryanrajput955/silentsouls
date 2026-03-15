import { Resend } from 'resend';
import * as React from 'react';
import { ContactEmailTemplate } from '../../components/ContactEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'SilentSouls <onboarding@resend.dev>',
      to: ['manikbansal@thecraftsync.com'],
      subject: `New Message: ${subject}`,
      react: (
        <ContactEmailTemplate 
          name={name} 
          email={email} 
          subject={subject} 
          message={message} 
        />
      ),
      replyTo: email,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
