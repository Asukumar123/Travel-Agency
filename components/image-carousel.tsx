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
    src: "/Gallery/Taj Mahal - WhatsApp Image 2025-09-06 at 19.53.59_b4ce6638.jpg",
    alt: "Taj Mahal at sunrise",
    title: "✨ Majestic Taj Mahal at Sunrise 🌅",
  },
  {
    src: "/Gallery/QutubMinar.jpg",
    alt: "Qutub Minar",
    title: "🏛️ Timeless Beauty of Qutub Minar",
  },
  {
    src: "/Gallery/Humayun's Tomb (1).jpg",
    alt: "Humayun's Tomb",
    title: "🌿 Heritage Charm of Humayun’s Tomb",
  },
  {
    src: "/Gallery/Buddha.jpg",
    alt: "Buddha",
    title: "🕊️ Serene Presence of Lord Buddha",
  },
  {
    src: "/Gallery/Ugrasen Ki Baoli (2).jpg",
    alt: "Ugrasen Ki Baoli",
    title: "💧 Mystical Depths of Ugrasen Ki Baoli",
  },
];

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
