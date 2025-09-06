"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/hooks/use-translation"

const featuredTours = [
  {
    id: "rajasthan-taj-mahal",
    name: "Rajasthan & Taj Mahal",
    description:
      "Discover the treasures of Agra and the heart of Rajasthan with impregnable fortresses, sacred lakes, and remarkable architecture.",
    duration: "15 days / 14 nights",
    price: "from €1,400",
    image: "/rajasthan-palace-with-intricate-architecture-and-v.jpg",
    highlights: ["Taj Mahal", "Jaipur", "Udaipur", "Jodhpur"],
  },
  {
    id: "northern-triangle",
    name: "Northern Triangle",
    description:
      "Follow the traces of Sikh religion at the Golden Temple of Amritsar, take altitude in Shimla, and end in peaceful Rishikesh.",
    duration: "12 days / 11 nights",
    price: "from €1,100",
    image: "/golden-temple-amritsar-with-reflection-in-sacred.jpg",
    highlights: ["Golden Temple", "Shimla", "Rishikesh", "Chandigarh"],
  },
  {
    id: "ganges-valley",
    name: "Ganges Valley",
    description:
      "Discover the treasures of the Ganges Valley along this mythical river from Varanasi to Bodhgaya and Calcutta.",
    duration: "14 days / 13 nights",
    price: "from €1,200",
    image: "/varanasi-ghats-at-sunrise-with-pilgrims-performi.jpg",
    highlights: ["Varanasi", "Bodhgaya", "Calcutta", "Sacred Ganges"],
  },
]

export default function Destinations() {
  const { t } = useTranslation()

  return (
    <section id="destinations" className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 md:py-24">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl text-balance">
          Featured Tour Circuits
        </h2>
        <p className="mt-4 max-w-[85%] text-muted-foreground text-pretty text-sm md:text-base">
          Explore India's most captivating destinations with our carefully crafted itineraries, from the majestic Taj
          Mahal to the spiritual Ganges
        </p>
      </div>
      <div className="mt-8 md:mt-12 grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredTours.map((tour, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-40 md:h-48">
              <Image src={tour.image || "/placeholder.svg"} alt={tour.name} fill className="object-cover" />
              <div className="absolute top-3 md:top-4 right-3 md:right-4">
                <Badge variant="secondary" className="bg-white/90 text-foreground text-xs md:text-sm">
                  {tour.duration}
                </Badge>
              </div>
            </div>
            <CardHeader className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base md:text-lg">{tour.name}</CardTitle>
                <span className="text-xs md:text-sm font-semibold text-primary">{tour.price}</span>
              </div>
              <CardDescription className="text-xs md:text-sm line-clamp-3">{tour.description}</CardDescription>
              <div className="flex flex-wrap gap-1 mt-2">
                {tour.highlights.map((highlight, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardFooter className="p-4 md:p-6 pt-0">
              <Button
                variant="outline"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent text-sm"
                asChild
              >
                <Link href={`/tours/${tour.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8 md:mt-12 flex justify-center">
        <Button className="bg-primary hover:bg-primary/90" asChild>
          <Link href="/tours">View All Tours</Link>
        </Button>
      </div>
    </section>
  )
}