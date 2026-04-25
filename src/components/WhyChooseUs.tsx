const features = [
  {
    icon: "🏷️",
    title: "Best Rate Guarantee",
    description:
      "We offer the most competitive prices in the market. Found it cheaper? We'll match it!",
  },
  {
    icon: "🏨",
    title: "Premium Hotels",
    description:
      "Handpicked hotels with exclusive deals and discounted rates for an unforgettable stay.",
  },
  {
    icon: "🧭",
    title: "Expert Local Guides",
    description:
      "Our professional guides bring destinations to life with rich knowledge and friendly service.",
  },
  {
    icon: "🕐",
    title: "24/7 Support",
    description:
      "We're available around the clock to assist you before, during and after your trip.",
  },
  {
    icon: "✈️",
    title: "Seamless Travel",
    description:
      "From flights to transfers and sightseeing, we handle every detail so you don't have to.",
  },
  {
    icon: "🛡️",
    title: "Trusted & Reliable",
    description:
      "5000+ happy travelers trust us. Your safety and satisfaction are our top priority.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-2">
            Why Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Local Travel Booking?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We go above and beyond to make your travel experience seamless, memorable, and stress-free.
          </p>
          <div className="mt-4 w-16 h-1 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-orange-500 transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
