import { Link } from "react-router-dom";

const mockProjects = [
  { title: "Cool App", slug: "cool-app" },
  { title: "Next Big Thing", slug: "next-big-thing" },
];

export default function Projects() {
  return (
    <div>
      <h1 className="text-2xl mb-4">Projects</h1>
      <ul>
        {mockProjects.map((p) => (
          <li key={p.slug}>
            <Link className="text-blue-500" to={`/projects/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
