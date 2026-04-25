import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "5000+", label: "Happy Travelers" },
  { value: "150+", label: "Destinations" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Customer Support" },
];

export default function AboutUs() {
  return (
    <section id="about" className="scroll-mt-24 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80"
                alt="Taj Mahal"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
              <Image
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80"
                alt="Dubai"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80"
                alt="Bali"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden mt-4">
              <Image
                src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80"
                alt="Maldives"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-2">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Your Trusted Travel Partner Since 2015
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At <strong>Local Travel Booking</strong>, we believe every journey should be
              extraordinary. Based in Noida, we specialize in crafting personalized
              travel experiences across India and the world.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From the regal forts of Rajasthan to the pristine beaches of the Maldives,
              our expert team handles everything — flights, hotels, transfers, and
              sightseeing — so you can focus on making memories.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center p-4 bg-orange-50 rounded-xl">
                  <p className="text-2xl font-bold text-orange-500">{s.value}</p>
                  <p className="text-xs text-gray-600 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="#enquire"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-md"
            >
              Plan My Trip →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
