import { Outlet, Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <header className="p-4 shadow-md bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
        <nav className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <ThemeToggle />
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: -1000, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Outlet: render child routes in here */}
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="p-4 text-center bg-gray-100 dark:bg-gray-800">
        © {new Date().getFullYear()} gachienmam
      </footer>
    </div>
  );
}
