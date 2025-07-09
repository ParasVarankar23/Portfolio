import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Education from "@/components/education/education";
import Experience from "@/components/experience/experience";
import Profile from "@/components/home/home";
import Projects from "@/components/projects/project";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <main style={{ minHeight: "80vh", padding: 0, transition: "background 0.3s, color 0.3s" }}>
      <Profile />
      <About />
      <Contact />
      <Education />
      <Skills />
      <Projects />
      <Experience />
    </main>
  );
}
