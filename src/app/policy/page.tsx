"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useRouter } from "next/navigation";

const sections = [
  {
    title: "Information We Collect",
    content: "We collect personal, technical, and usage data to improve our services, ensure security, and enhance user experience.",
    details: "This includes your name, email, IP address, and browsing behavior. We also track device information and location data to deliver personalized content effectively.",
  },
  {
    title: "How We Use Your Information",
    content: "Your data helps us personalize content, improve security, and provide better customer support.",
    details: "Collected data is used to analyze user trends, enhance website performance, and communicate updates. We do not share your data with unauthorized third parties.",
  },
  {
    title: "Confidentiality & Data Security",
    content: "We implement strong encryption, secure servers, and privacy protocols to protect your data.",
    details: "We regularly update our security policies, conduct audits, and employ SSL certificates to safeguard your information from breaches.",
  },
  {
    title: "Cookies & Tracking Technologies",
    content: "We use cookies and similar tracking technologies to enhance your browsing experience.",
    details: "These technologies help us remember your preferences, improve website performance, and analyze user behavior for better service delivery.",
  },
  {
    title: "Your Rights & Control",
    content: "You have the right to access, modify, or delete your personal data.",
    details: "Users can request data corrections, opt-out of communications, or delete their information in accordance with privacy laws.",
  },
  {
    title: "Third-Party Services",
    content: "We may use third-party services to improve our offerings while ensuring data security.",
    details: "These partners are contractually bound to protect your data and comply with relevant privacy regulations.",
  },
  {
    title: "Changes to This Policy",
    content: "We may update our privacy policy periodically to align with new regulations.",
    details: "Users will be notified of significant changes, and continued use of our services implies acceptance of the revised terms.",
  },
];

const PrivacyPolicy: React.FC = () => {
  const router = useRouter();
  const [openSections, setOpenSections] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSections(openSections === index ? null : index);
  };

  return (
    <motion.section
      className="privacy-policy-container text-white bg-black py-16 px-6 md:py-20 md:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto max-w-4xl relative">
        {/* Back Button - Positioned Higher for Responsiveness */}
        <div
          className="absolute top-4 md:top-6 left-4 md:left-6 cursor-pointer"
          onClick={() => router.back()}
        >
          <FaArrowLeft className="text-white text-2xl hover:text-gray-400 transition duration-300" />
        </div>

        {/* Title - Adjusted Padding for Smaller Screens */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-8 text-center uppercase pt-12 md:pt-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Privacy <span className="text-blue-400">Policy</span>
        </motion.h1>

        {/* Introduction */}
        <p className="text-lg text-gray-300 leading-relaxed mb-8 text-center">
          At Brook Bytes , your privacy is our priority. This policy outlines how we collect, use, and protect your personal information.
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
            If you have any concerns about our privacy policy, feel free to reach out to us.
          </p>
          <p className="text-gray-400 mt-2">
            📧 [brookbytes@gmail]
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default PrivacyPolicy;
