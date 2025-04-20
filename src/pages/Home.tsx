import HomeScroll from "@/components/HomeScroll";
import { projectsList } from "@/lib/projects";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <HomeScroll projectNames={projectsList.map((project) => project.title)} 
                  components={projectsList.map((project) => <Link className="text-blue-500" to={`/projects/${project.slug}`}>
                    <img className="max-h-[25em]" src={project.image}/>
                  </Link>)} 
      />
      <footer className="absolute bottom-0 z-50 w-full">
        <div className="flex flex-grow items-center justify-center p-10">
          Scroll down ↓
        </div>
      </footer>
    </>
  );
}
