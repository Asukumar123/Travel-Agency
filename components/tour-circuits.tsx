"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users, Star, Calendar, Euro, Phone } from "lucide-react"
import { tours } from "@/data/tours" 
import { useTranslation } from "@/hooks/use-translation"
import { motion } from "framer-motion"

// Enhanced tours data with translations
const enhancedTours = [
  {
    id: "rajasthan-taj-mahal",
    name: "Rajasthan & Taj Mahal",
    nameFr: "Rajasthan et Taj Mahal",
    subtitle: "Royal Heritage Circuit",
    subtitleFr: "Circuit Patrimoine Royal",
    description: "Discover the treasures of Agra and the heart of Rajasthan with impregnable fortresses, sacred lakes, and remarkable architecture. A journey through the land of maharajas.",
    descriptionFr: "Découvrez les trésors d'Agra et du cœur du Rajasthan avec des forteresses imprenables, des lacs sacrés et une architecture remarquable. Un voyage à travers la terre des maharajas.",
    duration: "15 days / 14 nights",
    durationFr: "15 jours / 14 nuits",
    price: "from €1,400",
    priceFr: "à partir de 1 400 €",
    image: "/rajasthan-palace-with-intricate-architecture-and-v.jpg",
    highlights: ["Taj Mahal", "Jaipur Pink City", "Udaipur Lakes", "Jodhpur Blue City", "Agra Fort"],
    highlightsFr: ["Taj Mahal", "Ville Rose de Jaipur", "Lacs d'Udaipur", "Ville Bleue de Jodhpur", "Fort d'Agra"],
    rating: 4.9,
    reviewCount: 127,
    bestFor: "First-time visitors, Cultural enthusiasts, Photography lovers",
    bestForFr: "Première visite, Passionnés de culture, Amateurs de photographie",
  },
  {
    id: "northern-triangle",
    name: "Northern Triangle", 
    nameFr: "Triangle du Nord",
    subtitle: "Spiritual & Mountain Escape",
    subtitleFr: "Échappée Spirituelle et Montagnarde",
    description: "Follow the traces of Sikh religion at the Golden Temple of Amritsar, take altitude in Shimla, and end in peaceful Rishikesh for spiritual awakening.",
    descriptionFr: "Suivez les traces de la religion sikh au Temple d'Or d'Amritsar, prenez de l'altitude à Shimla, et terminez dans le paisible Rishikesh pour un éveil spirituel.",
    duration: "12 days / 11 nights",
    durationFr: "12 jours / 11 nuits",
    price: "from €1,100",
    priceFr: "à partir de 1 100 €",
    image: "/golden-temple-amritsar-with-reflection-in-sacred.jpg",
    highlights: ["Golden Temple", "Shimla Hills", "Rishikesh Yoga", "Chandigarh Architecture", "Himalayan Views"],
    highlightsFr: ["Temple d'Or", "Collines de Shimla", "Yoga à Rishikesh", "Architecture de Chandigarh", "Vues Himalayennes"],
    rating: 4.8,
    reviewCount: 89,
    bestFor: "Spiritual seekers, Mountain lovers, Yoga enthusiasts",
    bestForFr: "Chercheurs spirituels, Amoureux de montagne, Passionnés de yoga",
  },
  {
    id: "ganges-valley",
    name: "Sacred Ganges Valley",
    nameFr: "Vallée Sacrée du Gange", 
    subtitle: "Spiritual Journey Along Holy River",
    subtitleFr: "Voyage Spirituel le Long du Fleuve Sacré",
    description: "Discover the treasures of the Ganges Valley along this mythical river from Varanasi to Bodhgaya and Calcutta. A spiritual journey through India's sacred heartland.",
    descriptionFr: "Découvrez les trésors de la vallée du Gange le long de ce fleuve mythique de Varanasi à Bodhgaya et Calcutta. Un voyage spirituel à travers le cœur sacré de l'Inde.",
    duration: "14 days / 13 nights", 
    durationFr: "14 jours / 13 nuits",
    price: "from €1,200",
    priceFr: "à partir de 1 200 €",
    image: "/varanasi-ghats-at-sunrise-with-pilgrims-performi.jpg",
    highlights: ["Varanasi Ghats", "Buddha's Enlightenment Site", "Calcutta Culture", "Ganges Rituals", "Ancient Temples"],
    highlightsFr: ["Ghats de Varanasi", "Site d'Éveil de Bouddha", "Culture de Calcutta", "Rituels du Gange", "Temples Anciens"],
    rating: 4.7,
    reviewCount: 156,
    bestFor: "Spiritual explorers, History buffs, Cultural immersion seekers",
    bestForFr: "Explorateurs spirituels, Passionnés d'histoire, Chercheurs d'immersion culturelle",
  },
  {
    id: "rajasthan-treasures",
    name: "Rajasthan Treasures",
    nameFr: "Trésors du Rajasthan",
    subtitle: "Desert Palaces & Village Life",
    subtitleFr: "Palais du Désert et Vie Villageoise",
    description: "An immersive journey through Rajasthan's most spectacular palaces, fortresses, and desert landscapes. Experience royal hospitality and authentic Rajasthani culture.",
    descriptionFr: "Un voyage immersif à travers les palais, forteresses et paysages désertiques les plus spectaculaires du Rajasthan. Vivez l'hospitalité royale et la culture rajasthanie authentique.",
    duration: "16 days / 15 nights",
    durationFr: "16 jours / 15 nuits", 
    price: "from €1,600",
    priceFr: "à partir de 1 600 €",
    image: "/majestic-rajasthan-palace-with-golden-sunset--indi.jpg",
    highlights: ["Thar Desert", "Heritage Hotels", "Camel Safari", "Village Homestays", "Folk Performances"],
    highlightsFr: ["Désert du Thar", "Hôtels Patrimoniaux", "Safari à Dos de Chameau", "Séjours Villageois", "Spectacles Folkloriques"],
    rating: 4.9,
    reviewCount: 98,
    bestFor: "Luxury travelers, Adventure seekers, Cultural enthusiasts",
    bestForFr: "Voyageurs de luxe, Aventuriers, Passionnés de culture",
  }
]

