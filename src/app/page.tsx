import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "ApexVPS - Deploy Your Server in 60 Seconds | High-Performance VPS & RDP Hosting",
  description:
    "Lightning-fast VPS and Windows RDP hosting with NVMe SSD, 21+ global locations, and 99.9% uptime. Deploy in under 60 seconds. Starting at $5.99/mo. 14 day money back guarantee.",
  keywords: [
    "VPS hosting",
    "RDP hosting",
    "NVMe VPS",
    "Linux VPS",
    "Windows RDP",
    "cloud hosting",
    "dedicated servers",
    "fast VPS",
  ],
  openGraph: {
    title: "ApexVPS - Deploy Your Server in 60 Seconds",
    description:
      "Lightning-fast VPS and RDP hosting. 21+ locations, NVMe SSD, 99.9% uptime. From $5.99/mo.",
    type: "website",
  },
};
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { countries } from "@/lib/data";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Check,
  CheckCircle,
  ChevronRight,
  Contact,
  Cpu,
  GanttChart,
  Globe,
  HardDrive,
  HelpCircle,
  LifeBuoy,
  Lock,
  MessageCircle,
  MessageSquare,
  Network,
  Power,
  Server,
  ShieldCheck,
  Stars,
  Ticket,
  Users,
  Wifi,
  Wind,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PricingPlan } from "@/lib/types";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { SkypeIcon } from "@/components/icons/SkypeIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import dynamic from "next/dynamic";
import { StructuredData } from "@/components/common/StructuredData";

const WhatsAppWidget = dynamic(() => import("@/components/common/WhatsAppWidget").then(mod => ({ default: mod.WhatsAppWidget })), {
  loading: () => null
});

const ContactForm = dynamic(() => import("@/components/common/ContactForm").then(mod => ({ default: mod.ContactForm })), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />
});

