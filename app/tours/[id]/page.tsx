import { notFound } from "next/navigation";
import { getAllTours, getTourById } from "@/data/tours";
import TourDetail from "@/components/tour-detail";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface TourPageProps {
  params: { id: string };
}

// ✅ Add generateStaticParams to supply all valid IDs for static export
export async function generateStaticParams() {
  const tours = getAllTours();

  return tours.map((tour) => ({
    id: tour.id.toString(),
  }));
}

export async function generateMetadata({ params }: TourPageProps) {
  const tour = getTourById(params.id);

  if (!tour) {
    return {
      title: "Tour Not Found",
    };
  }

  return {
    title: `${tour.name} - Voyage avec Prince`,
    description: tour.description,
  };
}

export default function TourPage({ params }: TourPageProps) {
  const tour = getTourById(params.id);

  if (!tour) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <TourDetail tour={tour} />
      </main>
      <Footer />
    </div>
  );
}
