export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SUN-DRAM Technologies",
    url: "https://company.sundram.tech",
    description: "We build centralised ERP, inventory, payroll, LMS, and AI systems for businesses.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-63697-66990",
      email: "founder@sundram.tech",
      contactType: "sales",
      areaServed: "IN",
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
