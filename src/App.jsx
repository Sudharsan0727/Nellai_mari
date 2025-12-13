import React, { useState, useEffect } from 'react';
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
  PenTool
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
    { name: 'The Vision', href: '#home' },
    { name: 'The Journey', href: '#about' },
    { name: 'Social Impact', href: '#impact' },
    { name: 'Enterprises', href: '#ventures' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white py-4 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-2xl font-bold tracking-tighter uppercase ${scrolled ? 'text-zinc-900' : 'text-white'}`}>
          Nellai <span className="text-amber-500">V.M.P</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-widest uppercase hover:text-amber-500 transition-colors ${scrolled ? 'text-zinc-600' : 'text-white/80'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-6 py-2 bg-amber-500 text-black text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className={scrolled ? 'text-black' : 'text-white'} onClick={() => setIsOpen(!isOpen)}>
          <Menu className="md:hidden" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-zinc-900 z-50 flex flex-col items-center justify-center space-y-8">
          <button className="absolute top-8 right-8 text-white" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl text-white font-light tracking-wider hover:text-amber-500">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
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
    <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">

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
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      id: "24-0315",
      title: "Muthuvel vs. Land Encroachers",
      category: "Agrarian Justice",
      testimony: "The opposing counsel had money and muscle. We had nothing but fear. Then Mari Pandiyar took the stand. He didn't just argue points of law; he spoke the language of the soil. He stood like a fortress.",
      author: "Muthuvel",
      role: "Plaintiff / Farmer",
      status: "JUSTICE SERVED",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
    },
    {
      id: "24-0402",
      title: "Project: 'Paruthikkottai'",
      category: "Film Production",
      testimony: "In an industry built on smoke and mirrors, his word is concrete. He provided not just the funding, but the creative safety for us to tell a story that matters. A producer with the soul of an artist.",
      author: "Karthik Subbaraj",
      role: "Director",
      status: "RELEASED",
      image: "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?q=80&w=2787&auto=format&fit=crop"
    },
    {
      id: "24-0518",
      title: "Kallathi Village Trust",
      category: "Community Welfare",
      testimony: "We had no voice in the district meetings. He became our loudspeaker. From water rights to school renovations, he ensures that progress doesn't skip our village.",
      author: "Perumal",
      role: "Village Head",
      status: "ONGOING",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-zinc-800 relative overflow-hidden flex items-center justify-center">

      {/* Background Desk Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-30 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center mb-12">
          <h2 className="text-zinc-400 font-mono text-xs tracking-[0.3em] uppercase mb-4">Archives & Records</h2>
          <h3 className="text-white text-4xl font-serif">The Case Files</h3>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row shadow-2xl shadow-black/50 rounded-lg overflow-hidden h-auto md:h-[600px]">

          {/* Left Sidebar: Case List */}
          <div className="md:w-1/3 bg-zinc-900 border-r border-zinc-800 overflow-y-auto">
            <div className="p-6 bg-zinc-950/50 border-b border-zinc-800">
              <div className="flex items-center gap-2 text-amber-600 font-bold uppercase text-xs tracking-widest">
                <Search size={14} />
                <span>Select Record</span>
              </div>
            </div>
            {cases.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveCase(index)}
                className={`p-6 border-b border-zinc-800 cursor-pointer transition-all hover:bg-zinc-800 relative ${activeCase === index ? 'bg-zinc-800' : ''}`}
              >
                {activeCase === index && <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>}
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-zinc-500 text-[10px]">CASE #{item.id}</span>
                  <span className="text-[10px] font-bold text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded">{item.category}</span>
                </div>
                <h4 className={`font-serif text-lg leading-tight ${activeCase === index ? 'text-white' : 'text-zinc-500'}`}>
                  {item.title}
                </h4>
              </div>
            ))}
          </div>

          {/* Right Content: The File */}
          <div className="md:w-2/3 bg-[#f5f5f0] relative p-8 md:p-12 text-zinc-900 flex flex-col">

            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] pointer-events-none"></div>

            {/* Stamp */}
            <div className="absolute top-8 right-8 border-4 border-red-800/20 text-red-900/20 font-black text-4xl p-2 -rotate-12 pointer-events-none select-none">
              {cases[activeCase].status}
            </div>

            {/* Content Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col relative z-10"
              >
                {/* Header Info */}
                <div className="border-b-2 border-zinc-800/10 pb-6 mb-8 flex justify-between items-start">
                  <div>
                    <div className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-1">Subject</div>
                    <div className="font-serif text-2xl font-bold">{cases[activeCase].title}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-1">Date</div>
                    <div className="font-mono text-sm text-zinc-600">12 DEC 2024</div>
                  </div>
                </div>

                {/* The Testimony Typewriter Text */}
                <div className="flex-grow">
                  <span className="text-4xl text-zinc-300 font-serif float-left mr-2 leading-none">"</span>
                  <p className="font-mono text-lg leading-relaxed text-zinc-700 whitespace-pre-wrap">
                    {cases[activeCase].testimony}
                  </p>
                </div>

                {/* Evidence Photo & Signature */}
                <div className="mt-8 flex items-end justify-between">

                  {/* Paperclipped Photo */}
                  <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-8 bg-zinc-300 rounded-full z-20"></div> {/* Fake Paperclip */}
                    <div className="p-2 bg-white shadow-lg border border-zinc-200 w-32 h-32 rotate-2">
                      <img src={cases[activeCase].image} alt="Evidence" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="text-[8px] font-mono text-center mt-1 text-zinc-400">EXHIBIT A</div>
                  </div>

                  <div className="text-right">
                    <div className="h-16 w-32 flex items-end justify-end">
                      <span className="font-script text-3xl text-blue-900 rotate-[-5deg] block">{cases[activeCase].author}</span>
                    </div>
                    <div className="border-t border-zinc-400 w-40 mt-1"></div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">Signed By: {cases[activeCase].role}</div>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-zinc-950 text-white pt-24 pb-12 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-4xl font-serif mb-8">Reach Out</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Moolaikaraipatti (HQ)</h4>
                  <p className="text-zinc-500">Kallathi Village, Nanguneri Taluk<br />Tirunelveli District</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 size={20} className="text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Chennai Office</h4>
                  <p className="text-zinc-500">Vadapalani<br />Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">First Name</label>
                <input type="text" className="w-full bg-zinc-900 border-b border-zinc-800 p-3 focus:outline-none focus:border-amber-500 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Last Name</label>
                <input type="text" className="w-full bg-zinc-900 border-b border-zinc-800 p-3 focus:outline-none focus:border-amber-500 transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
              <textarea rows="4" className="w-full bg-zinc-900 border-b border-zinc-800 p-3 focus:outline-none focus:border-amber-500 transition-colors"></textarea>
            </div>
            <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-amber-500 transition-colors">
              Send Message
            </button>
          </form>
        </div>

        <div className="border-t border-zinc-900 pt-12 flex flex-col md:flex-row justify-between items-center opacity-40 text-xs uppercase tracking-widest">
          <p>&copy; 2025 Nellai V. Mari Pandiar</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
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
      <Footer />
    </div>
  );
}

export default App;
