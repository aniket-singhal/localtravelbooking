import TourCard from "./TourCard";
import { internationalTours } from "@/data/tours";

export default function InternationalTours() {
  return (
    <section id="international-tours" className="scroll-mt-24 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-2">
            Go Global
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            International Tour Packages
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Explore iconic international destinations — from the luxury of Dubai to the
            tranquil paradise of the Maldives.
          </p>
          <div className="mt-4 w-16 h-1 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {internationalTours.map((tour) => (
            <TourCard key={tour.id} {...tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
