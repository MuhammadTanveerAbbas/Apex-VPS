'use server';

import { z } from 'zod';

const responseCache = new Map<string, { response: string; timestamp: number }>();
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

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

  const { ai } = await import('@/ai/genkit');
  const result = await chatFlow(ai, { message, history });

  responseCache.set(cacheKey, {
    response: result.response,
    timestamp: Date.now(),
  });

  if (responseCache.size > 100) {
    const oldestKey = responseCache.keys().next().value;
    if (oldestKey) responseCache.delete(oldestKey);
  }

  return result.response;
}

const chatFlow = async (ai: any, input: ChatInput) => {
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
1.  **Be Brief and Clear:** Keep your answers short and to the point. Use simple language. Get straight to the answer.
2.  **Understand the Need:** Quickly understand the user's requirements. Ask simple questions like "What are you building?" to recommend the best plan.
3.  **Sell with Benefits:** Explain *why* features matter in a few words. Instead of a long explanation, say "Our NVMe SSDs make your site load incredibly fast."
4.  **Highlight Strengths:** Briefly mention key ApexVPS advantages: instant setup, full admin access, top performance, and our 99.9% uptime guarantee. The 14 day money back guarantee is important for trust.
5.  **Guide to Action:** Always suggest the next logical step, like visiting the pricing page.
6.  **Lead Capture (If Needed):** If you can't answer a question, quickly offer to get help. Say: "I can have a specialist answer that. What's your name and email?"

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
