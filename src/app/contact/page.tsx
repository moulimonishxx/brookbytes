"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaXTwitter, FaLinkedin, FaArrowLeft } from "react-icons/fa6";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/navigation";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState("");
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess("");

    const serviceID = "service_g41te5a";
    const templateID = "template_zq7hxja";
    const userID = "V2hbiQm3Vyhec_o1Q";

    const emailParams = {
      user_name: form.name,
      user_email: form.email,
      user_message: form.message,
    };

    try {
      await emailjs.send(serviceID, templateID, emailParams, userID);
      setSuccess("Message sent successfully! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setSuccess("Failed to send message. Try again later.");
      console.error("EmailJS Error:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.section
      className="bg-gradient-to-b from-black to-gray-900 text-white py-16 px-6 md:py-20 md:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto max-w-3xl space-y-12 relative">
        {/* Back Button */}
        <div
          className="absolute top-4 md:top-6 left-4 md:left-6 cursor-pointer"
          onClick={() => router.back()}
        >
          <FaArrowLeft className="text-white text-2xl hover:text-gray-400 transition duration-300" />
        </div>
        
        {/* Title */}
        <motion.h1
          className="text-4xl font-extrabold text-center text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact <span className="text-white">Us</span>
        </motion.h1>

        {/* Contact Form */}
        <motion.form
          className="space-y-4"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-600 text-white focus:ring-2 focus:ring-blue-400 bg-transparent"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-600 text-white focus:ring-2 focus:ring-blue-400 bg-transparent"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 rounded-md border border-gray-600 text-white focus:ring-2 focus:ring-blue-400 bg-transparent"
            placeholder="Your Message"
            required
          />
          <button
            type="submit"
            className="w-auto px-6 py-2 border border-white text-white rounded-md font-semibold bg-transparent hover:bg-gray-300 hover:text-black transition duration-300"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </motion.form>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 text-3xl">
          <FaWhatsapp className="text-white hover:text-gray-400 transition" />
          <FaInstagram className="text-white hover:text-gray-400 transition" />
          <FaEnvelope className="text-white hover:text-gray-400 transition" />
          <FaXTwitter className="text-white hover:text-gray-400 transition" />
          <FaLinkedin className="text-white hover:text-gray-400 transition" />
        </div>

        {/* Google Maps Location */}
        <iframe
          className="w-full h-64 rounded-lg"
          src="https://www.google.com/maps/embed?..."
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Success Popup (Rendered only if client-side) */}
      {isClient && success && (
        <Dialog open={!!success} onClose={() => setSuccess("")} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            className="bg-transparent backdrop-blur-lg border border-gray-500 text-white p-6 rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-lg font-semibold">{success}</h2>
            <button
              className="mt-3 px-4 py-2 bg-transparent-500 text-white rounded-md hover:bg-transparent-600"
              onClick={() => setSuccess("")}
            >
              Close
            </button>
          </motion.div>
        </Dialog>
      )}
    </motion.section>
  );
};

export default Contact;