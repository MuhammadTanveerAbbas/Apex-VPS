import type { Country, PricingPlan } from './types';

// --- Plan Definitions for Different Regions ---

// North America (USA, Canada, Mexico)
const plansNA: PricingPlan[] = [
  {
    id: 101,
    name: 'Starter',
    price: 6.99,
    features: ['2 vCPU Cores', '2 GB RAM', '50 GB NVMe SSD', '2 TB Bandwidth', '1 IPv4 Address', 'Weekly Backups'],
  },
  {
    id: 102,
    name: 'Business',
    price: 14.99,
    features: ['4 vCPU Cores', '4 GB RAM', '100 GB NVMe SSD', '5 TB Bandwidth', '1 IPv4 Address', 'Daily Backups'],
    mostPopular: true,
  },
  {
    id: 103,
    name: 'Enterprise',
    price: 29.99,
    features: ['6 vCPU Cores', '8 GB RAM', '200 GB NVMe SSD', '10 TB Bandwidth', '1 IPv4 Address', 'Priority Support'],
  },
];

// Western Europe (UK, Germany, France, Netherlands, etc.)
const plansWEU: PricingPlan[] = [
  {
    id: 201,
    name: 'Starter EU',
    price: 7.50,
    features: ['2 vCPU Cores', '2 GB RAM', '40 GB NVMe SSD', '2 TB Bandwidth', '1 IPv4 Address', 'GDPR Compliant'],
  },
  {
    id: 202,
    name: 'Business EU',
    price: 16.50,
    features: ['4 vCPU Cores', '4 GB RAM', '80 GB NVMe SSD', '5 TB Bandwidth', '1 IPv4 Address', 'DDoS Protection'],
    mostPopular: true,
  },
  {
    id: 203,
    name: 'Enterprise EU',
    price: 32.50,
    features: ['6 vCPU Cores', '8 GB RAM', '160 GB NVMe SSD', '10 TB Bandwidth', '2 IPv4 Addresses', '24/7 Support'],
  },
];

// Asia Pacific (Singapore, Australia, Japan)
const plansAPAC: PricingPlan[] = [
  {
    id: 301,
    name: 'APAC Basic',
    price: 8.99,
    features: ['1 vCPU Core', '2 GB RAM', '40 GB SSD', '1 TB Bandwidth', 'Low Latency Network', 'Singapore DC'],
  },
  {
    id: 302,
    name: 'APAC Pro',
    price: 18.99,
    features: ['2 vCPU Cores', '4 GB RAM', '80 GB SSD', '3 TB Bandwidth', 'Optimized Peering', 'Tokyo & Sydney DCs'],
    mostPopular: true,
  },
  {
    id: 303,
    name: 'APAC Elite',
    price: 35.99,
    features: ['4 vCPU Cores', '8 GB RAM', '160 GB SSD', '6 TB Bandwidth', 'Premium Network', 'All APAC DCs'],
  },
];

// India
const plansIND: PricingPlan[] = [
  {
    id: 401,
    name: 'India Starter',
    price: 5.99,
    features: ['2 vCPU Cores', '2 GB RAM', '50 GB SSD', '5 TB Bandwidth', 'Mumbai DC', 'Free SSL'],
  },
  {
    id: 402,
    name: 'India Growth',
    price: 12.99,
    features: ['4 vCPU Cores', '4 GB RAM', '100 GB SSD', '10 TB Bandwidth', 'Delhi & Mumbai DCs', 'DDoS Protection'],
    mostPopular: true,
  },
  {
    id: 403,
    name: 'India Turbo',
    price: 25.99,
    features: ['6 vCPU Cores', '8 GB RAM', '200 GB SSD', '20 TB Bandwidth', 'Optimized for India', 'Priority Support'],
  },
];

// South America (Brazil)
const plansSA: PricingPlan[] = [
  {
    id: 501,
    name: 'Brazil Basic',
    price: 9.50,
    features: ['1 vCPU Core', '2 GB RAM', '50 GB SSD', '2 TB Bandwidth', 'São Paulo DC', 'Local Peering'],
  },
  {
    id: 502,
    name: 'Brazil Plus',
    price: 19.50,
    features: ['2 vCPU Cores', '4 GB RAM', '100 GB SSD', '4 TB Bandwidth', 'Redundant Power', '24/7 Support'],
    mostPopular: true,
  },
  {
    id: 503,
    name: 'Brazil Premium',
    price: 38.50,
    features: ['4 vCPU Cores', '8 GB RAM', '200 GB SSD', '8 TB Bandwidth', 'Enhanced Security', 'Full Management'],
  },
];

