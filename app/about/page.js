"use client"

import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import CloudinaryImage from '../components/CloudinaryImage'
import { Heart, Leaf, Users, Sprout, ArrowRight } from 'lucide-react'

const HERO_IMAGE_URL = "https://res.cloudinary.com/dhlvq35cc/image/upload/v1773556770/haridawr_sxqxsl.jpg";

const StorySection = ({ title, text, cloudinaryId, reverse = false, index, isLast = false }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="relative py-12 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Narrative Thread (Vertical Line) */}
      {!isLast && (
        <div className="absolute left-1/2 bottom-0 w-px h-24 bg-linear-to-b from-emerald-200 to-transparent hidden md:block" />
      )}
      
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 lg:gap-24 max-w-7xl mx-auto`}>
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative group overflow-hidden rounded-[2rem] md:rounded-[2.5rem] aspect-4/3 shadow-2xl border-4 md:border-8 border-white">
            <CloudinaryImage 
              src={cloudinaryId} 
              alt={title} 
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-emerald-950/5 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2 space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-900 text-white flex items-center justify-center font-bold text-lg shadow-xl">
              {index}
            </div>
            <div className="h-px w-8 bg-emerald-200" />
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">The Chapter</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-emerald-950">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-emerald-950/90 leading-relaxed font-medium">
            {text}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1])

  return (
    <main ref={containerRef} className="relative bg-emerald-50/10">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <CloudinaryImage 
            src={HERO_IMAGE_URL} 
            alt="Nature Background" 
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality="auto:best"
          />
          <div className="absolute inset-0 bg-emerald-950/40" />
          <div className="absolute inset-0 bg-linear-to-b from-emerald-950/60 via-transparent to-emerald-950/40" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-8xl font-bold text-white drop-shadow-lg tracking-tight">
              Silent <span className="text-emerald-300">Souls</span>
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-2xl text-white font-medium max-w-2xl mx-auto leading-relaxed drop-shadow px-4">
              We started with a breath of fresh air and a vision for a cleaner, greener Haridwar.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Story Introduction */}
      <section className="py-16 md:py-24 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Our Essence</span>
          <h2 className="text-2xl md:text-5xl font-bold text-emerald-950">A legacy of silence that speaks volumes.</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full" />
          <p className="text-xl text-emerald-950/90 leading-relaxed font-medium">
            Silent Souls was born out of a simple observation: the world needs more listeners. In the bustling spiritual capital of Haridwar, we found our voice by listening to the whispered needs of nature.
          </p>
        </motion.div>
      </section>

      {/* Story Chapters */}
      <StorySection 
        index="01"
        title="The Sacred Awakening"
        text="It began at the banks of the Ganges. We saw the devotion of millions, but we also saw the remnants left in the wake of ritual. We realized that true reverence means ensuring every offering is treated with the dignity it deserves, even after the prayer is over."
        cloudinaryId="sacred_flowers_basket_l1bbh7"
      />

      <StorySection 
        index="02"
        title="Stewardship of Faith"
        reverse
        text="Our mission grew into a community effort to provide a respectful path for sacred materials to return to the elements. We work alongside local hands to ensure that every flower and every grain offered in faith is honored and preserved from neglect."
        cloudinaryId="h4_vucszr"
      />

      <StorySection 
        index="03"
        isLast
        title="Harmony for Every Breath"
        text="This stewardship extends beyond the ritual. By safeguarding our sacred spaces, we protect the homes of the silent souls that grace Haridwar—the local wildlife, the street-side companions, and the fragile ecosystem that breathes alongside us."
        cloudinaryId="gettyimages-898871398-612x612_nzythr"
      />

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-emerald-50/10 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {[
            { label: "River Cleaned", value: "50km+", icon: Leaf },
            { label: "Hearts Touched", value: "10k+", icon: Heart },
            { label: "Active Volunteers", value: "500+", icon: Users },
            { label: "Seeds Planted", value: "25k+", icon: Sprout },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-1 md:space-y-2"
            >
              <stat.icon className="mx-auto text-emerald-400 mb-2 md:mb-4" size={stat.label === "River Cleaned" ? 28 : 32} />
              <div className="text-3xl md:text-4xl font-bold font-display">{stat.value}</div>
              <div className="text-emerald-300/70 text-sm uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 md:py-32 px-6 flex items-center justify-center text-center">
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-4xl font-bold text-emerald-950 italic">"Our mission is to create a symphony of sustainability where every soul finds peace in a preserved planet."</h3>
            <p className="mt-6 md:mt-8 text-emerald-600 font-bold uppercase tracking-wider text-sm md:text-base">— Manik Bansal, Founder</p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
