"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaJs, FaLaptopCode, FaArrowLeft
} from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
import { useRouter } from "next/navigation";

// Sample Project Data
const projects = [
  { title: "E-Commerce Platform", description: "A high-performance online shopping platform with secure payment integration.", image: "/images/ecommerce.jpg" },
  { title: "Hospital Management System", description: "A medical record management system with appointment booking features.", image: "/images/hospital.jpg" },
  { title: "Personal Portfolio", description: "A sleek and interactive portfolio to showcase personal projects and skills.", image: "/images/portfolio.jpg" },
  { title: "Business Website", description: "A professional business website with SEO optimization and analytics integration.", image: "/images/business.jpg" },
  { title: "AI Chatbot Integration", description: "An AI-driven chatbot for customer service automation and instant responses.", image: "/images/chatbot.jpg" },
];

// Testimonials
const testimonials = [
  { name: "John Doe", feedback: "BrookBytes delivered an outstanding website that exceeded our expectations!" },
  { name: "Emma Wilson", feedback: "Their team was professional, responsive, and highly skilled in web development." },
  { name: "Liam Carter", feedback: "Our e-commerce platform was built flawlessly, and sales have skyrocketed!" },
  { name: "Sophia Martinez", feedback: "I loved the modern design and fast performance of our new website." },
  { name: "Noah Johnson", feedback: "BrookBytes transformed our ideas into a functional and beautiful website!" },
];

const WebDevelopmentPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col justify-center items-center text-left min-h-screen w-full bg-black text-white px-6 md:px-12 pt-[6rem] pb-12">
       {/* Back Arrow for Home Navigation */}
       <div className="absolute top-6 left-6 cursor-pointer" onClick={() => router.back()}> 
        <FaArrowLeft className="text-white text-xl hover:text-gray-400 transition duration-300" />
      </div>

      {/* Page Title */}
      <div className="container mx-auto max-w-6xl text-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Elevate Your <span className="text-blue-400">UI/UX Design</span>
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We create intuitive, user-friendly, and visually appealing designs that enhance user experience and engagement.
        </p>
      </div>
      {/* Technologies We Use */}
      <motion.div className="max-w-6xl w-full mt-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold">Technologies We Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {[FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaJs, FaLaptopCode, SiAdobe].map((Icon, index) => (
            <motion.div key={index} className="p-6 bg-gray-900 rounded-xl shadow-lg flex justify-center items-center"
              whileHover={{ scale: 1.1 }}>
              <Icon className="text-blue-400 text-4xl" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WebDevelopmentPage;
