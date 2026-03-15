"use client";

import CloudinaryImage from "./CloudinaryImage";
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
const SACRED_IMAGE_URL = "https://res.cloudinary.com/dhlvq35cc/image/upload/v1773551563/sacred_flowers_basket_l1bbh7.png";

export default function SacredDhara() {
  return (
    <section id="sacred-dhara" className="py-16 md:py-24 bg-emerald-950 text-white relative rounded-[2rem] md:rounded-[4rem] mx-4 overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/20 skew-x-12 translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8 md:space-y-12"
          >
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                Featured Project
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Sacred Dhara</h2>
              <div className="mb-6 md:mb-8">
                <p className="text-emerald-400 text-xs sm:text-sm font-medium uppercase tracking-[0.12em] sm:tracking-widest leading-relaxed flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-2">
                  <span>In collaboration with</span>
                  <a href="https://www.ancienthealth.in/" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit text-white hover:text-emerald-300 underline underline-offset-4 decoration-emerald-500/50 transition-colors">
                    Ancient Health
                  </a>
                </p>
              </div>
              <p className="text-xl text-emerald-50 leading-relaxed">
                We collect the sacred materials offered in the temples and rivers of Haridwar with deep reverence. Our mission is to ensure that these offerings, rich with devotion, are treated with the dignity they deserve.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                "Daily Ritual Offerings",
                "Sacred Temple Materials",
                "Riverbed Stewardship",
                "Honoring Every Grain"
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
            className="relative w-full max-w-md mx-auto lg:max-w-none aspect-[4/5] min-h-[320px] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <CloudinaryImage 
              src={SACRED_IMAGE_URL}
              alt="Sacred materials collection"
              fill
              className="object-cover"
              sizes="(max-width: 640px) calc(100vw - 4.5rem), (max-width: 1024px) 70vw, 45vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-emerald-950/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-10 md:left-10 md:right-auto">
              <div className="inline-block max-w-full rounded-2xl bg-emerald-950/55 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold leading-tight">100% Sacred</div>
                <div className="text-sm sm:text-base text-emerald-300 font-medium leading-snug">Stewardship of Devotion</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
