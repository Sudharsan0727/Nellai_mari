import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Users,
  Film,
  Building2,
  Scale,
  MapPin,
  ArrowUpRight,
  Menu,
  X,
  Play,
  HeartHandshake,
  Sprout,
  Quote,
  BookOpen,
  Landmark,
  FileText,
  ShieldCheck,
  Search,
  PenTool,
  Star,
  ArrowLeft,
  ArrowRight,
  Phone,
  Clock,
  Send,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

import ruralVisionary from './assets/rural_visionary.png';
import handsSoil from './assets/image_2_hands_soil.png';
import communityVillage from './assets/image_3_community_village.png';


// --- Theme Config ---
// Editorial Design: Earthy Gold & Deep Charcoal

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Story', href: '#about' }, // History
    { name: 'Initiatives', href: '#initiatives' }, // KeyInitiatives
    { name: 'Services', href: '#services' }, // Services
    { name: 'Process', href: '#process' }, // Process
    { name: 'Impact', href: '#impact' }, // Impact
    { name: 'Gallery', href: '#gallery' }, // Gallery
  ];

  return (
    <>
      <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out flex justify-center ${scrolled ? 'top-6' : 'top-0'}`}>
        <div
          className={`
            transition-all duration-500 ease-in-out flex items-center justify-between
            ${scrolled
              ? 'bg-black/80 backdrop-blur-xl border border-white/10 rounded-full py-3 px-8 shadow-2xl w-[90%] md:w-auto gap-8 md:gap-12'
              : 'bg-transparent border-0 border-transparent py-8 px-6 w-full container mx-auto'
            }
          `}
        >
          {/* Logo */}
          <a href="#" className={`font-serif font-bold tracking-tighter uppercase whitespace-nowrap transition-colors duration-300 ${scrolled ? 'text-white text-xl' : 'text-white text-2xl'}`}>
            Nellai <span className="text-[#d97706]">V.M.P</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-widest hover:text-[#d97706] transition-colors ${scrolled ? 'text-zinc-300' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Button / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className={`
                hidden md:flex items-center gap-2 px-5 py-2 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all
                ${scrolled
                  ? 'bg-white text-black hover:bg-[#d97706] hover:text-white'
                  : 'bg-[#d97706] text-white hover:bg-white hover:text-black'
                }
              `}
            >
              <span>Contact</span>
              <ArrowRight size={12} />
            </a>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${scrolled ? 'text-white' : 'text-white'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl md:hidden flex flex-col pt-32 px-6"
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-serif text-white hover:text-[#d97706] transition-colors border-b border-white/5 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-3xl font-serif text-[#d97706]">
                Contact Us
              </a>
            </div>

            <button
              className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-zinc-900">
      {/* Background Image using CSS Gradient for now (replace with actual image) */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center opacity-40"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-amber-500"></span>
            <span className="text-amber-500 uppercase tracking-widest text-sm font-bold">Since 2007</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-medium text-white leading-tight mb-8 font-serif">
            Cultivating <span className="italic text-zinc-500">Hope.</span> <br />
            Creating <span className="text-amber-500">History.</span>
          </h1>

          <p className="text-xl text-zinc-300 max-w-2xl leading-relaxed mb-12 border-l-2 border-white/20 pl-6">
            From the agricultural heartlands of Moolakaraipatti to the cinematic screens of Chennai.
            The portfolio of <strong>Nellai V. Mari Pandiar</strong> — a life dedicated to service, art, and the people.
          </p>

          <div className="flex flex-wrap gap-6">
            <a href="#impact" className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-amber-500 transition-colors">
              Explore Impact
              <ArrowUpRight className="group-hover:rotate-45 transition-transform" size={18} />
            </a>
            <div className="flex items-center gap-3 text-white cursor-pointer hover:text-amber-500 transition-colors">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
                <Play size={16} fill="currentColor" />
              </div>
              <span className="text-sm font-bold tracking-widest uppercase">Watch Story</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const History = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [ruralVisionary, handsSoil, communityVillage];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-24 bg-zinc-100 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        <div className="flex flex-col lg:flex-row items-center">

          {/* Content Card - Overlapping Left */}
          <div className="w-full lg:w-1/2 bg-white p-10 md:p-14 shadow-2xl rounded-sm z-20 lg:-mr-20 mb-10 lg:mb-0 border-l-4 border-amber-500">
            <span className="text-zinc-400 font-bold uppercase tracking-widest text-xs mb-6 block">The Visionary</span>
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-8 leading-tight">
              Cultivating Change, <br />
              <span className="text-amber-600">Harvesting Hope.</span>
            </h2>

            <div className="text-zinc-600 space-y-6 mb-10 text-lg leading-relaxed">
              <p>
                Nellai V. Mari Pandiyar's journey serves as a powerful testament to the impact of dedicated service. Born to the soil in <strong>Kallathi</strong>, he has grown to become a pillar of support for the rural populace.
              </p>
              <p className="text-sm text-zinc-500">
                Through a synergy of <strong>Social Activism, Legal Aid, Real Estate, and Cinema</strong>, he is crafting a legacy that bridges the gap between tradition and modern progress.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-zinc-100 pt-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-amber-50 rounded text-amber-600"><Scale size={20} /></div>
                  <span className="font-bold text-zinc-900">Advocacy</span>
                </div>
                <p className="text-xs text-zinc-500">Fighting for the voiceless</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-amber-50 rounded text-amber-600"><Film size={20} /></div>
                  <span className="font-bold text-zinc-900">Culture</span>
                </div>
                <p className="text-xs text-zinc-500">Preserving stories on screen</p>
              </div>
            </div>

          </div>

          {/* Right Image Area */}
          <div className="w-full lg:w-[60%] h-[500px] lg:h-[700px] relative group">
            <div className="absolute inset-0 bg-yellow-900/10 z-10 pointer-events-none"></div>

            {/* Fade Transition Images */}
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Visionary Background ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentImage === index ? 'opacity-100' : 'opacity-0'
                  }`}
              />
            ))}

            {/* 3 Dots Navigation */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImage === index ? 'bg-amber-500 scale-125' : 'bg-white/50 hover:bg-white'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>


          </div>

        </div>

      </div>
    </section>
  );
};

