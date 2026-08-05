import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight, MapPin, Phone, Mail, Star, Award, Shield, Gem } from "lucide-react";
import logoImg from "@/imports/image.png";
import heroDesktop from "@/imports/ChatGPT_Image_Aug_5__2026__10_32_41_AM.png";
import heroMobile from "@/imports/ChatGPT_Image_Aug_5__2026__10_33_39_AM.png";

const img = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=85`;

const DISPLAY = { fontFamily: "'Cinzel', serif" };
const BODY = { fontFamily: "'Raleway', sans-serif" };

const GEMS = [
  {
    name: "Blue Sapphire",
    origin: "Naththandiya, Sri Lanka",
    description: "Our finest Ceylon blue sapphires, celebrated for their velvety cornflower hue, unmatched depth, and exceptional brilliance.",
    photo: img("1613843351058-1dd06fda7c02", 600, 720),
    glow: "#1a4ca8",
  },
  {
    name: "Padparadscha",
    origin: "Ratnapura, Sri Lanka",
    description: "The world's rarest sapphire — a prized lotus-pink and sunset-orange fusion found only in the soils of Ceylon.",
    photo: img("1720287971842-d47531575136", 600, 720),
    glow: "#c0622a",
  },
  {
    name: "Star Ruby",
    origin: "Elahera, Sri Lanka",
    description: "Natural asterism creates a mesmerising six-rayed star across a deep pigeon-blood red cabochon under a single light source.",
    photo: img("1551122102-63cd339bfaab", 600, 720),
    glow: "#8b1a2a",
  },
  {
    name: "Alexandrite",
    origin: "Ratnapura, Sri Lanka",
    description: "The colour-change miracle — emerald green by daylight and ruby red by incandescent candlelight. Nature at its most theatrical.",
    photo: img("1592317295760-5c1f677dfc78", 600, 720),
    glow: "#1e5c32",
  },
  {
    name: "Ceylon Spinel",
    origin: "Naththandiya, Sri Lanka",
    description: "Vibrant, brilliantly refractive spinels in red, blue, violet, and flamingo pink — increasingly prized by top collectors.",
    photo: img("1698510884911-92772074585c", 600, 720),
    glow: "#6b1a60",
  },
  {
    name: "Cat's Eye Chrysoberyl",
    origin: "Kandy, Sri Lanka",
    description: "A rare chatoyant gem displaying a silken band of luminous light gliding across its surface — the eternal eye of the earth.",
    photo: img("1667419942023-accb4846ddb4", 600, 720),
    glow: "#7a6a1a",
  },
];

const FEATURED = [
  {
    name: "Royal Blue Sapphire",
    carat: "12.45 ct",
    origin: "Ceylon",
    cut: "Oval Brilliant",
    clarity: "Eye Clean",
    cert: "GIA Certified",
    photo: img("1613843351058-1dd06fda7c02", 800, 960),
  },
  {
    name: "Unheated Star Ruby",
    carat: "7.82 ct",
    origin: "Elahera",
    cut: "Cabochon",
    clarity: "Translucent",
    cert: "AGL Certified",
    photo: img("1599643477877-530eb83abc8e", 800, 960),
  },
  {
    name: "Padparadscha Sapphire",
    carat: "5.16 ct",
    origin: "Ratnapura",
    cut: "Cushion Mixed",
    clarity: "VVS",
    cert: "Gübelin Certified",
    photo: img("1606623546924-a4f3ae5ea3e8", 800, 960),
  },
];

const TESTIMONIALS = [
  {
    name: "James Thornton",
    location: "London, UK",
    text: "Mihansa supplied the centrepiece sapphire for my wife's engagement ring. The stone is extraordinary — the colour is unlike anything I had seen. Impeccably certified and delivered with immense care.",
  },
  {
    name: "Ananya Krishnamurthy",
    location: "Singapore",
    text: "I have been collecting Ceylon sapphires for over a decade. Mihansa's stones are consistently exceptional. The provenance documentation and international certification give absolute confidence.",
  },
  {
    name: "Marc Beaumont",
    location: "Geneva, Switzerland",
    text: "As a jeweller sourcing gems for high-end clients, trust is paramount. Mihansa delivers exactly what is described — no surprises, no disappointments. A true and enduring partner.",
  },
];

const PILLARS = [
  {
    Icon: Award,
    title: "Internationally Certified",
    desc: "Every stone is accompanied by laboratory certification from GIA, AGL, or Gübelin — your irrefutable guarantee of quality and provenance.",
  },
  {
    Icon: Shield,
    title: "Ethically Sourced",
    desc: "All gems are responsibly mined and traded under fair practices, actively supporting the artisan mining communities of Naththandiya.",
  },
  {
    Icon: Gem,
    title: "Expert Gemologists",
    desc: "Our certified gemologists hand-select each stone for colour saturation, natural beauty, and clarity before it is offered to you.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 } as Record<string, unknown>,
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const delay = (i: number) => ({
  ...fadeUp,
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
});

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 my-2">
      <div className="h-px w-10 bg-[#c9a84c]/40" />
      <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]" />
      <div className="h-px w-10 bg-[#c9a84c]/40" />
    </div>
  );
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [navOpen]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" style={{ ...BODY, scrollBehavior: "smooth" }}>

      {/* ── NAV ── */}
      <nav
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          background: scrolled || navOpen ? "rgba(7,9,15,0.97)" : "transparent",
          backdropFilter: scrolled || navOpen ? "blur(18px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.1)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-[68px] sm:h-20">
          <img src={logoImg} alt="Mihansa Gems" className="h-12 w-12 sm:h-14 sm:w-14 object-contain" />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {["Collections", "Heritage", "Certification", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-[11px] tracking-[0.14em] uppercase text-[#c9a84c]/70 hover:text-[#c9a84c] transition-colors duration-300"
                style={DISPLAY}
              >
                {l}
              </a>
            ))}
          </div>

          <button
            className="hidden md:block px-6 py-2.5 border border-[#c9a84c] text-[#c9a84c] text-[10px] tracking-[0.18em] uppercase hover:bg-[#c9a84c] hover:text-[#07090f] transition-all duration-300"
            style={DISPLAY}
          >
            Enquire Now
          </button>

          {/* Mobile hamburger — large touch target */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 text-[#c9a84c] -mr-2"
            onClick={() => setNavOpen((v) => !v)}
            aria-label={navOpen ? "Close menu" : "Open menu"}
          >
            {navOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden border-t"
              style={{ background: "rgba(7,9,15,0.98)", borderColor: "rgba(201,168,76,0.1)" }}
            >
              <div className="px-6 pt-6 pb-8 flex flex-col gap-1">
                {["Collections", "Heritage", "Certification", "Contact"].map((l) => (
                  <a
                    key={l}
                    href={`#${l.toLowerCase()}`}
                    onClick={() => setNavOpen(false)}
                    className="flex items-center py-4 text-sm tracking-[0.18em] uppercase text-[#c9a84c]/80 hover:text-[#c9a84c] transition-colors border-b"
                    style={{ ...DISPLAY, borderColor: "rgba(201,168,76,0.07)" }}
                  >
                    {l}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setNavOpen(false)}
                  className="mt-6 flex items-center justify-center py-4 bg-[#c9a84c] text-[#07090f] text-[10px] tracking-[0.2em] uppercase font-semibold"
                  style={DISPLAY}
                >
                  Enquire Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] sm:min-h-[700px] flex items-center justify-center overflow-hidden">
        <picture className="absolute inset-0 block w-full h-full">
          <source media="(min-width: 640px)" srcSet={heroDesktop} />
          <img
            src={heroMobile}
            alt="Ceylon blue sapphires on ancient rock with Sigiriya at golden hour"
            className="w-full h-full object-cover object-center scale-[1.06]"
            style={{ filter: "brightness(0.52) saturate(1.05)" }}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090f]/70 via-transparent to-[#07090f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090f]/60 via-transparent to-[#07090f]/30" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
          <div
            className="w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full opacity-[0.07]"
            style={{ background: "radial-gradient(circle, #c9a84c 0%, transparent 68%)" }}
          />
        </div>

        <div className="relative z-10 text-center px-5 sm:px-8 max-w-4xl mx-auto w-full">
          <motion.p
            {...delay(0)}
            className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.4em] uppercase text-[#c9a84c] mb-6 sm:mb-7"
            style={DISPLAY}
          >
            Natural Sapphires · Naththandiya · Sri Lanka
          </motion.p>

          <motion.h1
            {...delay(1)}
            className="text-[42px] sm:text-5xl lg:text-[82px] font-light text-[#f0e8d0] leading-[1.06] mb-7 sm:mb-9"
            style={{ ...DISPLAY, fontWeight: 400 }}
          >
            Treasures Born<br />
            <em className="not-italic text-[#c9a84c]">from Ceylon</em>
          </motion.h1>

          <motion.div {...delay(2)}>
            <Divider />
          </motion.div>

          <motion.p
            {...delay(3)}
            className="text-sm sm:text-base lg:text-lg text-[#f0e8d0]/65 max-w-sm sm:max-w-xl mx-auto mt-6 sm:mt-7 mb-9 sm:mb-12 leading-7 sm:leading-8 font-light"
          >
            For generations, Mihansa Gems has brought the world's most coveted Ceylon
            sapphires, rubies, and rare stones directly from the heart of Sri Lanka.
          </motion.p>

          <motion.div
            {...delay(4)}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-0"
          >
            <a
              href="#collections"
              className="flex items-center justify-center px-8 py-4 sm:py-4 bg-[#c9a84c] text-[#07090f] text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#dbbe6a] transition-colors duration-300 min-h-[52px]"
              style={DISPLAY}
            >
              View Collections
            </a>
            <a
              href="#heritage"
              className="flex items-center justify-center px-8 py-4 border border-[#c9a84c]/50 text-[#c9a84c] text-[10px] tracking-[0.2em] uppercase hover:border-[#c9a84c] hover:bg-[#c9a84c]/5 transition-all duration-300 min-h-[52px]"
              style={DISPLAY}
            >
              Our Heritage
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 pointer-events-none">
          <div className="w-px h-8 sm:h-10 bg-[#c9a84c] animate-pulse" />
          <p className="text-[#c9a84c] text-[9px] tracking-[0.35em] uppercase" style={DISPLAY}>Scroll</p>
        </div>
      </section>

      {/* ── COLLECTIONS ── */}
      <section id="collections" className="py-16 sm:py-24 md:py-28 px-5 sm:px-6 max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-[9px] sm:text-[10px] tracking-[0.35em] sm:tracking-[0.4em] text-[#c9a84c] uppercase mb-3 sm:mb-4" style={DISPLAY}>
            Curated Selections
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#f0e8d0] font-light mb-4 sm:mb-5" style={DISPLAY}>
            Our Gem Collections
          </h2>
          <Divider />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {GEMS.map((gem, i) => (
            <motion.div
              key={gem.name}
              {...delay(i * 0.1)}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
              className="group relative overflow-hidden border bg-card cursor-pointer"
              style={{ borderColor: "rgba(201,168,76,0.12)" }}
            >
              <div className="relative h-60 sm:h-72 overflow-hidden">
                <img
                  src={gem.photo}
                  alt={gem.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1125] via-[#0d1125]/20 to-transparent" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 80%, ${gem.glow}, transparent 70%)` }}
                />
              </div>
              <div className="p-5 sm:p-6 pb-6 sm:pb-7">
                <p className="text-[9px] tracking-[0.3em] text-[#c9a84c]/65 uppercase mb-2" style={DISPLAY}>
                  {gem.origin}
                </p>
                <h3 className="text-lg sm:text-xl text-[#f0e8d0] font-light mb-2.5 sm:mb-3" style={DISPLAY}>
                  {gem.name}
                </h3>
                <p className="text-sm text-[#7b82a0] leading-relaxed font-light">
                  {gem.description}
                </p>
                {/* Always visible on mobile, hover-reveal on desktop */}
                <div
                  className="mt-4 sm:mt-5 flex items-center gap-1.5 text-[#c9a84c] text-[10px] tracking-widest uppercase sm:opacity-0 sm:translate-y-1 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300"
                  style={DISPLAY}
                >
                  Enquire <ChevronRight size={13} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FEATURED GEMS ── */}
      <section id="featured" className="py-16 sm:py-20 md:py-24 bg-[#06080e]">
        <div className="px-5 sm:px-6 max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="text-[9px] sm:text-[10px] tracking-[0.35em] sm:tracking-[0.4em] text-[#c9a84c] uppercase mb-3 sm:mb-4" style={DISPLAY}>
              Exceptional Pieces
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#f0e8d0] font-light mb-4 sm:mb-5" style={DISPLAY}>
              Rare &amp; Notable Gems
            </h2>
            <Divider />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-7">
            {FEATURED.map((gem, i) => (
              <motion.div
                key={gem.name}
                {...delay(i * 0.12)}
                className="group border bg-card overflow-hidden"
                style={{ borderColor: "rgba(201,168,76,0.12)" }}
              >
                <div className="relative h-72 sm:h-[340px] overflow-hidden">
                  <img
                    src={gem.photo}
                    alt={gem.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1125]/95 via-[#0d1125]/30 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="text-[9px] tracking-widest text-[#c9a84c] uppercase border border-[#c9a84c]/40 px-3 py-1"
                      style={DISPLAY}
                    >
                      {gem.cert}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-lg sm:text-xl text-[#f0e8d0] font-light mb-4 sm:mb-5" style={DISPLAY}>
                    {gem.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-4 sm:gap-x-6 mb-5 sm:mb-6">
                    {(
                      [
                        ["Carat Weight", gem.carat],
                        ["Origin", gem.origin],
                        ["Cut", gem.cut],
                        ["Clarity", gem.clarity],
                      ] as [string, string][]
                    ).map(([label, val]) => (
                      <div key={label}>
                        <p className="text-[9px] text-[#c9a84c]/55 tracking-widest uppercase mb-0.5" style={DISPLAY}>
                          {label}
                        </p>
                        <p className="text-sm text-[#f0e8d0]/80 font-light">{val}</p>
                      </div>
                    ))}
                  </div>
                  <div
                    className="flex items-center justify-between pt-4 sm:pt-5 border-t"
                    style={{ borderColor: "rgba(201,168,76,0.1)" }}
                  >
                    <span className="text-[#c9a84c] text-sm" style={DISPLAY}>Price on Request</span>
                    <button
                      className="text-[9px] tracking-widest uppercase text-[#c9a84c] border border-[#c9a84c]/30 px-4 py-2.5 hover:bg-[#c9a84c] hover:text-[#07090f] transition-all duration-300 min-h-[40px]"
                      style={DISPLAY}
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERITAGE ── */}
      <section id="heritage" className="py-16 sm:py-24 md:py-28 px-5 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-24 items-center">

          {/* Image column — floating stat card goes below image on mobile, absolute on lg */}
          <motion.div {...fadeUp} className="relative lg:mb-10">
            <div className="relative overflow-hidden">
              <img
                src={img("1770795263316-f302a878ee64", 900, 1000)}
                alt="The craftsmanship behind Mihansa Gems"
                className="w-full h-[340px] sm:h-[460px] lg:h-[560px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#07090f]/70 via-transparent to-transparent" />
            </div>
            {/* Stat card: inline block on mobile, absolutely positioned on lg */}
            <div
              className="mt-4 lg:mt-0 lg:absolute lg:-bottom-5 lg:-right-10 border p-5 sm:p-6 lg:p-7 flex lg:block items-center gap-5 lg:gap-0 w-full lg:w-52 bg-[#0d1125]"
              style={{ borderColor: "rgba(201,168,76,0.2)" }}
            >
              <p className="text-3xl sm:text-4xl text-[#c9a84c] font-light lg:mb-1.5" style={DISPLAY}>
                30+
              </p>
              <p className="text-[9px] text-[#f0e8d0]/55 tracking-[0.22em] uppercase leading-snug" style={DISPLAY}>
                Years of Gem Excellence
              </p>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div {...delay(1)}>
            <p className="text-[9px] sm:text-[10px] tracking-[0.35em] sm:tracking-[0.4em] text-[#c9a84c] uppercase mb-4 sm:mb-5" style={DISPLAY}>
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#f0e8d0] font-light leading-tight mb-6 sm:mb-8" style={DISPLAY}>
              From the Heart<br />of Ceylon
            </h2>
            <div className="h-px w-14 bg-[#c9a84c]/35 mb-7 sm:mb-9" />
            <p className="text-[#f0e8d0]/60 leading-7 sm:leading-8 font-light mb-5 sm:mb-6 text-[14px] sm:text-[15px]">
              Nestled in Naththandiya — Sri Lanka's hidden gem corridor — Mihansa Gems has
              spent over three decades sourcing the world's most exceptional natural sapphires
              and rare stones. Our deep roots in the region afford us unparalleled access to
              unheated, internationally certified stones of extraordinary character.
            </p>
            <p className="text-[#f0e8d0]/60 leading-7 sm:leading-8 font-light mb-10 sm:mb-12 text-[14px] sm:text-[15px]">
              Ancient traders called this island <em>Ratna-Dweepa</em> — the Isle of Gems —
              and its timeless legacy lives on in every stone we present to the world.
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {(
                [
                  ["500+", "Gems Placed"],
                  ["30+", "Countries"],
                  ["100%", "Certified"],
                ] as [string, string][]
              ).map(([num, label]) => (
                <div key={label} className="border-t pt-4" style={{ borderColor: "rgba(201,168,76,0.2)" }}>
                  <p className="text-xl sm:text-2xl text-[#c9a84c] font-light mb-1" style={DISPLAY}>{num}</p>
                  <p className="text-[8px] sm:text-[9px] text-[#f0e8d0]/45 tracking-widest uppercase leading-snug" style={DISPLAY}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── THE PROMISE ── */}
      <section id="certification" className="py-16 sm:py-20 md:py-24 bg-[#06080e]">
        <div className="px-5 sm:px-6 max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="text-[9px] sm:text-[10px] tracking-[0.35em] sm:tracking-[0.4em] text-[#c9a84c] uppercase mb-3 sm:mb-4" style={DISPLAY}>
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#f0e8d0] font-light mb-4 sm:mb-5" style={DISPLAY}>
              The Mihansa Promise
            </h2>
            <Divider />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {PILLARS.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...delay(i * 0.12)}
                className="group text-center p-7 sm:p-8 md:p-9 border bg-card hover:border-[rgba(201,168,76,0.35)] transition-colors duration-500"
                style={{ borderColor: "rgba(201,168,76,0.1)" }}
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 border flex items-center justify-center mx-auto mb-5 sm:mb-6 transition-colors duration-500 group-hover:border-[rgba(201,168,76,0.55)]"
                  style={{ borderColor: "rgba(201,168,76,0.25)" }}
                >
                  <Icon size={20} className="text-[#c9a84c]" strokeWidth={1.25} />
                </div>
                <h3 className="text-base sm:text-lg text-[#f0e8d0] font-light mb-3 sm:mb-4" style={DISPLAY}>
                  {title}
                </h3>
                <p className="text-sm text-[#7b82a0] leading-relaxed font-light">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 sm:py-24 md:py-28 px-5 sm:px-6 max-w-6xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-[9px] sm:text-[10px] tracking-[0.35em] sm:tracking-[0.4em] text-[#c9a84c] uppercase mb-3 sm:mb-4" style={DISPLAY}>
            Client Voices
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#f0e8d0] font-light mb-4 sm:mb-5" style={DISPLAY}>
            Trusted Worldwide
          </h2>
          <Divider />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              {...delay(i * 0.12)}
              className="p-6 sm:p-8 border bg-card"
              style={{ borderColor: "rgba(201,168,76,0.1)" }}
            >
              <div className="flex gap-0.5 mb-5 sm:mb-6">
                {Array(5).fill(0).map((_, j) => (
                  <Star key={j} size={11} className="text-[#c9a84c] fill-[#c9a84c]" />
                ))}
              </div>
              <p className="text-[#f0e8d0]/65 leading-7 font-light italic text-sm mb-6 sm:mb-8">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t pt-4 sm:pt-5" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
                <p className="text-[#f0e8d0] text-sm" style={DISPLAY}>{t.name}</p>
                <p className="text-[#c9a84c]/55 text-[9px] tracking-widest uppercase mt-1" style={DISPLAY}>
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="relative py-24 sm:py-32 md:py-36 overflow-hidden">
        <img
          src={img("1698510884911-92772074585c", 1920, 700)}
          alt="Mihansa gem collection"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.14) saturate(1.5)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090f]/80 via-[#07090f]/50 to-[#07090f]/80" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
          <div
            className="w-[600px] h-[300px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(ellipse, #c9a84c 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative z-10 px-5 sm:px-8 max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-[9px] sm:text-[10px] tracking-[0.35em] sm:tracking-[0.4em] text-[#c9a84c] uppercase mb-4 sm:mb-5" style={DISPLAY}>
              Begin Your Journey
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#f0e8d0] font-light leading-tight mb-5 sm:mb-6" style={DISPLAY}>
              Find Your Perfect Gem
            </h2>
            <Divider />
            <p className="text-[#f0e8d0]/55 mt-6 sm:mt-7 mb-9 sm:mb-11 leading-7 sm:leading-8 font-light text-sm sm:text-base">
              Whether you seek a centrepiece sapphire, a rare padparadscha, or an
              investment-grade stone, our gemologists are ready to guide you.
            </p>
            {/* Stacked on mobile, row on sm+ */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:flex-1 sm:max-w-[260px] bg-transparent border px-5 py-4 text-[#f0e8d0] text-sm placeholder:text-[#f0e8d0]/28 focus:outline-none transition-colors min-h-[52px]"
                style={{
                  borderColor: "rgba(201,168,76,0.3)",
                  fontFamily: "'Raleway', sans-serif",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.3)")}
              />
              <button
                className="w-full sm:w-auto px-7 py-4 bg-[#c9a84c] text-[#07090f] text-[10px] tracking-[0.18em] uppercase font-semibold hover:bg-[#dbbe6a] transition-colors duration-300 whitespace-nowrap min-h-[52px]"
                style={DISPLAY}
              >
                Request Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="bg-[#04060b] border-t px-5 sm:px-8 py-12 sm:py-16"
        style={{ borderColor: "rgba(201,168,76,0.08)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
            {/* Brand — full width on mobile */}
            <div className="col-span-2 md:col-span-2">
              <img src={logoImg} alt="Mihansa Gems" className="h-14 w-14 object-contain mb-4 sm:mb-5" />
              <p className="text-[#f0e8d0]/45 text-sm leading-relaxed font-light max-w-xs">
                Natural sapphires from Naththandiya, Sri Lanka. Premium certified gemstones for
                discerning collectors and jewellers worldwide.
              </p>
            </div>
            {/* Navigate */}
            <div>
              <p className="text-[9px] tracking-widest uppercase text-[#c9a84c] mb-4 sm:mb-5" style={DISPLAY}>
                Navigate
              </p>
              {["Collections", "Heritage", "Certifications", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="block text-sm text-[#f0e8d0]/45 hover:text-[#c9a84c] transition-colors mb-3 font-light py-0.5"
                >
                  {l}
                </a>
              ))}
            </div>
            {/* Contact */}
            <div>
              <p className="text-[9px] tracking-widest uppercase text-[#c9a84c] mb-4 sm:mb-5" style={DISPLAY}>
                Contact
              </p>
              <div className="flex items-start gap-2.5 mb-4">
                <MapPin size={13} className="text-[#c9a84c]/55 mt-0.5 shrink-0" strokeWidth={1.5} />
                <p className="text-sm text-[#f0e8d0]/45 font-light leading-relaxed">
                  Naththandiya,<br />Puttalam District,<br />Sri Lanka
                </p>
              </div>
              <div className="flex items-center gap-2.5 mb-4">
                <Phone size={13} className="text-[#c9a84c]/55 shrink-0" strokeWidth={1.5} />
                <p className="text-sm text-[#f0e8d0]/45 font-light">+94 77 XXX XXXX</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={13} className="text-[#c9a84c]/55 shrink-0" strokeWidth={1.5} />
                <p className="text-[13px] text-[#f0e8d0]/45 font-light break-all">info@mihansagems.com</p>
              </div>
            </div>
          </div>

          <div
            className="border-t pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3"
            style={{ borderColor: "rgba(201,168,76,0.08)" }}
          >
            <p className="text-[#f0e8d0]/22 text-xs font-light text-center sm:text-left">
              © 2024 Mihansa Gems. All rights reserved.
            </p>
            <p className="text-[#f0e8d0]/22 text-[10px] text-center sm:text-right" style={DISPLAY}>
              Natural Sapphires · Naththandiya · Ceylon
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
