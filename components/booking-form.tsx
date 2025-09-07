"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { 
  CalendarIcon, 
  MapPin, 
  Users, 
  Euro, 
  Phone, 
  Mail, 
  Send, 
  Star,
  CheckCircle,
  Globe
} from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/hooks/use-translation"

const tours = [
  { 
    id: "rajasthan-taj-mahal", 
    name: "Rajasthan & Taj Mahal", 
    nameFr: "Rajasthan et Taj Mahal",
    duration: "15 days / 14 nights",
    durationFr: "15 jours / 14 nuits"
  },
  { 
    id: "northern-triangle", 
    name: "Northern Triangle", 
    nameFr: "Triangle du Nord",
    duration: "12 days / 11 nights",
    durationFr: "12 jours / 11 nuits"
  },
  { 
    id: "ganges-valley", 
    name: "Ganges Valley", 
    nameFr: "Vallée du Gange",
    duration: "14 days / 13 nights",
    durationFr: "14 jours / 13 nuits"
  },
  { 
    id: "rajasthan-treasures", 
    name: "Rajasthan Treasures", 
    nameFr: "Trésors du Rajasthan",
    duration: "10 days / 9 nights",
    durationFr: "10 jours / 9 nuits"
  },
  { 
    id: "custom", 
    name: "Custom Itinerary", 
    nameFr: "Itinéraire Personnalisé",
    duration: "Flexible",
    durationFr: "Flexible"
  }
]

const accommodationLevels = [
  { 
    value: "budget", 
    label: "Budget (2-3★)", 
    labelFr: "Économique (2-3★)",
    description: "Clean, comfortable guesthouses and budget hotels",
    descriptionFr: "Maisons d'hôtes et hôtels économiques propres et confortables"
  },
  { 
    value: "standard", 
    label: "Standard (3-4★)", 
    labelFr: "Standard (3-4★)",
    description: "Well-appointed hotels with modern amenities",
    descriptionFr: "Hôtels bien équipés avec des équipements modernes"
  },
  { 
    value: "luxury", 
    label: "Luxury (4-5★)", 
    labelFr: "Luxe (4-5★)",
    description: "Premium hotels and heritage properties",
    descriptionFr: "Hôtels de prestige et propriétés patrimoniales"
  },
  { 
    value: "premium", 
    label: "Ultra-Luxury (5★+)", 
    labelFr: "Ultra-Luxe (5★+)",
    description: "Palace hotels and exclusive resorts",
    descriptionFr: "Hôtels palais et resorts exclusifs"
  }
]

const budgetRanges = [
  { value: "under-1000", label: "Under €1,000", labelFr: "Moins de 1 000€" },
  { value: "1000-1500", label: "€1,000 - €1,500", labelFr: "1 000€ - 1 500€" },
  { value: "1500-2500", label: "€1,500 - €2,500", labelFr: "1 500€ - 2 500€" },
  { value: "2500-4000", label: "€2,500 - €4,000", labelFr: "2 500€ - 4 000€" },
  { value: "over-4000", label: "Over €4,000", labelFr: "Plus de 4 000€" },
  { value: "flexible", label: "Flexible", labelFr: "Flexible" }
]

