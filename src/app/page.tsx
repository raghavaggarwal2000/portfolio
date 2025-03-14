import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Home from "@/components/home";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Page() {
  return (
    <main className="flex flex-col items-center px-4">
      <Home />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
