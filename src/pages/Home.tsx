import HomeScroll from "@/components/HomeScroll";

export default function Home() {
  const texts = ["PolyTest Examination System", "DIGITAL MAGIC", "MOTION WORLD"];
  const comps = [
    <div>Welcome to the motion zone 🌟</div>,
    <div>Scroll down for more 👇</div>,
    <div>This is the last slide 🎉</div>,
  ];

  return <HomeScroll projectNames={texts} components={comps} />;
}
