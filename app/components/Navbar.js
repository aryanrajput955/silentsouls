"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Instagram, Facebook, ArrowRight } from "lucide-react";
import CloudinaryImage from "./CloudinaryImage";
import { motion, AnimatePresence } from "framer-motion";

// The Public ID for your logo on Cloudinary
const LOGO_PUBLIC_ID = "silent_yuaarf";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isNavSolid = (!isHome && !isAbout) || scrolled || isOpen;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Sacred Dhara", href: "/#sacred-dhara" },
    { name: "Contact", href: "/contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    opened: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    opened: { opacity: 1, x: 0 }
  };

  return (
    <nav
      className={`fixed w-full z-100 transition-all duration-500 ${
        isNavSolid
          ? "bg-white/90 backdrop-blur-xl shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden transform group-hover:rotate-6 transition-transform duration-500">
              <CloudinaryImage 
                src={LOGO_PUBLIC_ID}
                alt="SilentSouls Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                isNavSolid ? "text-emerald-950" : "text-white"
              }`}
            >
              Silent<span className="text-emerald-500">Souls</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:text-emerald-500 relative group ${
                  isNavSolid ? "text-emerald-950/80" : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className={`px-7 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                isNavSolid
                  ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-xl shadow-emerald-500/20"
                  : "bg-white text-emerald-900 hover:bg-emerald-50 shadow-2xl"
              }`}
            >
              Support Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-colors duration-300 ${
                isNavSolid ? "text-emerald-950 hover:bg-emerald-50" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-hidden flex flex-col"
          >
            <motion.div 
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="flex-1 px-8 pt-12 pb-8 space-y-6"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between py-2"
                  >
                    <span className="text-4xl font-bold text-emerald-950 group-hover:text-emerald-600 transition-colors">
                      {link.name}
                    </span>
                    <ArrowRight className="h-6 w-6 text-emerald-200 group-hover:text-emerald-600 group-hover:translate-x-2 transition-all" />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={itemVariants} className="pt-8">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-8 py-5 rounded-2xl text-xl font-bold bg-emerald-600 text-white shadow-2xl shadow-emerald-500/20 active:scale-95 transition-transform"
                >
                  Join the Movement
                </Link>
              </motion.div>

              {/* Bottom Decoration for Mobile Menu */}
              <motion.div 
                variants={itemVariants}
                className="pt-12 mt-auto border-t border-emerald-100 flex flex-col gap-6"
              >
                <div className="flex gap-6 justify-center">
                  <a href="#" className="p-3 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="p-3 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all">
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
                <p className="text-center text-sm font-medium text-emerald-900/40 tracking-widest uppercase">
                  Haridwar · Uttarakhand
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
