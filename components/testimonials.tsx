"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "@/hooks/use-translation"

const testimonialsData = [
  {
    name: "Marie Dubois",
    location: "Paris, France",
    comment: "Prince Kumar made our dream trip to India come true! His knowledge of the culture and perfect French made our journey unforgettable. The Taj Mahal at sunrise was magical!",
    avatar: "/testimonial-avatar-1.jpg",
  },
  {
    name: "Jean-Pierre Martin",
    location: "Lyon, France", 
    comment: "An authentic experience from start to finish. Prince's passion for his country is contagious. The local encounters he organized were the highlight of our trip to Rajasthan.",
    avatar: "/testimonial-avatar-2.jpg",
  },
  {
    name: "Sophie Laurent",
    location: "Brussels, Belgium",
    comment: "Exceptional service and attention to detail. Prince Kumar understood exactly what we wanted and delivered beyond our expectations. India through his eyes is simply magnificent!",
    avatar: "/testimonial-avatar-3.jpg",
  },
]

export default function Testimonials() {
  const { t } = useTranslation()

  return (
    <section id="testimonials" className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 md:py-24">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl">
          What Our Travelers Say
        </h2>
        <p className="mt-4 max-w-[85%] text-muted-foreground text-sm md:text-base">
          Hear from other travelers about their unforgettable experiences in India
        </p>
      </div>
      <div className="mt-8 md:mt-12 grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonialsData.map((testimonial, index) => (
          <Card key={index} className="h-full">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full bg-muted">
                  <div className="flex items-center justify-center w-full h-full text-muted-foreground text-sm font-medium">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <CardTitle className="text-sm md:text-base">{testimonial.name}</CardTitle>
                  <CardDescription className="text-xs md:text-sm">{testimonial.location}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{testimonial.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}