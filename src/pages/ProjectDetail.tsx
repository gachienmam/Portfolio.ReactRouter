import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { projectsList } from "@/lib/projects";
import { Link } from "react-router-dom";

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projectsList.findIndex(item => item.slug === slug);
  return (
    <>
    <div
      className="relative w-screen h-screen overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      {/* Foreground content */}
      <AnimatePresence mode="wait">
        <motion.div
          className="relative z-10 flex w-full h-full flex-col items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center text-xl ml-[25%] mr-[25%]">
            <Link to={projectsList[index].link}><img src={projectsList[index].image} alt="Click here to go to this project's page"/></Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
    <footer className="absolute bottom-0 z-50 w-full">
      <div className="block p-10">
        <p className="pt-4 pb-2 text-sm">{projectsList[index].year}</p>
        <p className="text-3xl pt-2 pb-2">{projectsList[index].title}</p>
        <p className="text-sm font-mono wrap-normal pt-2 pb-2">{projectsList[index].description}</p>
        <p className="text-sm wrap-normal pt-2">Made with {projectsList[index].language}</p>
      </div>
    </footer>
    </>
  );
};
