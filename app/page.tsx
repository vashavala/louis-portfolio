import Nav from "./components/nav/page";
import ContactMe from "./components/contactMe/page";
import Hero from "./components/hero/page";
import About from "./components/about/page";
import Skills from "./components/skills/page";

export default function Home() {
  return (
    <main className="dark flex flex-col items-center justify-between">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <ContactMe />
    </main>
  );
}
