import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { index: true, element: <Suspense fallback={<Loading />}><Home /></Suspense> },
      { path: "about", element: <Suspense fallback={<Loading />}><About /></Suspense> },
      { path: "projects", element: <Suspense fallback={<Loading />}><Projects /></Suspense> },
      { path: "projects/:slug", element: <Suspense fallback={<Loading />}><ProjectDetail /></Suspense> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
