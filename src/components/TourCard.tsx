import Image from "next/image";
import Link from "next/link";

interface TourCardProps {
  name: string;
  image: string;
  description: string;
  duration: string;
  price: string;
}

export default function TourCard({ name, image, description, duration, price }: TourCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {duration}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-orange-500 transition-colors">
          {name}
        </h3>
        <p className="text-gray-500 text-sm mb-4 flex-1">{description}</p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-400">Starting from</p>
            <p className="text-orange-500 font-bold text-lg">{price}</p>
          </div>
          <div className="flex gap-2">
            <Link
              href="#enquire"
              className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
            >
              Enquire
            </Link>
            <Link
              href="#enquire"
              className="border border-orange-500 text-orange-500 hover:bg-orange-50 text-xs font-semibold px-4 py-2 rounded-full transition-colors"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
