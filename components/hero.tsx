"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative">
      <div className="absolute inset-0 z-10 bg-black/40" />
      <div className="relative h-[700px] w-full">
        <Image
          src="/majestic-rajasthan-palace-with-golden-sunset--indi.jpg"
          alt="Majestic palaces of Rajasthan at sunset"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">{t("heroTitle")}</h1>
        <p className="mt-6 max-w-2xl text-lg text-pretty">{t("heroSubtitle")}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            {t("exploreTours")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm"
          >
            {t("meetPrince")}
          </Button>
        </div>
      </div>
    </section>
  )
}
