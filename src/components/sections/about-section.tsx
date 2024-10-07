import Image from "next/image";
import AboutCard from "@/components/about-card";

const GAP = "gap-8";

export default function AboutSection() {
  return (
    <section className="section bg-gradient-to-b from-[#0a0a0a] to-[#000310]">
      <div className={`container flex flex-col ${GAP}`}>
        <h2 className="mb-4 text-center text-3xl font-bold text-white lg:text-4xl">Who am I</h2>
        <div className={`grid grid-cols-1 ${GAP} lg:grid-cols-5`}>
          <AboutCard className="relative flex h-[415px] items-end lg:col-span-3">
            <Image src="/imgs/about.jpg" alt="About" fill priority={true} className="absolute left-0 top-0 object-cover" />
            <h3 className="relative z-10 w-[385px] p-6 text-[1.5rem] font-extrabold">
              Prioritizing client collaboration, fostering open communication
            </h3>
          </AboutCard>
          <div className={`grid grid-cols-1 ${GAP} grid-rows-2 lg:col-span-2`}>
            <AboutCard className="flex-center bg-gradient-to-br from-gray-800 to-gray-950 px-16">
              <h3 className="about-box-heading text-center">Tech enthusiast with a passion for development.</h3>
            </AboutCard>
            <AboutCard className="flex-center h-full w-full flex-col gap-4 bg-gradient-to-r from-purple-500 via-purple-600 via-10% to-blue-700 to-90% p-8">
              <h3 className="about-box-heading text-center">Start a project together?</h3>
              <button className="flex-center rounded-xl bg-gray-950 px-6 py-3 text-sm text-white transition-colors duration-[350ms] hover:bg-gray-800 sm:text-base">
                Copy my email address
              </button>
            </AboutCard>
          </div>
        </div>
      </div>
    </section>
  );
}
