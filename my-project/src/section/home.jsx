import ParticleBackground from "../components/particalbackground";
import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import Tanveer from "../assets/Tanveer.png";

export default function Home() {
  const roles = useMemo(
    () => ["Full Stack Developer", "React Developer", "Frontend Developer"],
    [],
  );

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [roles]);

  return (
<section className="w-full min-h-screen relative bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-gray-100 overflow-hidden px-6 sm:px-10 lg:px-20 pt-16">
  <ParticleBackground />

  <div className="relative z-10 w-full h-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
    
    {/* LEFT SIDE */}
    <div className="flex flex-col justify-center text-left">

      {/* NAME */}
      <motion.h1
        className="mt-6 sm:mt-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-gray-900 dark:text-white font-medium">Hi, I'm </span>
        <br />

        <span className="animated-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
          Tanveer Khan
        </span>
      </motion.h1>

      {/* ROLE LINE */}
      <motion.div
        className="mt-5 flex items-center text-[#4bbd97] dark:text-[#4bbd97] text-base sm:text-lg md:text-xl font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          className="w-8 h-[2px] bg-[#4bbd97] mr-3"
          animate={{
            scaleX: [0.6, 1, 0.6],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          style={{ originX: 0 }}
        />

        {roles[roleIndex]}
      </motion.div>

      {/* DESCRIPTION */}
      <motion.p
        className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 font-light leading-relaxed max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Full Stack Developer building scalable, high-performance web
        applications with clean code and seamless user experiences using
        React, Next.js, Node.js, Express, MongoDB, Redux Toolkit, and modern
        web technologies.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        className="mt-8 flex flex-col sm:flex-row gap-4 justify-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Link
          to="/project"
          className="px-5 py-4 w-[170px] rounded-xl font-medium text-lg text-white bg-[#4bbd97] shadow-md hover:shadow-[0_0_25px_#4bbd97] hover:scale-105 transition-all"
        >
          View My Work
        </Link>

        <Link
          to="/contact"
          className="px-5 py-4 w-[220px] rounded-xl font-medium text-lg text-gray-900 dark:text-white border-2 border-[#4bbd97] flex items-center justify-center gap-2 hover:shadow-[0_0_20px_#4bbd97] transition-all"
        >
          Get In Touch
          <span className="text-[#4bbd97]">→</span>
        </Link>
      </motion.div>
    </div>

    {/* RIGHT SIDE */}
    <div className="relative hidden lg:flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full blur-2xl bg-[#4bbd97]/20 dark:bg-[#4bbd97]/20 animate-pulse"></div>

        <motion.img
          src={Tanveer}
          alt="Tanveer Khan"
          className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px]
          rounded-full object-cover border-2 border-[#4bbd97] shadow-2xl"
          
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}

          whileHover={{
            scale: 1.05,
            rotateY: 10,
            rotateX: 5,
          }}
        />
      </motion.div>
    </div>
  </div>
</section>
  );
}
