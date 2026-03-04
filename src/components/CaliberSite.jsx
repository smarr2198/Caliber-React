import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  Truck,
  Wrench,
  X,
  Radio,
} from "lucide-react";

import heroImage from "../assets/truck_beach_hero.png";
import twoTruckHero from "../assets/twoTruckHero.JPG?url";
import caliberTruckHero from "../assets/caliberTruckHero.JPG?url";
import truckFrontHero from "../assets/truckFrontGallery.JPG?url";
import aboutImage from "../assets/malachiTruck.JPG?url";
import companyLogo from "../assets/caliber_truck_logo.png";

import roughCountryLogo from "../assets/partners/roughCountry.jpg";
import goodYearLogo from "../assets/partners/goodYearLogo.jpg";
import firestoneLogo from "../assets/partners/firestoneLogo.jpg";
import bfGoodrichLogo from "../assets/partners/bfGoodrichLogo.jpg";
import hankookLogo from "../assets/partners/hankookLogo.jpg";
import kellyTiresLogo from "../assets/partners/kellyTiresLogo.jpg";

import gallery1 from "../assets/blackGMC_NoTires.jpeg";
import gallery2 from "../assets/blackGMCshop.jpeg";
import gallery3 from "../assets/blackLifted350.jpeg";
import gallery4 from "../assets/closeLiftKit.jpeg";
import gallery5 from "../assets/liftKit.jpeg";
import gallery6 from "../assets/silverLifted250_shop.jpeg";
import gallery7 from "../assets/undercarriage.jpeg";
import gallery8 from "../assets/whiteGMCshop.jpeg";
import gallery9 from "../assets/newGallery1.jpg";
import gallery10 from "../assets/newGallery2.jpg";
import gallery11 from "../assets/newGallery3.jpg";
import gallery12 from "../assets/newGallery4.jpg";
import winchFrontGallery from "../assets/winchFrontGallery.JPG?url";
import corvetteCaliber from "../assets/corvetteCaliber.JPG?url";
import carBodyGallery from "../assets/carBody.JPG?url";
import insideWheelGallery from "../assets/insideWheelGallery.JPG?url";
import partsGallery from "../assets/partsGallery.JPG?url";
import motoCaliber from "../assets/motoCaliber.JPG?url";

import liftKitsCategory from "../assets/liftkit_category_final.png";
import shocksCategory from "../assets/shocks_category.png";
import springsCategory from "../assets/springs_category.png";
import riggingCategory from "../assets/rigging_category.png";
import filtersCategory from "../assets/filters_category.png";
import winchesCategory from "../assets/winches_category.png";
import bodykitCategory from "../assets/bodykit_category.png";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Builder", href: "#builder" },
  { label: "Categories", href: "#shop" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Partners", href: "#partners" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    key: "lift-kits",
    title: "Lift Kits",
    icon: <Truck className="h-5 w-5" aria-hidden />,
    items: ["Suspension lifts", "Leveling kits", "Body lifts", "Tire and wheel packages"],
  },
  {
    key: "detailing",
    title: "Detailing",
    icon: <Sparkles className="h-5 w-5" aria-hidden />,
    items: ["Paint correction", "Exterior wash and wax", "Ceramic coating", "Color match and blackout"],
  },
  {
    key: "electronics",
    title: "Electronics",
    icon: <Radio className="h-5 w-5" aria-hidden />,
    items: ["12v electronics", "Lighting effects and accents", "Power steps", "Headlamp replacement"],
  },
  {
    key: "other",
    title: "Performance",
    icon: <Wrench className="h-5 w-5" aria-hidden />,
    items: ["Cold air intakes", "Exhaust downpipes", "Differential covers", "Train horns"],
  },
];

