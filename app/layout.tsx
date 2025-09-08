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

// Enhanced SEO metadata
export const metadata: Metadata = {
  title: {
    default: "Voyage avec Prince - Authentic India Travel Experiences | Prince Kumar",
    template: "%s | Voyage avec Prince - Authentic India Travel"
  },
  description: "Discover authentic India with Prince Kumar - French-speaking travel guide. Personalized tours through Rajasthan, Taj Mahal, Delhi, Varanasi & more. Book your Indian adventure today!",
  keywords: [
    "India travel",
    "Rajasthan tours", 
    "Taj Mahal tours",
    "French speaking guide India",
    "Prince Kumar guide",
    "authentic India experiences",
    "personalized India tours",
    "Golden Triangle India",
    "Varanasi tours",
    "Delhi tours",
    "cultural experiences India",
    "India travel agency",
    "custom India itineraries",
    "small group tours India",
    "spiritual tours India"
  ],
  authors: [{ name: 'Prince Kumar', url: 'https://voyageavecprince.com/about' }],
  creator: 'Prince Kumar',
  publisher: 'Voyage avec Prince',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/logo2.png", sizes: "32x32", type: "image/png" },
      { url: "/logo2.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" }
    ],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fr_FR'],
    url: 'https://voyageavecprince.com',
    siteName: 'Voyage avec Prince',
    title: 'Voyage avec Prince - Authentic India Travel Experiences with Prince Kumar',
    description: 'Discover authentic India with French-speaking guide Prince Kumar. Personalized tours through Rajasthan, Taj Mahal, and beyond. Book your Indian adventure today!',
    images: [
      {
        url: 'https://voyageavecprince.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Voyage avec Prince - Authentic India Travel Experiences',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voyage avec Prince - Authentic India Travel Experiences',
    description: 'Discover authentic India with French-speaking guide Prince Kumar. Personalized tours through Rajasthan, Taj Mahal, and beyond.',
    creator: '@voyageavecprince',
    images: ['https://voyageavecprince.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://voyageavecprince.com',
    languages: {
      'en-US': 'https://voyageavecprince.com',
      'fr-FR': 'https://voyageavecprince.com/fr',
    },
  },
  category: 'Travel',
  classification: 'Travel Agency',
  referrer: 'origin-when-cross-origin',
  // Verification tags
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

// Structured Data JSON-LD
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": "https://voyageavecprince.com/#organization",
      "name": "Voyage avec Prince",
      "alternateName": "Prince Kumar Travel Agency",
      "url": "https://voyageavecprince.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://voyageavecprince.com/logo1.png",
        "width": 512,
        "height": 512
      },
      "image": {
        "@type": "ImageObject", 
        "url": "https://voyageavecprince.com/og-image.jpg",
        "width": 1200,
        "height": 630
      },
      "description": "Authentic India travel experiences with French-speaking guide Prince Kumar. Personalized tours through Rajasthan, Taj Mahal, Delhi, Varanasi and beyond.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Paharganj, Near RK Ashram Metro Station",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110055",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7870524178",
        "contactType": "Customer Service",
        "availableLanguage": ["English", "French", "Hindi"]
      },
      "founder": {
        "@type": "Person",
        "name": "Prince Kumar",
        "jobTitle": "Founder & Travel Guide",
        "knowsLanguage": ["English", "French", "Hindi"],
        "nationality": "Indian"
      },
      "areaServed": "India",
      "serviceType": [
        "Cultural Tours",
        "Heritage Tours", 
        "Custom Itineraries",
        "Group Travel",
        "Photography Tours",
        "Spiritual Tours"
      ],
      "priceRange": "€€",
      "currenciesAccepted": ["EUR", "USD", "INR"],
      "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
      "sameAs": [
        "https://www.tripadvisor.com/profile/voyageavecprince",
        "https://www.facebook.com/voyageavecprince",
        "https://www.instagram.com/voyageavecprince"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://voyageavecprince.com/#website",
      "url": "https://voyageavecprince.com",
      "name": "Voyage avec Prince",
      "description": "Authentic India travel experiences with Prince Kumar",
      "publisher": {
        "@id": "https://voyageavecprince.com/#organization"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://voyageavecprince.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      ],
      "inLanguage": ["en-US", "fr-FR"]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://voyageavecprince.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://voyageavecprince.com"
        }
      ]
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        {/* Additional SEO tags */}
        <meta name="theme-color" content="#16a34a" />
        <meta name="msapplication-TileColor" content="#16a34a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="New Delhi" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />
        
        {/* Language and region */}
        <meta httpEquiv="content-language" content="en-us" />
        <link rel="alternate" hrefLang="en" href="https://voyageavecprince.com" />
        <link rel="alternate" hrefLang="fr" href="https://voyageavecprince.com/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://voyageavecprince.com" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Additional meta tags for crawlers */}
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://voyageavecprince.com" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <WhatsAppChatbot />
        </ThemeProvider>
      </body>
    </html>
  )
}