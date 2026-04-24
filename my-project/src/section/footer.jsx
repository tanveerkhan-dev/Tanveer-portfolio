import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router";
const social = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tanveer-khan-devolper/",
  },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Tanveer-react" },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

export default function Footer() {
  return (
  <footer className="relative overflow-hidden bg-white text-gray-900 dark:bg-black dark:text-white px-6 sm:px-10 lg:px-20">

  {/* BACKGROUND EFFECTS */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgba(13,88,202,0.35),transparent_70%)]"></div>
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_30%_70%,rgba(16,185,129,0.30),transparent_70%)]"></div>

  <motion.div
    className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-left"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >

    {/* NAME + ABOUT */}
    <div>

      <h1 className="text-2xl font-bold text-gray-900 dark:text-white transition-all duration-300 hover:text-[#4bbd97] hover:drop-shadow-[0_0_10px_#4bbd97] cursor-pointer">
        Tanveer Khan
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm leading-relaxed">
        Full Stack Developer specializing in building modern, scalable web
        applications using React, Node.js, and MongoDB. I focus on clean UI,
        performance, and smooth user experiences.
      </p>

      {/* SOCIAL */}
      <div className="flex gap-5 text-2xl mt-5">
        {social.map((item, index) => (
          <motion.a
            href={item.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            variants={glowVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="text-gray-700 dark:text-gray-300 hover:text-[#4bbd97]"
          >
            <item.icon />
          </motion.a>
        ))}
      </div>

    </div>

    {/* QUICK LINKS */}
    <div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Quick Links
      </h2>

      <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
        <li><Link to="/" className="hover:text-emerald-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-emerald-400">About</Link></li>
        <li><Link to="/skill" className="hover:text-emerald-400">Skills</Link></li>
        <li><Link to="/project" className="hover:text-emerald-400">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-emerald-400">Contact</Link></li>
      </ul>
    </div>

    {/* SERVICES */}
    <div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Services
      </h2>

      <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
        <li>Frontend Development</li>
        <li>Full Stack Development</li>
        <li>UI/UX Design</li>
        <li>API Integration</li>
        <li>Website Optimization</li>
      </ul>
    </div>

  </motion.div>

  <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-10 mb-6 tracking-wide">
    © {new Date().getFullYear()} All Rights Reserved • Designed & Built by Tanveer Khan
  </p>

</footer>
  );
}
