"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaTasks, FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const PartOfProjectPage = () => {
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
          Full Project or <span className="text-blue-400">Part of Your Project</span>
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Whether you need a complete solution or just a part of your project done, we offer flexible and customized development services to meet your needs.
        </p>
      </div>

      {/* Our Services */}
      <motion.div className="max-w-6xl w-full mt-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <motion.div className="p-6 bg-gray-900 rounded-xl shadow-lg" whileHover={{ scale: 1.1 }}>
            <FaProjectDiagram className="text-blue-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Full Project Development</h3>
            <p className="text-gray-300 mt-2">We handle your project from start to finish, delivering a high-quality, scalable solution tailored to your needs.</p>
          </motion.div>
          <motion.div className="p-6 bg-gray-900 rounded-xl shadow-lg" whileHover={{ scale: 1.1 }}>
            <FaTasks className="text-blue-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Part of Your Project</h3>
            <p className="text-gray-300 mt-2">Need assistance with a specific part of your project? We integrate seamlessly into your existing workflow to get it done.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div className="mt-16 max-w-6xl w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {["Custom Solutions", "Scalable Development", "Reliable & On-Time Delivery"].map((text, index) => (
            <motion.div key={index} className="p-6 bg-gray-900 rounded-xl shadow-lg" whileHover={{ scale: 1.05 }}>
              <FaCheckCircle className="text-green-400 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">{text}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Us Button */}
      <motion.div className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <button className="border-2 border-blue-400 text-blue-400 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-black transition duration-300">
          Contact Us
        </button>
      </motion.div>
    </section>
  );
};

export default PartOfProjectPage;