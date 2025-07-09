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
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
          <TranslatedText text="Paras Pramod Varankar" />
        </h1>
        <About />
      </section>
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          <TranslatedText text="Skills" />
        </h2>
        <Profile />
      </section>
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          <TranslatedText text="Skills" />
        </h2>
        <Skills />
      </section>
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          <TranslatedText text="Projects" />
        </h2>
        <Projects />
      </section>
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          <TranslatedText text="Education" />
        </h2>
        <Education />
      </section>
      <section>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          <TranslatedText text="Contact" />
        </h2>
        <Contact />
      </section>
    </main>
  );
}
