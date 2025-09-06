"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const images = [
  "/majestic-rajasthan-palace-with-golden-sunset--indi.jpg",
  "/Gallery/Taj Mahal1.jpg",
  "/Gallery/Buddha.jpg",
  "/Gallery/Humayun's Tomb2.jpg",
]

export default function Hero() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(0)

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative">
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* Image Slider */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={images[current]}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={images[current]}
              alt="Travel destinations"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-balance mb-4 md:mb-6">
          {t("heroTitle")}
        </h1>
        <p className="mt-4 md:mt-6 max-w-xl md:max-w-2xl text-sm md:text-base lg:text-lg text-pretty px-4">
          {t("heroSubtitle")}
        </p>
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 px-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto" asChild>
            <Link href="/tours">{t("exploreTours")}</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm w-full sm:w-auto"
            asChild
          >
            <Link href="/about">{t("meetPrince")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
