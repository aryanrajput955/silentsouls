import HomeClient from "./HomeClient";
import JsonLd from "./components/JsonLd";

export const metadata = {
  title: "Home | SilentSouls - Sacred environmental recycling & wellness in Haridwar",
  description: "Join SilentSouls in Haridwar for environmental preservation through our Sacred Dhara project. We transform temple offerings into ecological restoration.",
};

export default function Home() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sacred Dhara Project",
    "provider": {
      "@type": "Organization",
      "name": "SilentSouls"
    },
    "areaServed": "Haridwar, Uttarakhand",
    "description": "Environmental restoration by stewarding sacred materials from temple offerings.",
    "serviceType": "Environmental Recycling"
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <HomeClient />
    </>
  );
}
