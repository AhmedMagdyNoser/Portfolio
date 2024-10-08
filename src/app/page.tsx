import Divider from "@/components/divider";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ProjectsSection from "@/components/sections/projects-section";

export default function Page() {
  return (
    <main>
      <HeroSection className="bg-gradient-to-b from-[#000218] to-[#0a0a0a]" />
      <AboutSection className="bg-gradient-to-b from-[#0a0a0a] to-[#000310]" />
      <Divider className="py-8" />
      <ProjectsSection className="bg-gradient-to-b from-[#000310] to-[#0d1525]" />
    </main>
  );
}
