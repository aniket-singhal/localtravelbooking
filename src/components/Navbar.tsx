"use client";

import { useState } from "react";
import Link from "next/link";

const indiaTourLinks = [
  "Rajasthan Tours","Golden Triangle Tours","Kerala Tours","Himachal Tours",
  "Goa Tours","Andaman Tours","Leh Ladakh Tours","Uttarakhand Tours",
  "Kashmir Tours","South India Tours","North East Tours",
];

const internationalTourLinks = [
  "Dubai","Sri Lanka","Thailand","Vietnam","Bali",
  "Singapore","Bhutan","Nepal","Maldives","Mauritius",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [indiaOpen, setIndiaOpen] = useState(false);
  const [intlOpen, setIntlOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-orange-500 text-white text-sm py-1 px-4 flex justify-between items-center">
        <a href="tel:+917905793493" className="flex items-center gap-1 hover:text-orange-200 transition-colors">
          📞 +91-7905793493
        </a>
        <a href="mailto:localtravelbooking.sales@gmail.com" className="flex items-center gap-1 hover:text-orange-200 transition-colors">
          ✉️ localtravelbooking.sales@gmail.com
        </a>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-orange-500 text-white font-bold text-xl px-3 py-1 rounded-lg">
            LT
          </div>
          <div>
            <div className="font-bold text-gray-800 text-lg leading-tight">Local Travel</div>
            <div className="text-orange-500 text-xs font-semibold tracking-widest">BOOKING</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-orange-500 transition-colors">About Us</Link>
          </li>

          {/* India dropdown */}
          <li className="relative group">
            <button className="hover:text-orange-500 transition-colors flex items-center gap-1">
              India Tours <span className="text-xs">▾</span>
            </button>
            <ul className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg w-52 py-2 hidden group-hover:block z-50 border border-gray-100">
              {indiaTourLinks.map((t) => (
                <li key={t}>
                  <Link
                    href={`#india-tours`}
                    className="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* International dropdown */}
          <li className="relative group">
            <button className="hover:text-orange-500 transition-colors flex items-center gap-1">
              International <span className="text-xs">▾</span>
            </button>
            <ul className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg w-44 py-2 hidden group-hover:block z-50 border border-gray-100">
              {internationalTourLinks.map((t) => (
                <li key={t}>
                  <Link
                    href={`#international-tours`}
                    className="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link href="#gallery" className="hover:text-orange-500 transition-colors">Gallery</Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-orange-500 transition-colors">Contact</Link>
          </li>
        </ul>

        {/* CTA */}
        <Link
          href="#enquire"
          className="hidden lg:inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
        >
          Enquire Now
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <ul className="flex flex-col gap-2 text-sm font-medium text-gray-700 mt-3">
            <li><Link href="/" className="block py-2 hover:text-orange-500" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="#about" className="block py-2 hover:text-orange-500" onClick={() => setMenuOpen(false)}>About Us</Link></li>

            <li>
              <button
                className="w-full text-left py-2 hover:text-orange-500 flex justify-between"
                onClick={() => setIndiaOpen(!indiaOpen)}
              >
                India Tours <span>{indiaOpen ? "▴" : "▾"}</span>
              </button>
              {indiaOpen && (
                <ul className="pl-4 mt-1 space-y-1">
                  {indiaTourLinks.map((t) => (
                    <li key={t}>
                      <Link href="#india-tours" className="block py-1 text-gray-600 hover:text-orange-500" onClick={() => setMenuOpen(false)}>{t}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <button
                className="w-full text-left py-2 hover:text-orange-500 flex justify-between"
                onClick={() => setIntlOpen(!intlOpen)}
              >
                International <span>{intlOpen ? "▴" : "▾"}</span>
              </button>
              {intlOpen && (
                <ul className="pl-4 mt-1 space-y-1">
                  {internationalTourLinks.map((t) => (
                    <li key={t}>
                      <Link href="#international-tours" className="block py-1 text-gray-600 hover:text-orange-500" onClick={() => setMenuOpen(false)}>{t}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><Link href="#gallery" className="block py-2 hover:text-orange-500" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
            <li><Link href="#contact" className="block py-2 hover:text-orange-500" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li>
              <Link
                href="#enquire"
                className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-full mt-2 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Enquire Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
