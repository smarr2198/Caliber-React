import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Wrench,
  Sparkles,
  Radio,
  Boxes,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Truck,
  ShieldCheck,
} from "lucide-react";

import heroImage from "../assets/caliberHero3.png";
import aboutImage from "../assets/grayLiftedOutside.jpeg";
import companyLogo from "../assets/caliberLogo1.png";
import goodYearLogo from "../assets/partners/goodYearLogo.jpg";
import firestoneLogo from "../assets/partners/firestoneLogo.jpg";
import bfGoodrichLogo from "../assets/partners/bfGoodrichLogo.jpg";
import hankookLogo from "../assets/partners/hankookLogo.jpg";
import kellyTiresLogo from "../assets/partners/kellyTiresLogo.jpg";

// Gallery images
import gallery1 from "../assets/blackGMC_NoTires.jpeg";
import gallery2 from "../assets/blackGMCshop.jpeg";
import gallery3 from "../assets/blackLifted350.jpeg";
import gallery4 from "../assets/closeLiftKit.jpeg";
import gallery5 from "../assets/liftKit.jpeg";
import gallery6 from "../assets/silverLifted250_shop.jpeg";
import gallery7 from "../assets/undercarriage.jpeg";
import gallery8 from "../assets/whiteGMCshop.jpeg";

// Store preview
import storePreview from "../assets/CaliberF1_Screenshot.jpg";

// Category images
import liftKitCategory from "../assets/liftKitCategory.jpg";
import shocksCategory from "../assets/shocksCategory.webp";
import diffCoverCategory from "../assets/diffCoverCategory.jpg";
import bumperCategory from "../assets/bumperCategory.jpeg";
import winchCategory from "../assets/winchCategory.webp";



// ------------------------------------------------------------
// Caliber Marine & Automotive — Single-file React Site
// Dark theme with blue/red accents. Responsive, accessible, modern.
// Sections: Hero, Services, Packages, About, Partners, Gallery, Contact.
// ------------------------------------------------------------

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Partners", href: "#partners" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    key: "lift-kits",
    title: "Lift Kits",
    icon: <Truck className="w-6 h-6" aria-hidden />,
    items: [
      "Suspension lifts",
      "Leveling kits",
      "Body Lifts",
      "Tire & Wheel Packages",
    ],
  },
  {
    key: "detailing",
    title: "Detailing",
    icon: <Sparkles className="w-6 h-6" aria-hidden />,
    items: [
      "Paint Correction",
      "Exterior Wash & Wax",
      "Ceramic Coating",
      "Color Match/Blackout",
    ],
  },
  {
    key: "electronics",
    title: "Electronics",
    icon: <Radio className="w-6 h-6" aria-hidden />,
    items: [
      "12v Electronics",
      "Lighting Affects/Accents",
      "Power Steps (AMP/Lumastep)",
      "Headlamp Replacement",
    ],
  },
  {
    key: "other",
    title: "Other",
    icon: <Wrench className="w-6 h-6" aria-hidden />,
    items: [
      "Cold Air Intakes",
      "Exhaust Downpipes",
      "Diff. Covers (AMP/Lumastep)",
      "Train Horns",
      "Tonneau Covers",
    ],
  },
];

const PACKAGES = [
  {
    name: "Marine Shine+",
    price: "$399",
    description:
      "Full wash, gelcoat decon, single-stage polish, interior wipe-down, glass & metal brightening.",
    perks: ["2–3 hr turnaround", "Lake-ready finish", "UV sealant"],
  },
  {
    name: "Street Style Lift",
    price: "$1,899",
    description:
      "2–3in suspension lift kit with alignment, hardware, and post-install check.",
    perks: ["Warranty friendly", "Pro alignment", "Ride quality focused"],
  },
  {
    name: "Sound & Lights",
    price: "$999",
    description:
      "4-speaker upgrade with compact amp and RGB underglow/ courtesy lighting.",
    perks: ["Clean wiring", "App control", "Night visibility"],
  },
  {
    name: "Showroom Detail",
    price: "$299",
    description:
      "Interior steam, shampoo, leather conditioning, exterior decon + sealant.",
    perks: ["Pet-safe", "Odor neutralizer", "Streak-free glass"],
  },
];

