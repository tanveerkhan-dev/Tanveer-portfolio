import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Skill() {

  const skills = [
    // FRONTEND
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
    { icon: <SiRedux />, name: "Redux Toolkit" },

    // BACKEND
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },

    // TOOLS
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
  ];

  const repeat = [...skills, ...skills];

  const [dir, setDir] = useState(-1);
  const [active, setActive] = useState(false);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const el = sectionRef.current;

    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (el) io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;

    const onWheel = (e) => setDir(e.deltaY > 0 ? -1 : 1);

    window.addEventListener("wheel", onWheel, { passive: true });

    return () => window.removeEventListener("wheel", onWheel);
  }, [active]);

  useEffect(() => {
    let id;
    let last = performance.now();
    const SPEED = 70;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      let next = x.get() + SPEED * dir * dt;
      const loop = trackRef.current?.scrollWidth / 2 || 0;

      if (loop) {
        if (next <= -loop) next += loop;
        if (next >= 0) next -= loop;
      }

      x.set(next);
      id = requestAnimationFrame(tick);
    };

    id = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(id);
  }, [dir, x]);

  return (
  <section
  ref={sectionRef}
  id="skills"
  className="w-full h-screen flex flex-col items-center justify-center relative bg-white text-gray-900 dark:bg-black dark:text-white overflow-hidden px-6"
>

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/3 left-0 w-[300px] h-[300px] rounded-full blur-[120px] opacity-20 bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]" />
  </div>

  {/* TITLE */}
  <motion.h2
    className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    Full Stack Skills
  </motion.h2>

  <p className="mt-2 mb-10 text-gray-600 dark:text-white/70 text-center">
    Frontend • Backend • Tools • Deployment
  </p>

  {/* MARQUEE SKILLS */}
  <div className="relative w-full overflow-hidden">

    <motion.div
      ref={trackRef}
      className="flex gap-10 text-5xl text-[#1cd8d2]"
      style={{ x }}
    >

      {repeat.map((s, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-2 min-w-[120px] hover:scale-110 transition"
        >
          <span>{s.icon}</span>
          <p className="text-xs text-gray-700 dark:text-white/80">
            {s.name}
          </p>
        </div>
      ))}

    </motion.div>

  </div>

</section>
  );
}