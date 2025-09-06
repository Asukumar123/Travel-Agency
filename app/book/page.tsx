import BookingForm from "@/components/booking-form"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Book Your Tour - Voyage avec Prince",
  description:
    "Book your authentic Indian adventure with Prince Kumar. Personalized itineraries and cultural experiences await.",
}

export default function BookPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <BookingForm />
      </main>
      <Footer />
    </div>
  )
}
