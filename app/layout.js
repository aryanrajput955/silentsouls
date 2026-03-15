import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "SilentSouls - Sacred environmental recycling & wellness in Haridwar",
  description: "A Haridwar-based initiative dedicated to living things wellness and environmental preservation by stewarding sacred materials through our Sacred Dhara project.",
  icons: {
    icon: "/logo.png",
    "apple": "/logo.png",
    "sizes": "180x180",
    "type": "image/png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased text-gray-800 bg-emerald-50/30 selection:bg-emerald-200 selection:text-emerald-900`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
