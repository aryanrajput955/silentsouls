"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Globe, Waves } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax transforms for segments
  const heroImageY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  const fadeUp = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.12, delayChildren: 0.1 } 
    }
  };

  return (
    <main ref={containerRef} className="flex flex-col min-h-screen bg-[#fdfdfc] selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Premium Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroImageY }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/haridwar-hero.png"
            alt="Serene sunrise in Haridwar"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-emerald-950/70 via-emerald-900/40 to-emerald-950"></div>
        </motion.div>
        
        <motion.div 
          style={{ opacity: heroTextOpacity, y: heroTextY }}
          className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center"
        >
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-8 py-2 px-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-white text-xs font-semibold tracking-[0.2em] uppercase">Restoring the Sacred Balance</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Quietly Saving <br />
              <span className="text-emerald-300 italic">Haridwar's Soul.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-emerald-50/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Transforming temple offerings into environmental restoration. A dedicated movement for the wellness of all living things.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/about" className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full bg-white text-emerald-950 hover:bg-emerald-50 transition-all shadow-xl hover:shadow-emerald-500/20">
                Our Story
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#sacred-dhara" className="text-white font-semibold hover:text-emerald-300 transition-colors py-4">
                Explore Initiative
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-linear-to-b from-white/40 to-transparent"
          ></motion.div>
        </motion.div>
      </section>

      {/* Modern Value Proposition */}
      <section className="py-32 bg-[#fdfdfc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-end mb-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm block mb-4">The Silent Problem</span>
              <h2 className="text-4xl md:text-6xl font-bold text-emerald-950 leading-tight">
                Faith shouldn't <br /> cost the Earth.
              </h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:pb-2 text-lg text-emerald-900/60 leading-relaxed font-light"
            >
              Thousands of kilograms of natural offerings enter our rivers daily. While the intent is pure, the environmental burden is silent and heavy. We bridge the gap between devotion and preservation.
            </motion.div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Waves,
                title: "River Sanctuary",
                desc: "Cleaning the Ganges isn't just a duty; it's a prayer for the future of our waters.",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: Heart,
                title: "Living Wellness",
                desc: "Extending compassion to every soul—humans, animals, and the soil beneath us.",
                color: "bg-rose-50 text-rose-600"
              },
              {
                icon: Globe,
                title: "Zero Waste Cycle",
                desc: "Turning sacred flowers into organic incense and compost, completing the loop of life.",
                color: "bg-emerald-50 text-emerald-600"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                className="p-10 rounded-[2.5rem] bg-white border border-emerald-100/50 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-emerald-950 mb-4">{item.title}</h3>
                <p className="text-emerald-900/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Sacred Dhara - Interactive Feature */}
      <section id="sacred-dhara" className="py-24 bg-emerald-950 text-white relative rounded-[4rem] mx-4 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/20 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-12"
            >
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                  Featured Project
                </div>
                <h2 className="text-5xl font-bold mb-8">Sacred Dhara</h2>
                <p className="text-xl text-emerald-100/80 leading-relaxed font-light">
                  We collect floral waste from major ghats and temples, transforming them into "Dhara"—the flow of life. Nothing is wasted; everything is honored.
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  "Collection with Reverence",
                  "Sorting by Hand",
                  "Natural Sun-Drying",
                  "Pure Incense Production"
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeUp}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div className="w-8 h-8 rounded-full border border-emerald-500/50 flex items-center justify-center text-xs font-bold text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      0{i+1}
                    </div>
                    <span className="text-lg text-emerald-100 group-hover:text-white transition-colors">{step}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src="/sacred_flowers_basket.png"
                alt="Sacred dhara process"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-emerald-950/80 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <div className="text-3xl font-bold">100% Organic</div>
                <div className="text-emerald-400 font-medium">Chemical Free Process</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Living Things Wellness - Story Focus */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-12 border-[#fdfdfc]">
                <Image 
                  src="/images/wellness.png"
                  alt="Living things wellness"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 lg:-right-12 bg-emerald-50 px-8 py-10 rounded-4xl shadow-xl max-w-[300px] border border-emerald-100"
              >
                <p className="text-emerald-900 font-medium italic leading-relaxed text-base">
                  "The river heals the land, and we heal the hearts that dwell within it."
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex-1 space-y-8"
            >
              <motion.span variants={fadeUp} className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Wellness & Harmony</motion.span>
              <motion.h2 variants={fadeUp} className="text-5xl font-bold text-emerald-950 leading-tight">
                Compassion is <br /> our core mission.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-emerald-900/60 leading-relaxed font-light">
                Our initiative goes beyond environmentalism. We nurture the silent souls of Haridwar—the street-side cows, the local birds, and the ecosystem that sustains them. Every breath matters.
              </motion.p>
              <motion.div variants={fadeUp} className="pt-4">
                <Link href="/contact" className="inline-flex items-center gap-2 text-emerald-600 font-bold group text-lg">
                  Learn how you can help <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* High-Impact CTA */}
      <section className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-emerald-600 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-3xl"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10" />
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative z-10 max-w-2xl mx-auto space-y-8"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold leading-tight">Be a part of Haridwar's silent revolution.</motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-emerald-50 leading-relaxed font-light">
              Your support directly translates to cleaner waters, healthier wildlife, and a more sustainable future for the holy city.
            </motion.p>
            <motion.div variants={fadeUp} className="pt-4 scale-110">
              <Link href="/contact" className="inline-block bg-white text-emerald-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-emerald-50 transition-all shadow-2xl hover:scale-105 active:scale-95">
                Get Involved Now
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}
