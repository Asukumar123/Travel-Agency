// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { resend, emailTemplates } from '@/lib/resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email to Prince Kumar
    await resend.emails.send({
      from: 'noreply@voyageavecprince.com', // Replace with your verified domain
      to: 'prince@voyageavecprince.com', // Prince's email
      subject: emailTemplates.contact.subject,
      html: emailTemplates.contact.template(body),
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: 'noreply@voyageavecprince.com',
      to: email,
      subject: 'Thank you for contacting Voyage avec Prince',
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to Voyage avec Prince. We have received your message and Prince Kumar will get back to you within 24 hours.</p>
        <p>Your inquiry details:</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        <br>
        <p>Best regards,<br>Prince Kumar<br>Voyage avec Prince</p>
      `,
    })

    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending contact email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}

// app/api/booking/route.ts