const PARTNERS = [
  { name: "Goodyear", logo: goodYearLogo },
  { name: "Firestone", logo: firestoneLogo },
  { name: "BFGoodrich", logo: bfGoodrichLogo },
  { name: "Hankook", logo: hankookLogo },
  { name: "Kelly Tires", logo: kellyTiresLogo },
];

const GALLERY_IMAGES = [
  { id: 1, src: gallery1, alt: "Black GMC truck without tires" },
  { id: 2, src: gallery2, alt: "Black GMC shop work" },
  { id: 3, src: gallery3, alt: "Black lifted 350 truck" },
  { id: 4, src: gallery4, alt: "Close up lift kit installation" },
  { id: 5, src: gallery5, alt: "Lift kit components" },
  { id: 6, src: gallery6, alt: "Silver lifted 250 in shop" },
  { id: 7, src: gallery7, alt: "Undercarriage work" },
  { id: 8, src: gallery8, alt: "White GMC shop work" },
];

function useScrollHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`py-20 ${className}`}>{children}</section>
);

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.04)] ${className}`}
  >
    {children}
  </div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/70">
    {children}
  </span>
);

const GradientText = ({ children, className = "" }) => (
  <span className={`text-[#800108] ${className}`} style={{
    textShadow: `-1px -1px 0 #aba296, 1px -1px 0 #aba296, -1px 1px 0 #aba296, 1px 1px 0 #aba296`
  }}>
    {children}
  </span>
);

