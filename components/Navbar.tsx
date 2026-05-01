"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isHomePage = pathname === "/";
  // Solid black navbar requested by user without blur effects
  const navBg = isScrolled || !isHomePage 
    ? "bg-[#000000] border-b border-[#1a1a1a] py-3 shadow-lg" 
    : "bg-[#000000] py-5 border-b border-transparent";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="InnoDigitix Solutions" width={128} height={128} className="h-16 w-auto object-contain scale-125" />
        </Link>

        {/* Desktop Nav */}
        <div 
          className="hidden md:flex items-center gap-2"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                className="relative px-5 py-2 rounded-full"
              >
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-white/5 border border-white/10 backdrop-blur-md rounded-full z-0 shadow-[0_0_15px_rgba(255,103,11,0.15)]"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
                <span className={`relative z-10 font-medium transition-colors duration-300 ${isActive ? "text-[#FF670B] drop-shadow-[0_0_8px_rgba(255,103,11,0.5)]" : "text-white"}`}>
                  {link.name}
                </span>
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-4 bg-[#FF670B] hover:bg-[#ff7a2b] text-white px-6 py-2 rounded-full font-medium transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-[#333] flex flex-col items-center py-6 gap-6 shadow-xl"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-medium text-lg pb-1 transition-all duration-300 ${isActive ? "text-[#FF670B] border-b-2 border-[#FF670B] drop-shadow-[0_0_12px_rgba(255,103,11,0.8)]" : "text-gray-300 border-b-2 border-transparent hover:text-[#FF670B]"}`}
              >
                {link.name}
              </Link>
            );
          })}
        </motion.div>
      )}
    </nav>
  );
}
