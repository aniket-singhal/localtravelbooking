"use client";

import { useState } from "react";

export default function EnquireForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    travelDate: "",
    persons: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", email: "", destination: "", travelDate: "", persons: "", message: "" });
  };

  return (
    <section id="enquire" className="scroll-mt-24 py-16 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left info */}
          <div>
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-2">
              Plan Your Trip
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get a Free Travel Quote
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Fill in your details and our travel experts will craft the perfect
              itinerary for you — completely free of charge!
            </p>

            <div className="space-y-4">
              {[
                { icon: "📞", label: "Call Us", value: "+91-7905793493", href: "tel:+917905793493" },
                { icon: "✉️", label: "Email Us", value: "localtravelbooking.sales@gmail.com", href: "mailto:localtravelbooking.sales@gmail.com" },
                { icon: "🌐", label: "Website", value: "localtravelbooking.in", href: "https://localtravelbooking.in" },
                { icon: "📍", label: "Address", value: "371 C-Block, Sector 19, Noida - 201301", href: "" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-700">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-orange-500 hover:text-orange-600 text-sm transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Enquiry Sent!</h3>
                <p className="text-gray-600">Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Send Your Enquiry</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                    <select
                      name="destination"
                      value={form.destination}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white"
                    >
                      <option value="">Select destination</option>
                      {["Rajasthan","Golden Triangle","Kerala","Himachal","Goa","Andaman","Leh Ladakh","Uttarakhand","Kashmir","South India","North East"].map(d => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
                    <input
                      type="date"
                      name="travelDate"
                      value={form.travelDate}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">No. of Persons</label>
                  <input
                    type="number"
                    name="persons"
                    value={form.persons}
                    onChange={handleChange}
                    min={1}
                    placeholder="e.g. 2"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your dream trip..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-md"
                >
                  Send Enquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
