import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
    alt: "Taj Mahal",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
    height: "h-48 md:h-full",
  },
  {
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    alt: "Kerala Backwaters",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    height: "h-48",
  },
  {
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
    alt: "Dubai Skyline",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    height: "h-48",
  },
  {
    src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
    alt: "Bali Temple",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    height: "h-48",
  },
  {
    src: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80",
    alt: "Maldives",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    height: "h-48",
  },
  {
    src: "https://images.unsplash.com/photo-1589793907316-f94025b46850?w=600&q=80",
    alt: "Ladakh",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    height: "h-48",
  },
  {
    src: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=600&q=80",
    alt: "Kashmir",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    height: "h-48",
  },
  {
    src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80",
    alt: "Thailand",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    height: "h-48",
  },
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

        {/* Masonry-style grid — explicit row height of 12rem so row-span-2 = 24rem + gap */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:grid-rows-[12rem_12rem_12rem]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden ${img.colSpan} ${img.rowSpan} ${img.height}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Overlay — triggered by group-hover on the parent div */}
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
