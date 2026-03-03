"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

// REPLACE THIS with your actual Cloudinary URL
const LOGO_URL = "https://res.cloudinary.com/dhlvq35cc/image/upload/v1772535934/silent_yuaarf.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // If we are not on the homepage, we shouldn't have transparent navbar 
  // because the contact page background is not an image and white text won't be visible.
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isNavSolid = (!isHome && !isAbout) || scrolled;

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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Sacred Dhara", href: "/#sacred-dhara" },
    { name: "Our Impact", href: "/#impact" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isNavSolid
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 overflow-hidden transform group-hover:scale-110 transition-transform duration-300">
              <Image 
                src={LOGO_URL}
                alt="SilentSouls Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className={`text-2xl font-bold tracking-tight ${
                isNavSolid ? "text-gray-900" : "text-white"
              }`}
            >
              SilentSouls
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                  isNavSolid ? "text-gray-700" : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                isNavSolid
                  ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg"
                  : "bg-white text-emerald-800 hover:bg-emerald-50 shadow-lg"
              }`}
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isNavSolid ? "text-gray-900" : "text-white"}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 px-5 py-3 rounded-xl text-base font-medium shadow bg-emerald-600 text-white hover:bg-emerald-700"
            >
              Get Involved
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
