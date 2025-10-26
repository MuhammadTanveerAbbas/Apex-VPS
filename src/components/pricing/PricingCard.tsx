"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Country, PricingPlan } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Check, Star, ArrowRight } from "lucide-react";
import { whmcsConfig } from "@/lib/whmcs";
import { Skeleton } from "@/components/ui/skeleton";

interface PricingCardProps {
  plan: PricingPlan;
  country: Country;
}

export function PricingCard({ plan, country }: PricingCardProps) {
  const [formattedPrice, setFormattedPrice] = useState<string | null>(null);
  const whmcsUrl = `${whmcsConfig.url}/cart.php?a=add&pid=${plan.id}`;

  useEffect(() => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
    
    setFormattedPrice(formatter.format(plan.price));
  }, [plan.price]);

  return (
    <Card className={cn(
      "group relative flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-3",
      plan.mostPopular ? "border-primary shadow-lg shadow-primary/10 scale-105" : "border hover:border-primary/50"
    )}>
      {plan.mostPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 text-sm font-bold rounded-full flex items-center gap-1.5 shadow-lg">
            <Star className="size-3 fill-current" />
            Most Popular
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
      <CardHeader className="text-center relative z-10 pb-8">
        <CardTitle className="text-2xl mb-4">{plan.name}</CardTitle>
        <div className="h-[60px] flex items-baseline justify-center gap-1">
          {formattedPrice ? (
            <>
              <span className="text-5xl font-bold text-foreground">{formattedPrice}</span>
              <span className="text-lg text-muted-foreground">/month</span>
            </>
          ) : (
             <Skeleton className="h-12 w-32" />
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow relative z-10">
        <ul className="space-y-4">
          {plan.features.map(feature => (
            <li key={feature} className="flex items-start gap-3">
              <Check className="size-5 text-green-500 mt-0.5 shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="relative z-10 pt-6">
        <Button asChild className={cn(
          "w-full transition-all duration-300 hover:scale-105",
          plan.mostPopular && "shadow-lg shadow-primary/25"
        )} size="lg">
          <a href={whmcsUrl} target="_blank" rel="noopener noreferrer">
            Get Started
            <ArrowRight className="ml-2 size-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
