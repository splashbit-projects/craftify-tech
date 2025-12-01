import { NextResponse } from 'next/server';

import sgMail from '@sendgrid/mail';

type ConsultationRequestData = {
  firstName: string;
  lastName: string;
  businessEmail: string;
  website: string;
  company: string;
  phone: string;
  requestDetails: string;
  serviceName: string;
  expertName: string;
  recaptcha: string;
};

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY is not set');
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return false;
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const bodyJSON = (await request.json()) as ConsultationRequestData;
    const {
      firstName,
      lastName,
      businessEmail,
      website,
      company,
      phone,
      requestDetails,
      serviceName,
      expertName,
      recaptcha,
    } = bodyJSON;

    // Verify reCAPTCHA token
    if (!recaptcha) {
      return NextResponse.json(
        { message: 'reCAPTCHA verification is required.' },
        { status: 400 }
      );
    }

    const isRecaptchaValid = await verifyRecaptcha(recaptcha);
    if (!isRecaptchaValid) {
      return NextResponse.json(
        { message: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // Initialize SendGrid with API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    // Create email content
    const msg = {
      to: process.env.ADMIN_EMAIL!, // Your admin email address
      from: process.env.FROM_EMAIL!, // Verified sender email
      subject: 'New Assistance Request',
      html: `
        <h2>New Assistance Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${businessEmail}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Request:</strong> ${requestDetails}</p>

        ${serviceName && `<p><strong>Service Name:</strong> ${serviceName}</p>`}  
        ${expertName && `<p><strong>Expert Name:</strong> ${expertName}</p>`}
      `,
    };

    const userMsg = {
      to: businessEmail,
      from: process.env.FROM_EMAIL!,
      subject: 'Your Assistance Request Has Been Received',
      html: `
        <table width="600" style="border-collapse:collapse;margin: 0 auto;font-family: sans-serif;background:#fff;">
          <thead>
              <tr>
                  <td>
                      <img style="width:100%;height:auto;margin:0;" src="https://craftify-tech.com/images/email_header.png"
                          alt="craftify tech">
                  </td>
              </tr>
          </thead>

          <tbody style="background:#fff;">
              <tr>
                  <td style="padding: 0 24px;">
                      <table style="width: 100%;">
                          <tr>
                              <td style="padding: 24px;
                              border-right: 1px solid rgba(4, 2, 19, 0.08);
                              border-left: 1px solid rgba(4, 2, 19, 0.08);">
                                  <h2 style="color: #040213;
                                  font-size: 24px;
                                  font-style: normal;
                                  font-weight: 500;
                                  line-height: 110%;
                                  margin: 0 0 24px 0;">
                                      Your Assistance Request Has Been Received
                                  </h2>
                                  <p style="color: #808080;
                                  font-size: 14px;
                                  font-style: normal;
                                  font-weight: 400;
                                  line-height: normal;
                                  margin: 0 0 24px 0;">
                                      Hi ${firstName},
                                  </p>
                                  <p style="color: #808080;
                                  font-size: 14px;
                                  font-style: normal;
                                  font-weight: 400;
                                  line-height: normal;
                                  margin: 0 0 24px 0;">
                                      Thank you for reaching out to [Craftify Tech. We have successfully received your
                                      assistance request.
                                  </p>
                                  <p style="color: #808080;
                                  font-size: 14px;
                                  font-style: normal;
                                  font-weight: 400;
                                  line-height: normal;
                                  margin: 0 0 24px 0;">
                                      Our team of cybersecurity experts will review the details and reach out within the next
                                      business day to discuss the best way to connect your business with the right expertise.
                                  </p>

                                  <p style="color: #808080;
                                  font-size: 14px;
                                  font-style: normal;
                                  font-weight: 700;
                                  line-height: normal;
                                  margin: 0 0 24px 0;">
                                      Your request summary:
                                  </p>

                                  <ul style="color: #808080;
                                  font-size: 14px;
                                  font-style: normal;
                                  font-weight: 400;
                                  line-height: normal;
                                  margin: 0 0 24px 0;
                                  padding-left: 16px;">
                                      <li>
                                          <strong>Business / Company:</strong> ${company}
                                      </li>
                                      <li>
                                          <strong>Website:</strong> ${website}
                                      </li>
                                      <li>
                                          <strong>Description / Request:</strong> ${requestDetails}
                                      </li>
                                  </ul>

                                  <p style="color: #808080;
                                  font-size: 14px;
                                  font-style: normal;
                                  font-weight: 400;
                                  line-height: normal;
                                  margin: 0 0 24px 0;">
                                      In the meantime, you can learn more about how we bridge cybersecurity expertise with
                                      enterprise impact here:
                                      <a href="https://craftify-tech.com/expertise-and-services"
                                          style="color: #FF2F66;text-decoration: underline;">https://craftify-tech.com/expertise-and-services</a>
                                  </p>

                                  <p style="color: #808080;
                                  font-size: 14px;
                                  font-style: normal;
                                  font-weight: 400;
                                  line-height: normal;
                                  margin: 0 0 24px 0;">
                                      We look forward to helping you strengthen your cybersecurity readiness.
                                  </p>

                                  <p style="color: #040213;
                                  font-size: 14px;
                                  font-style: normal;
                                  font-weight: 700;
                                  line-height: normal;">
                                      Best regards,<br>
                                      <span style="color: #FF2F66;">The Craftify Tech Team</span>
                                  </p>

                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </tbody>

          <tfoot>
              <tr>
                  <td>
                      <img style="width:100%;height:auto;" src="https://craftify-tech.com/images/email_footer.png"
                          alt="Craftify Tech">
                  </td>
              </tr>
          </tfoot>
      </table>
      `,
    };

    console.log('businessEmail:', businessEmail);
    console.log('adminEmail:', process.env.ADMIN_EMAIL!);
    console.log('fromEmail:', process.env.FROM_EMAIL!);

    // Send email
    try {
      await sgMail.send(msg);
      console.log('Admin email sent');
    } catch (error: unknown) {
      console.error('Error sending admin email:', error);
    }

    try {
      await sgMail.send(userMsg);
      console.log('User email sent');
    } catch (error: unknown) {
      console.error('Error sending user email:', error);
    }

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
