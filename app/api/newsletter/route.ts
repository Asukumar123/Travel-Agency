import { NextRequest, NextResponse } from 'next/server'
import { resend } from '@/lib/resend'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Send welcome email
    await resend.emails.send({
      from: 'noreply@voyageavecprince.com',
      to: email,
      subject: 'Welcome to Voyage avec Prince Newsletter!',
      html: `
        <h2>Welcome to our travel community!</h2>
        <p>Thank you for subscribing to the Voyage avec Prince newsletter.</p>
        <p>You'll now receive:</p>
        <ul>
          <li>Exclusive travel deals and discounts</li>
          <li>Insider tips from Prince Kumar</li>
          <li>New destination guides</li>
          <li>Travel inspiration & cultural insights</li>
        </ul>
        <p>Best regards,<br>Prince Kumar<br>Voyage avec Prince</p>
      `,
    })

    // Notify Prince Kumar
    await resend.emails.send({
      from: 'noreply@voyageavecprince.com',
      to: 'prince@voyageavecprince.com',
      subject: 'New Newsletter Subscription',
      html: `<p>New newsletter subscription: ${email}</p>`,
    })

    return NextResponse.json({ message: 'Successfully subscribed' })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}