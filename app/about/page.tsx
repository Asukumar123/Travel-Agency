import AboutPrince from "@/components/about-prince"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "About Prince Kumar - Voyage avec Prince",
  description:
    "Meet Prince Kumar, founder of Voyage avec Prince. Discover his passion for authentic Indian travel experiences and cultural exchange.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AboutPrince />
      </main>
      <Footer />
    </div>
  )
}
