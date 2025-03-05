"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaBrain, FaComments, FaCogs, FaShieldAlt, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const AIChatbotPage = () => {
  const router = useRouter();

  return (
    <section className="relative flex flex-col justify-center items-center text-left min-h-screen w-full bg-black text-white px-6 md:px-12 pt-[6rem] pb-12">
      {/* Back Arrow for Navigation */}
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
          Custom AI Chatbots for <span className="text-blue-400">Your Business & Life</span>
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Our AI researchers at BrookBytes create intelligent and fully customizable AI chatbots designed to streamline communication, automate processes, and enhance customer experiences.
        </p>
      </div>

      {/* Why Choose Our AI Chatbot? */}
      <motion.div className="max-w-6xl w-full mt-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold">Why You Need Our AI Chatbot</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            { icon: FaRobot, text: "24/7 Automated Assistance" },
            { icon: FaBrain, text: "Machine Learning & NLP" },
            { icon: FaComments, text: "Seamless Human Interaction" },
            { icon: FaCogs, text: "Custom Integrations for Your Business" },
            { icon: FaShieldAlt, text: "Secure & Reliable AI Models" },
          ].map((feature, index) => (
            <motion.div key={index} className="p-6 bg-gray-900 rounded-xl shadow-lg flex flex-col items-center"
              whileHover={{ scale: 1.1 }}>
              <feature.icon className="text-blue-400 text-4xl mb-2" />
              <p className="text-gray-300 text-lg">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Our AI Chatbot Solutions */}
      <motion.div className="mt-16 max-w-6xl w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold">AI Chatbot Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {["Customer Support Chatbots", "AI Assistants for Workflows", "Healthcare & Appointment Bots", "E-commerce & Sales Bots", "Personalized AI for Productivity"].map((solution, index) => (
            <motion.div key={index} 
              className="bg-gray-900 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all shadow-md hover:shadow-2xl"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-blue-400">{solution}</h3>
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

export default AIChatbotPage;
