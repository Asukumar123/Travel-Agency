"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { MapPin, Calendar as CalendarIcon, Users, Search, Phone } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useTranslation } from "@/hooks/use-translation"

const destinations = [
  { value: "rajasthan", label: "Rajasthan", labelFr: "Rajasthan" },
  { value: "agra", label: "Agra & Taj Mahal", labelFr: "Agra et Taj Mahal" },
  { value: "delhi", label: "New Delhi", labelFr: "New Delhi" },
  { value: "varanasi", label: "Varanasi", labelFr: "Varanasi" },
  { value: "himalayas", label: "Himalayas", labelFr: "Himalayas" },
  { value: "kerala", label: "Kerala", labelFr: "Kerala" },
  { value: "goa", label: "Goa", labelFr: "Goa" },
  { value: "punjab", label: "Punjab", labelFr: "Punjab" },
]

export default function SearchSection() {
  const { t, language } = useTranslation()
  const [selectedDestination, setSelectedDestination] = useState("")
  const [departureDate, setDepartureDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [travelers, setTravelers] = useState("")
  const [budget, setBudget] = useState("")

  const handleTourSearch = () => {
    const params = new URLSearchParams()
    if (selectedDestination) params.set('destination', selectedDestination)
    if (departureDate) params.set('departure', format(departureDate, 'yyyy-MM-dd'))
    if (returnDate) params.set('return', format(returnDate, 'yyyy-MM-dd'))
    if (travelers) params.set('travelers', travelers)
    if (budget) params.set('budget', budget)
    window.location.href = `/tours?${params.toString()}`
  }

  const resetSearch = () => {
    setSelectedDestination("")
    setDepartureDate(undefined)
    setReturnDate(undefined)
    setTravelers("")
    setBudget("")
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl -mt-16 relative z-30">
      <div className="rounded-xl bg-white/95 backdrop-blur-sm p-4 md:p-6 shadow-xl border">
        <Tabs defaultValue="tours" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="tours" className="text-xs md:text-sm">
              {language === 'fr' ? 'Circuits Guidés' : 'Tour Packages'}
            </TabsTrigger>
            <TabsTrigger value="custom" className="text-xs md:text-sm">
              {language === 'fr' ? 'Itinéraire Personnalisé' : 'Custom Itinerary'}
            </TabsTrigger>
            <TabsTrigger value="destinations" className="text-xs md:text-sm">
              {language === 'fr' ? 'Destinations' : 'Destinations'}
            </TabsTrigger>
          </TabsList>

          {/* Tours Tab */}
          <TabsContent value="tours" className="mt-0">
            <div className="space-y-4">
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-5 gap-4">
                {/* Destination */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    {language === 'fr' ? 'Destination' : 'Destination'}
                  </Label>
                  <Select value={selectedDestination} onValueChange={setSelectedDestination}>
                    <SelectTrigger className="h-11">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <SelectValue placeholder={language === 'fr' ? 'Choisir une destination' : 'Choose destination'} />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {destinations.map((dest) => (
                        <SelectItem key={dest.value} value={dest.value}>
                          {language === 'fr' ? dest.labelFr : dest.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Departure Date */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    {language === 'fr' ? 'Date de Départ' : 'Departure Date'}
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "h-11 justify-start text-left font-normal truncate",
                          !departureDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {departureDate ? (
                          <>
                            <span className="sm:hidden">{format(departureDate, "MMM dd")}</span>
                            <span className="hidden sm:block">{format(departureDate, "PPP")}</span>
                          </>
                        ) : (
                          <span>{language === 'fr' ? 'Sélectionner une date' : 'Pick a date'}</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={departureDate}
                        onSelect={setDepartureDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Return Date */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    {language === 'fr' ? 'Date de Retour' : 'Return Date'}
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "h-11 justify-start text-left font-normal truncate",
                          !returnDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {returnDate ? (
                          <>
                            <span className="sm:hidden">{format(returnDate, "MMM dd")}</span>
                            <span className="hidden sm:block">{format(returnDate, "PPP")}</span>
                          </>
                        ) : (
                          <span>{language === 'fr' ? 'Sélectionner une date' : 'Pick a date'}</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={returnDate}
                        onSelect={setReturnDate}
                        initialFocus
                        disabled={(date) => date < (departureDate || new Date())}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Travelers */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    {language === 'fr' ? 'Voyageurs' : 'Travelers'}
                  </Label>
                  <Select value={travelers} onValueChange={setTravelers}>
                    <SelectTrigger className="h-11">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <SelectValue placeholder={language === 'fr' ? 'Nombre de personnes' : 'Number of people'} />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 {language === 'fr' ? 'personne' : 'person'}</SelectItem>
                      <SelectItem value="2">2 {language === 'fr' ? 'personnes' : 'people'}</SelectItem>
                      <SelectItem value="3-4">3-4 {language === 'fr' ? 'personnes' : 'people'}</SelectItem>
                      <SelectItem value="5-8">5-8 {language === 'fr' ? 'personnes' : 'people'}</SelectItem>
                      <SelectItem value="9+">9+ {language === 'fr' ? 'personnes' : 'people'}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Search Button */}
                <Button onClick={handleTourSearch} className="mt-auto h-11 bg-primary hover:bg-primary/90">
                  <Search className="mr-2 h-4 w-4" />
                  {language === 'fr' ? 'Rechercher' : 'Search Tours'}
                </Button>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  {/* Destination */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">
                      {language === 'fr' ? 'Destination' : 'Destination'}
                    </Label>
                    <Select value={selectedDestination} onValueChange={setSelectedDestination}>
                      <SelectTrigger>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <SelectValue placeholder={language === 'fr' ? 'Choisir une destination' : 'Choose destination'} />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        {destinations.map((dest) => (
                          <SelectItem key={dest.value} value={dest.value}>
                            {language === 'fr' ? dest.labelFr : dest.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Departure Date */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        {language === 'fr' ? 'Départ' : 'Departure'}
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "justify-start text-left font-normal text-xs truncate",
                              !departureDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 flex-shrink-0" />
                            {departureDate ? format(departureDate, "MMM dd") : (language === 'fr' ? 'Date' : 'Date')}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={departureDate}
                            onSelect={setDepartureDate}
                            initialFocus
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Return Date */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        {language === 'fr' ? 'Retour' : 'Return'}
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "justify-start text-left font-normal text-xs truncate",
                              !returnDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 flex-shrink-0" />
                            {returnDate ? format(returnDate, "MMM dd") : (language === 'fr' ? 'Date' : 'Date')}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={returnDate}
                            onSelect={setReturnDate}
                            initialFocus
                            disabled={(date) => date < (departureDate || new Date())}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  {/* Travelers */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">
                      {language === 'fr' ? 'Voyageurs' : 'Travelers'}
                    </Label>
                    <Select value={travelers} onValueChange={setTravelers}>
                      <SelectTrigger>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <SelectValue placeholder={language === 'fr' ? 'Nb' : '#'} />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3-4">3-4</SelectItem>
                        <SelectItem value="5-8">5-8</SelectItem>
                        <SelectItem value="9+">9+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <Button onClick={handleTourSearch} className="flex-1 bg-primary hover:bg-primary/90">
                    <Search className="mr-2 h-4 w-4" />
                    {language === 'fr' ? 'Rechercher' : 'Search'}
                  </Button>
                  <Button onClick={resetSearch} variant="outline" className="bg-transparent">
                    {language === 'fr' ? 'Réinitialiser' : 'Reset'}
                  </Button>
                </div>
              </div>

              {/* Search Results Preview */}
              {(selectedDestination || departureDate || returnDate || travelers) && (
                <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm text-primary font-medium">
                    {language === 'fr' ? 'Recherche:' : 'Searching:'}
                    {selectedDestination && ` ${destinations.find(d => d.value === selectedDestination)?.[language === 'fr' ? 'labelFr' : 'label']}`}
                    {departureDate && ` • ${format(departureDate, 'MMM dd')}`}
                    {returnDate && ` → ${format(returnDate, 'MMM dd')}`}
                    {travelers && ` • ${travelers} ${language === 'fr' ? 'voyageur(s)' : 'traveler(s)'}`}
                  </p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Other Tabs remain unchanged */}
          <TabsContent value="custom" className="mt-0">
            <div className="text-center py-8">
              <h3 className="text-lg font-semibold mb-2">
                {language === 'fr' ? 'Créez Votre Aventure Indienne Parfaite' : 'Create Your Perfect Indian Adventure'}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm md:text-base">
                {language === 'fr'
                  ? 'Parlez-nous de vos rêves et nous créerons un itinéraire personnalisé rien que pour vous'
                  : 'Tell us your dreams and we\'ll craft a personalized itinerary just for you'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    {language === 'fr' ? 'Planifier un Voyage Sur Mesure' : 'Plan Custom Trip'}
                  </Link>
                </Button>
                <Button variant="outline" className="bg-transparent" asChild>
                  <Link href="tel:+917870524178">
                    <Phone className="mr-2 h-4 w-4" />
                    {language === 'fr' ? 'Appeler Prince Kumar' : 'Call Prince Kumar'}
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="destinations" className="mt-0">
            <div className="text-center py-8">
              <h3 className="text-lg font-semibold mb-2">
                {language === 'fr' ? 'Explorez les Merveilles de l\'Inde' : 'Explore India\'s Wonders'}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm md:text-base">
                {language === 'fr'
                  ? 'Des palais du Rajasthan aux sommets de l\'Himalaya, découvrez des destinations incroyables'
                  : 'From Rajasthan\'s palaces to the Himalayas\' peaks, discover incredible destinations'}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {destinations.slice(0, 4).map((dest) => (
                  <Button
                    key={dest.value}
                    variant="outline"
                    className="h-auto py-3 px-3 text-xs bg-transparent hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <Link href={`/tours?destination=${dest.value}`}>
                      <div className="text-center">
                        <MapPin className="h-4 w-4 mx-auto mb-1" />
                        <span className="block">{language === 'fr' ? dest.labelFr : dest.label}</span>
                      </div>
                    </Link>
                  </Button>
                ))}
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/tours">
                  {language === 'fr' ? 'Voir Toutes les Destinations' : 'View All Destinations'}
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
