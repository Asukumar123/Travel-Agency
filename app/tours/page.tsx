import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTourById } from "@/data/tours" // adjust if path is "@/lib/tours"
import TourDetail from "@/components/tour-detail"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface TourPageProps {
  params: { id: string }
}

// ✅ Full SEO metadata (title, description, OG, Twitter, canonical)
export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
  const tour = getTourById(params.id)

  if (!tour) {
    return {
      title: "Tour Not Found",
      description: "This tour could not be found.",
    }
  }

  const baseUrl = "https://voyageavecprince.com"

  return {
    title: `${tour.name} - ${tour.duration} | Voyage avec Prince`,
    description: `${tour.description} Book this ${tour.duration} tour with Prince Kumar, French-speaking guide. ${tour.price}`,
    keywords: [
      tour.name,
      "India tour",
      "Prince Kumar",
      "French speaking guide",
      ...tour.highlights,
      tour.duration,
    ],
    openGraph: {
      title: `${tour.name} - Authentic India Tour`,
      description: tour.description,
      url: `${baseUrl}/tours/${tour.id}`,
      siteName: "Voyage avec Prince",
      images: [
        {
          url: `${baseUrl}${tour.image}`,
          width: 1200,
          height: 630,
          alt: tour.name,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tour.name} - Voyage avec Prince`,
      description: tour.description,
      images: [`${baseUrl}${tour.image}`],
    },
    alternates: {
      canonical: `${baseUrl}/tours/${tour.id}`,
    },
  }
}

// ✅ Page component with layout + JSON-LD
export default function TourPage({ params }: TourPageProps) {
  const tour = getTourById(params.id)

  if (!tour) {
    notFound()
  }

  // JSON-LD schema
  const tourJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name,
    description: tour.description,
    image: `https://voyageavecprince.com${tour.image}`,
    url: `https://voyageavecprince.com/tours/${tour.id}`,
    provider: {
      "@type": "TravelAgency",
      name: "Voyage avec Prince",
      url: "https://voyageavecprince.com",
    },
    offers: {
      "@type": "Offer",
      price: tour.price.replace(/[^0-9]/g, ""),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString(),
      url: `https://voyageavecprince.com/tours/${tour.id}#book`,
    },
    duration: tour.duration,
    itinerary: tour.itinerary.map((day: any) => ({
      "@type": "TouristDestination",
      name: day.title,
      description: day.description,
    })),
    touristType: ["Cultural", "Heritage", "Adventure"],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6139,
      longitude: 77.2090,
    },
    addressCountry: "IN",
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* ✅ JSON-LD for structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourJsonLd) }}
      />

      <Header />
      <main className="flex-1">
        <TourDetail tour={tour} />
      </main>
      <Footer />
    </div>
  )
}
