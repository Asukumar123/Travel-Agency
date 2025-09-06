"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { LanguageToggle } from "./language-toggle"
import { useTranslation } from "@/hooks/use-translation"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Voyage avec Prince</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/tours" className="text-sm font-medium transition-colors hover:text-primary">
            {t("tours")}
          </Link>
          <Link href="#destinations" className="text-sm font-medium transition-colors hover:text-primary">
            Destinations
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            {t("about")}
          </Link>
          <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            Testimonials
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            {t("contact")}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageToggle />
          <Button variant="outline" size="sm" className="hidden md:flex bg-transparent">
            {t("getQuote")}
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            {t("book")}
          </Button>
        </div>
      </div>
    </header>
  )
}
