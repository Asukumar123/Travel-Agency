import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredTours = [
  {
    name: "Rajasthan & Taj Mahal",
    description:
      "Discover the treasures of Agra and the heart of Rajasthan with impregnable fortresses, sacred lakes, and remarkable architecture.",
    duration: "15 days / 14 nights",
    price: "from €1,400",
    image: "/rajasthan-palace-with-intricate-architecture-and-v.jpg",
    highlights: ["Taj Mahal", "Jaipur", "Udaipur", "Jodhpur"],
  },
  {
    name: "Northern Triangle",
    description:
      "Follow the traces of Sikh religion at the Golden Temple of Amritsar, take altitude in Shimla, and end in peaceful Rishikesh.",
    duration: "12 days / 11 nights",
    price: "from €1,100",
    image: "/golden-temple-amritsar-with-reflection-in-sacred.jpg",
    highlights: ["Golden Temple", "Shimla", "Rishikesh", "Chandigarh"],
  },
  {
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
  return (
    <section id="tours" className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-24">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Featured Tour Circuits</h2>
        <p className="mt-4 max-w-[85%] text-muted-foreground text-pretty">
          Explore India's most captivating destinations with our carefully crafted itineraries, from the majestic Taj
          Mahal to the spiritual Ganges
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredTours.map((tour, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image src={tour.image || "/placeholder.svg"} alt={tour.name} fill className="object-cover" />
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-white/90 text-foreground">
                  {tour.duration}
                </Badge>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{tour.name}</CardTitle>
                <span className="text-sm font-semibold text-primary">{tour.price}</span>
              </div>
              <CardDescription className="text-sm">{tour.description}</CardDescription>
              <div className="flex flex-wrap gap-1 mt-2">
                {tour.highlights.map((highlight, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                View Itinerary
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button className="bg-primary hover:bg-primary/90">View All Tours</Button>
      </div>
    </section>
  )
}
