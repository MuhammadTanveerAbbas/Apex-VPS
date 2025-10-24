"use client";

import { useRouter } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Country } from '@/lib/types';

interface CountrySelectorProps {
  countries: Country[];
  defaultValue: string;
}

export function CountrySelector({ countries, defaultValue }: CountrySelectorProps) {
  const router = useRouter();

  const handleCountryChange = (countryCode: string) => {
    router.push(`/pricing?country=${countryCode}`);
  };

  return (
    <div className="max-w-xs mx-auto">
      <Select onValueChange={handleCountryChange} defaultValue={defaultValue}>
        <SelectTrigger className="text-lg py-6">
          <SelectValue placeholder="Select a country..." />
        </SelectTrigger>
        <SelectContent>
          {countries.map(country => (
            <SelectItem key={country.code} value={country.code}>
              <div className="flex items-center gap-2">
                <span className={`fi fi-${country.flagCode}`}></span>
                <span>{country.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
