import Image from "next/image";
import AboutBox from "./about-box";

const GAP = "gap-8";

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-[#0a0a0a] to-[#000310] py-20">
      <div className={`container flex flex-col ${GAP}`}>
        <h2 className="mb-4 text-center text-3xl font-bold text-white lg:text-4xl">Who am I?</h2>
        <div className={`grid grid-cols-1 ${GAP} lg:grid-cols-5`}>
          <AboutBox className="relative flex h-[415px] items-end overflow-hidden lg:col-span-3">
            <Image
              src="/imgs/about.jpg"
              alt="About"
              layout="fill"
              priority={true}
              objectFit="cover"
              className="absolute left-0 top-0"
            />
            <h2 className="relative z-10 w-[385px] p-6 text-[24px] font-extrabold">
              prioritizing client collaboration, fostering open communication
            </h2>
          </AboutBox>
          <div className={`grid grid-cols-1 ${GAP} grid-rows-2 lg:col-span-2`}>
            <AboutBox className="flex-center bg-gradient-to-br from-gray-800 to-gray-950 px-16">
              <h2 className="text-center text-xl font-bold lg:text-[24px] lg:leading-10">
                Tech enthusiast with a passion for development.
              </h2>
            </AboutBox>
            <AboutBox className="flex-center h-full w-full flex-col gap-4 bg-gradient-to-r from-purple-500 via-purple-600 via-10% to-blue-700 to-90% p-8">
              <h2 className="text-center text-xl font-bold lg:text-[24px]">Start a project together?</h2>
              <button className="flex items-center justify-center rounded-xl bg-gray-950 px-6 py-3 text-sm text-white transition-colors duration-[350ms] hover:bg-gray-800 sm:text-base">
                Copy my email address
              </button>
            </AboutBox>
          </div>
        </div>
      </div>
    </section>
  );
}
