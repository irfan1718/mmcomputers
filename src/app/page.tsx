"use client";

import Image from "next/image";

const categories = [
  {
    icon: "🖥️",
    title: "Desktops & Laptops",
    desc: "Assembled PCs, branded laptops, refurbished systems",
  },
  {
    icon: "🖨️",
    title: "Printers & Scanners",
    desc: "Inkjet, laser, multi-function, and scanner solutions",
  },
  {
    icon: "🔌",
    title: "Cables & Accessories",
    desc: "HDMI, USB, adapters, hubs, and connectors",
  },
  {
    icon: "🖱️",
    title: "Input Devices",
    desc: "Keyboards, mice, webcams, headsets",
  },
  {
    icon: "💾",
    title: "Storage & Memory",
    desc: "SSDs, HDDs, RAM, pen drives, memory cards",
  },
  {
    icon: "🔧",
    title: "Service & Repair",
    desc: "Laptop repair, OS install, AMC, networking setup",
  },
];

const highlights = [
  { value: "7+", label: "Years serving Kasaragod" },
  { value: "1000+", label: "Happy customers" },
  { value: "50+", label: "Brands available" },
  { value: "24hr", label: "Turnaround on repairs" },
];

export default function StoreLanding() {
  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#1a1a1a] font-sans">
      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-[#faf8f4]/90 backdrop-blur border-b border-[#e8e3d9]">
        <div className="max-w-6xl mx-auto px-5 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="MM Computers"
              width={200}
              height={200}
              className="rounded-md"
            />
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="tel:+919400000000"
              className="text-sm text-[#002c4f] font-semibold px-4 py-2 rounded-full border border-[#002c4f] hover:bg-[#002c4f] hover:text-white transition-colors"
            >
              📞 Call Us
            </a>
            <a
              href="https://maps.google.com/?q=MM+Computers+Kasaragod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-[#9ac336] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#85ad2a] transition-colors"
            >
              📍 Directions
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative max-w-6xl mx-auto px-5 pt-16 pb-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Warm textured blob */}
        <span className="absolute top-10 right-0 w-96 h-96 bg-[#9ac336]/10 rounded-full blur-3xl pointer-events-none" />
        <span className="absolute bottom-0 left-0 w-64 h-64 bg-[#002c4f]/8 rounded-full blur-3xl pointer-events-none" />

        {/* Left: text */}
        <div className="flex-1 relative z-10">
          <span className="inline-block bg-[#9ac336]/15 text-[#5a7a1a] text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-wide uppercase">
            📍 Kasaragod&apos;s Trusted Tech Shop
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#002c4f] mb-5">
            Your Neighbourhood
            <br />
            <span className="text-[#9ac336]">Computer Store</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
            From laptops and printers to repairs and networking — MM Computers
            has been the go-to tech partner for homes and businesses in
            Kasaragod for over 7 years.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#categories"
              className="bg-[#002c4f] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#014172] transition-colors"
            >
              Browse Products
            </a>
            <a
              href="#contact"
              className="border border-[#002c4f] text-[#002c4f] font-semibold px-6 py-3 rounded-full hover:bg-[#002c4f]/5 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right: logo card */}
        <div className="flex-shrink-0 relative z-10">
          <div className="bg-white border border-[#e8e3d9] rounded-3xl shadow-xl p-10 flex flex-col items-center gap-3">
            <Image
              src="/logo.png"
              alt="MM Computers Logo"
              width={200}
              height={200}
              priority
              className="drop-shadow"
            />
            <div className="text-center mt-2">
              <p className="font-bold text-[#002c4f] text-lg leading-snug">
                MM Computers
              </p>
              <p className="text-gray-500 text-sm">& IT Solutions</p>
              <span className="mt-2 inline-block bg-[#9ac336] text-white text-xs px-3 py-1 rounded-full font-medium">
                Open Now
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS / STATS ──────────────────────────────── */}
      <section className="bg-[#002c4f] py-12">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {highlights.map((h) => (
            <div key={h.label}>
              <p className="text-3xl font-extrabold text-[#9ac336]">
                {h.value}
              </p>
              <p className="text-sm text-blue-100 mt-1">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ──────────────────────────────────────── */}
      <section id="categories" className="max-w-6xl mx-auto px-5 py-20">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#9ac336]">
            What we offer
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#002c4f] mt-2">
            Products & Services
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Everything your home or office needs — available in-store in
            Kasaragod.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white border border-[#e8e3d9] rounded-2xl p-6 hover:shadow-md hover:border-[#9ac336]/40 transition-all group"
            >
              <span className="text-3xl block mb-3">{cat.icon}</span>
              <h3 className="font-bold text-[#002c4f] text-base mb-1 group-hover:text-[#9ac336] transition-colors">
                {cat.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US ──────────────────────────────────────────── */}
      <section className="bg-[#002c4f]/5 border-y border-[#e8e3d9] py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9ac336]">
              Why choose us
            </span>
            <h2 className="text-3xl font-extrabold text-[#002c4f] mt-2">
              Local experts, personal service
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🤝",
                title: "Trusted by families",
                body: "Serving homes and businesses in Kasaragod for over 7 years. We know our community.",
              },
              {
                icon: "💰",
                title: "Fair & transparent pricing",
                body: "No hidden charges. Get honest quotes before we begin any repair or purchase.",
              },
              {
                icon: "⚡",
                title: "Fast turnaround",
                body: "Most repairs completed within 24 hours. We respect your time.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-7 border border-[#e8e3d9] text-center"
              >
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="font-bold text-[#002c4f] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 py-20">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#9ac336]">
            What customers say
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#002c4f] mt-2">
            Reviews from Google Maps
          </h2>
          <div className="flex items-center justify-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-gray-500 text-sm font-medium">
              5.0 on Google
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              text: "If you are looking for a reliable place in Kasaragod for computers, laptops, and accessories, MM Computers & IT Solutions is a top choice. What really stands out is their honesty — they guide you properly and won't make you spend unnecessarily on an old system. I've recommended them to many friends and even to my company. Everyone has been 100% satisfied.",
              stars: 5,
            },
            {
              text: "MM Computer and IT Solutions offers excellent and reliable service. The team is knowledgeable, professional, and quick to respond. Whether it's repairs, software installation, or IT support, they handle everything efficiently at reasonable prices. Customer service is friendly and transparent — they clearly explain the issue before proceeding.",
              stars: 5,
            },
            {
              text: "One of the best places to purchase and get repair service for computers and accessories, laptops, printers, CCTV cameras and accessories. Best price and best service support!",
              stars: 5,
            },
          ].map((review, i) => (
            <div
              key={i}
              className="bg-white border border-[#e8e3d9] rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-0.5">
                {[...Array(review.stars)].map((_, s) => (
                  <svg
                    key={s}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-[#e8e3d9]">
                <div className="w-8 h-8 rounded-full bg-[#002c4f]/10 flex items-center justify-center text-[#002c4f] font-bold text-sm">
                  {String.fromCharCode(65 + i * 3)}
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#002c4f]">
                    Verified Customer
                  </p>
                  <p className="text-xs text-gray-400">Google Maps review</p>
                </div>
                <svg
                  className="ml-auto w-5 h-5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VISIT US ────────────────────────────────────────── */}
      <section id="contact" className="max-w-6xl mx-auto px-5 py-20">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Info */}
          <div className="flex-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9ac336]">
              Visit the store
            </span>
            <h2 className="text-3xl font-extrabold text-[#002c4f] mt-2 mb-6">
              Come see us in Kasaragod
            </h2>

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <span className="text-2xl mt-0.5">📍</span>
                <div>
                  <p className="font-semibold text-[#002c4f]">Address</p>
                  <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">
                    Near ICICI Bank, Opp Karnataka Bank,
                    <br />
                    City Centre, Bank Road, Kasaragod
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl mt-0.5">🕐</span>
                <div>
                  <p className="font-semibold text-[#002c4f]">Store Hours</p>
                  <p className="text-gray-500 text-sm mt-0.5">
                    Mon – Sat: 10:00 AM – 8:00 PM
                  </p>
                  <p className="text-gray-500 text-sm">Sunday: Closed</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-2xl mt-0.5">📞</span>
                <div>
                  <p className="font-semibold text-[#002c4f]">Phone</p>
                  <a
                    href="tel:+919895876355"
                    className="text-[#9ac336] font-semibold text-sm hover:underline"
                  >
                    +91 98958 76355
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=MM+Computers+Kasaragod"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-[#9ac336] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#85ad2a] transition-colors"
            >
              📍 Get Directions on Google Maps
            </a>
          </div>

          {/* WhatsApp card */}
          <div className="flex-1 bg-[#002c4f] rounded-3xl p-8 text-white">
            <h3 className="text-xl font-bold mb-2">Chat with us on WhatsApp</h3>
            <p className="text-blue-200 text-sm mb-6 leading-relaxed">
              Have a question about a product, need a repair quote, or want to
              check stock? Message us directly — we usually reply within
              minutes.
            </p>

            <a
              href="https://wa.me/919895876355?text=Hi%20MM%20Computers!%20I%20have%20an%20enquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-4 rounded-xl transition-colors text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 flex-shrink-0"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.857L.057 23.57a.75.75 0 00.921.921l5.713-1.477A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.722 9.722 0 01-4.964-1.362l-.355-.211-3.684.952.972-3.55-.232-.366A9.722 9.722 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
              Message us on WhatsApp
            </a>

            <p className="text-blue-300 text-xs mt-4 text-center">
              +91 98958 76355 · Typically replies within minutes
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="bg-[#002c4f] text-blue-200 py-8 text-center text-sm">
        <p className="font-semibold text-white mb-1">
          MM Computers and IT Solutions
        </p>
        <p className="text-xs">
          Near ICICI Bank, City Centre, Bank Road, Kasaragod
        </p>
        <p className="mt-4 text-xs text-blue-400">
          © {new Date().getFullYear()} MM Computers · All rights reserved
        </p>
      </footer>
    </div>
  );
}
