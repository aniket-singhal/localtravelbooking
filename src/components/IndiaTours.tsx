import TourCard from "./TourCard";
import { indiaTours } from "@/data/tours";

export default function IndiaTours() {
  return (
    <section id="india-tours" className="scroll-mt-24 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-2">
            Explore India
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            India Tour Packages
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Discover the incredible diversity of India — from royal Rajasthan to serene
            Kerala, adventure-packed Ladakh to the tropical Andamans.
          </p>
          <div className="mt-4 w-16 h-1 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {indiaTours.map((tour) => (
            <TourCard key={tour.id} {...tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
