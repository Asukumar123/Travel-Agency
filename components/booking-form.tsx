"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, MapPin, Phone, Mail, Send } from "lucide-react"
import { useState } from "react"
import { tours } from "@/data/tours"
import { useTranslation } from "@/hooks/use-translation"

interface BookingFormProps {
  selectedTourId?: string
}

export default function BookingForm({ selectedTourId }: BookingFormProps) {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",

    // Travel Details
    tourId: selectedTourId || "custom",
    preferredDate: "",
    alternativeDate: "",
    numberOfTravelers: "2",
    accommodationLevel: "standard",

    // Special Requirements
    dietaryRequirements: "",
    mobilityRequirements: "",
    specialRequests: "",

    // Budget & Preferences
    budgetRange: "",
    customizations: [] as string[],

    // Communication
    preferredContact: "email",
    newsletter: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleCustomizationChange = (customization: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      customizations: checked
        ? [...prev.customizations, customization]
        : prev.customizations.filter((c) => c !== customization),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "",
          tourId: selectedTourId || "custom",
          preferredDate: "",
          alternativeDate: "",
          numberOfTravelers: "2",
          accommodationLevel: "standard",
          dietaryRequirements: "",
          mobilityRequirements: "",
          specialRequests: "",
          budgetRange: "",
          customizations: [],
          preferredContact: "email",
          newsletter: false,
        })
        alert("Thank you for your booking request! Prince Kumar will contact you within 24 hours.")
      } else {
        throw new Error('Failed to send booking request')
      }
    } catch (error) {
      console.error('Error sending booking request:', error)
      alert("Sorry, there was an error sending your booking request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedTour = tours.find((tour) => tour.id === formData.tourId)

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-8 md:py-12">
      <div className="text-center mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl text-balance">{t("bookingTitle")}</h1>
        <p className="mt-4 text-sm md:text-lg text-muted-foreground text-pretty">
          {t("bookingSubtitle")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <Users className="h-4 w-4 md:h-5 md:w-5" />
              {t("personalInfo")}
            </CardTitle>
            <CardDescription className="text-sm">Let us know who we'll be planning this amazing journey for</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country of Residence *</Label>
              <Input id="country" name="country" value={formData.country} onChange={handleInputChange} required />
            </div>
          </CardContent>
        </Card>

        {/* Travel Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <MapPin className="h-4 w-4 md:h-5 md:w-5" />
              {t("travelDetails")}
            </CardTitle>
            <CardDescription className="text-sm">Help us plan the perfect itinerary for your group</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="tourId">Select Tour Circuit</Label>
              <Select value={formData.tourId} onValueChange={(value) => handleSelectChange("tourId", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a tour circuit or request custom itinerary" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="custom">{t("customItinerary")}</SelectItem>
                  {tours.map((tour) => (
                    <SelectItem key={tour.id} value={tour.id}>
                      {tour.name} - {tour.duration}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedTour && (
                <div className="p-3 bg-muted rounded-md">
                  <p className="text-sm font-medium">{selectedTour.name}</p>
                  <p className="text-sm text-muted-foreground">{selectedTour.subtitle}</p>
                  <p className="text-sm text-primary font-semibold mt-1">{selectedTour.price}</p>
                </div>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="preferredDate">Preferred Departure Date</Label>
                <Input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="alternativeDate">Alternative Date</Label>
                <Input
                  id="alternativeDate"
                  name="alternativeDate"
                  type="date"
                  value={formData.alternativeDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="numberOfTravelers">Number of Travelers</Label>
                <Select
                  value={formData.numberOfTravelers}
                  onValueChange={(value) => handleSelectChange("numberOfTravelers", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? "Person" : "People"}
                      </SelectItem>
                    ))}
                    <SelectItem value="10+">10+ People</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="accommodationLevel">Accommodation Level</Label>
                <Select
                  value={formData.accommodationLevel}
                  onValueChange={(value) => handleSelectChange("accommodationLevel", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="budget">Budget (2-3 star hotels)</SelectItem>
                    <SelectItem value="standard">Standard (3-4 star hotels)</SelectItem>
                    <SelectItem value="luxury">Luxury (4-5 star hotels)</SelectItem>
                    <SelectItem value="premium">Premium (Palace hotels & resorts)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Special Requirements */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">{t("specialRequirements")}</CardTitle>
            <CardDescription className="text-sm">Help us make your trip comfortable and memorable</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="dietaryRequirements">Dietary Requirements</Label>
              <Input
                id="dietaryRequirements"
                name="dietaryRequirements"
                value={formData.dietaryRequirements}
                onChange={handleInputChange}
                placeholder="Vegetarian, vegan, allergies, etc."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobilityRequirements">Mobility Requirements</Label>
              <Input
                id="mobilityRequirements"
                name="mobilityRequirements"
                value={formData.mobilityRequirements}
                onChange={handleInputChange}
                placeholder="Wheelchair access, walking limitations, etc."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialRequests">Special Requests</Label>
              <Textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                placeholder="Anniversary celebration, photography interests, cultural preferences, etc."
                className="min-h-[80px] md:min-h-[100px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Budget & Customizations */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">{t("budgetCustomizations")}</CardTitle>
            <CardDescription className="text-sm">Let us know your preferences to create the perfect experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="budgetRange">Budget Range (per person)</Label>
              <Select value={formData.budgetRange} onValueChange={(value) => handleSelectChange("budgetRange", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-1000">Under €1,000</SelectItem>
                  <SelectItem value="1000-1500">€1,000 - €1,500</SelectItem>
                  <SelectItem value="1500-2000">€1,500 - €2,000</SelectItem>
                  <SelectItem value="2000-3000">€2,000 - €3,000</SelectItem>
                  <SelectItem value="over-3000">Over €3,000</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Additional Experiences (optional)</Label>
              <div className="grid gap-2 md:gap-3 sm:grid-cols-2">
                {[
                  "Cooking classes",
                  "Yoga sessions",
                  "Photography workshops",
                  "Wildlife safaris",
                  "Ayurveda treatments",
                  "Cultural performances",
                  "Local family visits",
                  "Spiritual ceremonies",
                ].map((customization) => (
                  <div key={customization} className="flex items-center space-x-2">
                    <Checkbox
                      id={customization}
                      checked={formData.customizations.includes(customization)}
                      onCheckedChange={(checked) => handleCustomizationChange(customization, checked as boolean)}
                    />
                    <Label htmlFor={customization} className="text-sm">
                      {customization}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Communication Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">{t("communicationPrefs")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="preferredContact">Preferred Contact Method</Label>
              <Select
                value={formData.preferredContact}
                onValueChange={(value) => handleSelectChange("preferredContact", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) => handleCheckboxChange("newsletter", checked as boolean)}
              />
              <Label htmlFor="newsletter" className="text-sm">
                Subscribe to our newsletter for travel tips and special offers
              </Label>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button 
            type="submit" 
            size="lg" 
            className="bg-primary hover:bg-primary/90 px-6 md:px-8"
            disabled={isSubmitting}
          >
            <Send className="mr-2 h-4 w-4" />
            {isSubmitting ? "Sending..." : t("sendBookingRequest")}
          </Button>
        </div>
      </form>

      {/* Contact Information */}
      <div className="mt-8 md:mt-12 text-center">
        <h3 className="text-base md:text-lg font-semibold mb-4">{t("needHelp")}</h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+91 11 1234 5678</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>prince@voyageavecprince.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>New Delhi, India</span>
          </div>
        </div>
      </div>
    </section>
  )
}