// app/api/booking/route.ts - Enhanced booking handling
import { NextRequest, NextResponse } from 'next/server'
import { resend, emailTemplates } from '@/lib/resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Convert dates to strings
    const bookingData = {
      ...body,
      preferredDate: body.preferredDate ? new Date(body.preferredDate).toISOString() : null,
      alternativeDate: body.alternativeDate ? new Date(body.alternativeDate).toISOString() : null,
    }

    const { firstName, lastName, email } = bookingData

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send detailed booking request to Prince Kumar
    await resend.emails.send({
      from: 'noreply@voyageavecprince.com',
      to: 'prince@voyageavecprince.com',
      subject: 'New Booking Request - Voyage avec Prince',
      html: `
        <h2>New Booking Request</h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${bookingData.phone}</p>
        <p><strong>Country:</strong> ${bookingData.country}</p>
        
        <h3>Travel Details</h3>
        <p><strong>Tour:</strong> ${bookingData.tourId}</p>
        <p><strong>Preferred Date:</strong> ${bookingData.preferredDate || 'Not specified'}</p>
        <p><strong>Number of Travelers:</strong> ${bookingData.numberOfTravelers}</p>
        <p><strong>Budget Range:</strong> ${bookingData.budgetRange}</p>
        <p><strong>Accommodation Level:</strong> ${bookingData.accommodationLevel}</p>
        
        <h3>Additional Information</h3>
        <p><strong>Special Requests:</strong> ${bookingData.specialRequests || 'None'}</p>
        <p><strong>Customizations:</strong> ${bookingData.customizations?.join(', ') || 'None'}</p>
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