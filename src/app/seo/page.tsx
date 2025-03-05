"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaChartLine, FaCog, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Head from "next/head";

const seoServices = [
  { title: "Keyword Research", description: "Identify the best keywords to rank higher on search engines.", icon: FaSearch },
  { title: "On-Page Optimization", description: "Optimize your website content and structure for better SEO.", icon: FaCog },
  { title: "Technical SEO", description: "Enhance site speed, mobile-friendliness, and overall performance.", icon: FaChartLine },
  { title: "Backlink Strategy", description: "Increase domain authority with high-quality backlinks.", icon: FaSearch },
  { title: "Local SEO", description: "Optimize for local searches and Google My Business.", icon: FaChartLine },
];

const SEOServicePage = () => {
  const router = useRouter();

  return (
    <>
      {/* Font Import */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <section className="relative flex flex-col justify-center items-center text-left min-h-screen w-full bg-black text-white px-6 md:px-12 pt-[6rem] pb-12 font-[Nunito Sans]">
        
        {/* Back Navigation */}
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
            Enhance Your Online Visibility with <span className="text-blue-400">Our SEO Services</span>
          </motion.h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            At BrookBytes, we use cutting-edge SEO techniques to drive organic traffic and boost search rankings.
          </p>
        </div>
        
        {/* SEO Services Section */}
        <motion.div className="mt-12 max-w-6xl w-full text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold">Our SEO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {seoServices.map((service, index) => (
              <motion.div key={index} className="p-6 bg-gray-900 rounded-xl shadow-lg flex flex-col items-center text-center"
                whileHover={{ scale: 1.1 }}>
                <service.icon className="text-blue-400 text-4xl mb-4" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-300 mt-2">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default SEOServicePage;
