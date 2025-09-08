// app/api/contact/route.ts - Fix the contact form
import { NextRequest, NextResponse } from 'next/server'
import { resend, emailTemplates } from '@/lib/resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send to Prince Kumar
    await resend.emails.send({
      from: 'noreply@voyageavecprince.com',
      to: 'prince@voyageavecprince.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    // Send confirmation to user
    await resend.emails.send({
      from: 'noreply@voyageavecprince.com',
      to: email,
      subject: 'Thank you for contacting Voyage avec Prince',
      html: `
        <h2>Thank you for your message!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br>Prince Kumar<br>Voyage avec Prince</p>
      `,
    })

    return NextResponse.json({ message: 'Message sent successfully' })
  } catch (error) {
    console.error('Error sending contact email:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}