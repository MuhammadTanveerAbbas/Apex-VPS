import { cn } from "@/lib/utils";
import React from "react";

export function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("text-[#2AABEE]", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.65 12c-.88-.25-.89-1.37.2-1.64l16.24-6.05c.77-.29 1.46.24 1.25 1.1l-2.52 12.02c-.28.98-1.13 1.21-1.82.73l-4.5-3.32-2.14 2.05c-.23.23-.44.44-.88.44-.45 0-.66-.21-.92-.46z" />
    </svg>
  );
}
