"use client";

import Link from "next/link";
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

export default function CTA() {
  return (
    <section className="py-16 md:py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-emerald-600 rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 text-center text-white relative overflow-hidden shadow-3xl"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10" />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10 max-w-2xl mx-auto space-y-6 md:space-y-8"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-6xl font-bold leading-tight">Be a part of Haridwar's silent revolution.</motion.h2>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-white leading-relaxed font-medium opacity-90">
            Your support directly translates to cleaner waters, healthier wildlife, and a more sustainable future for the holy city.
          </motion.p>
          <motion.div variants={fadeUp} className="pt-4 md:scale-110">
            <Link href="/contact" className="inline-block bg-white text-emerald-600 px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl hover:bg-emerald-50 transition-all shadow-2xl hover:scale-105 active:scale-95 w-full sm:w-auto">
              Get Involved Now
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
