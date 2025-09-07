import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { 
  Home, 
  MapPin, 
  Users, 
  Phone, 
  BookOpen, 
  Camera, 
  Star,
  Globe,
  Calendar,
  Map,
  Compass
} from "lucide-react"

export const metadata = {
  title: "🗺️ Sitemap - Voyage avec Prince | Site Navigation",
  description:
    "Complete site navigation for Voyage avec Prince. Find all pages, tours, destinations, and information about authentic Indian travel experiences with Prince Kumar.",
}

interface SitemapSection {
  title: string
  titleFr: string
  icon: React.ReactNode
  links: {
    name: string
    nameFr: string
    href: string
    description?: string
    descriptionFr?: string
  }[]
}

const sitemapSections: SitemapSection[] = [
  {
    title: "Main Pages",
    titleFr: "Pages Principales",
    icon: <Home className="h-5 w-5" />,
    links: [
      {
        name: "Home",
        nameFr: "Accueil",
        href: "/",
        description: "Discover authentic India with Prince Kumar",
        descriptionFr: "Découvrez l'Inde authentique avec Prince Kumar"
      },
      {
        name: "About Prince Kumar",
        nameFr: "À Propos de Prince Kumar",
        href: "/about",
        description: "Meet your French-speaking Indian travel guide",
        descriptionFr: "Rencontrez votre guide de voyage indien francophone"
      },
      {
        name: "Contact Us",
        nameFr: "Nous Contacter",
        href: "/contact",
        description: "Get in touch for travel planning and questions",
        descriptionFr: "Contactez-nous pour la planification de voyage et les questions"
      },
      {
        name: "Book Your Tour",
        nameFr: "Réservez Votre Circuit",
        href: "/book",
        description: "Start planning your Indian adventure",
        descriptionFr: "Commencez à planifier votre aventure indienne"
      }
    ]
  },
  {
    title: "Tour Circuits",
    titleFr: "Circuits Touristiques",
    icon: <Map className="h-5 w-5" />,
    links: [
      {
        name: "All Tours",
        nameFr: "Tous les Circuits",
        href: "/tours",
        description: "Browse all available tour packages",
        descriptionFr: "Parcourir tous les forfaits touristiques disponibles"
      },
      {
        name: "Rajasthan & Taj Mahal",
        nameFr: "Rajasthan et Taj Mahal",
        href: "/tours/rajasthan-taj-mahal",
        description: "15 days exploring palaces and the iconic Taj Mahal",
        descriptionFr: "15 jours d'exploration des palais et de l'emblématique Taj Mahal"
      },
      {
        name: "Northern Triangle",
        nameFr: "Triangle du Nord",
        href: "/tours/northern-triangle",
        description: "Golden Temple, Shimla, and peaceful Rishikesh",
        descriptionFr: "Temple d'Or, Shimla et paisible Rishikesh"
      },
      {
        name: "Ganges Valley",
        nameFr: "Vallée du Gange",
        href: "/tours/ganges-valley",
        description: "Sacred journey along India's holiest river",
        descriptionFr: "Voyage sacré le long du fleuve le plus saint de l'Inde"
      },
      {
        name: "Rajasthan Treasures",
        nameFr: "Trésors du Rajasthan",
        href: "/tours/rajasthan-treasures",
        description: "Deep dive into Rajasthan's royal heritage",
        descriptionFr: "Plongée profonde dans l'héritage royal du Rajasthan"
      }
    ]
  },
  {
    title: "Destinations",
    titleFr: "Destinations",
    icon: <MapPin className="h-5 w-5" />,
    links: [
      {
        name: "New Delhi",
        nameFr: "New Delhi",
        href: "/destinations/delhi",
        description: "India's vibrant capital city",
        descriptionFr: "La capitale vibrante de l'Inde"
      },
      {
        name: "Rajasthan",
        nameFr: "Rajasthan",
        href: "/destinations/rajasthan",
        description: "Land of maharajas and magnificent palaces",
        descriptionFr: "Terre des maharajas et des palais magnifiques"
      },
      {
        name: "Agra & Taj Mahal",
        nameFr: "Agra et Taj Mahal",
        href: "/destinations/agra",
        description: "Home to the world's most beautiful monument",
        descriptionFr: "Foyer du plus beau monument du monde"
      },
      {
        name: "Varanasi",
        nameFr: "Varanasi",
        href: "/destinations/varanasi",
        description: "India's spiritual capital on the Ganges",
        descriptionFr: "La capitale spirituelle de l'Inde sur le Gange"
      },
      {
        name: "Himalayas",
        nameFr: "Himalayas",
        href: "/destinations/himalayas",
        description: "Mountain retreats and spiritual sanctuaries",
        descriptionFr: "Retraites de montagne et sanctuaires spirituels"
      }
    ]
  },
  {
    title: "Travel Information",
    titleFr: "Informations de Voyage",
    icon: <BookOpen className="h-5 w-5" />,
    links: [
      {
        name: "Travel Tips",
        nameFr: "Conseils de Voyage",
        href: "/#tips",
        description: "Essential advice for traveling in India",
        descriptionFr: "Conseils essentiels pour voyager en Inde"
      },
      {
        name: "Visa Information",
        nameFr: "Informations Visa",
        href: "/travel-info/visa",
        description: "Complete guide to Indian visa requirements",
        descriptionFr: "Guide complet des exigences de visa indien"
      },
      {
        name: "Best Time to Visit",
        nameFr: "Meilleur Moment pour Visiter",
        href: "/travel-info/when-to-visit",
        description: "Seasonal guide for optimal travel timing",
        descriptionFr: "Guide saisonnier pour un timing de voyage optimal"
      },
      {
        name: "Packing Guide",
        nameFr: "Guide d'Emballage",
        href: "/travel-info/packing",
        description: "What to pack for your Indian adventure",
        descriptionFr: "Que emballer pour votre aventure indienne"
      },
      {
        name: "Cultural Etiquette",
        nameFr: "Étiquette Culturelle",
        href: "/travel-info/culture",
        description: "Understanding Indian customs and traditions",
        descriptionFr: "Comprendre les coutumes et traditions indiennes"
      }
    ]
  },
  {
    title: "Experiences",
    titleFr: "Expériences",
    icon: <Camera className="h-5 w-5" />,
    links: [
      {
        name: "Cultural Immersion",
        nameFr: "Immersion Culturelle",
        href: "/experiences/cultural",
        description: "Authentic interactions with local communities",
        descriptionFr: "Interactions authentiques avec les communautés locales"
      },
      {
        name: "Photography Tours",
        nameFr: "Circuits Photo",
        href: "/experiences/photography",
        description: "Capture India's stunning landscapes and culture",
        descriptionFr: "Capturez les paysages époustouflants et la culture de l'Inde"
      },
      {
        name: "Spiritual Journeys",
        nameFr: "Voyages Spirituels",
        href: "/experiences/spiritual",
        description: "Meditation, yoga, and spiritual awakening",
        descriptionFr: "Méditation, yoga et éveil spirituel"
      },
      {
        name: "Food & Culinary",
        nameFr: "Gastronomie et Culinaire",
        href: "/experiences/food",
        description: "Taste authentic Indian cuisine and cooking classes",
        descriptionFr: "Goûtez la cuisine indienne authentique et cours de cuisine"
      },
      {
        name: "Adventure Activities",
        nameFr: "Activités d'Aventure",
        href: "/experiences/adventure",
        description: "Trekking, wildlife safaris, and outdoor adventures",
        descriptionFr: "Randonnée, safaris animaliers et aventures en plein air"
      }
    ]
  },
  {
    title: "Services",
    titleFr: "Services",
    icon: <Users className="h-5 w-5" />,
    links: [
      {
        name: "Custom Itineraries",
        nameFr: "Itinéraires Personnalisés",
        href: "/services/custom",
        description: "Tailored trips designed just for you",
        descriptionFr: "Voyages sur mesure conçus juste pour vous"
      },
      {
        name: "Group Tours",
        nameFr: "Circuits de Groupe",
        href: "/services/groups",
        description: "Special rates for group and family travel",
        descriptionFr: "Tarifs spéciaux pour les voyages de groupe et en famille"
      },
      {
        name: "Airport Transfers",
        nameFr: "Transferts Aéroport",
        href: "/services/transfers",
        description: "Comfortable transportation to and from airports",
        descriptionFr: "Transport confortable vers et depuis les aéroports"
      },
      {
        name: "Hotel Bookings",
        nameFr: "Réservations d'Hôtel",
        href: "/services/accommodation",
        description: "Carefully selected accommodations for every budget",
        descriptionFr: "Hébergements soigneusement sélectionnés pour tous les budgets"
      },
      {
        name: "Travel Insurance",
        nameFr: "Assurance Voyage",
        href: "/services/insurance",
        description: "Comprehensive travel protection plans",
        descriptionFr: "Plans de protection voyage complets"
      }
    ]
  },
  {
    title: "Resources",
    titleFr: "Ressources",
    icon: <Globe className="h-5 w-5" />,
    links: [
      {
        name: "Testimonials",
        nameFr: "Témoignages",
        href: "/#testimonials",
        description: "Read what our travelers say about their experiences",
        descriptionFr: "Lisez ce que nos voyageurs disent de leurs expériences"
      },
      {
        name: "Photo Gallery",
        nameFr: "Galerie Photo",
        href: "/gallery",
        description: "Stunning images from India's most beautiful destinations",
        descriptionFr: "Images époustouflantes des plus belles destinations de l'Inde"
      },
      {
        name: "Travel Blog",
        nameFr: "Blog de Voyage",
        href: "/blog",
        description: "Stories, tips, and insights from Prince Kumar",
        descriptionFr: "Histoires, conseils et idées de Prince Kumar"
      },
      {
        name: "FAQ",
        nameFr: "Questions Fréquentes",
        href: "/faq",
        description: "Answers to commonly asked travel questions",
        descriptionFr: "Réponses aux questions de voyage couramment posées"
      },
      {
        name: "Newsletter",
        nameFr: "Newsletter",
        href: "/#newsletter",
        description: "Subscribe for travel deals and destination updates",
        descriptionFr: "Abonnez-vous pour les offres de voyage et mises à jour de destination"
      }
    ]
  },
  {
    title: "Legal & Support",
    titleFr: "Légal et Support",
    icon: <Phone className="h-5 w-5" />,
    links: [
      {
        name: "Privacy Policy",
        nameFr: "Politique de Confidentialité",
        href: "/privacy",
        description: "How we protect and use your personal information",
        descriptionFr: "Comment nous protégeons et utilisons vos informations personnelles"
      },
      {
        name: "Terms & Conditions",
        nameFr: "Conditions Générales",
        href: "/terms",
        description: "Terms of service and booking conditions",
        descriptionFr: "Conditions de service et conditions de réservation"
      },
      {
        name: "Cancellation Policy",
        nameFr: "Politique d'Annulation",
        href: "/cancellation",
        description: "Understanding our flexible cancellation policies",
        descriptionFr: "Comprendre nos politiques d'annulation flexibles"
      },
      {
        name: "Customer Support",
        nameFr: "Support Client",
        href: "/support",
        description: "Get help with bookings and travel questions",
        descriptionFr: "Obtenez de l'aide avec les réservations et questions de voyage"
      },
      {
        name: "Emergency Contacts",
        nameFr: "Contacts d'Urgence",
        href: "/emergency",
        description: "24/7 emergency assistance during your trip",
        descriptionFr: "Assistance d'urgence 24/7 pendant votre voyage"
      }
    ]
  }
]

