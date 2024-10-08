import Image from "next/image";
import AboutCard from "@/components/about-card";
import BlockQuote from "@/components/block-quote";
import SkillBadge from "@/components/skill-badge";
import EmailButton from "@/components/email-button";
import solidIcons from "@/components/icons/solid";
import outlineIcons from "@/components/icons/outline";
import { LightPlus } from "@/components/stars";

const GAP = "gap-8";

const skills = [
  "React",
  "Redux",
  "Next.js",
  "Tailwind",
  "TypeScript",
  "HTML",
  "CSS",
  "JavaScript",
  "Webpack",
  "Vite",
  "Node.js",
  "RESTful APIs",
  "Git",
  "GitHub",
];

export default function AboutSection({ className = "" }: { className?: string }) {
  return (
    <section id="about" className={`section ${className}`}>
      <div className={`container flex flex-col ${GAP}`}>
        <header className="relative mx-auto mb-2 w-fit">
          <h2 className="text-center text-3xl font-bold text-gray-50">Who am I</h2>
          <LightPlus className="absolute -left-10 -top-2 opacity-50" />
          <LightPlus className="absolute -bottom-2 -right-10 opacity-50" />
        </header>

        <BlockQuote className="flex-center flex-col gap-6 p-8 md:p-16">
          <p className="text-center text-base font-semibold leading-[1.75] text-gray-100 md:text-lg md:leading-[1.75]">
            I&apos;m a software engineer with expertise in building scalable and maintainable web applications using React,
            Next.js, and TypeScript. I prioritize writing clean, efficient code while delivering seamless and engaging user
            experiences.
          </p>
          <div className="flex-center flex-col gap-2 sm:flex-row">
            <a href="/ahmed-magdy-cv.pdf" download="Ahmed_Magdy_CV.pdf" className="basic-btn text-sm">
              <solidIcons.Download size={17.5} />
              Download my CV
            </a>
            <a href="#projects" className="blue-btn text-sm">
              <outlineIcons.LocationArrow size={17.5} />
              See my projects
            </a>
          </div>
        </BlockQuote>

        <div className={`grid grid-cols-1 ${GAP} lg:grid-cols-5`}>
          <AboutCard className="relative flex h-[415px] items-end lg:col-span-3">
            <Image
              src="/imgs/about.jpg"
              alt="About"
              priority
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="absolute left-0 top-0 object-cover"
            />
            <h3 className="relative z-10 w-[385px] p-6 text-[1.5rem] font-bold">
              I prioritize client collaboration, fostering open communication
            </h3>
          </AboutCard>

          <div className={`grid grid-cols-1 ${GAP} grid-rows-2 lg:col-span-2`}>
            <AboutCard className="relative">
              {/* Skills in the background */}
              <div
                dir="rtl"
                className="pointer-events-none absolute right-0 top-0 flex h-full w-[68%] flex-wrap gap-2 p-4 opacity-35"
              >
                {skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>

              {/* Content */}
              <div className="relative z-10 flex h-full w-full flex-col justify-center gap-2 bg-gradient-to-r from-gray-900 from-[30%] to-[#03071225] px-10">
                <p className="text-xs text-gray-400 lg:text-sm">I constantly try to improve</p>
                <h3 className="text-xl font-bold lg:text-[1.65rem]">My tech stack</h3>
              </div>
            </AboutCard>

            <AboutCard className="flex-center h-full w-full flex-col gap-4 bg-gradient-to-r from-purple-600 to-blue-800 to-90% p-8">
              <h3 className="text-center text-xl font-bold">Start a project together?</h3>
              <EmailButton />
            </AboutCard>
          </div>
        </div>
      </div>
    </section>
  );
}
