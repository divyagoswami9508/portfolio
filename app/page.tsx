import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ParticlesBackground } from "@/components/particles-background";
import { FadeUp } from "@/components/motion-section";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background selection:bg-violet-500/20 selection:text-foreground">
      {/* Dynamic interactive canvas particle background */}
      <ParticlesBackground />

      {/* Sticky Blur Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <FadeUp>
        <About />
      </FadeUp>

      {/* Skills Section */}
      <FadeUp>
        <Skills />
      </FadeUp>

      {/* Projects Section */}
      <FadeUp>
        <Projects />
      </FadeUp>

      {/* Experience Section */}
      <FadeUp>
        <Experience />
      </FadeUp>

      {/* Contact Section */}
      <FadeUp>
        <Contact />
      </FadeUp>

      {/* Footer */}
      <Footer />
    </main>
  );
}
