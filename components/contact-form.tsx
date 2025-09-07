"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin } from "lucide-react"
import { Phone, Mail } from "@/components/icons"
import { useState } from "react"
import { useTranslation } from "@/hooks/use-translation"

export default function ContactForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
        alert("Your message has been sent! Prince Kumar will contact you soon.")
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert("Sorry, there was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl mb-4">{t("contactTitle")}</h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">{t("contactSubtitle")}</p>
        </div>

        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Get in Touch with Prince Kumar</h3>
              <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
                Ready to explore India? Have questions about our tours? Prince Kumar is here to help you plan your
                perfect Indian adventure with personalized service and authentic experiences.
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-primary/5 rounded-lg">
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base">Location</p>
                    <p className="text-muted-foreground text-xs md:text-sm">New Delhi, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-primary/5 rounded-lg">
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base">Phone</p>
                    <p className="text-muted-foreground text-xs md:text-sm">+917870524178</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-primary/5 rounded-lg">
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base">Email</p>
                    <p className="text-muted-foreground text-xs md:text-sm">Ohprincekumar@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/80 backdrop-blur-sm border rounded-2xl p-6 md:p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    {t("name")}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    {t("email")}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                  {t("phone")}
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-foreground">
                  {t("message")}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[100px] md:min-h-[120px] bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 resize-none"
                  placeholder="Tell us about your travel plans, questions, or special requirements..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 md:py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : t("send")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}