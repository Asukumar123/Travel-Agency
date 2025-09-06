import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Globe, Star, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function AboutPrince() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance mb-6">
          Namaste, and Welcome to "Voyage avec Prince"
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          I'm Prince Kumar, founder and director of Voyage avec Prince agency, based in New Delhi. Let me share my
          passion for hospitality, travel, and cultural exchange with you.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Prince's Photo */}
        <div className="relative">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <Image
              src="/Gallery/prince.jpg"
              alt="Prince Kumar - Your Indian Travel Guide"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl">
            <div className="text-center">
              <p className="text-2xl font-bold">10+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Prince's Story */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">My Journey</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Since always, I have been passionate about hospitality, travel and cultural sharing. After working as a
              guide with foreign travelers, I decided to create my agency to offer an authentic, human and personalized
              experience to those who wish to discover India differently.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey allowed me to learn French and English, and to work for many years in tourism and traveler
              accompaniment. I have also had the opportunity to meet people from all corners of the world, eager to
              understand the soul of my country.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Globe className="h-3 w-3" />
              French & English Speaking
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              Cultural Expert
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              New Delhi Based
            </Badge>
          </div>
        </div>
      </div>

      {/* Our Priority Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-primary mb-4">
          <Heart className="h-6 w-6" />
          <span className="text-lg font-semibold">Our Priority: Make You Feel at Home in India</span>
          <Heart className="h-6 w-6" />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Personalized Stays</CardTitle>
            <CardDescription>Custom itineraries adapted to your desires and budget</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Every journey is unique. We craft personalized experiences that match your interests, timeline, and
              budget.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Passionate Guides</CardTitle>
            <CardDescription>Personalized accompaniment with knowledgeable local guides</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Our team of passionate guides share deep knowledge of Indian culture, history, and hidden gems.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Local Encounters</CardTitle>
            <CardDescription>Authentic meetings to share our traditions and culture</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Connect with local families, artisans, and communities for genuine cultural exchange experiences.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Destinations We Cover */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Destinations We Specialize In</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Rajasthan Palaces", description: "Majestic forts and colorful cities" },
            { name: "Taj Mahal & Agra", description: "Iconic monuments and Mughal heritage" },
            { name: "Himalayan Regions", description: "Mountain stations and spiritual retreats" },
            { name: "Sacred Cities", description: "Varanasi, Rishikesh, and holy sites" },
          ].map((destination, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{destination.name}</CardTitle>
                <CardDescription>{destination.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Discover India Differently?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Request your free quote today and let us organize an unforgettable adventure together in the heart of India.
          Traveling with Prince means discovering India differently, with simplicity and authenticity.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/book">Get Free Quote</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Prince</Link>
          </Button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-12 text-center">
        <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+91 11 1234 5678</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>prince@voyageavecprince.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>New Delhi, India</span>
          </div>
        </div>
      </div>
    </div>
  )
}
