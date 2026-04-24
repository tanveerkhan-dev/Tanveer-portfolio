import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Experience() {
  const dragRef = useRef(null);

  const experienceData = [
    {
      id: 1,
      title: "Frontend & WordPress Developer",
      company: "DigiFlon",
      duration: "Feb 2025 — Oct 2025",
      desc: "Worked as a Frontend and WordPress Developer, building responsive and modern web interfaces using React and Tailwind CSS.",
      skills: ["HTML","CSS","Tailwind","React","WordPress","SEO"],
      side: "left",
    },
    {
      id: 2,
      title: "Full Stack (MERN) Developer",
      company: "Vital AIMS High Tech Solution",
      duration: "Nov 2025 — Apr 2026",
      desc: "Developed full-stack apps using MERN stack with Firebase, dashboards, JWT auth and CRUD systems.",
      skills: ["MongoDB","Express","React","Node","Firebase","JWT"],
      side: "right",
    },
  ];

  return (
  <section className="relative w-full min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white py-24 px-6 md:px-20">

  <h2 className="text-4xl font-bold text-center mb-24 text-gray-900 dark:text-white">
    Experience
  </h2>

  {/* CENTER LINE */}
  <div
    ref={dragRef}
    className="hidden sm:block absolute left-1/2 top-48 bottom-28 w-[2px] bg-green-400/40"
  />

  {/* CARDS */}
  <div
    className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10"
    style={{ perspective: "1000px" }}
  >
    {experienceData.map((item) => (
      <motion.div
        key={item.id}

        initial={{ rotateY: 180, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}

        whileHover={{
          rotateY: item.side === "left" ? 8 : -8,
          rotateX: 6,
          scale: 1.05,
        }}

        className="relative bg-gray-100 dark:bg-black border border-gray-200 dark:border-green-400/40 rounded-2xl p-6
        min-h-[280px] flex flex-col justify-between
        shadow-[0_10px_30px_rgba(0,255,200,0.15)]
        hover:shadow-[0_20px_60px_rgba(0,255,200,0.4)]"
        style={{ transformStyle: "preserve-3d" }}
      >

        {/* CONTENT */}
        <div style={{ transform: "translateZ(40px)" }}>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {item.title}
          </h3>

          <p className="text-gray-700 dark:text-gray-300">
            {item.company}
          </p>

          <p className="text-gray-500 dark:text-gray-400">
            {item.duration}
          </p>

          <p className="mt-3 text-gray-700 dark:text-gray-300">
            {item.desc}
          </p>

        </div>

        {/* SKILLS */}
        <div
          className="mt-5 flex flex-wrap gap-2"
          style={{ transform: "translateZ(30px)" }}
        >
          {item.skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white dark:bg-black border border-green-400/40 text-sm rounded-full text-gray-900 dark:text-white"
            >
              {skill}
            </span>
          ))}
        </div>

      </motion.div>
    ))}
  </div>

</section>
  );
}