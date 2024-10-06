import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex-center relative h-screen bg-gradient-to-b from-[#000218] to-[#0a0a0a]">
      <Image
        src="/imgs/spotlight.png"
        alt="Spotlight"
        layout="fill"
        priority={true}
        className="animate-fade pointer-events-none absolute left-0 top-0 h-full object-cover"
      />
      <div className="flex-center w-full flex-col gap-6 px-4">
        <span className="text-center text-xs uppercase tracking-widest text-gray-300">Dynamic Web Magic with Next.js</span>
        <h1 className="w-[650px] max-w-full text-center text-3xl font-bold leading-[1.25] text-white md:text-5xl md:leading-[1.25]">
          Transforming Concepts into Seamless <span className="text-purple-300">User Experiences</span>
        </h1>
        <p className="text-center text-sm text-gray-300 sm:text-base md:text-lg">
          Hi! I&apos;m <strong className="font-medium text-white">Ahmed Magdy</strong>, a Next.js developer.
        </p>
        <button className="flex items-center justify-center rounded-xl border border-gray-800 bg-gray-950 px-6 py-3 text-white transition-colors duration-[350ms] hover:bg-gray-800">
          Show my work
        </button>
      </div>
    </section>
  );
}
