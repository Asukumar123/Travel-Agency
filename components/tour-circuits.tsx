import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users } from "lucide-react"
import { tours } from "@/data/tours"

export default function TourCircuits() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-24">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Our Signature Tour Circuits</h2>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground text-pretty">
          Carefully crafted journeys through India's most captivating destinations. Each circuit offers authentic
          experiences, cultural immersion, and unforgettable memories with Prince Kumar as your guide.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {tours.map((tour) => (
          <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={tour.image || "/placeholder.svg"}
                alt={tour.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <Badge variant="secondary" className="mb-2 bg-white/90 text-foreground">
                  {tour.duration}
                </Badge>
                <h3 className="text-xl font-bold text-white text-balance">{tour.name}</h3>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-lg">{tour.subtitle}</span>
                <span className="text-primary font-semibold">{tour.price}</span>
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">{tour.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {tour.highlights.slice(0, 3).map((highlight, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {highlight}
                  </Badge>
                ))}
                {tour.highlights.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{tour.highlights.length - 3} more
                  </Badge>
                )}
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>India</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>Small Groups</span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex gap-2">
              <Button asChild variant="outline" className="flex-1 bg-transparent">
                <Link href={`/tours/${tour.id}`}>View Details</Link>
              </Button>
              <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                <Link href={`/tours/${tour.id}#book`}>Book Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          <span>All tours include French-speaking guides and authentic cultural experiences</span>
        </div>
        <Button size="lg" variant="outline">
          Customize Your Journey
        </Button>
      </div>
    </section>
  )
}
