"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MapPin, X } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { LanguageToggle } from "./language-toggle"
import { ThemeToggle } from "./theme-toggle"

interface MobileNavProps {
  items: {
    title: string
    href: string
  }[]
}

export function MobileNav({ items }: MobileNavProps) {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const { t } = useTranslation()

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          size="sm"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 w-[300px] sm:max-w-xs">
        {/* Header with Logo */}
        <div className="px-7 py-4 border-b">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={handleLinkClick}
          >
            <MapPin className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Voyage avec Prince</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 px-7 py-6">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary py-3 px-2 rounded-md border-b border-transparent hover:border-primary/20 ${
                pathname === item.href 
                  ? "text-primary bg-primary/5 border-primary/20" 
                  : "text-muted-foreground hover:bg-muted/50"
              }`}
              onClick={handleLinkClick}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Footer Section with Theme/Language toggles and buttons */}
        <div className="flex flex-col gap-4 px-7 py-6 border-t mt-auto">
          {/* Theme and Language Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Settings</span>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-transparent w-full justify-start" 
              asChild
            >
              <Link href="/contact" onClick={handleLinkClick}>
                {t("getQuote")}
              </Link>
            </Button>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/90 w-full justify-start" 
              asChild
            >
              <Link href="/book" onClick={handleLinkClick}>
                {t("book")}
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="text-xs text-muted-foreground space-y-1 pt-4 border-t">
            <p className="font-medium">Prince Kumar</p>
            <p>New Delhi, India</p>
            <p>Ohprincekumar@gmail.com</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav