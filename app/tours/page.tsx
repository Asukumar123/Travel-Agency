import TourCircuits from "@/components/tour-circuits"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Tour Circuits - Voyage avec Prince",
  description:
    "Discover our signature tour circuits through India's most captivating destinations with authentic cultural experiences.",
}

export default function ToursPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <TourCircuits />
      </main>
      <Footer />
    </div>
  )
}
