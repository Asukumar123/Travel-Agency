import Link from "next/link"
import { MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Voyage avec Prince</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Authentic Indian travel experiences with personalized service and cultural immersion. Discover India
              differently with Prince Kumar.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Tours</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/tours" className="text-muted-foreground hover:text-primary">
                  All Tours
                </Link>
              </li>
              <li>
                <Link href="/tours/rajasthan-taj-mahal" className="text-muted-foreground hover:text-primary">
                  Rajasthan & Taj Mahal
                </Link>
              </li>
              <li>
                <Link href="/tours/northern-triangle" className="text-muted-foreground hover:text-primary">
                  Northern Triangle
                </Link>
              </li>
              <li>
                <Link href="/tours/ganges-valley" className="text-muted-foreground hover:text-primary">
                  Ganges Valley
                </Link>
              </li>
              <li>
                <Link href="/tours/rajasthan-treasures" className="text-muted-foreground hover:text-primary">
                  Rajasthan Treasures
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/book" className="text-muted-foreground hover:text-primary">
                  Book a Tour
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Custom Itinerary
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Group Travel
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Cultural Experiences
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Travel Consultation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Prince Kumar
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-primary">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Travel Tips
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Destinations</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/tours" className="text-muted-foreground hover:text-primary">
                  New Delhi
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-muted-foreground hover:text-primary">
                  Rajasthan
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-muted-foreground hover:text-primary">
                  Agra & Taj Mahal
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-muted-foreground hover:text-primary">
                  Varanasi
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-muted-foreground hover:text-primary">
                  Himalayas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Voyage avec Prince. All rights reserved. | Authentic Indian Travel Experiences
          </p>
        </div>
      </div>
    </footer>
  )
}
