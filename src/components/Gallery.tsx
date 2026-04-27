import Image from "next/image";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80", alt: "Taj Mahal" },
  { src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80", alt: "Kerala Backwaters" },
  { src: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=600&q=80", alt: "Goa Beach" },
  { src: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80", alt: "Golden Triangle" },
  { src: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=600&q=80", alt: "Leh Ladakh" },
  { src: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=600&q=80", alt: "Kashmir" },
  { src: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80", alt: "South India" },
  { src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80", alt: "Rajasthan" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", alt: "Himachal Pradesh" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-2">
            Our Gallery
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Moments We Captured
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A glimpse into the beautiful destinations and memories created by our happy travelers.
          </p>
          <div className="mt-4 w-16 h-1 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Clean 3-col grid — perfectly even 3×3 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden h-52 md:h-64">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-4">
                <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 px-3 py-1 rounded-full">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
