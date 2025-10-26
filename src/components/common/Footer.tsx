import { Globe, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-gradient-to-b from-gray-900 to-black text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <span className="font-bold font-headline text-2xl text-white">ApexVPS</span>
            </div>
            <p className="text-sm text-gray-400">
              High performance VPS and RDP hosting with global data centers for unmatched speed and reliability.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/services" className="hover:text-white hover:underline">Services</Link>
              <Link href="/pricing" className="hover:text-white hover:underline">Pricing</Link>
              <Link href="/#faq" className="hover:text-white hover:underline">FAQ</Link>
              <Link href="/#contact" className="hover:text-white hover:underline">Contact</Link>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <Link href="#" aria-label="Twitter" className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="GitHub" className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
           <div>
            <h3 className="font-semibold text-lg text-white mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-3">Stay up to date with our latest news and offers.</p>
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {year} ApexVPS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
