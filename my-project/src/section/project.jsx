import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import img1 from "../assets/Todo.png";
import img2 from "../assets/lottery.png";
import img3 from "../assets/Calculator.png";
import img4 from "../assets/weather.png";

export default function Project() {
  const [showAll, setShowAll] = useState(false);

const projects = [
  {
    title: "Todo App",
    desc: "A task management application with full CRUD operations, local storage support, and smooth UI for daily productivity tracking.",
    tech: ["React", "LocalStorage", "Tailwind"],
    link: "https://github.com/Tanveer-react/Todo-App",
    live: "https://your-todo.vercel.app",
    img: img1,
  },
  {
    title: "Lottery Game",
    desc: "An interactive lottery game built with React, featuring random logic generation, simple UI, and engaging user experience.",
    tech: ["React", "JavaScript", "State"],
    link: "https://github.com/Tanveer-react/Lottery-Game",
    live: "https://your-lottery.vercel.app",
    img: img2,
  },
  {
    title: "Calculator",
    desc: "A scientific calculator with advanced mathematical operations, clean UI design, and real-time calculation support.",
    tech: ["React", "Math Logic", "UI"],
    link: "https://github.com/Tanveer-react/react-scientific-calculator",
    live: "https://your-calculator.vercel.app",
    img: img3,
  },
  {
    title: "Weather App",
    desc: "A real-time weather forecasting app using API integration, displaying temperature, conditions, and location-based data.",
    tech: ["API", "React", "Fetch"],
    link: "https://github.com/Tanveer-react/Weather-App",
    live: "https://your-weather.vercel.app",
    img: img4,
  },
];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
   <section className="w-full min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white px-6 sm:px-10 lg:px-20 py-20">

  {/* HEADER */}
  <div className="max-w-7xl mx-auto mb-14 text-center flex flex-col items-center">

    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
      My Projects
    </h2>

    <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-xl">
      A collection of my full-stack and frontend projects built with modern technologies.
    </p>

  </div>

  {/* GRID */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {visibleProjects.map((p, i) => (
      <div key={i} className="block">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="group rounded-xl overflow-hidden border border-gray-200 dark:border-transparent 
          hover:border-[#4bbd97] 
          hover:shadow-[0_0_30px_rgba(75,189,151,0.5),inset_0_0_25px_rgba(35,125,59,0.8)] 
          transition-all duration-300 cursor-pointer"
        >

          {/* TOP BAR */}
          <div className="flex justify-between items-center px-4 py-4 bg-gray-100 dark:bg-[#0c0c12]">

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {p.title}
            </h3>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-700 dark:text-white hover:text-[#4bbd97] text-lg"
            >
              <FaGithub />
            </a>

          </div>

          {/* IMAGE */}
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-[220px] overflow-hidden bg-gray-200 dark:bg-black">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </a>

          {/* BOTTOM */}
          <div className="p-5 bg-gray-50 dark:bg-[#0c0c12] min-h-[180px] flex flex-col justify-between">

            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.slice(0, 3).map((t, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 border border-[#4bbd97] text-[#4bbd97] rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

          </div>

        </motion.div>
      </div>
    ))}

  </div>

  {/* SHOW MORE */}
  {projects.length > 3 && (
    <div className="flex justify-center mt-14">
      <button
        onClick={() => setShowAll(!showAll)}
        className="px-7 py-3 rounded-lg border border-[#4bbd97] 
        text-[#4bbd97] font-medium 
        hover:bg-[#4bbd97] hover:text-black 
        hover:shadow-[0_0_20px_#4bbd97] 
        transition-all duration-300"
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </div>
  )}

</section>
  );
}