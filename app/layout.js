import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://silentsouls.org"),
  title: {
    default: "SilentSouls - Transforming Temple Offerings into Environmental Restoration",
    template: "%s | SilentSouls"
  },
  description: "A Haridwar-based initiative by Manik Bansal dedicated to environmental preservation and wellness by stewarding sacred temple materials through the Sacred Dhara project.",
  keywords: ["environmental recycling", "wellness Haridwar", "Sacred Dhara", "temple offering recycling", "Ganges cleaning", "sustainable Haridwar", "Silent Souls", "Manik Bansal", "faith-based ecology"],
  authors: [{ name: "Manik Bansal", url: "https://silentsouls.org/about" }],
  creator: "Manik Bansal",
  publisher: "SilentSouls",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  themeColor: "#065f46", // emerald-800
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "SilentSouls - Sacred environmental recycling & wellness in Haridwar",
    description: "Stewarding sacred materials and preserving the environment in Haridwar through the Sacred Dhara initiative.",
    url: "https://silentsouls.org",
    siteName: "SilentSouls",
    images: [
      {
        url: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1773556770/haridawr_sxqxsl.jpg",
        width: 1200,
        height: 630,
        alt: "SilentSouls - Haridwar Environmental Initiative",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SilentSouls - Haridwar Environmental Initiative",
    description: "Transforming temple offerings into environmental restoration in Haridwar.",
    images: ["https://res.cloudinary.com/dhlvq35cc/image/upload/v1773556770/haridawr_sxqxsl.jpg"],
    creator: "@silentsouls", // Replace if you have a handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  // Enhanced Schema with E-E-A-T (Linking Founder to Entity)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": "https://silentsouls.org/#organization",
    "name": "SilentSouls",
    "url": "https://silentsouls.org",
    "logo": "https://silentsouls.org/logo.png",
    "image": "https://res.cloudinary.com/dhlvq35cc/image/upload/v1773556770/haridawr_sxqxsl.jpg",
    "description": "A Haridwar-based initiative dedicated to living things wellness and environmental preservation.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Haridwar",
      "addressRegion": "Uttarakhand",
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Person",
      "@id": "https://silentsouls.org/#founder",
      "name": "Manik Bansal",
      "jobTitle": "Founder",
      "sameAs": [
        "https://www.linkedin.com/in/manikbansal" // Add actual social links if known
      ]
    },
    "sameAs": [
      "https://facebook.com/silentsouls",
      "https://instagram.com/silentsouls"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://silentsouls.org/#website",
    "url": "https://silentsouls.org",
    "name": "SilentSouls",
    "publisher": { "@id": "https://silentsouls.org/#organization" },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://silentsouls.org/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased text-gray-800 bg-emerald-50/30 selection:bg-emerald-200 selection:text-emerald-900`}
      >
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
