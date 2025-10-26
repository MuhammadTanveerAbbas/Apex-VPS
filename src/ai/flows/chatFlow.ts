'use server';

import { z } from 'zod';

const responseCache = new Map<string, { response: string; timestamp: number }>();
const CACHE_TTL = 1000 * 60 * 30; // 30 minutes
const MAX_CACHE_SIZE = 50;

const ChatInputSchema = z.object({
  message: z.string().describe('The user\'s message to the chatbot.'),
  history: z.string().describe('The conversation history so far.')
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string().describe('The chatbot\'s response.')
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;


export async function chatWithBot(message: string, history: string): Promise<string> {
  const cacheKey = message.toLowerCase().trim();
  const cached = responseCache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.response;
  }

  try {
    const { getAI } = await import('@/ai/genkit');
    const ai = await getAI();
    const result = await Promise.race([
      chatFlow(ai, { message, history }),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 10000)
      )
    ]) as { response: string };

    responseCache.set(cacheKey, {
      response: result.response,
      timestamp: Date.now(),
    });

    if (responseCache.size > MAX_CACHE_SIZE) {
      const oldestKey = responseCache.keys().next().value;
      if (oldestKey) responseCache.delete(oldestKey);
    }

    return result.response;
  } catch (error) {
    console.error('Chat error:', error);
    return "I'm having trouble connecting right now. Please try again in a moment or contact our support team directly.";
  }
}

const chatFlow = async (ai: Awaited<ReturnType<typeof import('@/ai/genkit').getAI>>, input: ChatInput) => {
  const flow = ai.defineFlow(
    {
      name: 'chatFlow',
      inputSchema: ChatInputSchema,
      outputSchema: ChatOutputSchema,
    },
    async (flowInput: ChatInput) => {
      const { output } = await ai.generate({
        prompt: `You are "Apex", a friendly and highly efficient sales assistant for ApexVPS, a premium provider of high-performance VPS and RDP hosting. Your goal is to convert visitors into customers by providing clear, concise, and helpful information.

**Your Core Directives:**
1. **Be Brief:** Max 2-3 sentences. Get straight to the answer.
2. **Understand Need:** Ask "What are you building?" to recommend the right plan.
3. **Sell Benefits:** "NVMe SSDs = faster sites" not long explanations.
4. **Highlight:** Instant setup, full admin access, 99.9% uptime, 14-day guarantee.
5. **Guide Action:** Always suggest next step like visiting pricing.
6. **Lead Capture:** If unsure, offer specialist help with name/email.

**ApexVPS Service Information:**
-   **Products:** Linux VPS, Windows RDP/VPS, Dedicated Servers.
-   **Global Locations (21+):** USA, Canada, UK, Germany, France, Netherlands, Singapore, Australia, Japan, India, etc.
-   **Key Features:** Instant OS Setup, Full Admin/Root Access, SSD & NVMe Storage, 24/7 Expert Support, PayPal & Cards, 99.9% Uptime Guarantee.
-   **14 Day Money-Back Guarantee:** Risk-free.

**Popular Starting Prices (USD):**
-   **USA (Starter):** $6.99/mo for 2 vCPU, 2GB RAM, 50GB NVMe.
-   **Germany (Starter EU):** $7.50/mo for 2 vCPU, 2GB RAM, 40GB NVMe.
-   **Singapore (APAC Basic):** $8.99/mo for 1 vCPU, 2GB RAM, 40GB SSD.
-   **India (India Starter):** $5.99/mo for 2 vCPU, 2GB RAM, 50GB SSD.

Your primary goal is to be wise, fast, and minimal in your responses. Provide just enough information to be helpful and persuasive, then guide the user.

**Conversation History:**
${flowInput.history}

**User's Latest Message:**
${flowInput.message}`,
        output: { schema: ChatOutputSchema }
      });
      return output!;
    }
  );
  return await flow(input);
};
