"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaJs, FaLaptopCode,FaArrowLeft
} from "react-icons/fa";
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
     {/* Back Arrow for Navigation to Previous Page */}
   {/* Back Arrow for Browser Navigation */}
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
          Why You Need <span className="text-blue-400">Our Sollution</span>
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          At BrookBytes, we provide innovative, efficient, and scalable web solutions to help businesses thrive in the digital age.
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
          {[FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaJs, FaLaptopCode].map((Icon, index) => (
            <motion.div key={index} className="p-6 bg-gray-900 rounded-xl shadow-lg flex justify-center items-center"
              whileHover={{ scale: 1.1 }}>
              <Icon className="text-blue-400 text-4xl" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Our Completed Projects */}
      <motion.div className="mt-16 max-w-6xl w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold">Our Completed Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {projects.map((project, index) => (
            <motion.div key={index} 
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all shadow-md hover:shadow-2xl"
              whileHover={{ y: -5 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>


      <motion.div className="mt-16 max-w-6xl w-full text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold">Testimonials</h2>
        <div className="mt-6 p-6 bg-gray-900 rounded-xl shadow-lg max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-300 italic">"{testimonials[currentTestimonial].feedback}"</p>
              <h3 className="text-lg font-bold mt-3">- {testimonials[currentTestimonial].name}</h3>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default WebDevelopmentPage;
