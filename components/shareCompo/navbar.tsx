"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, MapPin, Search, ShoppingCart, User } from "lucide-react";
import { Input } from "../ui/input";
import LoginModal from "../modals/LoginModal";
import { useState } from "react";
import { ModeToggle } from "../mode-toggle";

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between border-b py-2 px-6 bg-background sticky top-0 z-50">
        {/* logo */}
        <div className="flex flex-col">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        {/* location button */}
        <Button
          variant="ghost"
          className="flex flex-col items-start h-auto hover:bg-transparent group"
          onClick={() => setIsLoginOpen(true)}
        >
          <span className="text-xs text-muted-foreground flex items-center gap-1 group-hover:text-foreground transition-colors">
            <MapPin size={12} />
            Delivery to
          </span>
          <span className="text-sm font-semibold flex items-center gap-1 text-foreground">
            Bangladesh <ChevronDown size={14} />
          </span>
        </Button>

        {/* Search */}
        <div className="flex items-center flex-1 max-w-xl mx-8 relative">
          <div className="absolute left-0 z-10">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-10 rounded-r-none border-r px-3 font-normal text-muted-foreground hover:text-foreground"
                >
                  All <ChevronDown size={14} className="ml-1 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Medicine</DropdownMenuLabel>
                  <DropdownMenuItem>Health Care</DropdownMenuItem>
                  <DropdownMenuItem>Diagonostic</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Input
            placeholder='Search for "healthcare products"'
            className="pl-[85px] h-10 bg-muted/50 border-transparent focus-visible:ring-primary rounded-md custom-placeholder"
          />
          <Button className="absolute right-0 h-10 w-10 p-0 rounded-l-none bg-primary text-primary-foreground hover:bg-primary/90">
            <Search size={18} />
          </Button>
        </div>

        {/* accounts */}
        <div>
          <Button
            variant="ghost"
            className="flex items-center gap-3 h-auto hover:bg-transparent group"
            onClick={() => setIsLoginOpen(true)}
          >
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <User
                className="text-muted-foreground group-hover:text-foreground transition-colors"
                size={18}
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                Hello, User
              </span>
              <span className="text-sm font-bold text-foreground">
                Account & Orders
              </span>
            </div>
          </Button>
        </div>

        {/* cart */}
        <div className="flex items-center gap-4 ml-4">
          <Button
            variant="ghost"
            className="relative p-0 hover:bg-transparent text-muted-foreground hover:text-foreground"
          >
            <ShoppingCart size={24} />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#f05a5b] text-white text-[10px] flex items-center justify-center">
              0
            </span>
          </Button>

          <ModeToggle />
        </div>
      </div>

      <LoginModal open={isLoginOpen} onOpenChange={setIsLoginOpen} />
    </>
  );
}

export default Navbar;
