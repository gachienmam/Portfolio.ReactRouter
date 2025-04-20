import { Outlet, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col text-gray-900 dark:text-white transition-colors duration-300">
      <header className="absolute top-0 z-50 w-full items-center">
        <div className="flex flex-grow items-center justify-between p-10">
          <nav className="flex-start">
            <Link to="/" className="dark:text-white text-4xl">gachienmam</Link>
          </nav>
          <nav className="flex-end space-x-4">
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            exit={{ y: -10 }}
            transition={{ duration: 0.2 }}
          >
            
            
          </motion.div>
          <Outlet />
        </AnimatePresence> */}
        {/* Outlet: render child routes in here */}
        <Outlet />
      </main>

      <footer className="absolute bottom-0 z-50 w-full">
        <div className="flex flex-grow items-center justify-between p-10">
          © {new Date().getFullYear()} gachienmam
          <ThemeToggle />
        </div>
      </footer>
    </div>
  );
}
