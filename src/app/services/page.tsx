import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Our Services - Linux VPS, Windows RDP & Dedicated Servers',
  description: 'Explore our hosting solutions: High-performance Linux VPS, Windows RDP servers, and powerful Dedicated Servers. Full admin access, instant setup, 24/7 support.',
  openGraph: {
    title: 'Hosting Services - ApexVPS',
    description: 'Linux VPS, Windows RDP, and Dedicated Servers with enterprise-grade performance.',
  },
};
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, HardDrive, Server, Wind } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Server className="size-10 text-primary" />,
    title: "Linux VPS",
    description: "High-performance Linux virtual servers with full root access and your choice of distribution.",
    features: [
      "Full Root Access",
      "SSD & NVMe Storage",
      "Scalable Resources",
      "Debian, Ubuntu, CentOS",
    ],
    link: "/pricing"
  },
  {
    icon: <Wind className="size-10 text-primary" />,
    title: "Windows RDP/VPS",
    description: "Reliable Windows servers with Remote Desktop access, perfect for business applications.",
    features: [
      "Admin RDP Access",
      "Optimized for Performance",
      "Windows Server 2019/2022",
      "24/7 Technical Support",
    ],
    link: "/pricing"
  },
  {
    icon: <HardDrive className="size-10 text-primary" />,
    title: "Dedicated Servers",
    description: "The ultimate power and performance with a physical server dedicated entirely to you.",
    features: [
      "Unmetered Bandwidth",
      "RAID Storage Configurations",
      "DDoS Protection Included",
      "Full Hardware Control",
    ],
    link: "/pricing"
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 mb-6">
            <Server className="size-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter mb-4">
            Hosting Solutions for
            <br />
            <span className="text-primary">Every Need</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            From startups to enterprises. Linux VPS, Windows RDP, or Dedicated Servers.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={service.title} className="group flex flex-col relative overflow-hidden bg-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-3" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="items-center text-center relative z-10">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-headline">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow relative z-10">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="size-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Button asChild className="w-full transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md" size="lg">
                    <Link href={service.link}>
                      View Plans <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
