
// app/api/inquiry/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { resend, emailTemplates } from '@/lib/resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send inquiry to Prince Kumar
    await resend.emails.send({
      from: 'noreply@voyageavecprince.com',
      to: 'prince@voyageavecprince.com',
      subject: emailTemplates.inquiry.subject,
      html: emailTemplates.inquiry.template(body),
    })

    // Send confirmation to user
    await resend.emails.send({
      from: 'noreply@voyageavecprince.com',
      to: email,
      subject: 'Inquiry Received - Voyage avec Prince',
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Dear ${name},</p>
        <p>We have received your inquiry and Prince Kumar will respond to you within 24 hours.</p>
        <p>Thank you for your interest in discovering India with us!</p>
        <br>
        <p>Best regards,<br>Prince Kumar<br>Voyage avec Prince</p>
      `,
    })

    return NextResponse.json({ message: 'Inquiry sent successfully' })
  } catch (error) {
    console.error('Error sending inquiry email:', error)
    return NextResponse.json(
      { error: 'Failed to send inquiry' },
      { status: 500 }
    )
  }
}