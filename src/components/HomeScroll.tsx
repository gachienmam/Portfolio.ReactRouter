import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type HomeScrollProps = {
  projectNames: string[];
  components: React.ReactNode[];
};

export default function HomeScroll({ projectNames, components }: HomeScrollProps) {
  const [index, setIndex] = useState(0);

  // Function to handle scroll events
  const handleScroll = (e: React.WheelEvent) => {
    // Check if the scroll is up (>0) or down (<0)
    if (e.deltaY > 0) {
      setIndex((prev) => (prev + 1) % projectNames.length);
    } else {
      setIndex((prev) => (prev - 1 + projectNames.length) % projectNames.length);
    }
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      onWheel={handleScroll}
    >
      {/* Background scrolling text */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bgComponent-${index}`}
          className="absolute inset-0 z-0 overflow-hidden h-1em leading-[1em] flex items-center"
          initial={{ y: "100em" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          exit={{ y: "-100em" }}
        >
          <motion.div
            className="whitespace-nowrap text-6xl font-bold opacity-10 px-4"
            animate={{ x: ["-50%", "50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {projectNames[index]} &nbsp; {projectNames[index]} &nbsp; {projectNames[index]} &nbsp; {projectNames[index]} &nbsp; {projectNames[index]}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Foreground content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`fgComponent-${index}`}
          className="relative z-10 flex w-full h-full flex-col items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center text-xl">
            {components[index]}
          </div>
          <div className="absolute top-1/2 text-center text-xl p-16">
            {projectNames[index]}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
