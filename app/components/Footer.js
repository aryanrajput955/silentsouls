import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

// REPLACE THIS with your actual Cloudinary URL
const LOGO_URL = "https://res.cloudinary.com/dhlvq35cc/image/upload/v1772535934/silent_yuaarf.png";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-6 group">
              <div className="relative w-16 h-16 overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src={LOGO_URL}
                  alt="SilentSouls Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-3xl font-bold tracking-tight text-white">SilentSouls</span>
            </Link>
            <p className="text-emerald-200 leading-relaxed max-w-md">
              A Haridwar-based initiative deeply committed to living things wellness and environmentally-friendly recycling of sacred offerings, preserving the purity of our rivers and lands.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/#about' },
                { name: 'Sacred Dhara', href: '/#sacred-dhara' },
                { name: 'Our Impact', href: '/#impact' },
                { name: 'Contact Us', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-emerald-200 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div id="contact">
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-emerald-200">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span>Haridwar, Uttarakhand</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <a href="mailto:connect@silentsouls.org" className="hover:text-white transition-colors">connect@silentsouls.org</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <a href="tel:+918433023265" className="hover:text-white transition-colors">+91 84330 23265</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-emerald-800 mt-12 pt-8 text-center text-sm text-emerald-400">
          <p>© {new Date().getFullYear()} SilentSouls. Preserving Nature, Respecting Life.</p>
        </div>
      </div>
    </footer>
  );
}
