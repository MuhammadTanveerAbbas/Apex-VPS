"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { countries } from "@/lib/data";
import type { Country } from "@/lib/types";
import { CountrySelector } from "./CountrySelector";
import { PricingCard } from "./PricingCard";

function PricingContentInner() {
  const searchParams = useSearchParams();
  const selectedCountryCode = searchParams.get("country") || "USA";
  const selectedCountry: Country =
    countries.find((c) => c.code === selectedCountryCode) || countries[0];

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <Badge variant="outline" className="mb-6">
            Pricing
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter mb-4">
            Choose Your <span className="text-primary">Perfect Plan</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
            Select your region for optimal performance. All plans include 14 day
            money-back guarantee.
          </p>
          <CountrySelector
            countries={countries}
            defaultValue={selectedCountry.code}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {selectedCountry.plans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                country={selectedCountry}
              />
            ))}
          </div>
          <div className="text-center mt-16 space-y-4">
            <p className="text-muted-foreground">
              All prices in USD. Need a custom solution?
            </p>
            <Button asChild variant="outline" size="lg">
              <a href="/#contact" className="group">
                <MessageCircle className="mr-2 size-4" />
                Contact Sales
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function PricingContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PricingContentInner />
    </Suspense>
  );
}
