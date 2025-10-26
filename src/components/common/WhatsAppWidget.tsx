"use client";

import { useState, useRef, useEffect, useCallback, memo } from "react";
import { X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { chatWithBot } from "@/ai/flows/chatFlow";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export const WhatsAppWidget = memo(function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const phoneNumber = "add your";
  const whatsAppUrl = `https://wa.me/${phoneNumber}`;
  const initialBotMessage =
    "Hello! I'm the virtual assistant. I can answer questions about our deals and services. How can I help you today?";

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setMessages([{ sender: "bot", text: initialBotMessage }]);
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = { sender: "user", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const history = messages
        .map((msg) => `${msg.sender}: ${msg.text}`)
        .join("\n");
      const botResponseText = await chatWithBot(inputValue, history);
      const botMessage: Message = { sender: "bot", text: botResponseText };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: Message = {
        sender: "bot",
        text: "Sorry, I'm having trouble connecting. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [inputValue, messages, isLoading]);

  if (!isOpen && messages.length === 0) {
    return (
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-primary-foreground p-3 rounded-full shadow-2xl hover:bg-primary/90 transition-transform duration-300 hover:scale-110 border-2 border-primary/50"
          aria-label="Open Chat"
        >
          <Bot className="size-10" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="bg-white dark:bg-gray-900 flex flex-col h-[60vh] max-h-[700px] w-80 sm:w-96 lg:w-[450px] lg:h-[70vh] lg:max-h-[800px] rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-t-xl border-b border-gray-200 dark:border-gray-700 flex items-center">
            <div className="flex items-center gap-3 flex-1">
              <div className="relative">
                <Avatar>
                  <div className="bg-gray-800 flex items-center justify-center h-full w-full">
                    <Bot className="size-6 text-white" />
                  </div>
                </Avatar>
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-base">
                  ApexVPS Support
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Online 24/7</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 ml-auto"
              aria-label="Close chat"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="flex-grow p-4 overflow-hidden">
            <div 
              ref={scrollAreaRef}
              className="h-full overflow-y-auto pr-2"
            >
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-end gap-2",
                    message.sender === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {message.sender === "bot" && (
                    <Avatar className="size-7">
                      <div className="bg-gray-800 flex items-center justify-center h-full w-full">
                        <Bot className="size-4 text-white" />
                      </div>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "rounded-2xl p-3 max-w-[80%] text-sm",
                      message.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none"
                    )}
                  >
                    {message.text}
                  </div>
                  {message.sender === "user" && (
                    <Avatar className="size-7">
                      <div className="bg-gray-200 flex items-center justify-center h-full w-full">
                        <User className="size-4 text-gray-600" />
                      </div>
                    </Avatar>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-end gap-2 justify-start">
                  <Avatar className="size-7">
                    <div className="bg-gray-800 flex items-center justify-center h-full w-full">
                      <Bot className="size-4 text-white" />
                    </div>
                  </Avatar>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-bl-none p-3 text-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-gray-900 rounded-b-xl border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-xs text-gray-400 dark:text-gray-500 mb-2">
              Prefer a live agent?{" "}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-medium hover:underline"
              >
                Chat on WhatsApp
              </a>
            </p>
            <form
              onSubmit={handleSendMessage}
              className="flex items-center gap-2"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                autoComplete="off"
                disabled={isLoading}
                className="bg-gray-100 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 border-none focus:ring-0 focus:outline-none"
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !inputValue.trim()}
              >
                <Send />
              </Button>
            </form>
          </div>
        </div>
      )}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary text-primary-foreground p-3 rounded-full shadow-2xl hover:bg-primary/90 transition-transform duration-300 hover:scale-110 border-2 border-primary/50"
          aria-label="Open Chat"
        >
          <Bot className="size-10" />
        </button>
      )}
      {isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-2 right-2 bg-primary text-primary-foreground p-2 rounded-full shadow-2xl hover:bg-primary/90 transition-transform duration-300 hover:scale-110 border-2 border-primary/50"
          aria-label="Close Chat"
        >
          <X className="size-6" />
        </button>
      )}
    </div>
  );
});