const CATEGORIES = [
  {
    title: "Lift Kits",
    description: "Suspension lift systems and complete package options.",
    link: "https://fuel1direct.com/seller/calibermarineandauto-com/section/4673/#dokan-vendor-categories-anchor",
    image: liftKitsCategory,
  },
  {
    title: "Shocks & Struts",
    description: "Ride control upgrades tuned for comfort and performance.",
    link: "https://fuel1direct.com/seller/calibermarineandauto-com/section/4674/#dokan-vendor-categories-anchor",
    image: shocksCategory,
  },
  {
    title: "Springs",
    description: "Coil and spring options for stance, load, and control.",
    link: "https://fuel1direct.com/seller/calibermarineandauto-com/section/4675/#dokan-vendor-categories-anchor",
    image: springsCategory,
  },
  {
    title: "Rigging & Steering",
    description: "Core steering and rigging components built to last.",
    link: "https://fuel1direct.com/seller/calibermarineandauto-com/section/5392/#dokan-vendor-categories-anchor",
    image: riggingCategory,
  },
  {
    title: "Air Filters",
    description: "Intake and filtration upgrades for cleaner airflow.",
    link: "https://fuel1direct.com/seller/calibermarineandauto-com/section/4898/#dokan-vendor-categories-anchor",
    image: filtersCategory,
  },
  {
    title: "Winches & Hoists",
    description: "Recovery-ready winches, hoists, and mounting solutions.",
    link: "https://fuel1direct.com/seller/calibermarineandauto-com/section/5597/#dokan-vendor-categories-anchor",
    image: winchesCategory,
  },
  {
    title: "Body Kits & Spoilers",
    description: "Exterior style and aero-inspired body components.",
    link: "https://fuel1direct.com/seller/calibermarineandauto-com/section/5595/#dokan-vendor-categories-anchor",
    image: bodykitCategory,
  },
];

const PARTNERS = [
  { name: "Rough Country", logo: roughCountryLogo },
  { name: "Goodyear", logo: goodYearLogo },
  { name: "Firestone", logo: firestoneLogo },
  { name: "BFGoodrich", logo: bfGoodrichLogo },
  { name: "Hankook", logo: hankookLogo },
  { name: "Kelly Tires", logo: kellyTiresLogo },
];

const GALLERY_IMAGES = [
  { id: 1, src: winchFrontGallery, alt: "Winch front setup" },
  { id: 2, src: corvetteCaliber, alt: "Corvette at Caliber" },
  { id: 3, src: carBodyGallery, alt: "Body work detail" },
  { id: 4, src: insideWheelGallery, alt: "Wheel and suspension detail" },
  { id: 5, src: partsGallery, alt: "Performance parts layout" },
  { id: 6, src: motoCaliber, alt: "Motorcycle at Caliber" },
  { id: 7, src: gallery9, alt: "Truck build" },
  { id: 8, src: gallery10, alt: "Custom truck" },
  { id: 9, src: gallery11, alt: "Lift setup" },
  { id: 10, src: gallery12, alt: "Lifted truck" },
  { id: 11, src: gallery1, alt: "Black GMC without tires" },
  { id: 12, src: gallery2, alt: "Black GMC in shop" },
  { id: 13, src: gallery3, alt: "Black lifted 350" },
  { id: 14, src: gallery4, alt: "Lift kit close-up" },
  { id: 15, src: gallery5, alt: "Lift kit parts" },
  { id: 16, src: gallery6, alt: "Silver lifted 250 in shop" },
  { id: 17, src: gallery7, alt: "Undercarriage work" },
  { id: 18, src: gallery8, alt: "White GMC in shop" },
];

const HERO_SLIDES = [
  {
    image: truckFrontHero,
    title: "Performance Parts",
    subtitle: "That Add Power.",
    lead: "Built for trucks, boats, and hard-use builds.",
    body: "Unlock horsepower, improve durability, and get components selected for your exact setup.",
  },
  {
    image: heroImage,
    title: "Performance Parts",
    subtitle: "That Add Power.",
    lead: "Built for trucks, boats, and hard-use builds.",
    body: "Unlock horsepower, improve durability, and get components selected for your exact setup.",
  },
  {
    image: twoTruckHero,
    title: "Lifted Truck Builds",
    subtitle: "Done Right.",
    lead: "From stance to suspension travel, we build for real-world performance.",
    body: "Shop proven kits and components matched to your vehicle and intended use.",
  },
  {
    image: caliberTruckHero,
    title: "Custom Shop Support",
    subtitle: "From Parts to Install.",
    lead: "Get expert recommendations from a team that installs what it sells.",
    body: "Find the right combination of parts before you buy, then get guidance every step.",
  },
];

