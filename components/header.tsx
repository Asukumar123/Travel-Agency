"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { LanguageToggle } from "./language-toggle"
import { useTranslation } from "@/hooks/use-translation"
import { ThemeToggle } from "./theme-toggle"
import { MobileNav } from "./mobile-nav"
import Image from "next/image"
export default function Header() {
  const { t } = useTranslation()

  const navigation = [
    { title: t("tours"), href: "/tours" },
    { title: "Destinations", href: "/#destinations" },
    { title: t("about"), href: "/about" },
    { title: "Testimonials", href: "/#testimonials" },
    { title: t("contact"), href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-16 items-center">
        {/* Mobile Navigation */}
        <MobileNav items={navigation} />
        
        {/* Logo */}
        <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/logo2.png"
              alt="Voyage avec Prince Logo"
              className="h-8 w-auto"
              width={52}
              height={52}
              style={{ maxHeight: 32 }}
            />
            <span className="hidden font-bold sm:inline-block">
              Voyage avec Prince
            </span>
            </Link>
        </div>
        
        {/* Mobile Logo */}
        <div className="mr-4 flex md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo1.png"
              alt="Voyage avec Prince Logo"
              className="h-12 w-auto"
              width={52}
              height={52}
              style={{ maxHeight: 32 }}
            />
            <span className="font-bold text-base">Voyage avec Prince</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navigation.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Desktop Theme and Language */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" size="sm" className="bg-transparent" asChild>
              <Link href="/contact">{t("getQuote")}</Link>
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/book">{t("book")}</Link>
            </Button>
          </div>

          {/* Mobile Book Button */}
          <div className="flex md:hidden">
            <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/book">{t("book")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}