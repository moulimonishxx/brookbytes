"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaArrowLeft
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const fullStackBenefits = [
  { title: "End-to-End Development", description: "A full-stack approach ensures seamless integration between front-end and back-end systems." },
  { title: "Cost-Effective", description: "One team handles both front-end and back-end, reducing overall project costs." },
  { title: "Faster Development", description: "Using a unified tech stack accelerates development and deployment timelines." },
  { title: "Scalability", description: "A well-structured full-stack solution ensures smooth scalability for growing businesses." },
  { title: "Improved Performance", description: "Optimized full-stack applications deliver better user experiences and efficiency." },
];

const FullStackServicePage = () => {
  const router = useRouter();
  
  return (
    <section className="relative flex flex-col justify-center items-center text-left min-h-screen w-full bg-black text-white px-6 md:px-12 pt-[6rem] pb-12">
      {/* Back Arrow */}
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
          Why Choose <span className="text-blue-400">Full-Stack Development?</span>
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Full-stack development provides a comprehensive solution for businesses looking for efficient, scalable, and high-performing applications.
        </p>
      </div>

      {/* Benefits of Full Stack Development */}
      <motion.div className="max-w-6xl w-full mt-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold">Our Full-Stack Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {fullStackBenefits.map((benefit, index) => (
            <motion.div key={index} className="p-6 bg-gray-900 rounded-xl shadow-lg text-left"
              whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-semibold text-blue-400">{benefit.title}</h3>
              <p className="text-gray-300 mt-2">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technologies We Use */}
      <motion.div className="max-w-6xl w-full mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold">Technologies We Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {[FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs].map((Icon, index) => (
            <motion.div key={index} className="p-6 bg-gray-900 rounded-xl shadow-lg flex justify-center items-center"
              whileHover={{ scale: 1.1 }}>
              <Icon className="text-blue-400 text-4xl" />
            </motion.div>
          ))}
        </div>
      </motion.div>


      {/* Contact Us Button */}
       <div className="mt-12">
              <motion.button 
                className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg text-lg font-semibold hover:bg-blue-400 hover:text-black transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                Contact Us
              </motion.button>
            </div>
    </section>
  );
};

export default FullStackServicePage;
