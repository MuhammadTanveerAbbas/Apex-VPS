export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  features: string[];
  mostPopular?: boolean;
}

export interface Country {
  name: string;
  code: string;
  flagCode: string;
  currency: string;
  currencySymbol: string;
  plans: PricingPlan[];
}
