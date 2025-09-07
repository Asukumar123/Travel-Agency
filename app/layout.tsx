import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import WhatsAppChatbot from "@/components/whatsapp-chatbot"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Voyage avec Prince - Authentic India Travel Experiences",
  description:
    "Discover the treasures of India with personalized tours through Rajasthan, the Taj Mahal, and beyond. Authentic cultural experiences with Prince Kumar.",
    icons: {
    icon: "/logo1.png",   // 👈 your image here
    shortcut: "/favicon.png",
    apple: "/favicon.png",  // for iOS devices
  },
  generator: 'Next.js',
  keywords: 'India travel, Rajasthan tours, Taj Mahal, authentic India, Prince Kumar, French-speaking guide, cultural experiences, personalized itineraries',
  authors: [{ name: 'Prince Kumar' }],
  creator: 'Prince Kumar',
  publisher: 'Voyage avec Prince',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'fr_FR',
    url: 'https://voyageavecprince.com',
    siteName: 'Voyage avec Prince',
    title: ' Voyage avec Prince - Authentic India Travel Experiences',
    description: 'Discover the treasures of India with personalized tours through Rajasthan, the Taj Mahal, and beyond. Authentic cultural experiences with Prince Kumar.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voyage avec Prince - Authentic India Travel Experiences',
    description: 'Discover the treasures of India with personalized tours through Rajasthan, the Taj Mahal, and beyond.',
    creator: '@voyageavecprince',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <WhatsAppChatbot />
        </ThemeProvider>
      </body>
    </html>
  )
}