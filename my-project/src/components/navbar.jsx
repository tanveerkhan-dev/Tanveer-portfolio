import { useEffect, useRef, useState } from "react";
import Overlymenu from "./overlymenu";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-router";

export default function Navbar() {
  const [navbaropen, setnavbaropen] = useState(false);
  const [visibel, setvisibel] = useState(true);
  const [forcevisibel, setforcevisibel] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const timerid = useRef(null);
  const lastscrollY = useRef(0);

 
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const homesection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entery]) => {
        if (entery.isIntersecting) {
          setforcevisibel(true);
          setvisibel(true);
        } else {
          setforcevisibel(false);
        }
      },
      { threshold: 0.1 }
    );

    if (homesection) observer.observe(homesection);
    return () => {
      if (homesection) observer.unobserve(homesection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (forcevisibel) {
        setvisibel(true);
        return;
      }

      const currentscrollY = window.scrollY;

      if (currentscrollY > lastscrollY.current) {
        setvisibel(false);
        setvisibel(true);

        if (timerid.current) clearTimeout(timerid.current);
        timerid.current = setTimeout(() => setvisibel(false), 3000);
      }

      lastscrollY.current = currentscrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerid.current) clearTimeout(timerid.current);
    };
  }, []);

  return (
    <>

      <nav
        className={`fixed top-0 left-0 w-full flex items-center px-6 py-4 z-50 transition-transform duration-300 ${
          visibel ? "translate-y-0" : "-translate-y-full"
        } 
    bg-black dark:bg-white
text-white dark:text-black backdrop-blur-md`}
      >

        <div className="text-2xl font-bold text-white dark:text-black hidden sm:block">
          Tanveer
        </div>

       
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => setnavbaropen(true)}
            className="text-white dark:text-black text-3xl focus:outline-none"
            aria-label="open-menu"
          >
            <FiMenu />
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="ml-auto hidden lg:flex items-center gap-4">

          {/* DARK / LIGHT TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white dark:text-black text-xl p-2 rounded-full border border-white/20 hover:border-green-400 transition"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          {/* 🔥 IMPROVED REACH OUT BUTTON */}
          <Link
            to="/contact"
            className="px-5 py-2 font-medium rounded-full text-white
            bg-gradient-to-r from-green-400 to-cyan-400
            shadow-md hover:shadow-[0_0_20px_#4bbd97]
            hover:scale-105 transition-all duration-300"
          >
            Reach Out
          </Link>
        </div>
      </nav>

      <Overlymenu isOpen={navbaropen} onClose={() => setnavbaropen(false)} />
    </>
  );
}