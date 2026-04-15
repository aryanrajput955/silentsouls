import ContactClient from "./ContactClient";
import JsonLd from "../components/JsonLd";

export const metadata = {
  title: "Contact Us | SilentSouls",
  description: "Get in touch with SilentSouls in Haridwar. Connect with us for volunteer opportunities, inquiries about Sacred Dhara, or environmental wellness collaboration.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "SilentSouls",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8433023265",
        "contactType": "customer service",
        "email": "connect@silentsouls.org",
        "areaServed": "IN",
        "availableLanguage": ["en"]
      }
    }
  };

  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactClient />
    </>
  );
}
