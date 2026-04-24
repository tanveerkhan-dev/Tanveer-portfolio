import { motion } from "framer-motion";
import React from "react";
  import { Link } from "react-router";
import profile from "../assets/Tanveer.png";
import { FaCode, FaServer, FaWordpress, FaPaintBrush } from "react-icons/fa";

export default function About() {

  const services = [
    { icon: <FaCode />, title: "Frontend", desc: "React, Next.js, Tailwind" },
    { icon: <FaServer />, title: "Backend", desc: "Node.js, Express, MongoDB" },
    { icon: <FaWordpress />, title: "WordPress", desc: "Elementor, WooCommerce" },
    { icon: <FaPaintBrush />, title: "UI/UX", desc: "Modern clean design" },
  ];

  const techStack = [
    "HTML", "CSS", "JavaScript", "React",
    "Next.js", "Node.js", "Express",
    "MongoDB", "Redux", "Tailwind", "WordPress"
  ];

  return (
<section
  id="about"
  className="w-full min-h-screen relative bg-white text-gray-900 dark:bg-black dark:text-white overflow-hidden px-6 sm:px-10 lg:px-20 py-16 sm:py-20"
>
  <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">

    {/* LEFT IMAGE */}
    <motion.div
      className="flex justify-center lg:justify-start"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      <div
        className="
          w-[240px] h-[320px]
          sm:w-[300px] sm:h-[400px]
          md:w-[340px] md:h-[460px]
          lg:w-[480px] lg:h-[590px]
          rounded-2xl overflow-hidden
          border-2 border-[#4bbd97]
          bg-gray-200 dark:bg-[#767578]
          shadow-lg
          hover:shadow-[0_0_40px_rgba(75,189,151,0.5)]
          transition-all
        "
      >
        <img
          src={profile}
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>

    {/* RIGHT CONTENT */}
    <div className="flex flex-col justify-center text-left">

      {/* TITLE */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        About Me
      </motion.h2>

      {/* PARAGRAPH 1 */}
      <p className="mt-6 text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-full sm:max-w-2xl">
        I am a Full Stack Developer focused on building scalable web applications
        with clean UI and strong backend systems.
      </p>

      {/* PARAGRAPH 2 */}
      <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-full sm:max-w-2xl">
        I specialize in performance, scalability, and modern web technologies
        to deliver smooth user experiences.
      </p>

      {/* WHAT I DO */}
      <h3 className="mt-8 text-lg sm:text-xl font-semibold text-[#4bbd97]">
        What I Do
      </h3>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">

        {services.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-[#4bbd97] hover:shadow-[0_0_20px_rgba(75,189,151,0.3)] transition"
          >
            <div className="flex items-center gap-2 text-[#4bbd97]">
              {item.icon}
              <span className="text-gray-900 dark:text-white font-semibold text-sm">
                {item.title}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>

      {/* TECH STACK */}
      <h3 className="mt-8 text-lg sm:text-xl font-semibold text-[#4bbd97]">
        Tech Stack
      </h3>

      <div className="mt-3 flex flex-wrap gap-2">
        {techStack.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs sm:text-sm rounded-full border border-[#4bbd97] text-[#4bbd97]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-start">

        <Link
          to="/contact"
          className="px-6 py-3 rounded-lg bg-[#4bbd97] text-black font-semibold hover:shadow-lg transition inline-block"
        >
          Let's Work Together
        </Link>

        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/Tanveer-Khan-Resume.pdf";
            link.download = "Tanveer-Khan-Resume.pdf";
            link.click();
          }}
          className="px-6 py-3 rounded-lg border border-[#4bbd97] text-[#4bbd97] hover:bg-[#4bbd97] hover:text-black transition"
        >
          Download CV
        </button>

      </div>

    </div>
  </div>
</section>
  );
}