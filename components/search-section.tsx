"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, Users, Search } from "lucide-react"
import Link from "next/link"

export default function SearchSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl -mt-16 relative z-30">
      <div className="rounded-xl bg-white p-6 shadow-lg">
        <Tabs defaultValue="tours" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tours">Tour Packages</TabsTrigger>
            <TabsTrigger value="custom">Custom Itinerary</TabsTrigger>
            <TabsTrigger value="destinations">Destinations</TabsTrigger>
          </TabsList>
          <TabsContent value="tours" className="mt-6">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Destination</label>
                <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Choose destination</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Travel Date</label>
                <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Select dates</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Travelers</label>
                <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Number of people</span>
                </div>
              </div>
              <Button asChild className="mt-auto bg-primary hover:bg-primary/90">
                <Link href="/tours">
                  <Search className="mr-2 h-4 w-4" />
                  Search Tours
                </Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="custom" className="mt-6">
            <div className="text-center py-8">
              <h3 className="text-lg font-semibold mb-2">Create Your Perfect Indian Adventure</h3>
              <p className="text-muted-foreground mb-4">
                Tell us your dreams and we'll craft a personalized itinerary just for you
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Plan Custom Trip</Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="destinations" className="mt-6">
            <div className="text-center py-8">
              <h3 className="text-lg font-semibold mb-2">Explore India's Wonders</h3>
              <p className="text-muted-foreground mb-4">
                From Rajasthan's palaces to the Himalayas' peaks, discover incredible destinations
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/tours">View All Destinations</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
