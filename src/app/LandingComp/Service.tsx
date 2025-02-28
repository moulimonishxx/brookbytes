import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  { name: "Web Development", description: "BBrookBytes specializes in crafting high-performance, responsive, and SEO-optimized websites using modern web technologies like React.js, Next.js, and Express.js. We focus on sleek UI/UX design, smooth animations, and scalable backend solutions to enhance digital presence and business growth", link: "#web-development" },
  { name: "SEO", description: "BrookBytes provides advanced SEO solutions to boost online visibility and search rankings. We specialize in keyword optimization, technical SEO, backlink strategies, and content marketing to drive organic traffic. Our approach ensures fast-loading, mobile-friendly, and search-engine-optimized websites for maximum reach and engagement.", link: "#seo" },
  { name: "Chat Bot", description: "BrookBytes develops AI-powered chatbots to enhance customer engagement and automate interactions. Our chatbots provide instant responses, handle inquiries efficiently, and integrate seamlessly with websites and messaging platforms. Designed with NLP and machine learning, they deliver personalized and intelligent user experiences, improving customer support and business efficiency.", link: "#chatbot" },
  { name: "Full Stack", description: "BrookBytes builds scalable, high-performance web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). We specialize in responsive UI, efficient backend services, and secure databases, ensuring seamless integration, optimized performance, and tailored solutions to elevate your business in the digital landscape.Providing complete end-to-end development solutions.", link: "#fullstack" },
];

const Services: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="services-section py-16 px-6 md:py-20 md:px-8 bg-black text-white">
      <div className="container mx-auto max-w-6xl text-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-blue-400">Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg text-left transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{service.name}</h3>
              <p className="text-gray-300 text-sm md:text-base mb-4">{service.description}</p>
              <a href={service.link} className="text-blue-400 hover:underline">Learn More</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
