import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function Intro({ onFinish }) {
  const greetings = useMemo(
    () => ["Hello", "Hola", "Bonjour", "Ciao", "Olá", "مرحباً", "नमस्ते"],
    []
  );

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

useEffect(() => {
  const hasSeenIntro = sessionStorage.getItem("seenIntro");


  if (hasSeenIntro) {
    setVisible(false);
    onFinish?.();
    return;
  }


  sessionStorage.setItem("seenIntro", "true");

  setVisible(true);
  setIndex(0);

  const interval = setInterval(() => {
    setIndex((prev) => {
      if (prev === greetings.length - 1) {
        clearInterval(interval);

        setTimeout(() => {
          setVisible(false);
          onFinish?.();
        }, 1000);

        return prev;
      }
      return prev + 1;
    });
  }, 800);

  return () => clearInterval(interval);
}, []);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            opacity: 0,
            filter: "blur(10px)",
          }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
         
          <motion.div
            className="absolute w-[400px] h-[400px] bg-green-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

    
          <motion.h1
            key={index}
            className="text-5xl md:text-7xl lg:text-8xl font-bold relative"
            initial={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
          >
            {greetings[index]}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}