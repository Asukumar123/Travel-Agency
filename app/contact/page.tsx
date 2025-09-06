import InquiryForm from "@/components/inquiry-form"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Contact Us - Voyage avec Prince",
  description:
    "Get in touch with Prince Kumar for travel advice, custom itineraries, and authentic Indian experiences.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <InquiryForm />
      </main>
      <Footer />
    </div>
  )
}
