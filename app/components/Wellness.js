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
const WELLNESS_IMAGE_URL = "https://res.cloudinary.com/dhlvq35cc/image/upload/v1773552314/gettyimages-898871398-612x612_nzythr.jpg";

export default function Wellness() {
  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-8 md:border-12 border-[#fdfdfc]">
              <CloudinaryImage 
                src={WELLNESS_IMAGE_URL}
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
              className="absolute -bottom-4 -right-4 lg:-right-12 bg-emerald-50 px-6 py-8 md:px-8 md:py-10 rounded-3xl md:rounded-4xl shadow-xl max-w-[240px] md:max-w-[300px] border border-emerald-100"
            >
              <p className="text-emerald-900 font-medium italic leading-relaxed text-sm md:text-base">
                "Compassion knows no species; our devotion reaches every beating heart."
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
            <motion.span variants={fadeUp} className="text-emerald-600 font-bold uppercase tracking-widest text-xs md:text-sm">Wellness & Harmony</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-emerald-950 leading-tight">
              Harmony for <br className="hidden md:block" /> every living soul.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-emerald-900/80 leading-relaxed font-medium">
              Our initiative extends beyond environmental restoration to the very heartbeat of Haridwar. We provide nourishment and care for all silent souls—whether they roam the streets or soar through the skies. From local dogs and cows to the winged visitors of the Ganges, we believe every life deserves dignity and devotion.
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
  );
}