export default function Home() {
  const whyChooseUsFeatures = [
    {
      icon: <Cpu className="size-8 text-primary" />,
      title: "Linux & RDP",
      description:
        "Powerful and flexible hosting with your choice of operating system.",
    },
    {
      icon: <Power className="size-8 text-primary" />,
      title: "Instant OS Setup",
      description:
        "Get your server online in minutes with our automated provisioning.",
    },
    {
      icon: <Lock className="size-8 text-primary" />,
      title: "Full Admin Access",
      description:
        "Complete control over your server with full root or administrator access.",
    },
    {
      icon: <HardDrive className="size-8 text-primary" />,
      title: "SSD & NVMe",
      description:
        "Experience blazing fast performance with our solid state and NVMe drives.",
    },
    {
      icon: <MessageSquare className="size-8 text-primary" />,
      title: "24/7 Customer Chat",
      description:
        "Our expert support team is always here to help, any time of day.",
    },
    {
      icon: <Award className="size-8 text-primary" />,
      title: "Paypal & Cards",
      description:
        "We accept a wide range of payment methods for your convenience.",
    },
    {
      icon: <Server className="size-8 text-primary" />,
      title: "Data Backups",
      description:
        "Your data is safe with our regular, automated backup solutions.",
    },
    {
      icon: <Network className="size-8 text-primary" />,
      title: "25 Tbps+ Network",
      description:
        "Benefit from our high capacity network for maximum speed and reliability.",
    },
  ];

  // Real testimonials will be added as we get customer feedback

  const faqs = [
    {
      question: "What if I'm not happy with the service?",
      answer:
        "We stand by our quality with a 14 day money back guarantee. If you're not completely satisfied with your VPS for any reason, you can request a full refund within the first 14 days. It's a risk-free way to experience our premium performance.",
    },
    {
      question: "Do I get full control over my server?",
      answer:
        "Absolutely. We provide full root access for Linux VPS and Administrator access for Windows RDP. This gives you complete control to install any software, customize your environment, and manage your server exactly the way you want.",
    },
    {
      question: "How secure is my data with ApexVPS?",
      answer:
        "Security is our top priority. Our infrastructure includes network-level DDoS protection, and we offer automated data backups to keep your information safe. With full admin access, you also have the freedom to implement your own advanced security measures.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer:
        "Yes! We make it easy to scale your resources as your project grows. You can seamlessly upgrade your CPU, RAM, and storage at any time directly from your client area without any downtime or data loss.",
    },
    {
      question: "How technical do I need to be to use your VPS?",
      answer:
        "Our services are designed for users with some technical knowledge. However, with instant OS setup and 24/7 expert support, we make it as straightforward as possible. If you can manage a basic server, you'll feel right at home with ApexVPS.",
    },
  ];

  const popularPlans: (PricingPlan & { region: string })[] = [
    {
      ...countries
        .find((c) => c.code === "USA")!
        .plans.find((p) => p.mostPopular)!,
      region: "North America",
    },
    {
      ...countries
        .find((c) => c.code === "DEU")!
        .plans.find((p) => p.mostPopular)!,
      region: "Europe",
    },
    {
      ...countries
        .find((c) => c.code === "SGP")!
        .plans.find((p) => p.mostPopular)!,
      region: "Asia Pacific",
    },
  ];

  const topCountries = countries.slice(0, 12);

  return (
    <>
      <StructuredData />
      <div className="flex flex-col bg-background text-foreground">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative w-full overflow-hidden pt-32 md:pt-24 pb-32 md:pb-32"
        >
          {/* Animated Gradient Mesh Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.25),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.08),transparent_70%)]" />

          {/* Animated Orbs */}
          <div
            className="absolute top-1/4 left-[10%] w-96 h-96 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "4s" }}
          />
          <div
            className="absolute bottom-1/4 right-[10%] w-[500px] h-[500px] bg-gradient-to-l from-purple-400/30 to-pink-400/30 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "6s", animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 dark:from-indigo-500/15 dark:to-blue-500/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "8s", animationDelay: "2s" }}
          />

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 md:gap-2 mb-4 md:mb-8 px-2 md:px-4 py-1 md:py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 border border-blue-200/50 dark:border-blue-500/30 backdrop-blur-xl shadow-lg shadow-blue-500/10">
              <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Deploy in 60s • 21+ Locations • 99.9% Uptime
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-headline tracking-tight mb-4 md:mb-8 leading-[1.1] px-2">
              <span className="block text-gray-900 dark:text-white mb-1 md:mb-2">
                Enterprise Servers.
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Startup Prices.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-6 md:mb-10 leading-relaxed font-medium px-4">
              Deploy blazing fast{" "}
              <span className="text-gray-900 dark:text-white font-bold">
                Linux VPS
              </span>{" "}
              or{" "}
              <span className="text-gray-900 dark:text-white font-bold">
                Windows RDP
              </span>{" "}
              in under a minute.{" "}
              <span className="text-blue-600 dark:text-blue-400 font-bold">
                NVMe storage
              </span>
              ,{" "}
              <span className="text-purple-600 dark:text-purple-400 font-bold">
                full root access
              </span>
              , and{" "}
              <span className="text-pink-600 dark:text-pink-400 font-bold">
                global reach
              </span>
              .
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-4 mb-6 md:mb-10 px-4">
              <Button
                asChild
                size="lg"
                className="group text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-7 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 border-0"
              >
                <Link href="/pricing">
                  <Zap className="mr-1 sm:mr-2 size-3 sm:size-4 md:size-5 group-hover:rotate-12 transition-transform" />
                  Start Deploying Now
                  <ArrowRight className="ml-1 sm:ml-2 size-3 sm:size-4 md:size-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-7 backdrop-blur-xl bg-white/50 dark:bg-gray-900/50 border-2 border-gray-300 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-600 shadow-lg"
              >
                <Link href="#features">
                  <Globe className="mr-1 sm:mr-2 size-3 sm:size-4 md:size-5" />
                  Explore Locations
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 md:gap-x-8 gap-y-1 md:gap-y-3 text-[10px] sm:text-xs md:text-sm font-medium px-4">
              <span className="flex items-center gap-1 md:gap-2 text-gray-700 dark:text-gray-300">
                <div className="flex items-center justify-center w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 rounded-full bg-green-500/20 dark:bg-green-500/30">
                  <Check className="size-2 sm:size-2.5 md:size-3 text-green-600 dark:text-green-400 stroke-[3]" />
                </div>
                14 day money back
              </span>

              <span className="flex items-center gap-1 md:gap-2 text-gray-700 dark:text-gray-300">
                <div className="flex items-center justify-center w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 rounded-full bg-green-500/20 dark:bg-green-500/30">
                  <Check className="size-2 sm:size-2.5 md:size-3 text-green-600 dark:text-green-400 stroke-[3]" />
                </div>
                Cancel anytime
              </span>
              <span className="flex items-center gap-1 md:gap-2 text-gray-700 dark:text-gray-300">
                <div className="flex items-center justify-center w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 rounded-full bg-green-500/20 dark:bg-green-500/30">
                  <Check className="size-2 sm:size-2.5 md:size-3 text-green-600 dark:text-green-400 stroke-[3]" />
                </div>
                24/7 support
              </span>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section
          id="features"
          className="py-16 md:py-24 bg-muted/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Features
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-headline text-foreground/90 mb-4">
                Everything You Need.
                <br />
                <span className="text-primary">Nothing You Don't.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Stop overpaying for features you'll never use. Get exactly what
                you need.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUsFeatures.map((feature, index) => (
                <Card
                  key={feature.title}
                  className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border transition-all duration-500 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="relative flex flex-col items-start gap-4 p-6">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-card-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* VPS Hosting Worldwide Section */}
        <section
          id="countries"
          className="py-16 md:py-24 bg-background relative"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Locations
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-headline text-foreground/90 mb-4">
                Choose Your Region.
                <br />
                <span className="text-primary">Minimize Latency.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Your users in Tokyo shouldn't wait for a server in New York.
                Deploy where they are.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
              {topCountries.map((country, index) => (
                <Button
                  asChild
                  key={country.code}
                  variant="outline"
                  className="group h-auto py-4 px-3 justify-center gap-2 bg-card/50 backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:bg-card hover:border-primary/50 hover:shadow-lg"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link
                    href={`/pricing?country=${country.code}`}
                    className="flex flex-col items-center gap-2"
                  >
                    <span
                      className={`fi fi-${country.flagCode} text-3xl`}
                    ></span>
                    <span className="text-xs font-medium text-foreground/80 group-hover:text-primary transition-colors">
                      {country.name}
                    </span>
                  </Link>
                </Button>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group border-2 hover:border-primary hover:bg-primary/5"
              >
                <Link href="/pricing">
                  <Globe className="mr-2 size-5" />
                  View All Locations
                  <ChevronRight className="ml-1 size-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Preview Section */}
        <section
          id="pricing-preview"
          className="py-16 md:py-24 bg-background relative"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Pricing
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-headline text-foreground/90 mb-4">
                Simple Pricing.
                <br />
                <span className="text-primary">Powerful Performance.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The price you see is the price you pay. No surprise charges.
                Ever.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
              {popularPlans.map((plan, index) => (
                <Card
                  key={plan.id}
                  className={`group relative flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 ${
                    plan.mostPopular
                      ? "border-primary shadow-lg shadow-primary/10 scale-105"
                      : "border hover:border-primary/50"
                  }`}
                >
                  {plan.mostPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-1 shadow-lg">
                        <Stars className="size-3 mr-1 fill-current" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                  <CardHeader className="text-center relative z-10 pb-8">
                    <div className="text-sm font-semibold text-muted-foreground mb-2">
                      {plan.region}
                    </div>
                    <CardTitle className="text-3xl mb-4">{plan.name}</CardTitle>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-foreground">
                        ${plan.price}
                      </span>
                      <span className="text-lg text-muted-foreground">
                        /month
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow relative z-10">
                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="size-5 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="relative z-10 pt-6">
                    <Button
                      asChild
                      className={`w-full transition-all duration-300 hover:scale-105 ${
                        plan.mostPopular ? "shadow-lg shadow-primary/25" : ""
                      }`}
                      size="lg"
                    >
                      <Link
                        href={`/pricing?country=${
                          countries.find((c) =>
                            c.plans.some((p) => p.id === plan.id)
                          )?.code || "USA"
                        }`}
                      >
                        Get Started
                        <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-16">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group border-2 hover:border-primary hover:bg-primary/5"
              >
                <Link href="/pricing">
                  View All 21+ Locations
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                All plans include 14 day money back guarantee
              </p>
            </div>
          </div>
        </section>

        {/* Global Infrastructure Section */}
        <section
          id="map"
          className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Global Network
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-headline text-foreground/90 mb-4">
                Deploy Anywhere.
                <br />
                <span className="text-primary">Perform Everywhere.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From New York to Singapore, we're everywhere your users are.
                Sub-50ms latency guaranteed.
              </p>
            </div>
            <div className="relative w-full max-w-6xl mx-auto aspect-video sm:aspect-[2.4/1] rounded-2xl overflow-hidden border shadow-2xl bg-card/50 backdrop-blur-sm mb-12">
              <Image
                src="https://i.postimg.cc/nVKxWdwb/World.png"
                alt="ApexVPS global network infrastructure map showing 21+ data center locations across North America, Europe, Asia Pacific, and other regions"
                fill
                style={{ objectFit: "contain" }}
                priority={false}
                loading="lazy"
                className="p-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                quality={85}
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <Globe className="size-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground mb-1">21+</p>
                <p className="text-sm text-muted-foreground">
                  Global Locations
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <CheckCircle className="size-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground mb-1">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime SLA</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <LifeBuoy className="size-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground mb-1">24/7</p>
                <p className="text-sm text-muted-foreground">Expert Support</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <Network className="size-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground mb-1">
                  100Gbps
                </p>
                <p className="text-sm text-muted-foreground">Network Speed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators Section */}
        <section id="trust" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground/90">
                Why Developers Choose Us
              </h2>
              <p className="text-muted-foreground mt-2">
                Built for performance, reliability, and scale.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-muted/50 border text-center p-6">
                <CardContent className="p-0">
                  <ShieldCheck className="size-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">
                    Enterprise Security
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    DDoS protection, automated backups, and full encryption
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border text-center p-6">
                <CardContent className="p-0">
                  <Zap className="size-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Instant Deployment</h3>
                  <p className="text-muted-foreground text-sm">
                    Your server is ready in under 60 seconds
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border text-center p-6">
                <CardContent className="p-0">
                  <Globe className="size-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Global Network</h3>
                  <p className="text-muted-foreground text-sm">
                    21+ locations worldwide for low latency
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border text-center p-6">
                <CardContent className="p-0">
                  <LifeBuoy className="size-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">Expert Support</h3>
                  <p className="text-muted-foreground text-sm">
                    24/7 technical support from real engineers
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 items-center">
              <div className="space-y-4">
                <div className="inline-block bg-primary/10 text-primary p-3 rounded-full">
                  <HelpCircle className="size-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground/90">
                  Your Questions, Answered
                </h2>
                <p className="text-muted-foreground mt-2 mb-6">
                  Find clear answers to common questions about our services and
                  policies. We believe in transparency and empowering you with
                  the information you need.
                </p>
                <Button asChild variant="outline">
                  <Link href="/#contact">
                    Contact Support <LifeBuoy className="ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-background border-border/50 rounded-lg px-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="text-base sm:text-lg font-medium text-foreground/90 text-left hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-2 text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Experience Section */}
        <section
          id="cta"
          className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl p-10 md:p-16 rounded-3xl shadow-2xl border border-primary/20 max-w-5xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 mb-6">
                  <Zap className="size-10 text-primary" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold font-headline text-foreground/90 mb-4">
                  Ready to Deploy?
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                  Stop wrestling with slow servers. Deploy in 60 seconds and get
                  back to building.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                  <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border">
                    <CheckCircle className="size-8 text-green-500 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-foreground mb-1">
                      99.9%
                    </p>
                    <p className="text-sm text-muted-foreground">Uptime SLA</p>
                  </div>
                  <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border">
                    <Zap className="size-8 text-yellow-500 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-foreground mb-1">
                      &lt;60s
                    </p>
                    <p className="text-sm text-muted-foreground">Deploy Time</p>
                  </div>
                  <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border">
                    <LifeBuoy className="size-8 text-blue-500 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-foreground mb-1">
                      24/7
                    </p>
                    <p className="text-sm text-muted-foreground">Support</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="text-base px-8 py-6 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/pricing">
                      <Zap className="mr-2 size-5" />
                      Deploy Your Server Now
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-base px-8 py-6 backdrop-blur-sm border-2"
                  >
                    <Link href="/#contact">
                      <MessageCircle className="mr-2 size-5" />
                      Talk to Sales
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mt-6">
                  <span className="flex items-center gap-1.5">
                    <Check className="size-4 text-green-500" /> 14-day refund
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="size-4 text-green-500" /> No setup fees
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="size-4 text-green-500" /> Cancel anytime
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section id="contact" className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground/90">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Have questions about our services or need a custom solution? Our
                team is ready to help.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-card p-6 sm:p-8 rounded-lg border">
                <h3 className="text-xl font-bold text-card-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <LifeBuoy className="text-primary size-7 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">
                        24/7 Sales & Support
                      </h4>
                      <p className="text-muted-foreground">
                        Our expert team is always on hand to help with any
                        questions.
                      </p>
                      <a
                        href="#"
                        className="text-primary text-sm font-medium mt-1 inline-block"
                      >
                        Live Chat Now
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Contact className="text-primary size-7 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">
                        Sales Department
                      </h4>
                      <p className="text-muted-foreground">sales@ApexVPS.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="text-primary size-7 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">
                        Abuse Department
                      </h4>
                      <p className="text-muted-foreground">abuse@ApexVPS.com</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t">
                  <h4 className="font-semibold text-card-foreground mb-4">
                    Our Commitment
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="size-4 text-primary shrink-0" />
                      <span>14 Day Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="size-4 text-primary shrink-0" />
                      <span>Instant Setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="size-4 text-primary shrink-0" />
                      <span>99.9% Uptime</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="size-4 text-primary shrink-0" />
                      <span>24/7 support</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card p-6 sm:p-8 rounded-lg border">
                <h3 className="text-xl font-bold text-card-foreground mb-6">
                  Send us a Message
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        <WhatsAppWidget />
      </div>
    </>
  );
}
