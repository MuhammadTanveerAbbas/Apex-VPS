"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { ChevronRight } from 'lucide-react';

export function NewsletterForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();

      if (res.ok) {
        toast({
          title: 'Subscribed!',
          description: result.message,
        });
        e.currentTarget.reset();
      } else {
        toast({
          title: 'Error',
          description: result.error,
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to subscribe. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input 
        type="email" 
        name="email"
        placeholder="Enter your email" 
        required
        disabled={loading}
        className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-primary focus:border-primary" 
      />
      <Button type="submit" variant="default" size="icon" aria-label="Subscribe" disabled={loading}>
        <ChevronRight />
      </Button>
    </form>
  );
}
