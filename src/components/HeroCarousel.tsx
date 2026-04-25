"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroSlides } from "@/data/tours";

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setCurrent((c) => (c + 1) % heroSlides.length);

  return (
    <section className="relative h-[85vh] min-h-[500px] overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">
          Welcome to Local Travel Booking
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg transition-all duration-500">
          {heroSlides[current].title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8 drop-shadow">
          {heroSlides[current].subtitle}
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="#india-tours"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg"
          >
            Explore Packages
          </Link>
          <Link
            href="#enquire"
            className="bg-white/20 backdrop-blur hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-full border border-white/50 transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition-colors"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition-colors"
        aria-label="Next"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-orange-500 w-6" : "bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
