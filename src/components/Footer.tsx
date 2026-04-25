import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-orange-500 text-white font-bold text-xl px-3 py-1 rounded-lg">LT</div>
            <div>
              <div className="font-bold text-white text-lg leading-tight">Local Travel</div>
              <div className="text-orange-400 text-xs font-semibold tracking-widest">BOOKING</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 mb-4">
            Your trusted travel partner for domestic and international tour packages.
            We make every journey memorable.
          </p>
          {/* Social */}
          <div className="flex gap-3">
            {[
              { label: "Facebook", icon: "f", href: "#" },
              { label: "Instagram", icon: "📷", href: "#" },
              { label: "WhatsApp", icon: "💬", href: "https://wa.me/917905793493" },
              { label: "YouTube", icon: "▶", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center text-sm transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* India Tours */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">India Tours</h4>
          <ul className="space-y-2 text-sm">
            {["Rajasthan Tours","Golden Triangle","Kerala Tours","Himachal Tours","Goa Tours","Andaman Tours","Kashmir Tours","Leh Ladakh"].map((t) => (
              <li key={t}>
                <Link href="#india-tours" className="hover:text-orange-400 transition-colors">
                  {t}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* International */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">International</h4>
          <ul className="space-y-2 text-sm">
            {["Dubai","Sri Lanka","Thailand","Vietnam","Bali","Singapore","Maldives","Mauritius"].map((t) => (
              <li key={t}>
                <Link href="#international-tours" className="hover:text-orange-400 transition-colors">
                  {t}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3 items-start">
              <span className="mt-0.5">📍</span>
              <span>371 C-Block, Sector 19, Noida - 201301</span>
            </li>
            <li className="flex gap-3 items-center">
              <span>📞</span>
              <a href="tel:+917905793493" className="hover:text-orange-400 transition-colors">
                +91-7905793493
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <span>✉️</span>
              <a href="mailto:localtravelbooking.sales@gmail.com" className="hover:text-orange-400 transition-colors break-all">
                localtravelbooking.sales@gmail.com
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <span>🌐</span>
              <a href="https://localtravelbooking.in" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                localtravelbooking.in
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <span>💬</span>
              <a
                href="https://wa.me/917905793493"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors"
              >
                WhatsApp Us
              </a>
            </li>
          </ul>

          {/* Quick links */}
          <div className="mt-6">
            <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Gallery", href: "#gallery" },
                { label: "About Us", href: "#about" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-orange-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-5 px-4 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Local Travel Booking. All rights reserved. | localtravelbooking.in</p>
        <p className="mt-1">
          We accept: 💳 Visa · Mastercard · UPI · Net Banking · PayTM
        </p>
      </div>
    </footer>
  );
}
