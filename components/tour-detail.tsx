"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, MapPin, Users, Star, Calendar, Euro } from "lucide-react"
import type { Tour } from "@/data/tours"

interface TourDetailProps {
  tour: Tour
}

export default function TourDetail({ tour }: TourDetailProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
      {/* Hero Section */}
      <div className="relative h-96 rounded-xl overflow-hidden mb-8">
        <Image src={tour.image || "/placeholder.svg"} alt={tour.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <Badge variant="secondary" className="mb-4 bg-white/90 text-foreground">
            {tour.duration}
          </Badge>
          <h1 className="text-4xl font-bold mb-2 text-balance">{tour.name}</h1>
          <p className="text-xl text-white/90 text-pretty">{tour.subtitle}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Tour Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-6">{tour.description}</p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-sm text-muted-foreground">{tour.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Group Size</p>
                    <p className="text-sm text-muted-foreground">Small Groups</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Destinations</p>
                    <p className="text-sm text-muted-foreground">Multiple Cities</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Tour Highlights</h4>
                <div className="flex flex-wrap gap-2">
                  {tour.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="secondary">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Itinerary */}
          <Card>
            <CardHeader>
              <CardTitle>Day-by-Day Itinerary</CardTitle>
              <CardDescription>Detailed schedule of your journey through India</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {tour.itinerary.map((day, idx) => (
                  <div key={day.day} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                        {day.day}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{day.title}</h4>
                      <p className="text-muted-foreground mb-3 leading-relaxed">{day.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {day.highlights.map((highlight, highlightIdx) => (
                          <Badge key={highlightIdx} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                      {idx < tour.itinerary.length - 1 && <Separator className="mt-6" />}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Booking Card */}
          <Card id="book">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Euro className="h-5 w-5" />
                Book This Tour
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">{tour.price}</p>
                <p className="text-sm text-muted-foreground">per person</p>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">French-speaking guide included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm">Flexible departure dates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm">Small group experience</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Request Quote
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Contact Prince Kumar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* What's Included */}
          <Card>
            <CardHeader>
              <CardTitle>What's Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  French-speaking guide
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Accommodation in selected hotels
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Transportation during tour
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Entrance fees to monuments
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Cultural experiences
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
