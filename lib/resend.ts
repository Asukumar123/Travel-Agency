// lib/resend.ts
import { Resend } from 'resend'

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is not set')
}

export const resend = new Resend(process.env.RESEND_API_KEY)

// Email templates
export const emailTemplates = {
  contact: {
    subject: 'New Contact Inquiry - Voyage avec Prince',
    template: (data: any) => `
      <h2>New Contact Inquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `
  },
  booking: {
    subject: 'New Booking Request - Voyage avec Prince',
    template: (data: any) => `
      <h2>New Booking Request</h2>
      <h3>Personal Information</h3>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Country:</strong> ${data.country}</p>
      
      <h3>Travel Details</h3>
      <p><strong>Tour:</strong> ${data.tourId}</p>
      <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
      <p><strong>Alternative Date:</strong> ${data.alternativeDate}</p>
      <p><strong>Number of Travelers:</strong> ${data.numberOfTravelers}</p>
      <p><strong>Accommodation Level:</strong> ${data.accommodationLevel}</p>
      <p><strong>Budget Range:</strong> ${data.budgetRange}</p>
      
      <h3>Special Requirements</h3>
      <p><strong>Dietary Requirements:</strong> ${data.dietaryRequirements}</p>
      <p><strong>Mobility Requirements:</strong> ${data.mobilityRequirements}</p>
      <p><strong>Special Requests:</strong> ${data.specialRequests}</p>
      <p><strong>Additional Experiences:</strong> ${data.customizations.join(', ')}</p>
      
      <p><strong>Preferred Contact Method:</strong> ${data.preferredContact}</p>
    `
  },
  inquiry: {
    subject: 'New General Inquiry - Voyage avec Prince',
    template: (data: any) => `
      <h2>New General Inquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Country:</strong> ${data.country || 'Not provided'}</p>
      <p><strong>Inquiry Type:</strong> ${data.inquiryType}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
      <p><strong>Preferred Contact:</strong> ${data.preferredContact}</p>
    `
  }
}