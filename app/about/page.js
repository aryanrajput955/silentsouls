import AboutClient from "./AboutClient";
import JsonLd from "../components/JsonLd";

export const metadata = {
  title: "Our Story | SilentSouls",
  description: "Learn about SilentSouls, a Haridwar-based movement started by Manik Bansal to restore the sacred balance between faith and nature.",
  robots: {
    index: true,
    follow: true,
  },
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

  return (
    <>
      <JsonLd data={aboutSchema} />
      <AboutClient />
    </>
  );
}
