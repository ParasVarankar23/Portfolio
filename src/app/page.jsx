import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Education from "@/components/education/education";
import Projects from "@/components/projects/project";
import Skills from "@/components/skills/skills";
import Profile from "@/components/home/home";
import { TranslatedText } from "@/context/TranslatedText";

export default function Home() {
  return (
    <main style={{ minHeight: "80vh", padding: "2rem 0", transition: "background 0.3s, color 0.3s" }}>
      <section style={{ marginBottom: "2rem" }}>
        <Profile />
      </section>
      <section style={{ marginBottom: "2rem" }}>
        <About />
      </section>
      <section style={{ marginBottom: "2rem" }}>
        <Skills />
      </section>
      <section style={{ marginBottom: "2rem" }}>
        <Projects />
      </section>
      <section style={{ marginBottom: "2rem" }}>
        <Education />
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
}
