import Image from "next/image";
import Nav from "./components/nav/page";
import Footer from "./components/footer/page";
import Hero from "./components/hero/page";
import Projects from "./components/projects/page";

export default function Home() {
  return (
    <main className="dark flex flex-col items-center justify-between">
      <Nav />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
