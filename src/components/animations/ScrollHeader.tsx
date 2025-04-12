"use client";

import { useEffect, useState } from 'react';
import {
  ChevronRight,
  Code,
  BarChart,
  Shield,
  Zap,
  MessageSquare,
  FileCheck,
  Rocket,
  CheckCircle,
  Briefcase,
  Settings,
  Star,
  HelpCircle,
  Mail,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function ScrollHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(true);
        setIsMenuOpen(false);
      }

      if (currentScrollY === 0) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <section className={`
      fixed top-0 left-0 right-0 z-50
      transition-all duration-500 ease-out
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
    `}>
      <div className="container mx-auto py-6 px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center bg-[#0F0F0F]/95 backdrop-blur-lg rounded-2xl p-4 border border-[#1F1F1F] shadow-xl transition-transform duration-300 hover:scale-[1.005]">
          {/* Logo */}
          <div className="flex items-center gap-3 group">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r  rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <a href="/" className="relative block">
                <img 
                  src="/logo2.png" // Altere para o caminho correto da sua logo
                  alt="Marketilize Logo"
                  className="w-12 h-12 rounded-full hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <div className="bg-[#111] rounded-xl p-1 flex items-center border border-[#222] shadow-inner">
              {[
                { href: "#services", icon: Briefcase, text: "Serviços" },
                { href: "#how-it-works", icon: Settings, text: "Como Funciona" },
                // { href: "#testimonials", icon: Star, text: "Depoimentos" },
                { href: "#faq", icon: HelpCircle, text: "FAQ" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg hover:bg-[#1A1A1A] transition-all group cursor-pointer"
                >
                  <item.icon className="h-5 w-5 text-[#2A7AFF] group-hover:text-[#FF4D4D] transition-colors" />
                  <span className="text-sm font-medium group-hover:text-[#FF4D4D] transition-colors">
                    {item.text}
                  </span>
                </Link>
              ))}
            </div>

            <a href="mailto:suporteconstsoft@gmail.com">
              <Button 
                className="ml-2 bg-gradient-to-r from-[#FF4D4D] to-[#FF6B6B] hover:from-[#FF6B6B] hover:to-[#FF4D4D] shadow-lg hover:shadow-[#FF4D4D]/30 transition-all cursor-pointer"
                size="lg"
              >
                <Mail className="h-5 w-5 mr-2" />
                <span className="font-semibold">Contato</span>
              </Button>
            </a>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden relative">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-[#1A1A1A] rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-[#2A7AFF]" />
            </Button>

            <div className={`absolute top-full right-0 mt-4 w-64 origin-top-right transition-all duration-300
              ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>

              <div className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl shadow-xl overflow-hidden">
                <div className="p-2 space-y-1">
                  {[
                    { href: "#services", icon: Briefcase, text: "Serviços" },
                    { href: "#how-it-works", icon: Settings, text: "Como Funciona" },
                    // { href: "#testimonials", icon: Star, text: "Depoimentos" },
                    { href: "#faq", icon: HelpCircle, text: "FAQ" },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#1A1A1A] transition-colors group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="h-5 w-5 text-[#2A7AFF] group-hover:text-[#FF4D4D]" />
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                        {item.text}
                      </span>
                    </Link>
                  ))}
                </div>
                
                <div className="border-t border-[#1F1F1F] p-2">
                  <a href="mailto:suporteconstsoft@gmail.com">
                    <Button 
                      className="w-full bg-gradient-to-r from-[#FF4D4D] to-[#FF6B6B] hover:from-[#FF6B6B] hover:to-[#FF4D4D]"
                      size="sm"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Contato
                    </Button>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}