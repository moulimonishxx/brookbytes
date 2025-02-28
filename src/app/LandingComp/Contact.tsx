import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGlobe } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <>
      <motion.section 
        className="contact-section py-16 px-6 md:py-20 md:px-8 text-center bg-black text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            className="text-3xl md:text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact <span className="text-blue-400">Us</span>
          </motion.h2>

          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Connect with us through our social media or fill out our Google Form to get in touch.
          </p>

          <a 
            href="https://forms.gle/your-google-form-link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-lg font-semibold text-white border border-white rounded-lg shadow-md transition hover:bg-gray-300 hover:text-black"
          >
            Open Google Form
          </a>

          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400 transition">
              <FaInstagram />
            </a>
            <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400 transition">
              <FaWhatsapp />
            </a>
            <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-400 transition">
              <FaGlobe />
            </a>
          </div>
        </div>
      </motion.section>

      <footer className="bg-gray-900 text-white py-6 text-center">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="./policy" className="hover:text-blue-400 transition">Privacy Policy</a>
            <a href="./terms" className="hover:text-blue-400 transition">Terms & Condition</a>
            <a href="/policy" className="hover:text-blue-400 transition">Policy</a>
          </div>
          
          <p className="text-gray-400 text-sm mt-4">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
