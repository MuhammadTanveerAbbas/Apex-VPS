import { Inter, Poppins } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { Analytics } from "@/components/common/Analytics";
import GlobalLoader from "@/components/common/GlobalLoader";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const poppins = Poppins({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-headline",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ApexVPS.com"),
  title: {
    default:
      "ApexVPS - Lightning-Fast VPS & RDP Hosting | 99.9% Uptime Guaranteed",
    template: "%s | ApexVPS",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon",
  },
  description:
    "Deploy high-performance Linux VPS and Windows RDP servers in 60 seconds. 21+ global locations, NVMe SSD storage, DDoS protection, and 24/7 expert support. 14 day money back guarantee.",
  keywords: [
    "VPS hosting",
    "RDP hosting",
    "dedicated servers",
    "Linux VPS",
    "Windows RDP",
    "cloud hosting",
    "NVMe hosting",
    "high-performance VPS",
  ],
  authors: [{ name: "ApexVPS" }],
  creator: "ApexVPS",
  publisher: "ApexVPS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ApexVPS.com",
    title: "ApexVPS - Lightning-Fast VPS & RDP Hosting",
    description:
      "Deploy high-performance servers in 60 seconds. 21+ global locations, 99.9% uptime, 14 day money back guarantee.",
    siteName: "ApexVPS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ApexVPS - High Performance Hosting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ApexVPS - Lightning-Fast VPS & RDP Hosting",
    description:
      "Deploy high-performance servers in 60 seconds. 21+ global locations, 99.9% uptime.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://ApexVPS.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://i.postimg.cc" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/css/flag-icons.min.css"
        />
      </head>
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalLoader />
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
