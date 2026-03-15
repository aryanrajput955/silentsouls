"use client";

import { motion } from "framer-motion";
import { Heart, Globe, Waves } from "lucide-react";

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

export default function ValueProposition() {
  return (
    <section className="py-16 md:py-32 bg-[#fdfdfc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end mb-12 md:mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs md:text-sm block mb-4">The Silent Problem</span>
            <h2 className="text-3xl md:text-6xl font-bold text-emerald-950 leading-tight">
              Faith shouldn't <br /> cost the Earth.
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:pb-2 text-lg text-emerald-900/80 leading-relaxed font-medium"
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
              title: "Sacred Stewardship",
              desc: "Providing a dignified path for offerings to return to nature, honoring the sacred bond between faith and the environment.",
              color: "bg-emerald-50 text-emerald-600"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
              className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-emerald-100/50 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 group"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 md:mb-8 transform group-hover:scale-110 transition-transform`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-emerald-950 mb-4">{item.title}</h3>
              <p className="text-emerald-900/80 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
