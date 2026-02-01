"use client";

import React from "react";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button - Bottom Right */}
      <a
        href="https://wa.me/YOUR_NUMBER"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors animate-in fade-in zoom-in duration-300"
      >
        <MessageCircle className="text-white w-8 h-8" fill="white" />
      </a>

      {/* Cart/Item Button - Right Center */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex flex-col gap-2">
        <Button className="flex flex-col items-center justify-center w-16 h-16 bg-[#006F62] hover:bg-[#005a50] text-white rounded-l-md rounded-r-none shadow-lg border-l border-t border-b border-white/10">
          <ShoppingBag className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-bold">0 Items</span>
        </Button>
      </div>
    </>
  );
}
