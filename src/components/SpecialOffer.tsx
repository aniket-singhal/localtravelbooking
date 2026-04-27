import Link from "next/link";
import Image from "next/image";

export default function SpecialOffer() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Big banner */}
        <div className="relative rounded-3xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1400&q=80"
            alt="Uttarakhand"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-orange-500/70" />
          <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-6 py-14 md:py-20">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3 opacity-90">
              Limited Time Offer
            </p>
            <h2 className="text-4xl md:text-7xl font-black mb-3">Upto 50% OFF</h2>
            <p className="text-lg md:text-2xl font-semibold mb-3">
              On Uttarakhand Holiday Packages!
            </p>
            <p className="text-sm opacity-80 mb-8 max-w-md">
              Book now and save big on Haridwar, Rishikesh, Nainital & Char Dham packages.
              Limited seats available!
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
