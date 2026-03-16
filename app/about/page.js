import AboutClient from "./AboutClient";
import JsonLd from "../components/JsonLd";

export const metadata = {
  title: "Our Story | SilentSouls",
  description: "Learn about SilentSouls, a Haridwar-based movement started by Manik Bansal to restore the sacred balance between faith and nature.",
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "SilentSouls",
      "foundingDate": "2024",
      "founder": {
        "@type": "Person",
        "name": "Manik Bansal"
      },
      "description": "A legacy of silence that speaks volumes—focused on Haridwar's environmental wellness."
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
        "name": "Our Story",
        "item": "https://silentsouls.org/about"
      }
    ]
  };

  return (
    <>
      <JsonLd data={aboutSchema} />
      <JsonLd data={breadcrumbSchema} />
      <AboutClient />
    </>
  );
}
