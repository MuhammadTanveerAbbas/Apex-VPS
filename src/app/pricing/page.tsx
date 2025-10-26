import { Suspense } from "react";
import type { Metadata } from "next";
import PricingContent from "@/components/pricing/PricingContent";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "VPS Pricing - Transparent Plans Starting at $5.99/mo",
  description:
    "Choose from 21+ global locations. Linux VPS, Windows RDP, and Dedicated Servers. No hidden fees, instant setup, 14 day money back guarantee.",
  openGraph: {
    title: "VPS Pricing - ApexVPS",
    description:
      "Transparent pricing for high-performance VPS hosting. Starting at $5.99/mo.",
  },
};

export default function PricingPage() {
  return (
    <Suspense fallback={<Loading />}>
      <PricingContent />
    </Suspense>
  );
}
