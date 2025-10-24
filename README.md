<div align="center">
  <h1 align="center">ApexVPS ⚡ High-Performance Hosting Platform</h1>
  <p align="center">
    A next-generation, <strong>AI-powered hosting storefront</strong> built to deliver blazing-fast VPS, RDP, and Dedicated Server solutions for developers, businesses, and enterprises.
  </p>
  <div align="center">
    <img src="https://img.shields.io/badge/Next.js-15.x-black?logo=next.js&style=for-the-badge" height="40" alt="Next.js logo" />
    <img src="https://img.shields.io/badge/React-18.x-blue?logo=react&style=for-the-badge" height="40" alt="React logo" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwindcss&logoColor=white&style=for-the-badge" height="40" alt="Tailwind CSS logo" />
    <img src="https://img.shields.io/badge/ShadCN_UI-1.x-000000?logo=shadcn&style=for-the-badge" height="40" alt="ShadCN UI logo" />
  </div>
</div>

---

### 🧠 What is it

**ApexVPS** is a **high performance hosting platform** that combines AI intelligence with lightning-fast infrastructure to deliver VPS, RDP, and Dedicated Server solutions.
It’s designed for developers, businesses, and entrepreneurs seeking reliability, transparency, and speed all wrapped in a modern, responsive experience.

---

### 💡 Why it is

Modern hosting demands **automation, reliability, and intelligent support**.
**ApexVPS** bridges that gap by introducing **AI powered interactivity**, **global server coverage**, and **instant provisioning**, ensuring both technical performance and user convenience.

---

### ⚙️ What is the Problem

The hosting industry still faces major user pain points:

- ⏱️ **Performance bottlenecks** caused by slow hardware and congested networks
- 🌍 **High latency** for users in different regions
- ⚠️ **Unreliable uptime** and delayed provisioning
- 🤖 **Lack of instant support** or helpful chat systems
- 💰 **Hidden costs and unclear pricing**

---

### 🧩 What is the Solution

**ApexVPS** solves these with a robust, scalable architecture:

- ⚡ **Next.js & ShadCN powered UI** for speed and elegance
- 🌐 **21+ global server locations** for low-latency access
- 🔐 **Secure & DDoS protected infrastructure**
- 💾 **NVMe SSD storage** and **25 Tbps+ network capacity**
- 🧠 **Full admin control** and transparent pricing
- 🧱 **Modern SSR + SEO optimized** architecture

---

### 🚀 Result

A complete, next gen hosting storefront that:

- Offers **instant setup** and **global coverage**
- Enhances **customer trust** through clear pricing and reliability
- Improves **sales & conversions** with interactive AI support
- Provides **enterprise grade speed, uptime, and scalability**

---

### 🛠️ Technology Used

**Frontend:** Next.js • React • Tailwind CSS • ShadCN UI
**AI Engine:** Google Genkit
**Hosting Infrastructure:** NVMe SSD • DDoS Protected Network (25+ Tbps)
**Deployment:** Node.js • Vercel / Cloud Platforms

---

### ⚡ Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/MuhammadTanveerAbbas/Apex-VPS.git
   cd Apex-VPS

   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Add your Google AI API key:

   ```bash
   GEMINI_API_KEY=YOUR_API_KEY_HERE
   ```

4. **Run the development servers**

   - **Next.js App**

     ```bash
     npm run dev
     ```

     Visit **[http://localhost:3001](http://localhost:3001)**

   - **Genkit AI Server**

     ```bash
     npm run genkit:dev
     ```

5. **Validate and build**

   ```bash
   npm run build
   ```

---

### 🧠 AI Chatbot Flow

The **Apex AI chatbot**, powered by **Google’s Genkit**, acts as an intelligent sales and support assistant.

**Workflow:**

1. User sends a message via the `WhatsAppWidget`.
2. Request triggers the `chatWithBot` server function in `src/ai/flows/chatFlow.ts`.
3. The Genkit flow sends the prompt to the **Google Gemini** model.
4. The model replies as “Apex,” the hosting assistant.
5. Response is returned and displayed to the user.

```
[User] → [WhatsAppWidget.tsx] → [chatFlow.ts (Server Action)] → [Genkit AI Flow] → [Google AI]
  ↑                                                                                  |
  └─────────────────────────────── [Response Returned] ───────────────────────────────┘
```

---

### 🏗️ Project Structure

```
/
├── public/                  # Static assets (images, fonts, etc.)
├── src/
│   ├── app/                 # Next.js App Router (pages, layouts)
│   ├── ai/                  # Genkit AI flows and configuration
│   ├── components/          # Reusable React components
│   ├── hooks/               # Custom hooks
│   └── lib/                 # Utilities, data, and types
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

---

### 🧱 Production Ready Features

- ✅ Server Side Rendering (SEO optimized)
- ✅ Secure headers & HTTPS enforcement
- ✅ Functional forms with validation
- ✅ Error boundaries & custom 404 page
- ✅ Analytics & structured data support
- ✅ Lazy loading & performance optimization
- ✅ Type safe with full TypeScript
- ✅ Sitemap & Robots.txt generation

---

### 🌐 Next Steps

**Before Launch**

1. Configure email (SendGrid/Resend)
2. Add real logo and OG image
3. Update social links
4. Set up Google Analytics
5. Configure WHMCS integration
6. (Optional) Add database for persistence

**After Launch**

- 🧭 Client dashboard for service management
- 📰 Blog / Knowledge Base
- 📊 Real time server status page
- 🤝 Affiliate & referral system
- 🌍 Multi language support
- ⭐ Real customer testimonials

---

### 📜 License

Licensed under the **MIT License** open for personal, educational, and commercial use.

---

<div align="center">
  Designed and Developed with ⚡ by <strong>Muhammad Tanveer Abbas</strong> 🚀
</div>
