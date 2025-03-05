"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { FaCode, FaDatabase, FaRobot, FaPencilAlt, FaChartLine } from "react-icons/fa";
import AboutSection from "./LandingComp/About";  // Adjust the path accordingly
import ServiceSection from "./LandingComp/Service";
import ContactSection from "./LandingComp/Contact";


const Page: React.FC = () => {
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
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full bg-black bg-opacity-90 shadow-md z-50 transition-all ${scrolled ? "py-3" : "py-4"}`}>
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <h1 className="text-xl font-bold text-white">BrookBytes</h1>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-white">
            <li>
              <Link href="/" className="hover:text-gray-400 transition-all">Home</Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-gray-400 transition-all">About</Link>
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
                    {[{ name: "Web Development", path: "./webdev" },
                      { name: "SEO Services", path: "./seo" },
                      { name: "Digital campaign", path: "./smm" },
                      { name: "UI/UX Design", path: "./uiandux" }].map((item) => (
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
                    {[{ name: "Full Stack", path: "./fullstack" },
                      { name: "Part Of Project", path: "./partofus" },
                      { name: "Data Management", path: "./data" },
                      { name: "AI chatBot", path: "./chatbot" }].map((item) => (
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
              <Link href="./contact" className="hover:text-gray-400 transition-all">Contact</Link>
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
              <li><Link href="http://localhost:3000/" className="block px-4 py-2">Home</Link></li>

              <li><Link href="#about" className="block px-4 py-2">About</Link></li>
              
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
                    <li><Link href="/webdev" className="block px-4 py-2">Web Development</Link></li>
                    <li><Link href="./seo" className="block px-4 py-2">SEO Services</Link></li>
                    <li><Link href="./smm" className="block px-4 py-2">Digital campaign</Link></li>
                    <li><Link href="./uiandux" className="block px-4 py-2">UI/UX Design</Link></li>
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
                    <li><Link href="./fullstack" className="block px-4 py-2">Full Stack</Link></li>
                    <li><Link href="./partofus" className="block px-4 py-2">Part Of Project</Link></li>
                    <li><Link href="./data" className="block px-4 py-2">Data Manegment</Link></li>
                    <li><Link href="./chatbot" className="block px-4 py-2">AI Chatbot</Link></li>
                  </ul>
                )}
              </li>

              
              <li><Link href="/contact" className="block px-4 py-2">Contact</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>

      <section className="relative flex flex-col justify-center items-start text-left h-screen w-full bg-black text-white px-6 md:px-12">
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video autoPlay muted loop className="object-cover w-full h-full">
            <source src="/images/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Section with Smooth Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="max-w-3xl lg:w-2/3 mt-[1cm] ml-4 md:ml-16 z-10 relative text-left"
        >
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight whitespace-pre-line"
          >
            {"Elevate Your Business with \nBrookBytes"}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
            className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 whitespace-pre-line md:whitespace-normal md:max-w-lg"
          >
            {"Unlock the full potential of your business with cutting-edge web development, \nadvanced SEO, and AI-driven solutions tailored for success."}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            className="mt-6"
          >
            <a
              href="#services"
              className="px-6 py-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 rounded-md"
            >
              Get Started
            </a>
          </motion.div>
        </motion.div>
      </section>

      <motion.section 
        id="about" 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <AboutSection/>
      </motion.section>

      <motion.section 
        id="service" 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <ServiceSection/>
      </motion.section>

      <motion.section 
        id="contact" 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <ContactSection/>
      </motion.section>
    </>
  );
};

export default Page;