export default function TourCircuits() {
  const { t, language } = useTranslation()

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-24">
      {/* Header with Enhanced SEO */}
      
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-4">
            {t("tourCircuitsTitle")}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground text-pretty">
            {t("tourCircuitsSubtitle")}
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="flex items-center gap-6 mt-8 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            <span className="font-medium">4.8/5 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <span>500+ Happy Travelers</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>15+ Destinations</span>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Tour Cards Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {enhancedTours.map((tour, index) => (
          <motion.div
            key={tour.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={tour.image || "/placeholder.svg"}
                  alt={language === 'fr' ? tour.nameFr : tour.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {language === 'fr' ? tour.durationFr : tour.duration}
                  </Badge>
                  <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-xs font-medium">{tour.rating}</span>
                    <span className="text-white/70 text-xs">({tour.reviewCount})</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white text-balance mb-1">
                    {language === 'fr' ? tour.nameFr : tour.name}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {language === 'fr' ? tour.subtitleFr : tour.subtitle}
                  </p>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg flex-1">
                    {language === 'fr' ? tour.subtitleFr : tour.subtitle}
                  </CardTitle>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {language === 'fr' ? tour.priceFr : tour.price}
                    </div>
                    <div className="text-xs text-muted-foreground">{t("person")}</div>
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                  {language === 'fr' ? tour.descriptionFr : tour.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Highlights with better spacing */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2 text-muted-foreground">
                    {t("tourHighlights")}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {(language === 'fr' ? tour.highlightsFr : tour.highlights).slice(0, 3).map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                    {tour.highlights.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{tour.highlights.length - 3} {language === 'fr' ? 'plus' : 'more'}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Tour details */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{language === 'fr' ? tour.durationFr : tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {/* <span>{t("smallGroups")}</span> */}
                  </div>
                </div>

                {/* Best for */}
                <div className="text-xs text-muted-foreground mb-4">
                  <strong>Best for:</strong> {language === 'fr' ? tour.bestForFr : tour.bestFor}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2 pt-0">
                <Button asChild variant="outline" className="flex-1 bg-transparent">
                  <Link href={`/tours/${tour.id}`}>
                    {t("viewDetails")}
                  </Link>
                </Button>
                <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                  <Link href={`/tours/${tour.id}#book`}>
                    {t("bookNow")}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Enhanced CTA Section */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("customizeJourney")}</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Can't find the perfect tour? Prince Kumar specializes in creating personalized itineraries 
            tailored to your interests, budget, and travel dates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Calendar className="mr-2 h-5 w-5" />
              {t("requestQuote")}
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="tel:+917870524178">
                <Phone className="mr-2 h-5 w-5" />
                {t("callPrinceKumar")}
              </Link>
            </Button>
          </div>
        </div>

        {/* Service highlights */}
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4 text-primary" />
            <span>French & English speaking guides</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Authentic cultural experiences</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Star className="h-4 w-4 text-primary" />
            <span>24/7 support during your trip</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}