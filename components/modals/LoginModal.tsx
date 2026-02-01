import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function LoginModal({ open, onOpenChange }: LoginModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side - Illustration */}
          <div className="hidden md:flex flex-col items-center justify-center bg-gray-50 p-8 text-center">
            {/* Using a placeholder/fallback image since I don't have the exact asset */}
            <div className="relative w-64 h-64 mb-6">
              <Image
                src="/logo.jpg" // Fallback to logo or similar if specific illustrative asset missing
                alt="Support"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Instant support & reply
            </h3>
            <p className="text-sm text-gray-500 max-w-xs">
              Arogga will receive your order and be able to reply to you once
              you place an order and ask for help.
            </p>
            {/* Dots indicator */}
            <div className="flex gap-2 mt-6">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-6 h-2 rounded-full bg-[#006F62]"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 md:p-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Login</h2>
            </div>

            <p className="text-sm text-gray-500 mb-6">
              Login to make an order, access your orders, special offers, health
              tips, and more!
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <div className="relative w-[140px]">
                    <select
                      className="w-full h-10 bg-gray-100 border-0 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#006F62]"
                      defaultValue="bd"
                    >
                      <option value="bd">(+88) BD</option>
                    </select>
                  </div>
                  <Input
                    type="tel"
                    placeholder="Enter number"
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="text-right">
                <a
                  href="#"
                  className="text-sm text-[#006F62] hover:underline font-medium"
                >
                  Have a referral code?
                </a>
              </div>

              <Button className="w-full bg-[#006F62] hover:bg-[#005a50] text-white h-11 text-base">
                Send
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">or</span>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  className="w-12 h-12 p-0 rounded-lg border-gray-200"
                >
                  {/* Google Icon SVG */}
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  className="w-12 h-12 p-0 rounded-lg border-gray-200"
                >
                  {/* LinkedIn Icon SVG */}
                  <svg
                    className="w-6 h-6 text-[#0077b5]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Button>
              </div>

              <div className="text-center mt-6">
                <p className="text-xs text-gray-500 leading-relaxed">
                  By continuing you agree to{" "}
                  <a href="#" className="font-semibold text-[#006F62]">
                    Terms & Conditions
                  </a>
                  , <br />
                  <a href="#" className="font-semibold text-[#006F62]">
                    Privacy Policy
                  </a>{" "}
                  &{" "}
                  <a href="#" className="font-semibold text-[#006F62]">
                    Refund-Return Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LoginModal;
