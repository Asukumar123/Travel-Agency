"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "@/hooks/use-translation"

export const testimonialsData = [
  {
    name: "Dave",
    location: "UK",
    avatar: "/dave.jpg", // ✅ remove /public (Next.js automatically serves from /public)
    comment:
      "J’ai rencontré Prince dans la rue par hasard, nous avons bu un chai ensemble. Il m’a proposé de m’accompagner sur les sites majeurs de Delhi le lendemain...",
  },
  {
    name: "Isabelle Martin",
    location: "France",
    avatar: "/issable.jpg",
    comment:
      "Prince Yadav est un jeune guide indien. Il a étudié le français à l’Alliance Française et le parle parfaitement...",
  },
  {
    name: "Sophie Sonam Lhamo",
    location: "France",
    avatar: "/Sophie.jpg",
    comment:
      "Comme certains d’entre vous le savent, j’ai vécu en Inde pendant une dizaine d’années. J’ai connu Prince quand il était petit...",
  },
];

export default function Testimonials() {
  const { t } = useTranslation()

  return (
    <section
      id="testimonials"
      className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 md:py-24"
    >
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
                <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <CardTitle className="text-sm md:text-base">{testimonial.name}</CardTitle>
                  <CardDescription className="text-xs md:text-sm">{testimonial.location}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-4">
                {testimonial.comment}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
