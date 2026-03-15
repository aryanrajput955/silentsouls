"use client";

import CloudinaryImage from "./CloudinaryImage";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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

const HERO_IMAGE_PUBLIC_ID = "h4_vucszr";

export default function Hero({ heroImageY, heroTextOpacity, heroTextY }) {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y: heroImageY }}
        className="absolute inset-0 z-0"
      >
        <CloudinaryImage
          src={HERO_IMAGE_PUBLIC_ID}
            alt="Serene sunrise in Haridwar"
            fill
            className="object-cover scale-110"
            priority
            sizes="100vw"
          />
        <div className="absolute inset-0 bg-linear-to-b from-emerald-950/70 via-emerald-900/40 to-emerald-950"></div>
      </motion.div>
      
      <motion.div 
        style={{ opacity: heroTextOpacity, y: heroTextY }}
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full text-center"
      >
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6 md:mb-8 py-2 px-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-white text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">Restoring the Sacred Balance</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-8xl font-bold text-white leading-tight md:leading-[1.1] mb-6 md:mb-8 tracking-tight">
            Quietly Saving <br />
            <span className="text-emerald-300 italic">Haridwar's Soul.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-2xl text-white mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4 md:px-0 opacity-90">
            Transforming temple offerings into environmental restoration. A dedicated movement for the wellness of all living things.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <Link href="/about" className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold rounded-full bg-white text-emerald-950 hover:bg-emerald-50 transition-all shadow-xl hover:shadow-emerald-500/20 w-full sm:w-auto">
              Our Story
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="#sacred-dhara" className="text-white font-semibold hover:text-emerald-300 transition-colors py-4 px-8">
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
  );
}
