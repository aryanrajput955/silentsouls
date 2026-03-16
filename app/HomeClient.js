"use client";

import dynamic from "next/dynamic";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Hero from "./components/Hero";
import ValueProposition from "./components/ValueProposition";

const SacredDhara = dynamic(() => import("./components/SacredDhara"), { ssr: true });
const Wellness = dynamic(() => import("./components/Wellness"), { ssr: true });
const CTA = dynamic(() => import("./components/CTA"), { ssr: true });

export default function HomeClient() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax transforms for segments
  const heroImageY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  return (
    <main ref={containerRef} className="flex flex-col min-h-screen bg-[#fdfdfc] selection:bg-emerald-100 selection:text-emerald-900">
      
      <Hero 
        heroImageY={heroImageY} 
        heroTextOpacity={heroTextOpacity} 
        heroTextY={heroTextY} 
      />

      <ValueProposition />

      <SacredDhara />

      <Wellness />

      <CTA />

    </main>
  );
}