// Other Regions (Russia, South Africa, UAE)
const plansOther: PricingPlan[] = [
  {
    id: 601,
    name: 'Global Starter',
    price: 10.00,
    features: ['2 vCPU Cores', '2 GB RAM', '40 GB SSD', '2 TB Bandwidth', '1 IPv4 Address', 'Standard Support'],
  },
  {
    id: 602,
    name: 'Global Business',
    price: 20.00,
    features: ['4 vCPU Cores', '4 GB RAM', '80 GB SSD', '5 TB Bandwidth', '1 IPv4 Address', 'DDoS Protection'],
    mostPopular: true,
  },
  {
    id: 603,
    name: 'Global Enterprise',
    price: 40.00,
    features: ['6 vCPU Cores', '8 GB RAM', '160 GB SSD', '10 TB Bandwidth', '2 IPv4 Addresses', '24/7 Support'],
  },
];


export const countries: Country[] = [
  // North America
  { name: 'USA', code: 'USA', flagCode: 'us', currency: 'USD', currencySymbol: '$', plans: plansNA },
  { name: 'Canada', code: 'CAN', flagCode: 'ca', currency: 'USD', currencySymbol: '$', plans: plansNA },
  { name: 'Mexico', code: 'MEX', flagCode: 'mx', currency: 'USD', currencySymbol: '$', plans: plansNA },

  // Western Europe
  { name: 'UK', code: 'GBR', flagCode: 'gb', currency: 'USD', currencySymbol: '$', plans: plansWEU },
  { name: 'Germany', code: 'DEU', flagCode: 'de', currency: 'USD', currencySymbol: '$', plans: plansWEU },
  { name: 'France', code: 'FRA', flagCode: 'fr', currency: 'USD', currencySymbol: '$', plans: plansWEU },
  { name: 'Netherlands', code: 'NLD', flagCode: 'nl', currency: 'USD', currencySymbol: '$', plans: plansWEU },
  { name: 'Sweden', code: 'SWE', flagCode: 'se', currency: 'USD', currencySymbol: '$', plans: plansWEU },
  { name: 'Norway', code: 'NOR', flagCode: 'no', currency: 'USD', currencySymbol: '$', plans: plansWEU },
  { name: 'Switzerland', code: 'CHE', flagCode: 'ch', currency: 'USD', currencySymbol: '$', plans: plansWEU },
  { name: 'Belgium', code: 'BEL', flagCode: 'be', currency: 'USD', currencySymbol: '$', plans: plansWEU },
  { name: 'Italy', code: 'ITA', flagCode: 'it', currency: 'USD', currencySymbol: '$', plans: plansWEU },
  { name: 'Spain', code: 'ESP', flagCode: 'es', currency: 'USD', currencySymbol: '$', plans: plansWEU },

  // Asia Pacific
  { name: 'Singapore', code: 'SGP', flagCode: 'sg', currency: 'USD', currencySymbol: '$', plans: plansAPAC },
  { name: 'Australia', code: 'AUS', flagCode: 'au', currency: 'USD', currencySymbol: '$', plans: plansAPAC },
  { name: 'Japan', code: 'JPN', flagCode: 'jp', currency: 'USD', currencySymbol: '$', plans: plansAPAC },
  
  // India
  { name: 'India', code: 'IND', flagCode: 'in', currency: 'USD', currencySymbol: '$', plans: plansIND },

  // South America
  { name: 'Brazil', code: 'BRA', flagCode: 'br', currency: 'USD', currencySymbol: '$', plans: plansSA },

  // Other Regions
  { name: 'Russia', code: 'RUS', flagCode: 'ru', currency: 'USD', currencySymbol: '$', plans: plansOther },
  { name: 'South Africa', code: 'ZAF', flagCode: 'za', currency: 'USD', currencySymbol: '$', plans: plansOther },
  { name: 'UAE', code: 'ARE', flagCode: 'ae', currency: 'USD', currencySymbol: '$', plans: plansOther },
];