const INITIAL_BUILDER_FORM = {
  builder_name: "",
  builder_email: "",
  builder_phone: "",
  vehicle_year_builder: "",
  vehicle_make_builder: "",
  vehicle_model_builder: "",
  vehicle_trim_builder: "",
  vehicle_engine_builder: "",
  vehicle_drivetrain_builder: "",
  vehicle_transmission_builder: "",
  vehicle_cab_builder: "",
  vehicle_bed_builder: "",
  lift_height: "",
  trackbar_brand: "",
  shock_brand: "",
  control_arm_brand: "",
  spring_brand: "",
  block_brand: "",
  steering_stabilizer_brand: "",
  differential_cover_brand: "",
  package_notes: "",
};

function useScrollHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrolled;
}

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-16 sm:py-20 ${className}`}>
    {children}
  </section>
);

const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function CaliberSite() {
  const scrolled = useScrollHeader();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [builderStep, setBuilderStep] = useState(1);
  const [builderForm, setBuilderForm] = useState(INITIAL_BUILDER_FORM);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "39e2047c-0c0a-48bc-ba69-71dc9a3961b4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();

      if (data.success) {
        alert("Thank you for your inquiry. We will contact you soon.");
        form.reset();
      } else {
        alert("Something went wrong. Please try again or email us directly.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again or email us directly.");
    }
  };

  const updateBuilderField = (e) => {
    const { name, value } = e.target;
    setBuilderForm((prev) => ({ ...prev, [name]: value }));
  };

  const stepFields = {
    1: ["builder_name", "builder_email", "builder_phone"],
    2: ["vehicle_year_builder", "vehicle_make_builder", "vehicle_model_builder", "vehicle_drivetrain_builder"],
    3: ["lift_height"],
  };

  const validateBuilderStep = (step) => {
    const missing = (stepFields[step] || []).filter((field) => !String(builderForm[field] || "").trim());
    if (missing.length > 0) {
      alert("Please complete all required fields in this section before continuing.");
      return false;
    }
    return true;
  };

  const goToNextBuilderStep = () => {
    if (!validateBuilderStep(builderStep)) return;
    setBuilderStep((prev) => Math.min(prev + 1, 4));
  };

  const isBuilderStepComplete = (step) => {
    const fields = stepFields[step] || [];
    return fields.every((field) => String(builderForm[field] || "").trim());
  };

  const handleBuilderTabClick = (targetStep) => {
    if (targetStep <= builderStep) {
      setBuilderStep(targetStep);
      return;
    }
    for (let step = 1; step < targetStep; step += 1) {
      if (!isBuilderStepComplete(step)) {
        alert("Please complete the previous step before moving forward.");
        return;
      }
    }
    setBuilderStep(targetStep);
  };

  const handleLiftKitSubmit = async (e) => {
    e.preventDefault();
    if (!validateBuilderStep(1) || !validateBuilderStep(2) || !validateBuilderStep(3)) return;
    const formData = new FormData();
    Object.entries(builderForm).forEach(([key, value]) => formData.append(key, value));
    formData.append("request_type", "Custom Lift Kit Package Builder");
    formData.append("access_key", "39e2047c-0c0a-48bc-ba69-71dc9a3961b4");
    formData.append("subject", "New Custom Lift Kit Package Request");

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();

      if (data.success) {
        alert("Your custom lift kit package request has been sent.");
        setBuilderForm(INITIAL_BUILDER_FORM);
        setBuilderStep(1);
      } else {
        alert("Something went wrong. Please try again or email us directly.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again or email us directly.");
    }
  };

  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#151922] scroll-smooth">
      <div className="bg-[#8f0f18] text-white">
        <Container className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 py-2 text-[11px] font-black uppercase tracking-[0.1em] sm:justify-between">
          <span>Caliber Performance LLC</span>
          <span className="hidden sm:inline text-white/70">|</span>
          <span>Punta Gorda, Florida</span>
          <span className="hidden sm:inline text-white/70">|</span>
          <span>Custom Lift Kit Packages</span>
          <span className="hidden sm:inline text-white/70">|</span>
          <a
            href="#contact"
            className="rounded-full border border-white/40 px-3 py-0.5 hover:bg-white/10"
          >
            Build Consultation Available
          </a>
        </Container>
      </div>

      <header className={`sticky top-0 z-50 border-b border-black/70 bg-[#111111] text-white ${scrolled ? "shadow-lg" : ""}`}>
        <div className="grid grid-cols-[auto_1fr] items-center py-3 pl-4 pr-4 sm:pl-6 sm:pr-6 lg:grid-cols-[auto_1fr_auto] lg:pl-8 lg:pr-8">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <span className="relative block h-[4.5rem] w-[6.5rem] overflow-hidden sm:h-[5.5rem] sm:w-[8rem]">
                <img
                  src={companyLogo}
                  alt="Caliber Performance"
                  className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-[45%] scale-[2.85] object-contain"
                />
              </span>
            </a>
          </div>

          <nav className="hidden items-center justify-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-black uppercase tracking-wide hover:text-[#ff5a5a]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center justify-end gap-3 lg:flex">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full bg-white p-2 text-[#202020] hover:bg-[#f2f2f2]"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-white p-2 text-[#202020] hover:bg-[#f2f2f2]"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>

          <button type="button" onClick={() => setMenuOpen((v) => !v)} className="inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-md border border-white/30 lg:hidden" aria-label="Toggle navigation">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="pb-4 pl-4 pr-4 sm:pl-6 sm:pr-6 lg:hidden">
            <div className="grid gap-2 rounded-lg border border-white/15 bg-[#1b1b1b] p-3">
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded px-2 py-2 text-sm font-bold uppercase tracking-wide hover:bg-white/10">
                  {item.label}
                </a>
              ))}
              <a href="https://fuel1direct.com/seller/calibermarineandauto-com/" target="_blank" rel="noopener noreferrer" className="mt-1 rounded bg-[#8f0f18] px-3 py-2 text-center text-sm font-bold uppercase">
                Search Parts
              </a>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative">
        <div className="relative h-[72vh] overflow-hidden sm:h-[76vh]">
          {HERO_SLIDES.map((slide, idx) => (
            <img
              key={slide.title}
              src={slide.image}
              alt={slide.title}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                idx === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/45" />

          <button
            type="button"
            onClick={goToPrevSlide}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-md border-2 border-white bg-black/35 p-2 text-white md:block"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            type="button"
            onClick={goToNextSlide}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-md border-2 border-white bg-black/35 p-2 text-white md:block"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <div className="relative z-10 h-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
            <div className="mx-auto flex h-full w-full max-w-[1800px] items-center">
              <motion.div variants={reveal} initial="hidden" animate="show" transition={{ duration: 0.45 }} className="max-w-3xl">
                <h1 className="text-4xl font-black uppercase leading-[0.95] text-white sm:text-6xl">
                  {HERO_SLIDES[activeSlide].title}
                  <span className="block">{HERO_SLIDES[activeSlide].subtitle}</span>
                </h1>
                <p className="mt-6 max-w-xl text-xl font-semibold text-white/95 sm:text-3xl">
                  {HERO_SLIDES[activeSlide].lead}
                </p>
                <p className="mt-3 max-w-xl text-lg text-white/90">
                  {HERO_SLIDES[activeSlide].body}
                </p>
              </motion.div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-16 z-20 hidden px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 md:block">
            <div className="mx-auto w-full max-w-[1800px]">
              <div className="ml-auto w-full max-w-md rounded-xl border border-white/35 bg-black/55 p-5 backdrop-blur-sm">
                <p className="text-lg font-black uppercase leading-tight text-white">
                  Shop Nationwide Products for the Automotive, Powersports, and Marine industries.
                </p>
                <a
                  href="https://fuel1direct.com/seller/calibermarineandauto-com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto mt-4 inline-flex items-center gap-2 rounded-full bg-[#e00012] px-6 py-3 text-sm font-black uppercase tracking-wide text-white hover:bg-[#b8000e]"
                >
                  Shop Performance Parts <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.title}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setActiveSlide(idx)}
                className={`h-3 w-3 rounded-full ${
                  idx === activeSlide ? "bg-[#ff1a1a]" : "bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <Section id="builder" className="bg-[#1a1a1a]">
        <Container>
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b0b7c3]">Builder</p>
            <h2 className="mt-2 text-3xl font-black uppercase text-white sm:text-4xl">Custom Lift Kit Package Creator</h2>
            <p className="mt-3 max-w-3xl text-[#d0d5dd]">
              At Caliber, we can build a fully custom lift kit package to match your dream ride. Complete each step and we will dial in the right setup for you.
            </p>
          </div>

          <form onSubmit={handleLiftKitSubmit} className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-[#d8dde6] bg-white shadow-[0_14px_40px_rgba(24,35,55,0.06)]">
            <div className="grid lg:grid-cols-[220px_1fr]">
              <div className="border-b border-[#e5e9f0] p-3 sm:p-4 lg:border-b-0 lg:border-r">
                <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
                  {[
                    { id: 1, label: "Contact" },
                    { id: 2, label: "Vehicle" },
                    { id: 3, label: "Package" },
                    { id: 4, label: "Notes" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => handleBuilderTabClick(tab.id)}
                      className={`rounded-lg border px-3 py-2 text-sm font-black uppercase tracking-[0.08em] transition lg:px-4 lg:py-3 lg:text-left ${
                        builderStep === tab.id
                          ? "border-[#8f0f18] bg-[#8f0f18] text-white"
                          : isBuilderStepComplete(tab.id)
                          ? "border-[#d7dce5] bg-[#f4f7fb] text-[#1f2937]"
                          : "border-[#e2e7ef] bg-white text-[#6a7382] hover:bg-[#f8fafc]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-5 sm:p-6 lg:p-7">
              {builderStep === 1 && (
                <div className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                      <label htmlFor="builder_name" className="mb-1 block text-sm text-[#546071]">Full Name</label>
                      <input id="builder_name" name="builder_name" value={builderForm.builder_name} onChange={updateBuilderField} className="w-full rounded-md border border-[#d8dde6] bg-white px-3 py-2.5 text-[#111827]" />
                    </div>
                    <div>
                      <label htmlFor="builder_email" className="mb-1 block text-sm text-[#546071]">Email</label>
                      <input id="builder_email" name="builder_email" type="email" value={builderForm.builder_email} onChange={updateBuilderField} className="w-full rounded-md border border-[#d8dde6] bg-white px-3 py-2.5 text-[#111827]" />
                    </div>
                    <div>
                      <label htmlFor="builder_phone" className="mb-1 block text-sm text-[#546071]">Phone</label>
                      <input id="builder_phone" name="builder_phone" value={builderForm.builder_phone} onChange={updateBuilderField} className="w-full rounded-md border border-[#d8dde6] bg-white px-3 py-2.5 text-[#111827]" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button type="button" onClick={goToNextBuilderStep} className="inline-flex items-center gap-2 rounded-md bg-[#8f0f18] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white">Next <ArrowRight className="h-4 w-4" /></button>
                  </div>
                </div>
              )}

              {builderStep === 2 && (
                <div className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <input name="vehicle_year_builder" value={builderForm.vehicle_year_builder} onChange={updateBuilderField} placeholder="Year" className="w-full rounded-md border border-[#d8dde6] bg-white px-3 py-2.5 text-[#111827]" />
                    <input name="vehicle_make_builder" value={builderForm.vehicle_make_builder} onChange={updateBuilderField} placeholder="Make" className="w-full rounded-md border border-[#d8dde6] bg-white px-3 py-2.5 text-[#111827]" />
                    <input name="vehicle_model_builder" value={builderForm.vehicle_model_builder} onChange={updateBuilderField} placeholder="Model" className="w-full rounded-md border border-[#d8dde6] bg-white px-3 py-2.5 text-[#111827]" />
                    <input name="vehicle_trim_builder" value={builderForm.vehicle_trim_builder} onChange={updateBuilderField} placeholder="Trim" className="w-full rounded-md border border-[#d8dde6] bg-white px-3 py-2.5 text-[#111827]" />
                    <select name="vehicle_drivetrain_builder" value={builderForm.vehicle_drivetrain_builder} onChange={updateBuilderField} className="w-full rounded-md border border-[#d8dde6] bg-white px-3 py-2.5 text-[#111827]">
                      <option value="">Drivetrain</option><option>4WD</option><option>AWD</option><option>RWD</option><option>FWD</option>
                    </select>
                    <input name="vehicle_transmission_builder" value={builderForm.vehicle_transmission_builder} onChange={updateBuilderField} placeholder="Transmission" className="w-full rounded-md border border-[#d8dde6] bg-white px-3 py-2.5 text-[#111827]" />
                  </div>
                  <div className="flex justify-between">
                    <button type="button" onClick={() => setBuilderStep(1)} className="rounded-md border border-[#d8dde6] px-4 py-2 text-sm font-bold uppercase tracking-wide text-[#344054]">Back</button>
                    <button type="button" onClick={goToNextBuilderStep} className="inline-flex items-center gap-2 rounded-md bg-[#8f0f18] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white">Next <ArrowRight className="h-4 w-4" /></button>
                  </div>
                </div>
              )}

              {builderStep === 3 && (
                <div className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <select name="lift_height" value={builderForm.lift_height} onChange={updateBuilderField} className="w-full rounded-md border border-[#d8dde6] bg-white px-3 py-2.5 text-[#111827]"><option value="">Lift Height</option><option>Leveling Kit</option><option>2 inch</option><option>3 inch</option><option>4 inch</option><option>6 inch</option><option>8 inch+</option></select>
                    <select name="spring_brand" value={builderForm.spring_brand} onChange={updateBuilderField} className="w-full rounded-md border border-[#d8dde6] bg-white px-3 py-2.5 text-[#111827]"><option value="">Springs Brand</option><option>Cognito</option><option>Icon</option><option>PMF</option><option>Carli</option><option>Ready Lift</option><option>BDS</option><option>Rough Country</option></select>
                    <select name="trackbar_brand" value={builderForm.trackbar_brand} onChange={updateBuilderField} className="w-full rounded-md border border-[#d8dde6] bg-white px-3 py-2.5 text-[#111827]"><option value="">Trackbars Brand</option><option>Cognito</option><option>Icon</option><option>PMF</option><option>Carli</option><option>Ready Lift</option><option>BDS</option><option>Rough Country</option></select>
                    <select name="shock_brand" value={builderForm.shock_brand} onChange={updateBuilderField} className="w-full rounded-md border border-[#d8dde6] bg-white px-3 py-2.5 text-[#111827]"><option value="">Shocks Brand</option><option>King</option><option>Fox</option><option>Falcon</option></select>
                    <select name="control_arm_brand" value={builderForm.control_arm_brand} onChange={updateBuilderField} className="w-full rounded-md border border-[#d8dde6] bg-white px-3 py-2.5 text-[#111827]"><option value="">Control Arms Brand</option><option>Cognito</option><option>Icon</option><option>PMF</option><option>Carli</option><option>Ready Lift</option><option>BDS</option><option>Rough Country</option></select>
                    <select name="block_brand" value={builderForm.block_brand} onChange={updateBuilderField} className="w-full rounded-md border border-[#d8dde6] bg-white px-3 py-2.5 text-[#111827]"><option value="">Blocks Brand</option><option>Cognito</option><option>Icon</option><option>PMF</option><option>Carli</option><option>Ready Lift</option><option>BDS</option><option>Rough Country</option></select>
                    <select name="steering_stabilizer_brand" value={builderForm.steering_stabilizer_brand} onChange={updateBuilderField} className="w-full rounded-md border border-[#d8dde6] bg-white px-3 py-2.5 text-[#111827]"><option value="">Steering Stabilizers Brand</option><option>Cognito</option><option>Icon</option><option>PMF</option><option>Carli</option><option>Ready Lift</option><option>BDS</option><option>Rough Country</option></select>
                    <select name="differential_cover_brand" value={builderForm.differential_cover_brand} onChange={updateBuilderField} className="w-full rounded-md border border-[#d8dde6] bg-white px-3 py-2.5 text-[#111827]"><option value="">Differential Covers Brand</option><option>Maghytec</option><option>Banks</option><option>S&amp;B</option></select>
                  </div>
                  <div className="flex justify-between">
                    <button type="button" onClick={() => setBuilderStep(2)} className="rounded-md border border-[#d8dde6] px-4 py-2 text-sm font-bold uppercase tracking-wide text-[#344054]">Back</button>
                    <button type="button" onClick={goToNextBuilderStep} className="inline-flex items-center gap-2 rounded-md bg-[#8f0f18] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white">Next <ArrowRight className="h-4 w-4" /></button>
                  </div>
                </div>
              )}

              {builderStep === 4 && (
                <div className="space-y-5">
                  <div>
                    <label htmlFor="package_notes" className="mb-1 block text-sm text-[#546071]">Build Goals / Notes</label>
                    <textarea id="package_notes" name="package_notes" value={builderForm.package_notes} onChange={updateBuilderField} rows={5} className="w-full resize-none rounded-md border border-[#d8dde6] bg-white px-3 py-2.5 text-[#111827]" placeholder="On-road comfort, off-road use, towing, stance preference, budget range..." />
                  </div>
                  <div className="flex justify-between">
                    <button type="button" onClick={() => setBuilderStep(3)} className="rounded-md border border-[#d8dde6] px-4 py-2 text-sm font-bold uppercase tracking-wide text-[#344054]">Back</button>
                    <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-[#8f0f18] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#790c14]">
                      Submit Lift Kit Package Request <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
            </div>
          </form>
        </Container>
      </Section>

      <Section id="shop" className="bg-white">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#687180]">Categories</p>
              <h2 className="mt-2 text-3xl font-black uppercase text-[#111827]">Shop By Category</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {CATEGORIES.map((category, idx) => (
              <motion.a
                key={category.title}
                href={category.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="group relative block h-[17rem] overflow-hidden rounded-xl border border-[#d8dde6] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:h-[18rem] lg:h-[17rem]"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#161616]">
                    Shop Category <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: CATEGORIES.length * 0.05 }}
              className="group flex h-[17rem] flex-col justify-between overflow-hidden rounded-xl border border-[#d8dde6] bg-[#1f1f1f] p-5 text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:h-[18rem] lg:h-[17rem]"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c8c8c8]">Need Help?</p>
                <h3 className="mt-2 text-xl font-black uppercase leading-tight">Find The Right Category Fast</h3>
                <p className="mt-3 text-sm text-[#d7d7d7]">
                  Tell us what you are building and we will point you to the best category and parts.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#ff4d4d]">
                Contact Our Team <ArrowRight className="h-4 w-4" />
              </span>
            </motion.a>
          </div>
        </Container>
      </Section>

      <Section id="services" className="bg-[#1a1a1a]">
        <Container>
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b0b7c3]">Services</p>
            <h2 className="mt-2 text-3xl font-black uppercase text-white">In-House Capabilities</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.key}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="rounded-xl border border-[#d8dde6] bg-white p-5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-[#8f0f18] text-white">{service.icon}</div>
                  <h3 className="text-lg font-black uppercase text-[#1f2937]">{service.title}</h3>
                </div>
                <ul className="grid gap-2 text-sm text-[#4d5868] sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-[#8f0f18]" /><span>{item}</span></li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="about" className="bg-white">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#687180]">About</p>
              <h2 className="mt-2 text-3xl font-black uppercase text-[#111827]">Caliber Performance</h2>
              <p className="mt-4 text-[#4d5868]"><strong>Versatility and Quality:</strong> From diagnostics and repairs to surface restoration including fiberglass, gel-coat, detailing, and ceramic coatings, we have you covered.</p>
              <p className="mt-3 text-[#4d5868]"><strong>Trusted Expertise:</strong> Our track record speaks volumes with clients across marine and high-performance automotive assets.</p>
              <p className="mt-3 text-[#4d5868]"><strong>Our Promise:</strong> We stand behind our work and focus on improving both form and function with craftsmanship rooted in integrity.</p>
              <p className="mt-3 text-[#4d5868]"><strong>Our Mission:</strong> Preserving your marine and automotive investments with faith, precision, and integrity.</p>
            </motion.div>

            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.08 }} className="overflow-hidden rounded-xl border border-[#d8dde6] bg-white p-2">
              <img src={aboutImage} alt="Caliber team and shop" className="h-full w-full rounded-lg object-cover" />
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section id="partners" className="bg-[#1a1a1a]">
        <Container>
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b0b7c3]">Partners</p>
            <h2 className="mt-2 text-3xl font-black uppercase text-white">Brands We Install</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {PARTNERS.map((partner) => (
              <div key={partner.name} className="flex h-20 items-center justify-center rounded-md border border-[#d8dde6] bg-white p-3">
                <img src={partner.logo} alt={`${partner.name} logo`} className="h-full w-full object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="gallery" className="bg-white">
        <Container>
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#687180]">Gallery</p>
            <h2 className="mt-2 text-3xl font-black uppercase text-[#111827]">Recent Builds</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY_IMAGES.map((image, idx) => (
              <motion.div
                key={image.id}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                className={`overflow-hidden rounded-lg border border-[#d8dde6] ${idx % 5 === 0 ? "lg:col-span-2" : ""}`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" className="h-64 w-full object-cover transition duration-500 hover:scale-105 sm:h-72" />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="contact" className="bg-[#1a1a1a] text-white">
        <Container>
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9aa4b5]">Contact</p>
            <h2 className="mt-2 text-3xl font-black uppercase">Need Help Finding the Right Parts?</h2>
            <p className="mt-3 max-w-2xl text-[#b5bfce]">Tell us about your vehicle and goals. We will help you choose the best setup.</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="rounded-xl border border-[#343434] bg-[#242424] p-5">
              <form onSubmit={handleContactSubmit} className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm text-[#c6cfdb]">Full Name</label>
                  <input id="name" name="name" required placeholder="Jane Doe" className="w-full rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 py-2.5 text-white placeholder:text-[#a0a0a0] focus:border-[#8f0f18]" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm text-[#c6cfdb]">Email</label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" className="w-full rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 py-2.5 text-white placeholder:text-[#a0a0a0] focus:border-[#8f0f18]" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm text-[#c6cfdb]">Phone</label>
                  <input id="phone" name="phone" placeholder="(555) 000-0000" className="w-full rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 py-2.5 text-white placeholder:text-[#a0a0a0] focus:border-[#8f0f18]" />
                </div>
                <div>
                  <label htmlFor="vehicle_make" className="mb-1 block text-sm text-[#c6cfdb]">Vehicle Make</label>
                  <input id="vehicle_make" name="vehicle_make" required placeholder="Ford, Chevy, Toyota" className="w-full rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 py-2.5 text-white placeholder:text-[#a0a0a0] focus:border-[#8f0f18]" />
                </div>
                <div>
                  <label htmlFor="vehicle_model" className="mb-1 block text-sm text-[#c6cfdb]">Vehicle Model</label>
                  <input id="vehicle_model" name="vehicle_model" required placeholder="F-150, Silverado, Tacoma" className="w-full rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 py-2.5 text-white placeholder:text-[#a0a0a0] focus:border-[#8f0f18]" />
                </div>
                <div>
                  <label htmlFor="vehicle_year" className="mb-1 block text-sm text-[#c6cfdb]">Vehicle Year</label>
                  <input id="vehicle_year" name="vehicle_year" type="number" required min="1990" max="2035" placeholder="2020" className="w-full rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 py-2.5 text-white placeholder:text-[#a0a0a0] focus:border-[#8f0f18]" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="work_description" className="mb-1 block text-sm text-[#c6cfdb]">What work do you want done?</label>
                  <textarea id="work_description" name="work_description" rows={5} required placeholder="Describe modifications, repairs, or upgrades..." className="w-full resize-none rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 py-2.5 text-white placeholder:text-[#a0a0a0] focus:border-[#8f0f18]" />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-[#8f0f18] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#790c14]">
                    Get Parts Recommendation <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-4 rounded-xl border border-[#343434] bg-[#242424] p-5">
              <div className="rounded-md border border-[#4a4a4a] bg-[#1f1f1f] p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#f87171]" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-[#b0b0b0]">Location</p>
                    <p className="mt-1 font-semibold">Punta Gorda, FL</p>
                  </div>
                </div>
              </div>

              <div className="rounded-md border border-[#4a4a4a] bg-[#1f1f1f] p-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#f87171]" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-[#b0b0b0]">Email</p>
                    <a href="mailto:info@caliberperformanceusa.com" className="mt-1 block font-semibold hover:text-[#fca5a5]">info@caliberperformanceusa.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <footer className="border-t border-[#293244] bg-[#0d121b] text-[#9aa4b5]">
        <Container className="flex flex-col items-center justify-between gap-4 py-8 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} Caliber Performance LLC. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
