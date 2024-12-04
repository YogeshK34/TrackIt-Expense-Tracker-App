"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  PieChart,
  Menu,
  X,
  BarChart3,
  DollarSign,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const NavigationMenuItems = [
    {
      label: "Dashboard",
      icon: <BarChart3 className="mr-2 h-4 w-4" />,
      href: "/dashboard",
      subItems: [
        { label: "Overview", href: "/dashboard/overview" },
        { label: "Analytics", href: "/dashboard/analytics" },
      ],
    },
    {
      label: "Expenses",
      icon: <DollarSign className="mr-2 h-4 w-4" />,
      href: "/expenses",
      subItems: [
        { label: "Track Expenses", href: "/expenses/track" },
        { label: "Categories", href: "/expenses/categories" },
      ],
    },
    {
      label: "Reports",
      icon: <TrendingUp className="mr-2 h-4 w-4" />,
      href: "/reports",
      subItems: [
        { label: "Monthly Report", href: "/reports/monthly" },
        { label: "Yearly Insights", href: "/reports/yearly" },
      ],
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <PieChart className="h-6 w-6 text-white" />
            </motion.div>
            <Link href="/">
              <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                Track
                <span className="text-black dark:text-white">It</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {NavigationMenuItems.map((item) => (
              <div key={item.label} className="relative group">
                <Button
                  variant="ghost"
                  className="text-muted-foreground flex items-center"
                  onClick={() => toggleMenu(item.label)}
                >
                  {item.icon}
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "ml-2 h-4 w-4 transition-transform",
                      activeMenu === item.label ? "rotate-180" : ""
                    )}
                  />
                </Button>
                {item.subItems && activeMenu === item.label && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <motion.div className="md:hidden" whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg">
            {NavigationMenuItems.map((item) => (
              <div key={item.label} className="border-b">
                <Link
                  href={item.href}
                  className="flex items-center p-4 hover:bg-gray-100"
                >
                  {item.icon}
                  {item.label}
                </Link>
                {item.subItems && (
                  <div className="pl-8">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block p-2 text-sm hover:bg-gray-100"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
