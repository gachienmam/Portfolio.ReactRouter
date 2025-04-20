import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { SeparatorHorizontal } from "lucide-react";

export default function About() {
  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          className="relative w-screen h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="block ml-[25%] mr-[25%]">
            <p className="pt-4 pb-4 text-sm">ABOUT</p>
            <p className="text-3xl pt-4 pb-4">gachienmam</p>
            <p className="text-sm font-mono wrap-normal pt-4 pb-4">Đang hiện tại ở Đà Nẵng, Việt Nam với tư cách là học sinh. Đã luôn có đam mê với lĩnh vực công nghệ, và mong muốn được tiếp cận với những công nghệ mới.</p>
            <p className="text-sm wrap-normal pt-4 pb-4">Currently in Da Nang, Vietnam as a student. Has passion for the field and have always been fascinated with modern technology.</p>
          </div>
          <SeparatorHorizontal></SeparatorHorizontal>
          <div className="flex items-center justify-between">
            <Link to="mailto:thanhdatcaodang@gmail.com" className="p-4 font-mono text-sm">EMAIL</Link>
            <Link to="https://github.com/gachienmam" className="p-4 font-mono text-sm">GITHUB</Link>
          </div>
      </motion.div>
    </AnimatePresence>
    <footer className="absolute bottom-0 z-50 w-full">
      <div className="flex flex-grow items-center justify-center p-10">
        © {new Date().getFullYear()} gachienmam
      </div>
    </footer>
  </div>
  );
}
