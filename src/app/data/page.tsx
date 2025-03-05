"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaDatabase, FaCloudUploadAlt, FaServer } from "react-icons/fa";
import { SiGooglecloud, SiDropbox, SiNextcloud, SiApache } from "react-icons/si";
import { useRouter } from "next/navigation";

const DataManagementPage = () => {
  const router = useRouter();

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
          Secure & Efficient <span className="text-blue-400">Data Management</span>
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We help businesses transition from paper-based records to secure cloud-based storage solutions, ensuring accessibility, efficiency, and security.
        </p>
      </div>

      {/* Tools We Use */}
      <motion.div className="max-w-6xl w-full mt-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold">Technologies We Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {[FaDatabase, FaCloudUploadAlt, FaServer, SiGooglecloud, SiDropbox, SiNextcloud, SiApache].map((Icon, index) => (
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

export default DataManagementPage;
