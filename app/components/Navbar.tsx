// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
// 1. Make sure to import the ThemeToggleButton
import ThemeToggleButton from "./ThemeToggleButton";

interface NavItem {
  name: string;
  href: string;
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              Portfolio
            </Link>
          </div>

          {/* Desktop Menu & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                {item.name}
              </Link>
            ))}
            {/* 2. Add the ThemeToggleButton here for desktop view */}
            <ThemeToggleButton />
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center md:hidden">
            {/* 3. Add the ThemeToggleButton here for mobile view */}
            <ThemeToggleButton />
            <button onClick={toggleMobileMenu} className="ml-4">
              <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 py-2 px-4 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
