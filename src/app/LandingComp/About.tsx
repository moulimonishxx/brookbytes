import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const achievements = [
  "/images/achive.png",
  "/images/achive.png",
  "/images/achive.png",
  "/images/achive.png",
  "/images/achive.png",
];

const About: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      className="about-section py-16 px-6 md:py-20 md:px-8 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-6xl text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-blue-400">BrookBytes</span>
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          BrookBytes is a cutting-edge digital solutions provider specializing in web development, SEO optimization, 
          and AI-driven chatbots. Our team is passionate about crafting scalable, high-performance applications using 
          the latest technologies like React.js, Express.js, and cloud-based infrastructures.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12">
          <motion.div
            className="text-left space-y-5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-blue-400">Our Mission</h3>
            <p className="text-gray-300 text-sm md:text-base">
              We aim to elevate businesses with cutting-edge digital solutions. Our client-centric approach ensures 
              tailored solutions that maximize impact and innovation.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold text-blue-400">Why Choose Us?</h3>
            <ul className="list-disc pl-4 md:pl-6 text-gray-300 text-sm md:text-base">
              <li>Custom-tailored web solutions</li>
              <li>AI-powered automation</li>
              <li>SEO optimization for digital growth</li>
              <li>Scalable and secure architecture</li>
            </ul>
          </motion.div>

          <motion.div
            ref={ref}
            className="bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h3 className="text-lg md:text-xl font-semibold text-center mb-4">Our Achievements</h3>
            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex space-x-4"
                animate={{ x: [0, -100, -200, -300, -400, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              >
                {achievements.map((img, index) => (
                  <img 
                    key={index} 
                    src={img} 
                    alt={`Achievement ${index + 1}`} 
                    className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-lg" 
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
