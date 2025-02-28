"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useRouter } from "next/navigation";

const sections = [
  {
    title: "Acceptance of Terms",
    content: "By using our services, you agree to abide by these terms and conditions.",
    details: "These terms govern your use of our website, products, and services. If you do not agree, please discontinue use immediately.",
  },
  {
    title: "User Responsibilities",
    content: "Users must provide accurate information and use our services lawfully.",
    details: "You are responsible for maintaining the confidentiality of your account credentials and ensuring that your actions do not violate applicable laws.",
  },
  {
    title: "Intellectual Property",
    content: "All content, logos, and materials are owned by our company and protected by copyright laws.",
    details: "Unauthorized reproduction, modification, or distribution of any materials on our website is strictly prohibited.",
  },
  {
    title: "Limitations of Liability",
    content: "We are not liable for indirect or incidental damages arising from the use of our services.",
    details: "While we strive for accuracy, we do not guarantee uninterrupted or error-free services. Users assume full responsibility for using our platform.",
  },
  {
    title: "Termination of Services",
    content: "We reserve the right to terminate accounts violating our terms.",
    details: "If we detect any fraudulent, illegal, or harmful activity, we may suspend or terminate access without prior notice.",
  },
];

const TermsConditions: React.FC = () => {
  const router = useRouter();
  const [openSections, setOpenSections] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSections(openSections === index ? null : index);
  };

  return (
    <motion.section
      className="terms-conditions-container text-white bg-black py-16 px-6 md:py-20 md:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto max-w-4xl relative">
        {/* Back Button - Adjusted for Responsive View */}
        <div
          className="absolute top-4 md:top-6 left-4 md:left-6 cursor-pointer"
          onClick={() => router.back()}
        >
          <FaArrowLeft className="text-white text-2xl hover:text-gray-400 transition duration-300" />
        </div>

        {/* Title - Adjusted for Responsiveness */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-8 text-center uppercase pt-12 md:pt-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Terms & <span className="text-blue-400">Conditions</span>
        </motion.h1>

        {/* Introduction */}
        <p className="text-lg text-gray-300 leading-relaxed mb-8 text-center">
          These Terms & Conditions govern your use of Brook Bytes. By accessing our services, you agree to comply with these terms.
        </p>

        {/* Sections with Expandable Arrows */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                <h2 className="text-2xl font-semibold text-blue-400">
                  {section.title}
                </h2>
                {openSections === index ? (
                  <FaChevronUp className="text-gray-400 text-xl" />
                ) : (
                  <FaChevronDown className="text-gray-400 text-xl" />
                )}
              </div>
              <p className="text-gray-300 mt-2">{section.content}</p>
              {openSections === index && (
                <motion.p
                  className="text-gray-400 mt-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {section.details}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-blue-400">Contact Us</h2>
          <p className="text-gray-300 mt-4">
            For any concerns about our Terms & Conditions, contact us at:
          </p>
          <p className="text-gray-400 mt-2">
            📧 [brookbytes@gmail.com] | 
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default TermsConditions;
