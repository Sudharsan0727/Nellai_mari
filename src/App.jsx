import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  ChevronRight,
  Heart,
  HeartHandshake,
  Sprout,
  Quote
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

const Ventures = () => {
  return (
    <section id="ventures" className="py-24 bg-zinc-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">Beyond Service</span>
          <h2 className="text-4xl md:text-5xl font-serif">Ventures & Arts</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-[500px]">
          {/* RMK Group - Large Tile */}
          <div className="col-span-1 md:col-span-2 row-span-2 bg-zinc-800 p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black group-hover:scale-105 transition-transform duration-700"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <Building2 size={40} className="text-amber-500" />
              <div>
                <h3 className="text-3xl font-bold mb-2">RMK Group</h3>
                <p className="text-zinc-400 mb-4">Partnership with Mrs. Kavitha & Mrs. Revathi</p>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-md">
                  A premier Real Estate and Construction firm based in Chennai. Building modern living spaces while retaining quality and trust.
                </p>
                <a href="/pdfs/rmk.pdf" target="_blank" className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-amber-500 text-black text-xs font-bold uppercase tracking-widest rounded hover:bg-white transition-colors">
                  View Company Profile <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* FILDO - Tall Tile */}
          <div className="col-span-1 md:col-span-1 row-span-2 bg-amber-600 p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="bg-white/20 w-fit p-3 rounded-xl backdrop-blur-sm">
                <Film size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">FILDO</h3>
                <p className="text-amber-100 text-sm">Film Development Org.</p>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <span className="block text-xs uppercase tracking-wider mb-2 opacity-70">Latest Production</span>
                  <span className="text-lg font-black italic">"Paruthikkottai"</span>
                </div>
                <a href="/pdfs/fildo.pdf" target="_blank" className="inline-block mt-6 text-xs font-bold uppercase tracking-widest text-white border-b border-white/30 hover:border-white transition-all">
                  Download Brochure
                </a>
              </div>
            </div>
          </div>

          {/* Contact/Misc Tile */}
          <div className="col-span-1 md:col-span-1 row-span-1 bg-white text-black p-8 rounded-3xl flex flex-col justify-between group hover:bg-zinc-200 transition-colors cursor-pointer">
            <div className="flex justify-between items-start">
              <MapPin size={24} />
              <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-zinc-500 mb-1">Visit Us</p>
              <p className="font-bold">Chennai Office</p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 row-span-1 bg-zinc-800 p-8 rounded-3xl flex flex-col justify-between group hover:bg-zinc-700 transition-colors cursor-pointer">
            <Play size={24} className="text-amber-500" />
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-zinc-500 mb-1">Media</p>
              <p className="font-bold text-white">Press Releases</p>
            </div>
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
      <Impact />
      <Ventures />
      <Footer />
    </div>
  );
}

export default App;
