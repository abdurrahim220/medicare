"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  LayoutGrid,
  Zap,
  Pill,
  Stethoscope,
  FlaskConical,
  Sparkles,
  HeartPulse,
  Baby,
  Leaf,
  Home,
  Dumbbell,
  Utensils,
  PawPrint,
  Dog,
  Droplets,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Reusing User Icon wrapper for simplicity
const UserIcon = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// Category Data
const menuItems = [
  {
    title: "Medicine",
    icon: <Pill className="text-blue-500" />,
    href: "#",
  },
  {
    title: "Healthcare",
    icon: <Stethoscope className="text-cyan-500" />,
    href: "#",
  },
  {
    title: "Lab Test",
    icon: <FlaskConical className="text-teal-500" />,
    href: "#",
    subItems: [
      {
        title: "Browse by Health ...",
        icon: <HeartPulse size={16} className="text-red-500" />,
      },
      {
        title: "Vital Organs",
        icon: <HeartPulse size={16} className="text-red-400" />,
      }, // Using HeartPulse as placeholder for Organs
      {
        title: "Life Style Package",
        icon: <Sparkles size={16} className="text-purple-500" />,
      },
      {
        title: "Checkups for Women",
        icon: <UserIcon size={16} className="text-pink-500" />,
      },
      {
        title: "Checkups for Men",
        icon: <UserIcon size={16} className="text-blue-500" />,
      },
    ],
  },
  {
    title: "Beauty",
    icon: <Sparkles className="text-pink-500" />,
    href: "#",
  },
  {
    title: "Sexual Wellness",
    icon: <HeartPulse className="text-rose-500" />, // Placeholder
    href: "#",
  },
  {
    title: "Baby & Mom Care",
    icon: <Baby className="text-purple-500" />,
    href: "#",
  },
  {
    title: "Herbal",
    icon: <Leaf className="text-green-600" />,
    href: "#",
  },
  {
    title: "Home Care",
    icon: <Home className="text-orange-500" />,
    href: "#",
  },
  {
    title: "Supplement",
    icon: <Dumbbell className="text-gray-700" />,
    href: "#",
  },
  {
    title: "Food and Nutrition",
    icon: <Utensils className="text-yellow-500" />,
    href: "#",
  },
  {
    title: "Pet Care",
    icon: <PawPrint className="text-amber-700" />,
    href: "#",
  },
  {
    title: "Veterinary",
    icon: <Dog className="text-brown-500" />,
    href: "#",
  },
  {
    title: "Homeopathy",
    icon: <Droplets className="text-indigo-500" />,
    href: "#",
  },
];

export function Sidebar() {
  const [labTestOpen, setLabTestOpen] = useState(false);

  // Toggle for Lab Test specifically as per design
  const toggleLabTest = () => setLabTestOpen(!labTestOpen);

  return (
    <div className="w-[280px] bg-white border-r hidden md:block shrink-0 sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto custom-scrollbar">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b">
        <LayoutGrid className="text-teal-600" />
        <h2 className="font-semibold text-teal-600 text-lg">
          Shop By Category
        </h2>
      </div>

      <div className="flex flex-col">
        {/* Flash Sale */}
        <Link
          href="#"
          className="flex items-center justify-between p-4 border-b hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Zap className="text-yellow-400 fill-yellow-400" />
            <span className="font-bold flex items-center gap-2">
              <i>FLASH SALE</i>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-white border border-red-500 text-red-500 text-xs px-1 rounded">
              1000+
            </span>
            <ChevronRight size={16} className="text-gray-400" />
          </div>
        </Link>

        {/* Categories */}
        {menuItems.map((item, index) => {
          if (item.subItems) {
            return (
              <div
                key={index}
                className={cn("border-b", labTestOpen ? "bg-teal-50/50" : "")}
              >
                <div
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={toggleLabTest}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span
                      className={cn(
                        "font-medium",
                        labTestOpen ? "text-teal-600" : "text-gray-700",
                      )}
                    >
                      {item.title}
                    </span>
                  </div>
                  {labTestOpen ? (
                    <ChevronDown size={16} className="text-teal-600" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-400" />
                  )}
                </div>

                {/* Sub Items */}
                {labTestOpen && (
                  <div className="bg-white pl-4">
                    {item.subItems.map((sub, idx) => (
                      <Link
                        key={idx}
                        href="#"
                        className="flex items-center justify-between p-3 pl-14 hover:bg-gray-50 border-b last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          {/* Placeholder circle or icon */}
                          {sub.icon}
                          <span className="text-sm text-gray-700">
                            {sub.title}
                          </span>
                        </div>
                        <ChevronRight size={14} className="text-gray-400" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={index}
              href={item.href}
              className="flex items-center justify-between p-4 border-b hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-white transition-colors">
                  {item.icon}
                </div>
                <span className="font-medium text-gray-700 group-hover:text-black">
                  {item.title}
                </span>
              </div>
              <ChevronRight size={16} className="text-gray-400" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
