"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselImage {
  src: string
  alt: string
  title: string
}

const carouselImages: CarouselImage[] = [
  {
    src: "/taj-mahal-sunrise-golden-light-reflecting-in-water.jpg",
    alt: "Taj Mahal at sunrise",
    title: "Taj Mahal at Sunrise",
  },
  {
    src: "/jaipur-hawa-mahal-palace-of-winds-pink-city.jpg",
    alt: "Jaipur – Palais des vents",
    title: "Jaipur – Palais des Vents",
  },
  {
    src: "/pushkar-sacred-lake-sunset-temples-reflection.jpg",
    alt: "Pushkar – Lac sacré au coucher du soleil",
    title: "Pushkar – Lac Sacré au Coucher du Soleil",
  },
  {
    src: "/udaipur-lake-palace-floating-on-pichola-lake.jpg",
    alt: "Udaipur – Lake Palace",
    title: "Udaipur – Lake Palace",
  },
  {
    src: "/golden-temple-amritsar-with-reflection-in-sacred.jpg",
    alt: "Golden Temple d'Amritsar",
    title: "Golden Temple d'Amritsar",
  },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Discover India's Iconic Destinations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the breathtaking beauty and rich culture of India through our carefully curated destinations
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main carousel container */}
          <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                }`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold text-balance">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg"
            onClick={goToNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-110"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