const customizations = [
  { 
    id: "photography", 
    label: "Photography Tours", 
    labelFr: "Circuits Photo",
    description: "Professional photography guidance and locations",
    descriptionFr: "Conseils photo professionnels et emplacements"
  },
  { 
    id: "spiritual", 
    label: "Spiritual Experiences", 
    labelFr: "Expériences Spirituelles",
    description: "Yoga, meditation, and spiritual sites",
    descriptionFr: "Yoga, méditation et sites spirituels"
  },
  { 
    id: "culinary", 
    label: "Culinary Experiences", 
    labelFr: "Expériences Culinaires",
    description: "Cooking classes and food tours",
    descriptionFr: "Cours de cuisine et tours gastronomiques"
  },
  { 
    id: "wildlife", 
    label: "Wildlife Safaris", 
    labelFr: "Safaris Animaliers",
    description: "National park visits and wildlife watching",
    descriptionFr: "Visites de parcs nationaux et observation de la faune"
  },
  { 
    id: "adventure", 
    label: "Adventure Activities", 
    labelFr: "Activités d'Aventure",
    description: "Trekking, rafting, and outdoor adventures",
    descriptionFr: "Randonnée, rafting et aventures en plein air"
  },
  { 
    id: "cultural", 
    label: "Cultural Immersion", 
    labelFr: "Immersion Culturelle",
    description: "Local family visits and cultural exchanges",
    descriptionFr: "Visites de familles locales et échanges culturels"
  }
]

