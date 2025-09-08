"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, CheckCircle, Loader2 } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "@/hooks/use-translation"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [error, setError] = useState("")
  const { t } = useTranslation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setError("")
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubscribing(true)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSubscribed(true)
        setEmail("")
      } else {
        const data = await response.json()
        setError(data.error || "Failed to subscribe. Please try again.")
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error)
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsSubscribing(false)
    }
  }

  // Show success state
  if (isSubscribed) {
    return (
      <section className="bg-gradient-to-r from-[#78ffd6] to-[#a8ff78] py-16 md:py-24 text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <CheckCircle className="h-16 w-16 mx-auto text-black" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl mb-4">
              {t("subscribeSuccess")}
            </h2>
            <p className="max-w-[85%] text-black/90 text-sm md:text-base">
              You'll receive the latest travel inspiration and exclusive offers from Prince Kumar.
            </p>
            <Button 
              variant="outline" 
              className="mt-6 bg-black/10 border-black/20 text-black hover:bg-black/20"
              onClick={() => setIsSubscribed(false)}
            >
              Subscribe Another Email
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gradient-to-r from-[#78ffd6] to-[#a8ff78] py-16 md:py-24 text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-10">
          <div className="mb-4">
            <Mail className="h-12 w-12 mx-auto text-black/90" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl mb-4">
            {t("newsletterTitle")}
          </h2>
          <p className="max-w-2xl text-black/90 text-sm md:text-base">
            {t("newsletterSubtitle")}
          </p>
        </div>

        {/* Newsletter Form */}
        <div className="flex justify-center">
          <Card className="w-full max-w-md bg-black/5 border-black/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="h-12 w-full rounded-md border-black/20 bg-black/10 px-4 py-3 text-black placeholder:text-black/70 focus:border-black focus:ring-black/30 focus:bg-black/20"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubscribing}
                  />
                  {error && (
                    <p className="text-sm text-red-600 mt-1">
                      {error}
                    </p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-black text-white hover:bg-black/90 font-medium"
                  disabled={isSubscribing}
                >
                  {isSubscribing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    t("subscribe")
                  )}
                </Button>
              </form>

              {/* Benefits list */}
              <div className="mt-6 pt-4 border-t border-black/20">
                <p className="text-xs text-black/80 mb-3 font-medium">What you'll get:</p>
                <ul className="space-y-2 text-xs text-black/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-black/60" />
                    Exclusive travel deals and discounts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-black/60" />
                    Insider tips from Prince Kumar
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-black/60" />
                    New destination guides
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-black/60" />
                    Travel inspiration & cultural insights
                  </li>
                </ul>
                <p className="text-xs text-black/60 mt-4">
                  No spam, unsubscribe anytime. We respect your privacy.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social proof */}
        <div className="text-center mt-8">
          <p className="text-sm text-black/70">
            Join 2,500+ travelers who trust Voyage avec Prince
          </p>
          <div className="flex justify-center items-center gap-2 mt-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full bg-black/10 border border-black/30 flex items-center justify-center text-xs text-black/60"
                >
                  {String.fromCharCode(65 + i - 1)}
                </div>
              ))}
            </div>
            <span className="text-xs text-black/60 ml-2">and many more...</span>
          </div>
        </div>
      </div>
    </section>
  )
}