const KeyInitiatives = () => {
  const [activeId, setActiveId] = useState(0);

  const initiatives = [
    {
      id: 0,
      title: "Educational Empowerment",
      shortTitle: "Education",
      desc: "Igniting curiosity through scholarships and school adoption.",
      fullDesc: "We believe education is the passport to the future. Our scholarship programs and infrastructure support for rural schools ensure that every child, regardless of background, has the tools to succeed.",
      image: ruralVisionary,
      icon: <BookOpen size={24} />
    },
    {
      id: 1,
      title: "Community Welfare",
      shortTitle: "Welfare",
      desc: "Supporting the vulnerable with dignity and care.",
      fullDesc: "From supporting widows to caring for the elderly, our welfare programs create a safety net of compassion. We strive to ensure that no member of our community feels abandoned or unheard.",
      image: handsSoil,
      icon: <HeartHandshake size={24} />
    },
    {
      id: 2,
      title: "Cultural Preservation",
      shortTitle: "Culture",
      desc: "Guarding our heritage through arts and restoration.",
      fullDesc: "Our identity is rooted in our history. By renovating ancient temples and patronizing traditional folk arts, we keep the vibrant soul of Tirunelveli alive for future generations.",
      image: communityVillage,
      icon: <Landmark size={24} />
    }
  ];

  return (
    <section id="initiatives" className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <span className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-2 block">Our Core Pillars</span>
        <h2 className="text-3xl md:text-5xl font-serif">Dimensions of Service</h2>
      </div>

      {/* Expansion Deck Container */}
      <div className="w-full h-[600px] flex flex-col md:flex-row bg-zinc-900">

        {initiatives.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setActiveId(item.id)}
            onClick={() => setActiveId(item.id)} // For mobile tap
            className={`relative flex-1 group transition-all duration-700 ease-in-out overflow-hidden border-r border-zinc-800 cursor-pointer 
              ${activeId === item.id ? 'md:flex-[3]' : 'md:flex-[1]'} 
              ${activeId === item.id ? 'h-[400px] md:h-auto' : 'h-[100px] md:h-auto'}
            `}
          >

            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={item.image}
                alt={item.title}
                className={`w-full h-full object-cover transition-transform duration-1000 ${activeId === item.id ? 'scale-105' : 'scale-100 grayscale opacity-30'}`}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent transition-opacity duration-500 ${activeId === item.id ? 'opacity-90' : 'opacity-80'}`}></div>
            </div>

            {/* Vertical (Inactive) Label - Desktop Only */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 hidden md:flex ${activeId === item.id ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <div className="-rotate-90 whitespace-nowrap">
                <h3 className="text-2xl font-serif text-zinc-500 tracking-widest uppercase group-hover:text-white transition-colors">{item.shortTitle}</h3>
              </div>
            </div>

            {/* Horizontal (Active) Content */}
            <div className={`absolute inset-0 p-8 md:p-16 flex flex-col justify-end transition-all duration-500 ${activeId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

              <div className="md:max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-amber-500/20 text-amber-500 rounded-full w-fit backdrop-blur-md border border-amber-500/30">
                  {item.icon}
                  <span className="text-xs font-bold uppercase tracking-wide">{item.shortTitle}</span>
                </div>

                <h3 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                  {item.title}
                </h3>

                <div className="h-1 w-20 bg-amber-500 mb-6"></div>

                <p className="text-zinc-300 text-lg leading-relaxed mb-8 hidden md:block">
                  {item.fullDesc}
                </p>
                <p className="text-zinc-300 md:hidden">
                  {item.desc}
                </p>

                <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white group/btn">
                  <span>Learn More</span>
                  <ArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform text-amber-500" />
                </div>
              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};





const Services = () => {
  const serviceList = [
    {
      title: "Partition Deeds",
      desc: "Legal division of property among co-owners",
      icon: <FileText size={32} />
    },
    {
      title: "Release Deeds",
      desc: "Transfer of ownership rights between parties",
      icon: <PenTool size={32} />
    },
    {
      title: "Land Verification",
      desc: "Thorough due diligence and title search",
      icon: <Search size={32} />
    },
    {
      title: "Sub-Registrar Guidance",
      desc: "End-to-end registration assistance",
      icon: <Landmark size={32} />
    }
  ];

  return (
    <section id="services" className="py-24 bg-white border-t border-zinc-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-6 leading-tight">
                Land <br /> <span className="italic text-zinc-500">Documentation</span> <br /> Services
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                Professional assistance for all your land-related legal documentation needs, ensuring secure and transparent property transactions.
              </p>
              <div className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-xs cursor-pointer group">
                <span>Consult Now</span>
                <div className="w-8 h-[1px] bg-amber-600 group-hover:w-12 transition-all"></div>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceList.map((service, index) => (
                <div key={index} className="p-8 bg-zinc-50 border border-zinc-100 rounded-2xl hover:bg-white hover:shadow-xl hover:border-amber-100 transition-all duration-300 group">
                  <div className="mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-zinc-900 mb-3">{service.title}</h3>
                  <p className="text-zinc-500 leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      id: "01",
      title: "Consultation",
      tagline: "The Foundation",
      desc: "We begin by deconstructing your legal requirements. A comprehensive collaborative session defines the scope, identifies potential risks, and sets the strategic direction.",
      icon: <Users size={20} />,
      status: "Initiation"
    },
    {
      id: "02",
      title: "Verification",
      tagline: "The Deep Dive",
      desc: "Rigorous due diligence. We trace property histories up to 30 years back, verify encumbrance certificates, and cross-reference revenue records to ensure absolute clarity.",
      icon: <Search size={20} />,
      status: "Investigation"
    },
    {
      id: "03",
      title: "Drafting",
      tagline: "The Articulation",
      desc: "Precision legal writing. Our experts draft custom deeds that specifically address your unique context, closing loopholes and future-proofing your assets.",
      icon: <PenTool size={20} />,
      status: "Documentation"
    },
    {
      id: "04",
      title: "Registration",
      tagline: "The Execution",
      desc: "Finalizing the deal. We facilitate the signing process at the Sub-Registrar's office, handling stamp duty, witnesses, and the final handover of legal rights.",
      icon: <ShieldCheck size={20} />,
      status: "Completion"
    }
  ];

  return (
    <section id="process" className="py-24 bg-zinc-950 text-white relative overflow-hidden">

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#amber-500_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Workflow</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">The Path to <span className="text-amber-500">Certainty</span></h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            A structured timeline designed to navigate the complexities of property law with precision and transparency.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent hidden md:block"></div>

          {/* Left Line (Mobile) */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-800 md:hidden"></div>

          {steps.map((step, index) => (
            <div key={index} className={`relative flex items-center gap-8 mb-16 md:mb-24 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

              {/* Content Card */}
              <div className={`flex-1 md:w-1/2 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                <div className="group relative">
                  <div className="absolute -inset-4 bg-zinc-800/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl duration-500"></div>

                  <div className="relative">
                    <span className="block text-amber-500 font-bold uppercase tracking-widest text-xs mb-2">{step.status}</span>
                    <h3 className="text-3xl font-serif text-white mb-2">{step.title}</h3>
                    <p className="text-zinc-400 italic mb-4 font-serif text-lg">{step.tagline}</p>
                    <p className="text-zinc-500 leading-relaxed text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Center Node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-zinc-950 border-4 border-zinc-900 shadow-[0_0_0_4px_#f59e0b] shadow-amber-500/20 flex items-center justify-center relative z-10 group cursor-pointer hover:scale-110 transition-transform duration-300">
                  <div className="text-amber-500">
                    {step.icon}
                  </div>
                </div>
                <div className="mt-2 md:hidden">
                  {/* Mobile ID below bubble */}
                </div>
              </div>

              {/* Counterweight (Empty Space for Desktop) */}
              <div className="hidden md:block flex-1 md:w-1/2">
                <div className={`flex ${index % 2 === 0 ? 'justify-start pl-16' : 'justify-end pr-16'}`}>
                  <div className="text-8xl font-serif font-black text-zinc-900 select-none opacity-50">
                    {step.id}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const Impact = () => {
  return (
    <section id="impact" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row">

          {/* Image Side */}
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img
              src={handsSoil}
              alt="Hands holding soil"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-amber-900/30 mix-blend-multiply"></div>
            <div className="absolute inset-0 p-12 flex flex-col justify-end">
              <Quote className="text-white/80 mb-4" size={40} />
              <p className="font-serif text-3xl md:text-4xl text-white italic leading-tight mb-6">
                "The soul of India lives in its villages."
              </p>
              <div className="w-12 h-1 bg-amber-500 mb-2"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <div className="mb-12">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-4 block">Our Impact</span>
              <h2 className="text-4xl font-serif text-zinc-900 leading-tight">
                Cultivating <span className="italic text-zinc-400">Progress</span> <br />
                Harvesting <span className="italic text-zinc-400">Change</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {/* Stat 1 */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-full group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <Sprout size={24} />
                  </div>
                  <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Growth</p>
                </div>
                <h3 className="text-5xl font-serif font-bold text-zinc-900">5,000+</h3>
                <p className="text-zinc-500 mt-2">Farmers Empowered through direct intervention</p>
              </div>

              {/* Stat 2 */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-zinc-50 text-zinc-400 rounded-full group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <Users size={24} />
                  </div>
                  <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Community</p>
                </div>
                <h3 className="text-5xl font-serif font-bold text-zinc-900">120+</h3>
                <p className="text-zinc-500 mt-2">Self-Help Groups created for women</p>
              </div>

              {/* Stat 3 */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-zinc-50 text-zinc-400 rounded-full group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <Scale size={24} />
                  </div>
                  <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Justice</p>
                </div>
                <h3 className="text-5xl font-serif font-bold text-zinc-900">850+</h3>
                <p className="text-zinc-500 mt-2">Land disputes resolved across the district</p>
              </div>

              {/* Stat 4 */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-zinc-50 text-zinc-400 rounded-full group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <ArrowUpRight size={24} />
                  </div>
                  <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Reach</p>
                </div>
                <h3 className="text-5xl font-serif font-bold text-zinc-900">45</h3>
                <p className="text-zinc-500 mt-2">Villages transformed by our programs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Spotlight = () => {
  const [hoveredOrg, setHoveredOrg] = useState(0);

  const orgs = [
    {
      id: "rdo",
      acronym: "RDO",
      name: "Rural Development Organisation",
      desc: "Non-profit dedicated to sustainable rural development, community empowerment, and agricultural innovation across Tamil Nadu.",
      tags: ["Community Development", "Farmer Welfare", "Education"],
      image: handsSoil,
      link: "#"
    },
    {
      id: "rmk",
      acronym: "RMK",
      name: "RMK Group",
      desc: "A diversified conglomerate encompassing real estate development, property management, and film production ventures.",
      tags: ["Real Estate", "Property", "Production"],
      image: communityVillage,
      link: "/pdfs/rmk.pdf"
    },
    {
      id: "fildo",
      acronym: "FILDO",
      name: "Film Development Org",
      desc: "Dedicated to nurturing cinematic talent, producing meaningful content, and showcasing rural stories on the silver screen.",
      tags: ["Film Production", "Talent", "Distribution"],
      image: ruralVisionary,
      link: "/pdfs/fildo.pdf"
    }
  ];

  return (
    <section id="ventures" className="bg-zinc-950 py-24 text-white relative border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

          {/* Sticky Image Area (Desktop) - The Visual Stage */}
          <div className="hidden lg:block w-5/12 sticky top-32">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl shadow-black/50 border border-zinc-800">
              {orgs.map((org, index) => (
                <img
                  key={org.id}
                  src={org.image}
                  alt={org.name} // Accessibility best practice
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 transform ${hoveredOrg === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                />
              ))}
              {/* Overlay Content on Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
                <div className={`transform transition-all duration-500 delay-100 ${hoveredOrg !== null ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <h3 className="text-3xl font-serif mb-3 text-white leading-tight">{orgs[hoveredOrg].name}</h3>
                  <div className="h-1 w-12 bg-amber-500 mb-4"></div>
                  <a href={orgs[hoveredOrg].link} className="text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors flex items-center gap-2">
                    Explore Profile <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* List Area - The Controls */}
          <div className="w-full lg:w-7/12">
            <div className="mb-20">
              <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">Our Ecosystem</span>
              <h2 className="text-5xl lg:text-7xl font-serif">Spheres of <br /><span className="text-zinc-600 italic">Influence</span></h2>
            </div>

            <div className="space-y-4">
              {orgs.map((org, index) => (
                <div
                  key={org.id}
                  onMouseEnter={() => setHoveredOrg(index)}
                  className={`group relative border-t border-zinc-900 transition-all duration-500 py-10 cursor-pointer ${hoveredOrg === index ? 'opacity-100' : 'opacity-40 hover:opacity-80'}`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-zinc-700 to-zinc-900 group-hover:from-amber-500/50 group-hover:to-zinc-800 transition-all duration-500 font-serif">
                      {org.acronym}
                    </span>
                    <div className={`p-4 rounded-full border border-zinc-800 transition-all duration-300 transform group-hover:rotate-45 ${hoveredOrg === index ? 'bg-amber-500 text-black border-amber-500' : 'text-zinc-600'}`}>
                      <ArrowUpRight size={24} />
                    </div>
                  </div>

                  <h3 className={`text-2xl md:text-3xl font-serif font-bold mb-4 transition-colors ${hoveredOrg === index ? 'text-white' : 'text-zinc-500'}`}>
                    {org.name}
                  </h3>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${hoveredOrg === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 lg:max-h-0'}`}>
                    <p className="text-lg text-zinc-400 leading-relaxed mb-6 max-w-md">
                      {org.desc}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {org.tags.map((tag, i) => (
                        <span key={i} className="px-4 py-2 rounded-full border border-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:border-amber-500/30 group-hover:text-amber-500 transition-colors bg-zinc-900/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Image (Visible only on small screens) */}
                  <div className={`lg:hidden mt-8 rounded-2xl overflow-hidden aspect-video relative ${hoveredOrg === index ? 'block' : 'hidden'}`}>
                    <img src={org.image} className="w-full h-full object-cover" alt={org.name} />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
};

const FeaturedProject = () => {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* The Viewfinder (Video) */}
          <div className="w-full lg:w-2/3 relative group">
            {/* Camera Interface Overlay Container */}
            <div className="absolute -inset-4 md:-inset-8 border border-zinc-800 rounded-lg pointer-events-none flex flex-col justify-between p-4 z-20">
              {/* Top Info Bar */}
              <div className="flex justify-between items-center text-[10px] font-mono text-white/50 uppercase tracking-widest">
                <div className="flex items-center gap-2 text-red-500 font-bold">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-[pulse_1s_infinite]"></span> REC
                </div>
                <div className="hidden md:flex gap-6">
                  <span>ISO 800</span>
                  <span>WB 5600K</span>
                  <span>Shutter 180</span>
                </div>
                <div className="text-white">BAT 84%</div>
              </div>

              {/* Center Crosshair */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 opacity-30">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-full bg-white"></div>
              </div>

              {/* Bottom Info Bar */}
              <div className="flex justify-between items-center text-[10px] font-mono text-white/50 uppercase tracking-widest">
                <span>A001_C024_RAW</span>
                <span>24 FPS</span>
              </div>

              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/50"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/50"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/50"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/50"></div>
            </div>

            {/* The Video Itself */}
            <div className="aspect-video bg-zinc-900 overflow-hidden relative shadow-2xl shadow-black/50">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/_Aei0Hh0GBs?si=krUi1Sos13wOm1g7&autoplay=1&mute=1&controls=1&rel=0"
                title="Paruthikkottai Teaser"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              ></iframe>
            </div>

            {/* Lens Flares / Ambient Effects */}
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none mix-blend-screen"></div>
          </div>


          {/* The Script (Content) */}
          <div className="w-full lg:w-1/3">
            <div className="border-l-2 border-amber-500 pl-6 lg:pl-8 py-2">
              <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">From the Director's Monitor</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-2 font-black tracking-tighter">
                PARUTHI<br />KKOTTAI
              </h2>
              <span className="inline-block px-2 py-1 bg-zinc-800 text-zinc-400 text-[10px] font-mono uppercase mb-6 rounded">
                Scene 42 • Take 3
              </span>

              <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-mono">
                // LOGLINE: "Between the debt and the harvest, a village finds its voice."<br /><br />
                An uncompromising look at the agrarian reality. Shot on location in Tirunelveli using natural light and local talent.
              </p>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500">DIR</span>
                  <span className="text-white">V. Mari Pandiar</span>
                </div>
                <div className="flex justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500">PROD</span>
                  <span className="text-white">RMK Group</span>
                </div>
                <div className="flex justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500">STATUS</span>
                  <span className="text-amber-500">Post-Production</span>
                </div>
              </div>

              <button className="mt-8 w-full py-3 border border-zinc-700 hover:border-amber-500 text-white font-bold uppercase tracking-widest text-xs hover:bg-amber-500/10 transition-all flex justify-center items-center gap-2 group">
                <Play size={14} className="fill-current" /> Watch Full Trailer
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
};

const Philosophy = () => {
  return (
    <section className="py-32 bg-zinc-200 relative overflow-hidden border-t border-zinc-300">

      {/* Background Texture - Subtle Noise/Paper */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/notebook-dark.png')]"></div>

      {/* Decorative Elements - Coffee Stain / Scribbles (CSS shapes) */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full border-[20px] border-amber-900/5 blur-sm opacity-60 pointer-events-none transform rotate-45"></div>
      <div className="absolute bottom-20 left-10 w-32 h-1 bg-amber-900/10 rotate-12 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center mb-20">
          <div className="inline-block bg-zinc-900 text-white px-4 py-1 font-mono text-xs tracking-widest uppercase rotate-2 mb-4">
            Field Notes
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-zinc-900 leading-none">
            The Director's <span className="italic text-zinc-500">Cut</span>
          </h2>
        </div>

        {/* The Desk Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto p-4 md:p-12">

          {/* Card 1: RAW */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 0, y: -20, zIndex: 50 }}
            className="bg-white p-4 pb-8 shadow-xl shadow-zinc-900/10 transform -rotate-2 hover:shadow-2xl transition-all duration-300 cursor-pointer relative group"
          >
            {/* Tape Effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm border-l border-r border-white/60 shadow-sm rotate-1"></div>

            <div className="aspect-[4/5] bg-zinc-100 mb-6 overflow-hidden relative transition-all duration-500">
              <img src={handsSoil} alt="Raw Texture" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-mono text-xs uppercase tracking-widest">Fig 01.</p>
              </div>
            </div>

            <div className="px-2">
              <h3 className="font-serif text-3xl text-zinc-900 mb-2 group-hover:text-amber-600 transition-colors">Raw.</h3>
              <p className="font-serif italic text-zinc-500 text-sm leading-relaxed">
                "Capture the grain. Leave the edges rough."
              </p>
            </div>

            {/* Scribble at bottom right */}
            <div className="absolute bottom-4 right-6">
              <PenTool size={16} className="text-zinc-300 group-hover:text-zinc-900 transition-colors" />
            </div>
          </motion.div>

          {/* Card 2: REAL */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 0, y: -20, zIndex: 50 }}
            className="bg-white p-4 pb-8 shadow-xl shadow-zinc-900/10 transform rotate-1 md:-translate-y-12 hover:shadow-2xl transition-all duration-300 cursor-pointer relative group z-10"
          >
            {/* Tape Effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-amber-100/30 backdrop-blur-sm border-l border-r border-white/60 shadow-sm -rotate-2"></div>

            <div className="aspect-[4/5] bg-zinc-100 mb-6 overflow-hidden relative transition-all duration-500">
              <img src={communityVillage} alt="Real Faces" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-mono text-xs uppercase tracking-widest">Fig 02.</p>
              </div>
            </div>

            <div className="px-2">
              <h3 className="font-serif text-3xl text-zinc-900 mb-2 group-hover:text-amber-600 transition-colors">Real.</h3>
              <p className="font-serif italic text-zinc-500 text-sm leading-relaxed">
                "No actors. Just souls speaking truth."
              </p>
            </div>

            {/* Stamp */}
            <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity">
              <div className="w-4 h-4 rounded-full bg-amber-500"></div>
            </div>
          </motion.div>

          {/* Card 3: ROOTED */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 0, y: -20, zIndex: 50 }}
            className="bg-white p-4 pb-8 shadow-xl shadow-zinc-900/10 transform rotate-3 hover:shadow-2xl transition-all duration-300 cursor-pointer relative group"
          >
            {/* Tape Effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm border-l border-r border-white/60 shadow-sm rotate-1"></div>

            <div className="aspect-[4/5] bg-zinc-100 mb-6 overflow-hidden relative transition-all duration-500">
              <img src={ruralVisionary} alt="Rooted History" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-mono text-xs uppercase tracking-widest">Fig 03.</p>
              </div>
            </div>

            <div className="px-2">
              <h3 className="font-serif text-3xl text-zinc-900 mb-2 group-hover:text-amber-600 transition-colors">Rooted.</h3>
              <p className="font-serif italic text-zinc-500 text-sm leading-relaxed">
                "Deep stories excavated from red soil."
              </p>
            </div>

            {/* Folded Corner Visual (CSS) */}
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-zinc-200 border-t border-l border-white shadow-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>

        </div>

      </div>
    </section>
  )
};

const Voices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 0,
      name: "Muthuvel",
      role: "Farmer, Kallathi",
      rating: 5,
      text: "The opposing counsel had money and muscle. Mari Pandiyar stood like a fortress. He spoke the language of the soil.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
      position: "top-[15%] left-[15%]"
    },
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Director, Orbit",
      rating: 5,
      text: "The team delivered our SaaS platform 2 weeks ahead of schedule. The code quality is pristine and scalable.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
      position: "top-[15%] right-[15%]"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, Nexus",
      rating: 4.8,
      text: "We needed a complete rebrand and digital overhaul. Nexto provided a vision that transformed our market.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
      position: "top-1/2 -translate-y-1/2 left-[2%]"
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "VP Marketing, Lux",
      rating: 5,
      text: "Their understanding of modern aesthetics and user behavior is top-tier. Our conversion rates doubled post-launch.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
      position: "top-1/2 -translate-y-1/2 right-[2%]"
    },
    {
      id: 4,
      name: "David Ross",
      role: "CEO, Civic Tech",
      rating: 5,
      text: "A true partner in every sense. They didn't just build what we asked for, they improved upon our core ideas.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
      position: "bottom-[15%] left-[15%]"
    },
    {
      id: 5,
      name: "Elena Rodriguez",
      role: "Product Lead",
      rating: 4.9,
      text: "Exceptional communication. The easiest agency collaboration I've had in 10 years.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
      position: "bottom-[15%] right-[15%]"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-24 relative min-h-[850px] flex items-center justify-center overflow-hidden font-sans">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
          .font-script { font-family: 'Dancing Script', cursive; }
        `}
      </style>

      {/* Background - Clean & Bright with very subtle mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#f3f4f6_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>

      {/* Decorative Light Gradients - Minimalist */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]"></div>
      </div>

      {/* Central Text Content */}
      <div className="relative z-10 text-center select-none flex flex-col items-center justify-center mb-16 md:mb-0">
        <h2
          className="text-zinc-900 text-xl md:text-3xl font-bold tracking-tight mb-[-0.5rem] md:mb-[-1rem] z-20 relative"
        >
          Driven by a
        </h2>

        <div className="relative z-10">
          <span className="text-[#d97706] text-6xl md:text-8xl font-script font-bold block cursor-default leading-none transform -rotate-6 translate-y-2" style={{ textShadow: '0 4px 20px rgba(217,119,6,0.15)' }}>
            Performance
          </span>
        </div>

        <h2 className="text-zinc-900 text-4xl md:text-6xl font-extrabold tracking-tight mt-0 md:mt-[-0.5rem] z-20 relative">
          mindset
        </h2>

        <div className="h-1.5 w-16 bg-[#d97706] mt-6 rounded-full mx-auto shadow-[0_2px_15px_#fcd34d]"></div>
      </div>

      {/* Cards Container - Desktop */}
      <div className="hidden md:block absolute inset-0 w-full h-full max-w-[1600px] mx-auto pointer-events-none">
        {testimonials.map((t, index) => (
          <div key={t.id} className={`absolute ${t.position} w-[450px] pointer-events-auto transition-all duration-700 ease-in-out`}>
            <TestimonialCard data={t} isActive={index === activeIndex} />
          </div>
        ))}
      </div>

      {/* Cards Container - Mobile */}
      <div className="md:hidden w-full px-6 flex flex-col gap-6 relative z-20">
        {testimonials.map((t, index) => (
          <TestimonialCard key={t.id} data={t} isActive={true} />
        ))}
      </div>

    </section>
  );
};

const TestimonialCard = ({ data, isActive }) => {
  return (
    <div
      className={`
        relative p-8 rounded-2xl border transition-all duration-700 ease-in-out
        ${isActive
          ? 'bg-white/90 backdrop-blur-xl border-amber-200 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] opacity-100 scale-100 z-20'
          : 'bg-white/40 backdrop-blur-sm border-gray-100 opacity-50 grayscale scale-95 z-0'
        }
      `}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={data.image}
            alt={data.name}
            className={`w-12 h-12 rounded-full object-cover transition-all duration-700 ${isActive ? 'grayscale-0' : 'grayscale'}`}
          />
          <div>
            <h4 className="text-zinc-900 font-bold text-base leading-tight">{data.name}</h4>
            <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest mt-1">{data.role}</p>
          </div>
        </div>
        <div className={`
          px-2 py-0.5 rounded flex items-center gap-1 border transition-colors duration-700
          ${isActive ? 'bg-amber-50 border-amber-100' : 'bg-transparent border-transparent'}
        `}>
          <span className="text-zinc-700 text-xs font-bold">{data.rating}</span>
          <Star size={12} className={`${isActive ? 'fill-[#d97706] text-[#d97706]' : 'text-zinc-400'}`} />
        </div>
      </div>

      <p className={`text-[15px] leading-relaxed italic transition-colors duration-700 font-medium ${isActive ? 'text-zinc-800' : 'text-zinc-500'}`}>
        "{data.text}"
      </p>
    </div>
  );
}

const Gallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2940&auto=format&fit=crop",
      title: "The Harvest",
      category: "Rural Service",
      desc: "Golden paddy fields ready for harvest."
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2940&auto=format&fit=crop",
      title: "Community Strength",
      category: "Events",
      desc: "Women of the village gathering to discuss initiatives."
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
      title: "Village Walk",
      category: "Events",
      desc: "Walking the path of development together."
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2940&auto=format&fit=crop",
      title: "New Beginnings",
      category: "Rural Service",
      desc: "Planting saplings for a greener tomorrow."
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=2940&auto=format&fit=crop",
      title: "On The Set",
      category: "Film",
      desc: "Behind the scenes of our latest production."
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2941&auto=format&fit=crop",
      title: "Tradition",
      category: "Culture",
      desc: "Preserving the arts and stories of our ancestors."
    }
  ];

  return (
    <section id="gallery" ref={targetRef} className="relative h-[300vh] bg-zinc-950">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        {/* Intro Text (Static relative to horizontal move) */}
        <div className="absolute top-12 left-12 z-20">
          <span className="text-[#d97706] font-bold tracking-widest uppercase text-sm mb-2 block">
            Gallery
          </span>
          <h2 className="text-4xl font-serif font-bold text-white">
            Journey in <span className="italic text-zinc-500">Motion</span>
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-16 px-12 md:px-24">
          {/* Initial Spacer to push content slightly right */}
          <div className="w-[10vw] shrink-0" />

          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative h-[60vh] w-[80vw] md:w-[60vh] aspect-[3/4] shrink-0 overflow-hidden rounded-[2.5rem] bg-zinc-900 shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="inline-block px-3 py-1 bg-[#d97706] text-white text-[10px] font-bold uppercase tracking-widest rounded mb-3">
                  {photo.category}
                </span>
                <h3 className="text-4xl font-serif font-bold text-white mb-2">
                  {photo.title}
                </h3>
                <p className="text-zinc-300 line-clamp-2">
                  {photo.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );

};

const Locations = () => {
  const [activeTab, setActiveTab] = useState('hq');

  // Map URLs (Embded Google Maps)
  // Note: Using rigorous Google Maps Embed API or generic placeholders if specific non-api keys aren't available. 
  // For this demo, we'll use generic coordinate embeds or standard iframe src structures.
  const locations = {
    hq: {
      id: 'hq',
      label: 'Headquarters',
      city: 'Moolaikaraipatti',
      title: 'Moolaikaraipatti Office',
      address: 'Moolaikaraipatti Village, Tirunelveli District, Tamil Nadu 627001',
      phone: '+91 98765 43210',
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15769.948286280387!2d77.68965664402636!3d8.535898822605991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0439f06c1c3855%3A0xc07ce9b06821815d!2sMoolaikaraipatti%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710520662584!5m2!1sen!2sin"
    },
    chennai: {
      id: 'chennai',
      label: 'Chennai Branch',
      city: 'Chennai',
      title: 'Vadapalani Office',
      address: '123, Main Road, Vadapalani, Chennai, Tamil Nadu 600026',
      phone: '+91 98765 43211',
      hours: 'Mon - Sat: 10:00 AM - 7:00 PM',
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.1167538965!2d80.06892461047644!3d13.047487785522778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710520712345!5m2!1sen!2sin"
    }
  };

  const activeLoc = locations[activeTab];

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

          {/* Left: Content Panel */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <div className="mb-10">
              <span className="text-[#d97706] font-bold tracking-widest uppercase text-sm mb-3 block">
                Find Us
              </span>
              <h2 className="text-4xl font-serif font-bold text-zinc-900 leading-tight">
                Our <span className="italic text-zinc-400">Locations</span>
              </h2>
            </div>

            {/* Location Selectors */}
            <div className="space-y-4 mb-10">
              <div
                onClick={() => setActiveTab('hq')}
                className={`p-6 rounded-2xl border transition-all cursor-pointer group ${activeTab === 'hq' ? 'bg-white border-[#d97706] shadow-lg scale-[1.02]' : 'bg-transparent border-zinc-200 hover:border-zinc-300'}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold uppercase tracking-widest ${activeTab === 'hq' ? 'text-[#d97706]' : 'text-zinc-400'}`}>Headquarters</span>
                  {activeTab === 'hq' && <div className="w-2 h-2 rounded-full bg-[#d97706]" />}
                </div>
                <h4 className="text-xl font-bold text-zinc-900">Moolaikaraipatti</h4>
              </div>

              <div
                onClick={() => setActiveTab('chennai')}
                className={`p-6 rounded-2xl border transition-all cursor-pointer group ${activeTab === 'chennai' ? 'bg-white border-[#d97706] shadow-lg scale-[1.02]' : 'bg-transparent border-zinc-200 hover:border-zinc-300'}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold uppercase tracking-widest ${activeTab === 'chennai' ? 'text-[#d97706]' : 'text-zinc-400'}`}>Branch Office</span>
                  {activeTab === 'chennai' && <div className="w-2 h-2 rounded-full bg-[#d97706]" />}
                </div>
                <h4 className="text-xl font-bold text-zinc-900">Chennai</h4>
              </div>
            </div>

            {/* Details for Active Location */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 mt-auto"
            >
              <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-6">{activeLoc.title}</h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <MapPin className="text-[#d97706] shrink-0 mt-1" size={20} />
                  <p className="text-zinc-600 text-sm leading-relaxed">{activeLoc.address}</p>
                </div>
                <div className="flex gap-4 items-center">
                  <Phone className="text-[#d97706] shrink-0" size={20} />
                  <p className="text-zinc-600 text-sm font-bold">{activeLoc.phone}</p>
                </div>
                <div className="flex gap-4 items-center">
                  <Clock className="text-[#d97706] shrink-0" size={20} />
                  <p className="text-zinc-600 text-sm">{activeLoc.hours}</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right: Map Frame */}
          <div className="w-full lg:w-2/3 h-[500px] lg:h-auto min-h-[500px] bg-zinc-200 rounded-[2.5rem] overflow-hidden shadow-inner border-4 border-white relative group">
            <iframe
              src={activeLoc.mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-700"
            ></iframe>

            {/* Map Overlay Badge */}
            <div className="absolute top-6 right-6 bg-white py-2 px-4 rounded-full shadow-lg flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-600">Live Map</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section className="bg-white py-24 lg:py-32 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          <div className="lg:w-5/12">
            <span className="text-[#d97706] font-bold tracking-widest uppercase text-sm mb-4 block">Inquiries</span>
            <h2 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-8 leading-tight">
              How can we <br /> help you?
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-md mb-12">
              Whether you have a question about our initiatives, want to volunteer, or just want to say hello, our team is ready to answer all your questions.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:hello@nellaimaripandiyar.com" className="text-xl md:text-2xl text-zinc-900 hover:text-[#d97706] transition-colors font-serif border-b border-zinc-200 pb-1">hello@nellaimaripandiyar.com</a>
              </div>
              <div>
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Phone</p>
                <p className="text-xl md:text-2xl text-zinc-900 font-serif border-b border-zinc-200 pb-1 inline-block">+91 98765 43210</p>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12">
            <form className="space-y-8 bg-zinc-50 p-8 md:p-12 rounded-[2.5rem]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 group-focus-within:text-[#d97706] transition-colors">First Name</label>
                  <input type="text" className="w-full border-b border-zinc-200 py-4 text-zinc-900 focus:outline-none focus:border-[#d97706] transition-colors bg-transparent text-lg placeholder-zinc-300" placeholder="John" />
                </div>
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 group-focus-within:text-[#d97706] transition-colors">Last Name</label>
                  <input type="text" className="w-full border-b border-zinc-200 py-4 text-zinc-900 focus:outline-none focus:border-[#d97706] transition-colors bg-transparent text-lg placeholder-zinc-300" placeholder="Doe" />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 group-focus-within:text-[#d97706] transition-colors">Email Address</label>
                <input type="email" className="w-full border-b border-zinc-200 py-4 text-zinc-900 focus:outline-none focus:border-[#d97706] transition-colors bg-transparent text-lg placeholder-zinc-300" placeholder="john@example.com" />
              </div>

              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 group-focus-within:text-[#d97706] transition-colors">Message</label>
                <textarea rows="4" className="w-full border-b border-zinc-200 py-4 text-zinc-900 focus:outline-none focus:border-[#d97706] transition-colors bg-transparent text-lg resize-none placeholder-zinc-300" placeholder="Tell us about your project..."></textarea>
              </div>

              <div className="pt-8">
                <button className="bg-zinc-900 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#d97706] transition-all duration-300 flex items-center gap-4 group shadow-xl">
                  <span>Send Message</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0f0f0f] text-white min-h-[80vh] flex flex-col justify-between relative overflow-hidden pt-20">

      {/* Background Branding */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.03]">
        <span className="text-[20vw] font-bold uppercase tracking-tighter whitespace-nowrap">Visionary</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center mb-24">
          <span className="text-[#d97706] font-bold tracking-[0.3em] uppercase text-sm mb-6">Contact Us</span>
          <a href="mailto:contact@nellaimaripandiyar.com" className="text-6xl md:text-9xl font-serif font-bold hover:text-[#d97706] transition-colors duration-500 text-center leading-none">
            Let's Talk
          </a>
          <div className="mt-8 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-zinc-700"></span>
            <p className="text-zinc-500 font-light">Available for new opportunities</p>
            <span className="h-[1px] w-12 bg-zinc-700"></span>
          </div>
        </div>
      </div>

      {/* Detailed Bottom Grid */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">

            {/* Brand Col */}
            <div className="py-12 md:pr-12">
              <h3 className="text-2xl font-serif mb-6">Nellai V.<br />Mari Pandiar</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Empowering rural communities through sustainable development and visionary leadership.
              </p>
              <span className="text-xs text-zinc-600 uppercase tracking-widest">&copy; 2025 All Rights Reserved.</span>
            </div>

            {/* Address Col */}
            <div className="py-12 md:px-12">
              <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-8 text-[#d97706]">Locations</h4>
              <div className="space-y-8">
                <div>
                  <p className="font-bold text-sm mb-1 text-white">Headquarters</p>
                  <p className="text-zinc-500 text-sm">Kallathi Village, Nanguneri, TN</p>
                </div>
                <div>
                  <p className="font-bold text-sm mb-1 text-white">Branch Office</p>
                  <p className="text-zinc-500 text-sm">Vadapalani, Chennai, TN</p>
                </div>
              </div>
            </div>

            {/* Socials Col */}
            <div className="py-12 md:px-12">
              <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-8 text-[#d97706]">Social</h4>
              <ul className="space-y-4">
                <li><a href="#" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"><Instagram size={16} className="group-hover:text-[#d97706] transition-colors" /> Instagram</a></li>
                <li><a href="#" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"><Twitter size={16} className="group-hover:text-[#d97706] transition-colors" /> Twitter</a></li>
                <li><a href="#" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"><Facebook size={16} className="group-hover:text-[#d97706] transition-colors" /> Facebook</a></li>
              </ul>
            </div>

            {/* Menu Col */}
            <div className="py-12 md:pl-12">
              <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-8 text-[#d97706]">Menu</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Home</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Our Story</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Initiatives</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Gallery</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="bg-zinc-50 text-zinc-900 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <Hero />
      <History />
      <KeyInitiatives />
      <Services />
      <Process />
      <Impact />
      <Spotlight />
      <Philosophy />
      <FeaturedProject />
      <Voices />
      <Gallery />
      <Locations />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
