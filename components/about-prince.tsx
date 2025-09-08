"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Globe, Star, MapPin, Phone, Mail, Award, Camera, Shield } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/hooks/use-translation"
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
// Enhanced data with multilingual support
const achievements = [
  {
    icon: <Users className="h-6 w-6" />,
    number: "100+",
    label: "Happy Travelers",
    labelFr: "Voyageurs Satisfaits",
    description: "Travelers from around the world",
    descriptionFr: "Voyageurs du monde entier"
  },
  {
    icon: <Star className="h-6 w-6" />,
    number: "4.9/5",
    label: "Average Rating",
    labelFr: "Note Moyenne",
    description: "Based on 200+ reviews",
    descriptionFr: "Basé sur plus de 200 avis"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    number: "5+",
    label: "Years Experience",
    labelFr: "Années d'Expérience",
    description: "In tourism industry",
    descriptionFr: "Dans l'industrie du tourisme"
  },
  {
    icon: <Award className="h-6 w-6" />,
    number: "100+",
    label: "Tours Completed",
    labelFr: "Circuits Accomplis",
    description: "Successful journeys",
    descriptionFr: "Voyages réussis"
  }
]

const services = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Personalized Stays",
    titleFr: "Séjours Personnalisés",
    description: "Custom itineraries adapted to your desires and budget. Every journey is unique, crafted to match your interests, timeline, and preferences.",
    descriptionFr: "Itinéraires sur mesure adaptés à vos désirs et votre budget. Chaque voyage est unique, conçu pour correspondre à vos intérêts, votre planning et vos préférences."
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Passionate Guides",
    titleFr: "Guides Passionnés", 
    description: "Personalized accompaniment with knowledgeable local guides who share deep knowledge of Indian culture, history, and hidden gems.",
    descriptionFr: "Accompagnement personnalisé avec des guides locaux compétents qui partagent une connaissance approfondie de la culture, l'histoire et les trésors cachés de l'Inde."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Local Encounters",
    titleFr: "Rencontres Locales",
    description: "Authentic meetings to share our traditions and culture. Connect with local families, artisans, and communities for genuine cultural exchange experiences.",
    descriptionFr: "Rencontres authentiques pour partager nos traditions et notre culture. Connectez-vous avec des familles locales, artisans et communautés pour des expériences d'échange culturel authentiques."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "24/7 Support",
    titleFr: "Support 24h/24",
    description: "Complete peace of mind with round-the-clock assistance during your journey. We're always here when you need us.",
    descriptionFr: "Tranquillité d'esprit complète avec une assistance 24h/24 pendant votre voyage. Nous sommes toujours là quand vous avez besoin de nous."
  }
]

const destinations = [
  {
    name: "Rajasthan Palaces",
    nameFr: "Palais du Rajasthan",
    description: "Majestic forts and colorful cities",
    descriptionFr: "Forts majestueux et villes colorées",
    image: "/Gallery/Rajasthan.jpg"
  },
  {
    name: "Taj Mahal & Agra", 
    nameFr: "Taj Mahal et Agra",
    description: "Iconic monuments and Mughal heritage",
    descriptionFr: "Monuments emblématiques et héritage moghol",
    image: "/Gallery/Taj Mahal1.jpg"
  },
  {
    name: "Himalayan Regions",
    nameFr: "Régions Himalayennes", 
    description: "Mountain stations and spiritual retreats",
    descriptionFr: "Stations de montagne et retraites spirituelles",
    image: "/Gallery/Rishikesh1.jpg"
  },
  {
    name: "Sacred Cities",
    nameFr: "Villes Sacrées",
    description: "Varanasi, Rishikesh, and holy sites",
    descriptionFr: "Varanasi, Rishikesh et sites saints",
    image: "/Gallery/Rajasthan.jpg"
  }
]

const languages = ["English", "French", "Hindi"]
const specialties = [
  { name: "Cultural Tours", nameFr: "Circuits Culturels" },
  { name: "Heritage Sites", nameFr: "Sites Patrimoniaux" },
  { name: "Photography Tours", nameFr: "Circuits Photo" },
  { name: "Spiritual Journeys", nameFr: "Voyages Spirituels" }
]

