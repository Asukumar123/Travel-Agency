import { NextRequest, NextResponse } from 'next/server'
import { resend, emailTemplates } from '@/lib/resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email } = body

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send booking request to Prince Kumar
    await resend.emails.send({
      from: 'noreply@voyageavecprince.com',
      to: 'prince@voyageavecprince.com',
      subject: emailTemplates.booking.subject,
      html: emailTemplates.booking.template(body),
    })

    // Send confirmation to user
    await resend.emails.send({
      from: 'noreply@voyageavecprince.com',
      to: email,
      subject: 'Booking Request Received - Voyage avec Prince',
      html: `
        <h2>Thank you for your booking request!</h2>
        <p>Dear ${firstName} ${lastName},</p>
        <p>We have received your booking request for your Indian adventure. Prince Kumar will review your details and contact you within 24 hours to discuss your personalized itinerary.</p>
        <p>We're excited to help you discover the authentic India!</p>
        <br>
        <p>Best regards,<br>Prince Kumar<br>Voyage avec Prince</p>
      `,
    })

    return NextResponse.json({ message: 'Booking request sent successfully' })
  } catch (error) {
    console.error('Error sending booking email:', error)
    return NextResponse.json(
      { error: 'Failed to send booking request' },
      { status: 500 }
    )
  }
}