export default function BookingForm() {
  const { t, language } = useTranslation()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    age: "",
    
    // Travel Details
    tourId: "",
    preferredDate: undefined as Date | undefined,
    alternativeDate: undefined as Date | undefined,
    numberOfTravelers: "",
    accommodationLevel: "",
    budgetRange: "",
    
    // Special Requirements
    dietaryRequirements: "",
    mobilityRequirements: "",
    specialRequests: "",
    customizations: [] as string[],
    
    // Communication
    preferredContact: "email" as string,
    hearAboutUs: "",
    marketingConsent: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (name: string, date: Date | undefined) => {
    setFormData(prev => ({ ...prev, [name]: date }))
  }

  const handleCustomizationChange = (customizationId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      customizations: checked 
        ? [...prev.customizations, customizationId]
        : prev.customizations.filter(id => id !== customizationId)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert(language === 'fr' 
          ? "Votre demande de réservation a été envoyée ! Prince Kumar vous contactera dans les 24 heures."
          : "Your booking request has been sent! Prince Kumar will contact you within 24 hours."
        )
        // Reset form or redirect
        setCurrentStep(1)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "",
          age: "",
          tourId: "",
          preferredDate: undefined,
          alternativeDate: undefined,
          numberOfTravelers: "",
          accommodationLevel: "",
          budgetRange: "",
          dietaryRequirements: "",
          mobilityRequirements: "",
          specialRequests: "",
          customizations: [],
          preferredContact: "email",
          hearAboutUs: "",
          marketingConsent: false
        })
      } else {
        throw new Error('Failed to send booking request')
      }
    } catch (error) {
      console.error('Error sending booking request:', error)
      alert(language === 'fr'
        ? "Désolé, il y a eu une erreur lors de l'envoi de votre demande. Veuillez réessayer."
        : "Sorry, there was an error sending your booking request. Please try again."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  const getStepTitle = (step: number) => {
    const titles = {
      1: { en: "Personal Information", fr: "Informations Personnelles" },
      2: { en: "Travel Details", fr: "Détails du Voyage" },
      3: { en: "Preferences & Requirements", fr: "Préférences et Exigences" },
      4: { en: "Review & Submit", fr: "Révision et Envoi" }
    }
    return titles[step as keyof typeof titles][language]
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <MapPin className="h-8 w-8 text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {language === 'fr' ? '🏛️ Réservez Votre Aventure Indienne' : '🏛️ Book Your Indian Adventure'}
          </h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {language === 'fr'
            ? 'Parlez-nous de votre voyage de rêve et nous créerons un itinéraire personnalisé rien que pour vous'
            : 'Tell us about your dream trip and we\'ll create a personalized itinerary just for you'
          }
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                  step <= currentStep
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {step < currentStep ? <CheckCircle className="h-4 w-4" /> : step}
              </div>
              {step < 4 && (
                <div
                  className={cn(
                    "h-0.5 w-12 mx-2 transition-colors",
                    step < currentStep ? "bg-primary" : "bg-muted"
                  )}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold">{getStepTitle(currentStep)}</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardContent className="p-6">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">
                      {language === 'fr' ? 'Prénom' : 'First Name'} *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder={language === 'fr' ? 'Votre prénom' : 'Your first name'}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">
                      {language === 'fr' ? 'Nom de famille' : 'Last Name'} *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder={language === 'fr' ? 'Votre nom de famille' : 'Your last name'}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {language === 'fr' ? 'Adresse e-mail' : 'Email Address'} *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      {language === 'fr' ? 'Numéro de téléphone' : 'Phone Number'} *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={language === 'fr' ? '+33 1 23 45 67 89' : '+1 234 567 8900'}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">
                      {language === 'fr' ? 'Pays de résidence' : 'Country of Residence'} *
                    </Label>
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder={language === 'fr' ? 'France' : 'United States'}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">
                      {language === 'fr' ? 'Âge' : 'Age'}
                    </Label>
                    <Select value={formData.age} onValueChange={(value) => handleSelectChange("age", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'fr' ? 'Sélectionner votre âge' : 'Select your age'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="18-25">18-25</SelectItem>
                        <SelectItem value="26-35">26-35</SelectItem>
                        <SelectItem value="36-45">36-45</SelectItem>
                        <SelectItem value="46-55">46-55</SelectItem>
                        <SelectItem value="56-65">56-65</SelectItem>
                        <SelectItem value="65+">65+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Travel Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>
                    {language === 'fr' ? 'Circuit souhaité' : 'Desired Tour'} *
                  </Label>
                  <Select value={formData.tourId} onValueChange={(value) => handleSelectChange("tourId", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder={language === 'fr' ? 'Choisir un circuit' : 'Choose a tour'} />
                    </SelectTrigger>
                    <SelectContent>
                      {tours.map((tour) => (
                        <SelectItem key={tour.id} value={tour.id}>
                          <div className="flex items-center justify-between w-full">
                            <span>{language === 'fr' ? tour.nameFr : tour.name}</span>
                            <Badge variant="secondary" className="ml-2">
                              {language === 'fr' ? tour.durationFr : tour.duration}
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>
                      {language === 'fr' ? 'Date de départ préférée' : 'Preferred Departure Date'} *
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "justify-start text-left font-normal",
                            !formData.preferredDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.preferredDate ? (
                            format(formData.preferredDate, "PPP")
                          ) : (
                            <span>{language === 'fr' ? 'Choisir une date' : 'Pick a date'}</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.preferredDate}
                          onSelect={(date) => handleDateChange("preferredDate", date)}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>
                      {language === 'fr' ? 'Date alternative (optionnel)' : 'Alternative Date (Optional)'}
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "justify-start text-left font-normal",
                            !formData.alternativeDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.alternativeDate ? (
                            format(formData.alternativeDate, "PPP")
                          ) : (
                            <span>{language === 'fr' ? 'Choisir une date' : 'Pick a date'}</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.alternativeDate}
                          onSelect={(date) => handleDateChange("alternativeDate", date)}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>
                      {language === 'fr' ? 'Nombre de voyageurs' : 'Number of Travelers'} *
                    </Label>
                    <Select value={formData.numberOfTravelers} onValueChange={(value) => handleSelectChange("numberOfTravelers", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'fr' ? 'Sélectionner le nombre' : 'Select number'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">{language === 'fr' ? '1 personne' : '1 person'}</SelectItem>
                        <SelectItem value="2">{language === 'fr' ? '2 personnes' : '2 people'}</SelectItem>
                        <SelectItem value="3-4">{language === 'fr' ? '3-4 personnes' : '3-4 people'}</SelectItem>
                        <SelectItem value="5-8">{language === 'fr' ? '5-8 personnes' : '5-8 people'}</SelectItem>
                        <SelectItem value="9+">{language === 'fr' ? '9+ personnes' : '9+ people'}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>
                      {language === 'fr' ? 'Gamme de budget' : 'Budget Range'} *
                    </Label>
                    <Select value={formData.budgetRange} onValueChange={(value) => handleSelectChange("budgetRange", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'fr' ? 'Sélectionner le budget' : 'Select budget'} />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range.value} value={range.value}>
                            {language === 'fr' ? range.labelFr : range.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>
                    {language === 'fr' ? 'Niveau d\'hébergement préféré' : 'Preferred Accommodation Level'} *
                  </Label>
                  <Select value={formData.accommodationLevel} onValueChange={(value) => handleSelectChange("accommodationLevel", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder={language === 'fr' ? 'Choisir le niveau d\'hébergement' : 'Choose accommodation level'} />
                    </SelectTrigger>
                    <SelectContent>
                      {accommodationLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          <div>
                            <div className="font-medium">{language === 'fr' ? level.labelFr : level.label}</div>
                            <div className="text-sm text-muted-foreground">{language === 'fr' ? level.descriptionFr : level.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 3: Preferences & Requirements */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <Label className="text-base font-medium">
                    {language === 'fr' ? 'Expériences supplémentaires souhaitées' : 'Additional Experiences Desired'}
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {customizations.map((customization) => (
                      <div key={customization.id} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-muted/50">
                        <Checkbox
                          id={customization.id}
                          checked={formData.customizations.includes(customization.id)}
                          onCheckedChange={(checked) => handleCustomizationChange(customization.id, checked as boolean)}
                        />
                        <div className="flex-1">
                          <Label htmlFor={customization.id} className="font-medium cursor-pointer">
                            {language === 'fr' ? customization.labelFr : customization.label}
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            {language === 'fr' ? customization.descriptionFr : customization.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="dietaryRequirements">
                      {language === 'fr' ? 'Exigences alimentaires' : 'Dietary Requirements'}
                    </Label>
                    <Textarea
                      id="dietaryRequirements"
                      name="dietaryRequirements"
                      value={formData.dietaryRequirements}
                      onChange={handleInputChange}
                      placeholder={language === 'fr' 
                        ? 'Ex: végétarien, végan, allergies alimentaires, etc.'
                        : 'e.g. vegetarian, vegan, food allergies, etc.'
                      }
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mobilityRequirements">
                      {language === 'fr' ? 'Exigences de mobilité ou d\'accessibilité' : 'Mobility or Accessibility Requirements'}
                    </Label>
                    <Textarea
                      id="mobilityRequirements"
                      name="mobilityRequirements"
                      value={formData.mobilityRequirements}
                      onChange={handleInputChange}
                      placeholder={language === 'fr'
                        ? 'Toute assistance dont vous pourriez avoir besoin'
                        : 'Any assistance you might need'
                      }
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequests">
                      {language === 'fr' ? 'Demandes spéciales ou commentaires' : 'Special Requests or Comments'}
                    </Label>
                    <Textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      placeholder={language === 'fr'
                        ? 'Parlez-nous de ce qui rendrait votre voyage parfait...'
                        : 'Tell us what would make your trip perfect...'
                      }
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>
                      {language === 'fr' ? 'Méthode de contact préférée' : 'Preferred Contact Method'}
                    </Label>
                    <Select value={formData.preferredContact} onValueChange={(value) => handleSelectChange("preferredContact", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            {language === 'fr' ? 'E-mail' : 'Email'}
                          </div>
                        </SelectItem>
                        <SelectItem value="phone">
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            {language === 'fr' ? 'Téléphone' : 'Phone'}
                          </div>
                        </SelectItem>
                        <SelectItem value="whatsapp">
                          <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4" />
                            WhatsApp
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="marketingConsent"
                      checked={formData.marketingConsent}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, marketingConsent: checked as boolean }))}
                    />
                    <Label htmlFor="marketingConsent" className="text-sm cursor-pointer">
                      {language === 'fr'
                        ? 'J\'accepte de recevoir des informations sur les voyages, des offres spéciales et des actualités de Voyage avec Prince'
                        : 'I agree to receive travel information, special offers, and updates from Voyage avec Prince'
                      }
                    </Label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {language === 'fr' ? 'Révision de votre demande de réservation' : 'Review Your Booking Request'}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'fr'
                      ? 'Veuillez vérifier vos informations avant de soumettre'
                      : 'Please review your information before submitting'
                    }
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="p-4">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {language === 'fr' ? 'Informations personnelles' : 'Personal Information'}
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>{language === 'fr' ? 'Nom:' : 'Name:'}</strong> {formData.firstName} {formData.lastName}</p>
                      <p><strong>{language === 'fr' ? 'E-mail:' : 'Email:'}</strong> {formData.email}</p>
                      <p><strong>{language === 'fr' ? 'Téléphone:' : 'Phone:'}</strong> {formData.phone}</p>
                      <p><strong>{language === 'fr' ? 'Pays:' : 'Country:'}</strong> {formData.country}</p>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {language === 'fr' ? 'Détails du voyage' : 'Travel Details'}
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>{language === 'fr' ? 'Circuit:' : 'Tour:'}</strong> {
                        tours.find(t => t.id === formData.tourId)?.[language === 'fr' ? 'nameFr' : 'name'] || formData.tourId
                      }</p>
                      <p><strong>{language === 'fr' ? 'Date préférée:' : 'Preferred Date:'}</strong> {
                        formData.preferredDate ? format(formData.preferredDate, "PPP") : 'Not selected'
                      }</p>
                      <p><strong>{language === 'fr' ? 'Voyageurs:' : 'Travelers:'}</strong> {formData.numberOfTravelers}</p>
                      <p><strong>{language === 'fr' ? 'Budget:' : 'Budget:'}</strong> {
                        budgetRanges.find(b => b.value === formData.budgetRange)?.[language === 'fr' ? 'labelFr' : 'label']
                      }</p>
                    </div>
                  </Card>
                </div>

                {formData.customizations.length > 0 && (
                  <Card className="p-4">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      {language === 'fr' ? 'Expériences supplémentaires' : 'Additional Experiences'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {formData.customizations.map((customId) => {
                        const custom = customizations.find(c => c.id === customId)
                        return (
                          <Badge key={customId} variant="secondary">
                            {custom ? (language === 'fr' ? custom.labelFr : custom.label) : customId}
                          </Badge>
                        )
                      })}
                    </div>
                  </Card>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="bg-transparent"
              >
                {language === 'fr' ? 'Précédent' : 'Previous'}
              </Button>

              {currentStep < 4 ? (
                <Button type="button" onClick={nextStep} className="bg-primary hover:bg-primary/90">
                  {language === 'fr' ? 'Suivant' : 'Next'}
                </Button>
              ) : (
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                      {language === 'fr' ? 'Envoi en cours...' : 'Sending...'}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      {language === 'fr' ? 'Envoyer la demande' : 'Send Request'}
                    </>
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </form>

      {/* Contact Information */}
      <Card className="mt-8 bg-gradient-to-r from-primary/5 to-accent/5">
        <CardContent className="p-6 text-center">
          <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-2">
            {language === 'fr' ? 'Besoin d\'aide ?' : 'Need Help?'}
          </h3>
          <p className="text-muted-foreground mb-4">
            {language === 'fr'
              ? 'Prince Kumar est disponible pour répondre à toutes vos questions'
              : 'Prince Kumar is available to answer any questions you may have'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" className="bg-transparent" asChild>
              <a href="tel:+911112345678">
                <Phone className="mr-2 h-4 w-4" />
                {language === 'fr' ? 'Appeler maintenant' : 'Call Now'}
              </a>
            </Button>
            <Button variant="outline" className="bg-transparent" asChild>
              <a href="mailto:prince@voyageavecprince.com">
                <Mail className="mr-2 h-4 w-4" />
                {language === 'fr' ? 'Envoyer un e-mail' : 'Send Email'}
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}