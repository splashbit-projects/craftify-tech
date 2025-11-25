import { NextResponse } from 'next/server';

import sgMail from '@sendgrid/mail';

type ContactFormData = {
  firstName: string;
  lastName: string;
  businessEmail: string;
  website: string;
  company: string;
  phone: string;
  question: string;
};

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const bodyJSON = (await request.json()) as ContactFormData;
    const { firstName, lastName, businessEmail, website, company, phone, question } = bodyJSON;

    // Initialize SendGrid with API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    // Create email content
    const msg = {
      to: process.env.ADMIN_EMAIL!, // Your admin email address
      from: process.env.FROM_EMAIL!, // Verified sender email
      subject: 'New Urgent Request',
      html: `
        <h2>New Urgent Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${businessEmail}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Question:</strong> ${question}</p>
      `,
    };

    /* const userMsg = {
      to: businessEmail,
      from: process.env.FROM_EMAIL!,
      subject: 'We’ve Received Your Urgent Assistance Request - Norevia Digital',
      html: `
        <h2>We’ve Received Your Urgent Assistance Request - Norevia Digital</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${businessEmail}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Question:</strong> ${question}</p>
      `,
    };*/

    // Send email
    await sgMail.send(msg);
    //await sgMail.send(userMsg);

    return NextResponse.json({ message: 'Fund access request sent successfully.' });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending fund access request:', errorMessage);
    return NextResponse.json(
      { message: 'Failed to send fund access request.', error: errorMessage },
      { status: 500 }
    );
  }
}