export default function CaliberSite() {
  const scrolled = useScrollHeader();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add Web3Forms access key
    formData.append("access_key", "a6f3226c-7bb9-4cb0-880d-57195e50da62");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        alert("Thank you for your inquiry! We'll get back to you soon.");
        form.reset();
      } else {
        alert("Oops! Something went wrong. Please try again or email us directly.");
      }
    } catch (error) {
      alert("Oops! Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <div className="min-h-screen scroll-smooth bg-[#0b0f14] text-white">
      {/* Backdrop accents */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#800108]/20 via-[#aba296]/10 to-[#800108]/15 blur-2xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-[#aba296]/15 blur-2xl" />
      </div>

      {/* Header */}
      <header
        className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-[#cfc8bf]/90 via-[#cfc8bf]/60 to-transparent backdrop-blur-md"
      >
        <Container className="flex items-center justify-between py-2 sm:py-3 md:py-4">
          <a href="#home" className="flex items-center">
            <img 
              src={companyLogo} 
              alt="Caliber Marine & Automotive" 
              className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto rounded-lg border-2 border-white/20 shadow-lg"
            />
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-lg font-semibold text-black transition hover:text-[#800108]"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-[#800108] to-[#aba296] px-4 py-2 text-sm font-medium shadow hover:opacity-95"
            >
              Contact Us
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen((s) => !s)}
            className="rounded-xl border border-white/10 p-2 md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden">
            <Container>
              <div className="mb-4 grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-4">
                {NAV_ITEMS.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-2 py-2 text-lg font-semibold text-black hover:bg-white/5 hover:text-[#800108]"
                  >
                    {n.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg bg-gradient-to-r from-[#800108] to-[#aba296] px-3 py-2 text-center font-medium"
                >
                  Contact Us
                </a>
              </div>
            </Container>
          </div>
        )}
      </header>

      {/* Hero - Clean Modern Style */}
      <Section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>

      {/* Main Content */}
      <Container className="relative z-10 flex items-center justify-center h-full pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto px-8"
        >
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 sm:mb-8"
            >
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-4 sm:mb-6 px-2" style={{
                textShadow: `-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 20px rgba(0,0,0,0.7)`
              }}>
                <span className="block mb-2 sm:mb-3">Shop Thousands of My</span>
                <span className="block mb-2 sm:mb-3">Products and Services on</span>
                <span className="text-[#fff200] font-black block" style={{
                  textShadow: `-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 20px rgba(255, 242, 0, 0.5)`
                }}>
                  Fuel1Direct.com
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4"
            >
              Browse our extensive catalog of marine electronics, automotive parts, tools, and accessories. 
              From lift kits to marine supplies, find everything you need for your next project.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8 sm:mb-12 flex flex-wrap gap-4 justify-center"
            >
              <a
                href="https://fuel1direct.com/seller/calibermarineandauto-com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-[#800108] to-[#aba296] hover:from-[#800108]/90 hover:to-[#aba296]/90 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl font-bold text-base sm:text-lg md:text-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-[#800108]/30"
              >
                <span className="hidden xs:inline">Visit Fuel 1 Direct Store</span>
                <span className="xs:hidden">Visit Store</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#categories"
                className="group inline-flex items-center gap-3 sm:gap-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl font-bold text-base sm:text-lg md:text-xl transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                View Categories
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-white/80 px-4"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#aba296]/20">
                  <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-[#aba296]" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white">Certified Technicians</p>
                  <p className="text-xs text-white/60">Expert Service</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#800108]/20">
                  <Wrench className="h-5 w-5 sm:h-6 sm:w-6 text-[#800108]" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white">Premium Parts</p>
                  <p className="text-xs text-white/60">Quality Guaranteed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>

      </Section>

      {/* Category Catalog */}
      <Section id="categories" className="bg-white/5 py-16">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Shop By <span className="text-[#800108]" style={{
                textShadow: `-1px -1px 0 #aba296, 1px -1px 0 #aba296, -1px 1px 0 #aba296, 1px 1px 0 #aba296`
              }}>Category</span>
            </h2>
            <p className="text-white/70 text-lg">Explore our most popular product categories</p>
          </div>

          {/* Mobile: 2 cols continuous, Desktop: 3 cols first row + 2 cols centered second row */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:hidden gap-4 sm:gap-6">
            {/* Lift Kits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="group hover:border-[#800108]/50 transition-all duration-300 overflow-hidden h-full">
                <div className="aspect-square overflow-hidden rounded-lg sm:rounded-xl mb-3 sm:mb-4 bg-white">
                  <img 
                    src={liftKitCategory} 
                    alt="Lift Kits" 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2 text-white">Lift Kits</h3>
                <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                  Professional suspension and leveling kits for all truck models
                </p>
                <a
                  href="https://fuel1direct.com/seller/calibermarineandauto-com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 sm:gap-2 text-[#aba296] hover:text-white transition-colors text-xs sm:text-sm font-semibold"
                >
                  Shop Now <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              </Card>
            </motion.div>

            {/* Winches */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="group hover:border-[#800108]/50 transition-all duration-300 overflow-hidden h-full">
                <div className="aspect-square overflow-hidden rounded-lg sm:rounded-xl mb-3 sm:mb-4 bg-white">
                  <img 
                    src={winchCategory} 
                    alt="Winches" 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2 text-white">Winches</h3>
                <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                  Heavy-duty winches for recovery and off-road applications
                </p>
                <a
                  href="https://fuel1direct.com/seller/calibermarineandauto-com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 sm:gap-2 text-[#aba296] hover:text-white transition-colors text-xs sm:text-sm font-semibold"
                >
                  Shop Now <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              </Card>
            </motion.div>

            {/* Bumpers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="group hover:border-[#800108]/50 transition-all duration-300 overflow-hidden h-full">
                <div className="aspect-square overflow-hidden rounded-lg sm:rounded-xl mb-3 sm:mb-4 bg-white">
                  <img 
                    src={bumperCategory} 
                    alt="Bumpers" 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
              </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2 text-white">Bumpers</h3>
                <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                  Custom front and rear bumpers for style and protection
                </p>
                <a
                  href="https://fuel1direct.com/seller/calibermarineandauto-com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 sm:gap-2 text-[#aba296] hover:text-white transition-colors text-xs sm:text-sm font-semibold"
                >
                  Shop Now <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              </Card>
            </motion.div>

            {/* Shocks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="group hover:border-[#800108]/50 transition-all duration-300 overflow-hidden h-full">
                <div className="aspect-square overflow-hidden rounded-lg sm:rounded-xl mb-3 sm:mb-4 bg-white">
                  <img 
                    src={shocksCategory} 
                    alt="Shocks" 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2 text-white">Shocks</h3>
                <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                  High-performance shocks and struts for optimal ride quality
                </p>
                <a
                  href="https://fuel1direct.com/seller/calibermarineandauto-com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 sm:gap-2 text-[#aba296] hover:text-white transition-colors text-xs sm:text-sm font-semibold"
                >
                  Shop Now <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              </Card>
            </motion.div>

            {/* Differential Covers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="group hover:border-[#800108]/50 transition-all duration-300 overflow-hidden h-full">
                <div className="aspect-square overflow-hidden rounded-lg sm:rounded-xl mb-3 sm:mb-4 bg-white">
                  <img 
                    src={diffCoverCategory} 
                    alt="Differential Covers" 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2 text-white">Differential Covers</h3>
                <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                  Protective and stylish differential covers for heavy-duty use
                </p>
                <a
                  href="https://fuel1direct.com/seller/calibermarineandauto-com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 sm:gap-2 text-[#aba296] hover:text-white transition-colors text-xs sm:text-sm font-semibold"
                >
                  Shop Now <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              </Card>
            </motion.div>
              </div>

          {/* Desktop Layout - 3 cols + 2 cols centered */}
          <div className="hidden lg:flex flex-col gap-8">
            {/* First Row - 3 cards */}
            <div className="grid grid-cols-3 gap-8">
              {/* Lift Kits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="group hover:border-[#800108]/50 transition-all duration-300 overflow-hidden h-full">
                  <div className="aspect-square overflow-hidden rounded-xl mb-4 bg-white">
                    <img 
                      src={liftKitCategory} 
                      alt="Lift Kits" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Lift Kits</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Professional suspension and leveling kits for all truck models
                  </p>
                  <a
                    href="https://fuel1direct.com/seller/calibermarineandauto-com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#aba296] hover:text-white transition-colors text-sm font-semibold"
                  >
                    Shop Now <ArrowRight className="h-4 w-4" />
                  </a>
                </Card>
            </motion.div>

              {/* Winches */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="group hover:border-[#800108]/50 transition-all duration-300 overflow-hidden h-full">
                  <div className="aspect-square overflow-hidden rounded-xl mb-4 bg-white">
                    <img 
                      src={winchCategory} 
                      alt="Winches" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Winches</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Heavy-duty winches for recovery and off-road applications
                  </p>
                  <a
                    href="https://fuel1direct.com/seller/calibermarineandauto-com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#aba296] hover:text-white transition-colors text-sm font-semibold"
                  >
                    Shop Now <ArrowRight className="h-4 w-4" />
                  </a>
                </Card>
            </motion.div>

              {/* Bumpers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="group hover:border-[#800108]/50 transition-all duration-300 overflow-hidden h-full">
                  <div className="aspect-square overflow-hidden rounded-xl mb-4 bg-white">
                    <img 
                      src={bumperCategory} 
                      alt="Bumpers" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Bumpers</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Custom front and rear bumpers for style and protection
                  </p>
                  <a
                    href="https://fuel1direct.com/seller/calibermarineandauto-com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#aba296] hover:text-white transition-colors text-sm font-semibold"
                  >
                    Shop Now <ArrowRight className="h-4 w-4" />
                  </a>
                </Card>
            </motion.div>
              </div>

            {/* Second Row - 2 cards centered */}
            <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Shocks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="group hover:border-[#800108]/50 transition-all duration-300 overflow-hidden h-full">
                  <div className="aspect-square overflow-hidden rounded-xl mb-4 bg-white">
                    <img 
                      src={shocksCategory} 
                      alt="Shocks" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Shocks</h3>
                  <p className="text-white/70 text-sm mb-4">
                    High-performance shocks and struts for optimal ride quality
                  </p>
                  <a
                    href="https://fuel1direct.com/seller/calibermarineandauto-com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#aba296] hover:text-white transition-colors text-sm font-semibold"
                  >
                    Shop Now <ArrowRight className="h-4 w-4" />
                  </a>
                </Card>
            </motion.div>

              {/* Differential Covers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card className="group hover:border-[#800108]/50 transition-all duration-300 overflow-hidden h-full">
                  <div className="aspect-square overflow-hidden rounded-xl mb-4 bg-white">
                    <img 
                      src={diffCoverCategory} 
                      alt="Differential Covers" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Differential Covers</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Protective and stylish differential covers for heavy-duty use
                  </p>
                  <a
                    href="https://fuel1direct.com/seller/calibermarineandauto-com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#aba296] hover:text-white transition-colors text-sm font-semibold"
                  >
                    Shop Now <ArrowRight className="h-4 w-4" />
                  </a>
                </Card>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>
      <Section id="services" className="bg-white/5">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold">Services</h2>
              <p className="mt-2 text-white/70">
                Four specialties with full-service options under each.
              </p>
            </div>
            <a href="#contact" className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 md:block">
              Need something custom?
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
            {SERVICES.map((s) => (
              <Card key={s.key}>
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#800108]/20 to-[#aba296]/20 ring-1 ring-white/10">
                      {s.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                  </div>
                </div>
                <ul className="mt-5 grid list-disc gap-2 pl-6 text-white/80 sm:grid-cols-2 sm:pl-6">
                  {s.items.map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Packages / Products */}
      <Section id="packages">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
            <h2 className="text-3xl font-semibold">Featured Packages</h2>
            <p className="mt-2 text-white/70">
              Popular bundles you can promote or link to your store.
            </p>
          </div>
            <a 
              href="https://fuel1direct.com/seller/calibermarineandauto-com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 md:block"
            >
              Shop All Products
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {PACKAGES.map((p) => (
              <Card key={p.name} className="flex flex-col">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                </div>
                <p className="text-white/70">{p.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <Boxes className="h-4 w-4 text-[#aba296]" /> {perk}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          
          {/* Mobile Shop All Products Button */}
          <div className="mt-8 text-center md:hidden">
            <a 
              href="https://fuel1direct.com/seller/calibermarineandauto-com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#800108] to-[#aba296] px-6 py-3 font-medium shadow hover:opacity-95"
            >
              Shop All Products <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </Container>
      </Section>

      {/* Shop */}
      <Section id="shop" className="bg-white/5">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-semibold mb-4">
              View our catalog of over 50,000+ unique products on <span className="text-[#fff200] font-black text-4xl" style={{
                textShadow: `-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000`
              }}>Fuel1Direct.com</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Browse our extensive catalog of marine electronics, automotive parts, tools, and accessories. 
              From lift kits to marine supplies, find everything you need for your next project.
            </p>
            <a 
              href="https://fuel1direct.com/seller/calibermarineandauto-com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#800108] to-[#aba296] px-8 py-4 text-lg font-medium shadow-lg hover:opacity-95 transition-all hover:scale-105"
            >
              Visit Fuel 1 Direct Store <ArrowRight className="h-6 w-6" />
            </a>
          </div>
          
          {/* Embedded Store */}
          <div className="mt-16">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Browse Our Store
              </h3>
            </div>
            
            <div 
              className="relative cursor-pointer group overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
              onClick={() => window.open('https://fuel1direct.com/seller/calibermarineandauto-com/', '_blank', 'noopener,noreferrer')}
            >
              {/* Store Screenshot */}
              <img
                src={storePreview}
                alt="Caliber Marine & Auto Store on Fuel 1 Direct"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-100 scale-95">
                  <div className="bg-gradient-to-r from-[#800108] to-[#aba296] px-8 py-4 rounded-xl shadow-2xl">
                    <div className="flex items-center gap-3 text-white font-semibold text-lg">
                      Click to Visit Store <ArrowRight className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Fallback link */}
            <div className="mt-6 text-center">
              <p className="text-white/60 text-sm mb-4">
                Having trouble viewing the store? 
              </p>
              <a 
                href="https://fuel1direct.com/seller/calibermarineandauto-com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#aba296] hover:text-white transition-colors"
              >
                Open Store in New Tab <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* About */}
      <Section id="about" className="bg-white/5">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-semibold text-[#800108]" style={{
                textShadow: `-1px -1px 0 #aba296, 1px -1px 0 #aba296, -1px 1px 0 #aba296, 1px 1px 0 #aba296`
              }}>About Us</h2>
              <p className="mt-4 text-white/70">
                <b>Versatility & Quality:</b> From diagnostics and repairs to surface restoration (fiberglass, gel-coat, detailing, ceramic coatings), we’ve got you covered.
              </p>
              <p className="mt-4 text-white/70">
                <b>Trusted Expertise:</b> Our track record speaks volumes—with clients across  marine, and high-performance automotive assets.
              </p>
              <p className="mt-4 text-white/70">
                <b>Our Promise:</b> We stand firmly behind our work, aiming to enhance both the form and function of your vessels and vehicles. With Caliber, you’re not just getting service—you’re receiving craftsmanship rooted in integrity.
              </p>
              <p className="mt-4 text-white/70">
                <b>Our Mission:</b> "Preserving your marine and automotive investments—with faith, precision, and integrity." 
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div
                className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border-white/10 bg-cover bg-center shadow-2xl"
                style={{ backgroundImage: `url(${aboutImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0f14]/40 to-transparent" />
                {/* Optional caption — delete if not needed */}
                
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* Partners */}
      <Section id="partners">
        <Container>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Partners</h2>
              <p className="mt-2 text-white/70">Brands we trust & install.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="flex h-28 items-center justify-center rounded-2xl bg-white border border-black/10 p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="w-44 h-16 md:w-56 md:h-20">
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>



            ))}
          </div>
        </Container>
      </Section>

      {/* Gallery / Instagram */}
      <Section id="gallery" className="bg-white/5">
        <Container>
          <div className="mb-6">
              <h2 className="text-3xl font-semibold">Gallery</h2>
          </div>

          {/* Gallery with actual work photos */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {GALLERY_IMAGES.map((g) => (
              <div
                key={g.id}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
              </div>
            ))}
          </div>

          {/* Option B: embed feed from a service like LightWidget/EmbedSocial/Instagram oEmbed */}
          {/*
            <div className="mt-8">
              <iframe
                src="https://lightwidget.com/widgets/your-widget-id.html"
                className="w-full h-[600px] rounded-2xl border border-white/10"
                title="Instagram feed"
                loading="lazy"
              />
            </div>
          */}
        </Container>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <Container>
          <div className="mb-10">
            <h2 className="text-3xl font-semibold">Contact Us</h2>
            <p className="mt-2 text-white/70">Tell us about your build or service needs.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <form onSubmit={handleContactSubmit} className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-1 block text-sm text-white/80">Full Name</label>
                  <input id="name" name="name" required className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40" placeholder="Jane Doe" />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-1 block text-sm text-white/80">Email</label>
                  <input id="email" name="email" type="email" required className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40" placeholder="you@example.com" />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="mb-1 block text-sm text-white/80">Phone</label>
                  <input id="phone" name="phone" className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40" placeholder="(555) 000-0000" />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="service" className="mb-1 block text-sm text-white/80">Service</label>
                  <select 
                    id="service" 
                    name="service" 
                    className="w-full rounded-xl border border-white/15 bg-[#212529] px-3 py-2 outline-none text-white"
                    style={{
                      backgroundColor: '#212529',
                      color: 'white'
                    }}
                  >
                    {SERVICES.map((s) => (
                      <option 
                        key={s.key} 
                        value={s.title} 
                        style={{ backgroundColor: '#212529', color: 'white' }}
                      >
                        {s.title}
                      </option>
                    ))}
                    <option 
                      value="General" 
                      style={{ backgroundColor: '#212529', color: 'white' }}
                    >
                      General
                    </option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1 block text-sm text-white/80">Message</label>
                  <textarea id="message" name="message" rows={5} className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40" placeholder="Tell us about your vehicle/boat, goals, timeline..." />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#800108] to-[#aba296] px-5 py-3 font-medium hover:opacity-95">
                    Send Inquiry <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </Card>

            <Card className="self-start">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#aba296]/20">
                    <MapPin className="h-6 w-6 text-[#aba296]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Location</p>
                    <p className="font-medium text-white">Punta Gorda, FL</p>
                  </div>
                </div>
                <div className="h-px bg-white/10"></div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#800108]/20">
                    <Mail className="h-6 w-6 text-[#800108]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Email</p>
                    <a href="mailto:preservingyourinvestments@gmail.com" className="font-medium text-white hover:text-[#aba296] transition">
                      preservingyourinvestments@gmail.com
                    </a>
                  </div>
                  </div>
                </div>
              </Card>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/10 bg-black/20">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} Caliber Marine & Automotive. All rights reserved.</p>
            <div className="flex items-center gap-4 text-white/60">
              <a href="#privacy" className="hover:text-white">Privacy</a>
              <a href="#terms" className="hover:text-white">Terms</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
