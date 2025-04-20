import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { slug } = useParams();
  return <h1 className="text-2xl">Project: {slug?.replace(/-/g, " ")}</h1>;
}
