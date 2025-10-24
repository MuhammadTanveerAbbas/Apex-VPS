"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Track page views
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      
      // Google Analytics (add your GA4 ID)
      if (window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
          page_path: url,
        });
      }

      // Simple custom analytics
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'pageview',
          url,
          timestamp: new Date().toISOString(),
        }),
      }).catch(() => {});
    }
  }, [pathname, searchParams]);

  return null;
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
