export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ApexVPS',
    url: 'https://apexvps.com',
    logo: 'https://apexvps.com/logo.png',
    description: 'High-performance VPS and RDP hosting with 21+ global locations',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'English',
      areaServed: 'Worldwide',
    },
    sameAs: [
      'https://twitter.com/apexvps',
      'https://github.com/apexvps',
      'https://linkedin.com/company/apexvps',
    ],
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'VPS Hosting',
    description: 'High-performance Linux and Windows VPS hosting',
    brand: {
      '@type': 'Brand',
      name: 'ApexVPS',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '5.99',
      highPrice: '40.00',
      offerCount: '21',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '0',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
