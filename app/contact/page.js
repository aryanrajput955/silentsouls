import ContactClient from "./ContactClient";
import JsonLd from "../components/JsonLd";

export const metadata = {
  title: "Contact Us | SilentSouls",
  description: "Get in touch with SilentSouls in Haridwar. Connect with us for volunteer opportunities, inquiries about Sacred Dhara, or environmental wellness collaboration.",
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
        "availableLanguage": ["en", "hi"]
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://silentsouls.org"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": "https://silentsouls.org/contact"
      }
    ]
  };

  return (
    <>
      <JsonLd data={contactSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ContactClient />
    </>
  );
}