export default function SitemapPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Compass className="h-8 w-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">🗺️ Site Map</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Navigate through all pages and sections of Voyage avec Prince. Find everything you need to plan your
              authentic Indian adventure with Prince Kumar.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="text-center">
              <CardContent className="p-4">
                <Map className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm text-muted-foreground">Tour Circuits</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm text-muted-foreground">Destinations</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Experiences</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-muted-foreground">Happy Travelers</div>
              </CardContent>
            </Card>
          </div>

          {/* Sitemap Sections */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sitemapSections.map((section, index) => (
              <Card key={index} className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    {section.icon}
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex}>
                      <Link
                        href={link.href}
                        className="block group hover:text-primary transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium group-hover:text-primary transition-colors">
                              {link.name}
                            </h4>
                            {link.description && (
                              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                                {link.description}
                              </p>
                            )}
                          </div>
                          <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Compass className="h-4 w-4 text-primary" />
                          </div>
                        </div>
                      </Link>
                      {linkIndex < section.links.length - 1 && <Separator className="mt-3" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Information */}
          <Card className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Need Help Finding Something?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Prince Kumar is here to help you navigate your travel planning
                and answer any questions you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Contact Prince Kumar
                </Link>
                <Link
                  href="tel:+911112345678"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call +917870524178
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  )
}