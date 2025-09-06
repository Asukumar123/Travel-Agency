"use client"

import { MapPin, Calendar, Phone, Backpack } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

const tipsData = [
  {
    icon: <Calendar className="h-5 w-5 md:h-6 md:w-6" />,
    title: "Best Time to Visit",
    titleFr: "Meilleur Moment pour Visiter",
    description: "October to March offers pleasant weather across most of India, perfect for sightseeing and outdoor activities.",
    descriptionFr: "D'octobre à mars offre un temps agréable dans la plupart de l'Inde, parfait pour les visites touristiques et les activités de plein air.",
  },
  {
    icon: <MapPin className="h-5 w-5 md:h-6 md:w-6" />,
    title: "Visa Requirements",
    titleFr: "Exigences de Visa",
    description: "Most visitors need an e-Visa or tourist visa. Prince Kumar can guide you through the application process.",
    descriptionFr: "La plupart des visiteurs ont besoin d'un e-Visa ou d'un visa touristique. Prince Kumar peut vous guider dans le processus de demande.",
  },
  {
    icon: <Phone className="h-5 w-5 md:h-6 md:w-6" />,
    title: "Stay Connected",
    titleFr: "Restez Connecté",
    description: "Get a local SIM card or international roaming plan. WiFi is widely available in hotels and cafes.",
    descriptionFr: "Obtenez une carte SIM locale ou un forfait d'itinérance international. Le WiFi est largement disponible dans les hôtels et cafés.",
  },
  {
    icon: <Backpack className="h-5 w-5 md:h-6 md:w-6" />,
    title: "Packing Tips",
    titleFr: "Conseils d'Emballage",
    description: "Pack light, comfortable clothing and good walking shoes. Don't forget sun protection and any medications.",
    descriptionFr: "Emballez des vêtements légers et confortables et de bonnes chaussures de marche. N'oubliez pas la protection solaire et les médicaments.",
  },
]

export default function TravelTips() {
  const { t, language } = useTranslation()

  return (
    <section id="tips" className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl">
            Travel Tips
          </h2>
          <p className="mt-4 max-w-[85%] text-muted-foreground text-sm md:text-base">
            Practical advice to make your Indian journey smooth and enjoyable
          </p>
        </div>
        <div className="mt-8 md:mt-12 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tipsData.map((tip, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                {tip.icon}
              </div>
              <h3 className="mt-4 text-base md:text-lg font-medium">
                {language === 'fr' ? tip.titleFr : tip.title}
              </h3>
              <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                {language === 'fr' ? tip.descriptionFr : tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}