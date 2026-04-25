import Link from "next/link";
import Image from "next/image";

export default function SpecialOffer() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Big banner */}
        <div className="relative rounded-3xl overflow-hidden h-72 md:h-80">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80"
            alt="Special Offer"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-orange-500/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2 opacity-90">
              Limited Time Offer
            </p>
            <h2 className="text-5xl md:text-7xl font-black mb-2">70% OFF</h2>
            <p className="text-xl md:text-2xl font-semibold mb-2">
              On Select Holiday Packages!
            </p>
            <p className="text-sm opacity-80 mb-6 max-w-md">
              Book now and save big on India & international tour packages.
              Offer valid for travel in 2025.
            </p>
            <Link
              href="#enquire"
              className="bg-white text-orange-500 hover:bg-orange-50 font-bold px-8 py-3 rounded-full transition-colors shadow-lg"
            >
              Grab This Deal →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
