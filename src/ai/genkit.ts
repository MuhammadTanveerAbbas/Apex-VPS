export async function getAI() {
  const { genkit } = await import('genkit');
  const { googleAI } = await import('@genkit-ai/googleai');
  
  return genkit({
    plugins: [googleAI()],
    model: 'googleai/gemini-2.0-flash',
  });
}