export default function AboutPrince() {
  const { t, language } = useTranslation()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Prince Kumar",
    "jobTitle": "Professional Tourist Guide & Travel Agency Owner",
    "worksFor": {
      "@type": "TravelAgency",
      "name": "Voyage avec Prince"
    },
    "description": "French and English speaking professional tourist guide specializing in authentic Indian cultural experiences",
    "knowsLanguage": ["English", "French", "Hindi"],
    "nationality": "Indian",
    "birthPlace": "New Delhi, India",
    "homeLocation": "New Delhi, India",
    "telephone": "+91-7870524178",
    "email": "Ohprincekumar@gmail.com",
    "url": "https://voyageavecprince.com/about",
    "image": "https://voyageavecprince.com/Gallery/prince.jpg",
    "sameAs": [
      "https://www.tripadvisor.com/profile/princeyadav",
      "https://www.facebook.com/voyageavecprince"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Tourist Guide",
      "occupationLocation": "India",
      "skills": ["Cultural Tourism", "Heritage Tours", "Language Translation", "Photography Tours"]
    }
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        {/* Enhanced Hero Section with SEO */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance mb-6">
            {t("aboutPrinceIntro")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("aboutPrinceSubtitle")}
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {languages.map((lang) => (
              <Badge key={lang} variant="secondary" className="flex items-center gap-1">
                <Globe className="h-3 w-3" />
                {lang}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Prince's Photo with enhanced presentation */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/Gallery/prince.jpg"
                alt="Prince Kumar - Professional Tourist Guide & Founder of Voyage avec Prince"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay with certifications */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-primary-foreground">
                  <Award className="h-3 w-3 mr-1" />
                  Licensed Guide
                </Badge>
              </div>
            </div>
            
            {/* Floating achievement card */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-card border rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">{t("aboutExperience")}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Prince's Story with enhanced content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">{t("aboutMyJourney")}</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {language === 'fr' 
                    ? "Depuis toujours, je suis passionné par l'hospitalité, le voyage et le partage culturel. Après avoir travaillé comme guide avec des voyageurs étrangers, j'ai décidé de créer mon agence pour offrir une expérience authentique, humaine et personnalisée à ceux qui souhaitent découvrir l'Inde différemment."
                    : "Since always, I have been passionate about hospitality, travel and cultural sharing. After working as a guide with foreign travelers, I decided to create my agency to offer an authentic, human and personalized experience to those who wish to discover India differently."
                  }
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'fr'
                    ? "Mon parcours m'a permis d'apprendre le français et l'anglais, et de travailler pendant de nombreuses années dans le tourisme et l'accompagnement de voyageurs. J'ai aussi eu l'opportunité de rencontrer des gens de tous les coins du monde, avides de comprendre l'âme de mon pays."
                    : "My journey allowed me to learn French and English, and to work for many years in tourism and traveler accompaniment. I have also had the opportunity to meet people from all corners of the world, eager to understand the soul of my country."
                  }
                </p>
              </div>
            </div>

            {/* Specialties */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    <Camera className="h-3 w-3" />
                    {language === 'fr' ? specialty.nameFr : specialty.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-muted/50 rounded-lg p-4">
              <h3 className="font-semibold mb-3">Direct Contact</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+917870524178" className="hover:text-primary transition-colors">
                    +91 7870524178
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:Ohprincekumar@gmail.com" className="hover:text-primary transition-colors">
                    Ohprincekumar@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Paharganj, New Delhi, Near RK Ashram Metro Station</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievement Stats */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="font-medium mb-1">
                  {language === 'fr' ? achievement.labelFr : achievement.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {language === 'fr' ? achievement.descriptionFr : achievement.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Priority Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Heart className="h-6 w-6" />
            <span className="text-lg font-semibold">{t("aboutPriority")}</span>
            <Heart className="h-6 w-6" />
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <div className="text-primary">{service.icon}</div>
                </div>
                <CardTitle className="text-lg">
                  {language === 'fr' ? service.titleFr : service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === 'fr' ? service.descriptionFr : service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Destinations We Cover */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">{t("destinationsSpecialize")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-32">
                  <Image
                    src={destination.image}
                    alt={language === 'fr' ? destination.nameFr : destination.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {language === 'fr' ? destination.nameFr : destination.name}
                  </CardTitle>
                  <CardDescription>
                    {language === 'fr' ? destination.descriptionFr : destination.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div 
          className="text-center bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">{t("discoverDifferently")}</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t("freeQuoteText")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/book">
                <Calendar className="mr-2 h-5 w-5" />
                {t("getQuote")}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                {t("contactPrinceKumar")}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="tel:+917870524178">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  )
}