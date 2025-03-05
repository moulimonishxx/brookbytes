"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-black bg-opacity-100 shadow-md z-50 transition-all ${scrolled ? "py-3" : "py-4"}`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white">BrookBytes</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <Link href="/" className="hover:text-gray-400 transition-all">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400 transition-all">
              About
            </Link>
          </li>

          {/* Services Dropdown */}
          <li className="relative group">
            <button
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              className="flex items-center hover:text-gray-400 transition-all"
            >
              Services
              <motion.span
                animate={{ rotate: servicesOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-1"
              >
                <ChevronDown size={16} />
              </motion.span>
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 mt-2 w-56 bg-black text-white rounded-xl shadow-lg overflow-hidden"
                >
                  {[{ name: "Web Development", path: "/webdev" },
                    { name: "SEO Services", path: "/seo" },
                    { name: "UI/UX Design", path: "/seo" },
                    { name: "Digital Campaign", path: "/smm" }].map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="block px-5 py-3 hover:bg-gray-800 transition-all"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* What We Do Dropdown */}
          <li className="relative group">
            <button
              onMouseEnter={() => setWhatWeDoOpen(true)}
              onMouseLeave={() => setWhatWeDoOpen(false)}
              className="flex items-center hover:text-gray-400 transition-all"
            >
            Others
              <motion.span
                animate={{ rotate: whatWeDoOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-1"
              >
                <ChevronDown size={16} />
              </motion.span>
            </button>
            <AnimatePresence>
              {whatWeDoOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onMouseEnter={() => setWhatWeDoOpen(true)}
                  onMouseLeave={() => setWhatWeDoOpen(false)}
                  className="absolute left-0 mt-2 w-56 bg-black text-white rounded-xl shadow-lg overflow-hidden"
                >
                  {[{ name: "Data Manegment", path: "custom-websites" },
                    { name: "part Of Project", path: "./partofus" },
                    { name: "AI Chatbots", path: "./chatbot" },
                    { name: "UI/UX Design", path: "ui-ux-design" }].map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="block px-5 py-3 hover:bg-gray-800 transition-all"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link href="/contact" className="hover:text-gray-400 transition-all">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-16 left-0 w-auto bg-black text-white rounded-lg shadow-lg p-4"
          >
            <ul className="space-y-3">
              <li>
                <Link href="http://localhost:3000/" className="block px-4 py-2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="block px-4 py-2">
                  About
                </Link>
              </li>

              {/* Services Dropdown */}
              <li>
                <button
                  className="block w-full text-left px-4 py-2"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                </button>
                {servicesOpen && (
                  <ul className="space-y-2 ml-4">
                    <li>
                      <Link href="/webdev" className="block px-4 py-2">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link href="./seo" className="block px-4 py-2">
                        SEO Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/smm" className="block px-4 py-2">
                      Digital campaign
                      </Link>
                    </li>
                    <li>
                      <Link href="/smm" className="block px-4 py-2">
                      UI/UX Design
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* What We Do Dropdown */}
              <li>
                <button
                  className="block w-full text-left px-4 py-2"
                  onClick={() => setWhatWeDoOpen(!whatWeDoOpen)}
                >
                  Others
                </button>
                {whatWeDoOpen && (
                  <ul className="space-y-2 ml-4">
                    <li>
                      <Link href="/what-we-do/custom-websites" className="block px-4 py-2">
                       Data Management
                      </Link>
                    </li>
                    <li>
                      <Link href="./partofus" className="block px-4 py-2">
                        Part of Project
                      </Link>
                    </li>
                    <li>
                      <Link href="./chatbot" className="block px-4 py-2">
                        AI Chatbots
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link href="/contact" className="block px-4 py-2">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
