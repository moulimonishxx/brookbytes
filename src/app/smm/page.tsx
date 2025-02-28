"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBullhorn, FaUserCircle, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

// Sample Campaign Data
const campaigns = [
  { title: "Brand Awareness Campaign", description: "Expand your brand's reach and visibility with targeted social media campaigns.", image: "/images/brand-awareness.jpg" },
  { title: "Lead Generation Strategy", description: "Capture potential leads and convert them into loyal customers.", image: "/images/lead-generation.jpg" },
  { title: "Engagement Boost", description: "Increase audience interaction through strategic content and campaigns.", image: "/images/engagement.jpg" },
  { title: "Influencer Marketing", description: "Leverage influencers to enhance your brand’s credibility and audience trust.", image: "/images/influencer.jpg" },
  { title: "Paid Social Ads", description: "Run optimized and data-driven paid campaigns for maximum ROI.", image: "/images/paid-ads.jpg" },
  { title: "Paid Social Ads", description: "Run optimized and data-driven paid campaigns for maximum ROI.", image: "/images/paid-ads.jpg" },
];

// Testimonials
const testimonials = [
  { name: "Sarah Miller", feedback: "BrookBytes transformed our social media presence, and engagement has tripled!" },
  { name: "David Johnson", feedback: "Their team executed a flawless ad campaign that significantly boosted our sales." },
  { name: "Emily Carter", feedback: "Our follower count skyrocketed thanks to their innovative strategies!" },
  { name: "Michael Brown", feedback: "Highly professional team with deep expertise in digital marketing!" },
  { name: "Sophia Adams", feedback: "They helped us establish a strong brand identity across multiple platforms." },
];

const SocialMediaMarketingPage = () => {
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
      <div className="absolute top-6 left-6 cursor-pointer" onClick={() => router.push("/")}> 
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
          Elevate Your Brand with <span className="text-blue-400">SMM Strategies</span>
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          At BrookBytes, we help brands dominate social media with powerful marketing strategies tailored for success.
        </p>
      </div>

      {/* Our Campaigns */}
      <motion.div className="mt-16 max-w-6xl w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold">Our Marketing Campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {campaigns.map((campaign, index) => (
            <motion.div key={index} 
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all shadow-md hover:shadow-2xl"
              whileHover={{ y: -5 }}
            >
              <img src={campaign.image} alt={campaign.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{campaign.title}</h3>
                <p className="text-gray-300 mt-2">{campaign.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div className="mt-16 max-w-6xl w-full text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold">Client Testimonials</h2>
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

      {/* Contact Us Section */}
      <motion.div className="mt-16 max-w-6xl w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-gray-300 mt-2">Ready to grow your brand? Get in touch with us today!</p>
        <div className="mt-6 p-6 rounded-xl shadow-lg max-w-lg mx-auto">
          <div className="flex justify-center gap-4 text-3xl text-blue-400">
            <FaFacebook className="hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SocialMediaMarketingPage;
