"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MessageSquare, Send, Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "@/hooks/use-translation"

export default function InquiryForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    inquiryType: "",
    subject: "",
    message: "",
    preferredContact: "email",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          inquiryType: "",
          subject: "",
          message: "",
          preferredContact: "email",
        })
        alert("Thank you for your inquiry! We'll get back to you within 24 hours.")
      } else {
        throw new Error('Failed to send inquiry')
      }
    } catch (error) {
      console.error('Error sending inquiry:', error)
      alert("Sorry, there was an error sending your inquiry. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-8 md:py-12">
      <div className="text-center mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl text-balance">{t("getInTouch")}</h1>
        <p className="mt-4 text-sm md:text-lg text-muted-foreground text-pretty">
          Have questions about traveling to India? Need a custom itinerary? Prince Kumar is here to help!
        </p>
      </div>

      <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Contact Information</CardTitle>
              <CardDescription className="text-sm">Reach out to Prince Kumar directly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <div>
                  <p className="font-medium text-sm md:text-base">Phone</p>
                  <p className="text-xs md:text-sm text-muted-foreground">+91 11 1234 5678</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <div>
                  <p className="font-medium text-sm md:text-base">Email</p>
                  <p className="text-xs md:text-sm text-muted-foreground">prince@voyageavecprince.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <div>
                  <p className="font-medium text-sm md:text-base">Location</p>
                  <p className="text-xs md:text-sm text-muted-foreground">New Delhi, India</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Why Choose Prince Kumar?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-xs md:text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  French & English speaking guide
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Personalized itineraries
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Authentic cultural experiences
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Local expertise & connections
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  24/7 support during your trip
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Inquiry Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <MessageSquare className="h-4 w-4 md:h-5 md:w-5" />
                Send Your Inquiry
              </CardTitle>
              <CardDescription className="text-sm">Tell us about your travel dreams and we'll make them reality</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                  </div>
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
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" name="country" value={formData.country} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => handleSelectChange("inquiryType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tour-booking">Tour Booking</SelectItem>
                        <SelectItem value="custom-itinerary">Custom Itinerary</SelectItem>
                        <SelectItem value="group-travel">Group Travel</SelectItem>
                        <SelectItem value="travel-advice">Travel Advice</SelectItem>
                        <SelectItem value="visa-assistance">Visa Assistance</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredContact">Preferred Contact</Label>
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief description of your inquiry"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your travel plans, interests, dates, budget, or any questions you have..."
                    className="min-h-[100px] md:min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}