import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Suspense } from "react";
import Layout from "./components/Layout";
import Loading from "./components/Loading";


// Disable lazy loading for now

// const Home = lazy(() => import("./pages/Home"));
// const About = lazy(() => import("./pages/About"));
// const Projects = lazy(() => import("./pages/Projects"));
// const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));

import Home from "./pages/Home";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail";

const router = createBrowserRouter(
  [{
    path: "/",
    element: <Layout />, 
    children: [
      { index: true, element: <Suspense fallback={<Loading />}><Home /></Suspense> },
      { path: "about", element: <Suspense fallback={<Loading />}><About /></Suspense> },
      { path: "projects/:slug", element: <Suspense fallback={<Loading />}><ProjectDetail /></Suspense> },
    ]
  }],
  // Deploying to GitHub Pages 
  { basename: import.meta.env.DEV ? '/' : '/portfolio.reactrouter/'}
);

export default function App() {
  return <RouterProvider router={router} />;
}