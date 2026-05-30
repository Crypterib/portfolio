import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'frankochigbo@gmail.com'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send email via Resend
    // Note: onboarding@resend.dev only works for sending to your own Resend account email.
    // To send to any address, verify a custom domain at https://resend.com/domains
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [CONTACT_EMAIL],
      subject: `Portfolio Contact: ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden;">
          <div style="background: #DC2626; padding: 20px 28px;">
            <h2 style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 700;">New Contact Form Message</h2>
            <p style="margin: 4px 0 0; color: #FEE2E2; font-size: 13px;">From your portfolio website</p>
          </div>
          <div style="padding: 24px 28px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-size: 13px; font-weight: 600; width: 80px;">Name</td>
                <td style="padding: 8px 0; color: #1E293B; font-size: 14px;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-size: 13px; font-weight: 600;">Email</td>
                <td style="padding: 8px 0; color: #1E293B; font-size: 14px;"><a href="mailto:${escapeHtml(email)}" style="color: #DC2626; text-decoration: none;">${escapeHtml(email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-size: 13px; font-weight: 600;">Subject</td>
                <td style="padding: 8px 0; color: #1E293B; font-size: 14px;">${escapeHtml(subject)}</td>
              </tr>
            </table>
            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #F1F5F9;">
              <p style="margin: 0 0 8px; color: #64748B; font-size: 13px; font-weight: 600;">Message</p>
              <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${escapeHtml(message)}</p>
            </div>
          </div>
          <div style="background: #F8FAFC; padding: 16px 28px; border-top: 1px solid #E2E8F0;">
            <p style="margin: 0; color: #94A3B8; font-size: 12px;">
              This message was sent via the contact form on your portfolio website.
              Reply directly to this email to respond to ${escapeHtml(name)}.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', JSON.stringify(error))
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      )
    }

    console.log('Email sent successfully:', data?.id)

    return NextResponse.json(
      { success: true, message: 'Message sent successfully! I\'ll get back to you soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
