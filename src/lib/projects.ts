type ProjectTypes = {
  title?: string,
  description?: string,
  link?: string,
  slug?: string,
  image?: string,
  language?: string,
  languageClassName?: string,
  year?: number,
}

const projectsList = [
  { title: "PolyTest Examination System", description: "A performant, secure examination platform made with C#, gRPC, ASP.NET, WinForms", link: "https://github.com/gachienmam/PRO231_ExamApp", slug: "2025-polytest", image: "/projects/1-PolyTest.png", language: "C#", languageClassName: "text-red-500", year: 2025 },
  { title: "Portfolio (React Router)", description: "My personal minimalist portfolio, showcasing some of my best works. Made with React Router, Vite, Tailwind, shadcn Components.", link: "https://github.com/gachienmam/Portfolio.ReactRouter", slug: "2025-portfolio-reactrouter", image: "/projects/2-Portfolio-ReactRouter.png", language: "TypeScript", languageClassName: "text-blue-500", year: 2025 },
  { title: "Speakchill Language Learning Concept", description: "A concept for an AI language learning application in C#, Avalonia and Figma meant to be submitted to FPT Hackathon 2024.", link: "https://github.com/gachienmam/Speakchill.Demo", slug: "2025-speakchill", image: "/projects/3-Speakchill.png", language: "TypeScript", languageClassName: "text-blue-500", year: 2025 },
];

export { 
  type ProjectTypes,
  projectsList,
};