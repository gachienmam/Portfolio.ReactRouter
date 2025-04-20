import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const textVariants = {
  initial: { x: "100%" },
  animate: { x: "-100%" },
  exit: { x: "100%" },
};

const componentVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const scenes = [
  {
    text: "Welcome to Scene 1",
    component: <div className="text-4xl text-white">Component One</div>,
  },
  {
    text: "Welcome to Scene 2",
    component: <div className="text-4xl text-white">Component Two</div>,
  },
  {
    text: "Welcome to Scene 3",
    component: <div className="text-4xl text-white">Component Three</div>,
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleWheel = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      setIndex((prev) => (prev + 1) % scenes.length);
    } else if (e.deltaY < 0) {
      setIndex((prev) => (prev - 1 + scenes.length) % scenes.length);
    }
  };

  useEffect(() => {
    const node = scrollRef.current;
    if (node) {
      node.addEventListener("wheel", handleWheel);
    }
    return () => {
      if (node) {
        node.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="relative w-screen h-screen overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 100, ease: "linear", repeat: Infinity }}
            className="whitespace-nowrap text-8xl font-bold text-white opacity-10"
          >
            {scenes[index].text} — {scenes[index].text} — {scenes[index].text}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Foreground Component */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={componentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            {scenes[index].component}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}