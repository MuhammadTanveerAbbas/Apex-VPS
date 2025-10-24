import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight, Server, Zap, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.2),transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.2),transparent_60%)] dark:bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.3),transparent_60%)]" />

      {/* Floating server icons */}
      <div className="absolute top-20 left-10 opacity-10 dark:opacity-20 animate-float">
        <Server className="size-16 text-blue-500" />
      </div>
      <div
        className="absolute bottom-20 right-10 opacity-10 dark:opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <Server className="size-20 text-purple-500" />
      </div>
      <div
        className="absolute top-1/3 right-1/4 opacity-10 dark:opacity-20 animate-float"
        style={{ animationDelay: "4s" }}
      >
        <Zap className="size-12 text-blue-400" />
      </div>

      <div className="text-center max-w-3xl px-4 relative z-10">
        {/* Server icon with error indicator */}
        <div className="relative inline-block mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border-2 border-primary/40 backdrop-blur-sm shadow-2xl animate-glow">
            <Server className="size-12 text-primary" strokeWidth={2.5} />
          </div>
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <AlertTriangle className="size-5 text-white" strokeWidth={2.5} />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl md:text-[10rem] font-extrabold font-headline mb-6 leading-none">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
            404
          </span>
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
          Server Connection Lost
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-xl mx-auto leading-relaxed">
          The server you're looking for seems to be offline or doesn't exist.
        </p>
        <p className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-lg mx-auto">
          Don't worry, our infrastructure is still running strong. Let's
          reconnect you to the right destination.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <Link href="/">
              <Home className="mr-2 size-5 group-hover:scale-110 transition-transform" />
              Return Home
              <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-300"
          >
            <Link href="/pricing">
              <Zap className="mr-2 size-5" />
              View Hosting Plans
            </Link>
          </Button>
        </div>

        {/* Error code */}
        <div className="mt-12 text-sm text-muted-foreground/60 font-mono">
          ERROR_CODE: HTTP_404_NOT_FOUND
        </div>
      </div>
    </div>
  );
}
