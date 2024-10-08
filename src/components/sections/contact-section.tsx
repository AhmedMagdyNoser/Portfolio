import solidIcons from "@/components/icons/solid";
import { LightPlus, LightStar } from "@/components/stars";
import { author } from "@/lib/constants";

export default function ContactSection({ className = "" }: { className?: string }) {
  return (
    <section className={`section relative overflow-hidden ${className}`}>
      {/* Background gradient */}
      <div
        style={{ backgroundImage: "radial-gradient(ellipse, #ffffff15, #0000, #0000)" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[875px] w-[125%] -translate-x-1/2 -translate-y-1/2"
      />

      {/* Content */}
      <div className="flex-center container relative flex-col gap-10">
        <h2
          className="w-[650px] max-w-full text-center text-3xl font-bold text-gray-50 md:text-5xl"
          style={{ lineHeight: 1.35 }}
        >
          Ready to take <span className="text-purple-300">your</span> digital presence to the next level?
        </h2>
        <p className="w-[650px] max-w-full text-center text-gray-400">
          Let&apos;s make something special. Let&apos;s discuss how I can help you achieve your goals.
        </p>
        <a className="basic-btn border border-gray-800" href={`mailto:${author.email}`}>
          Let&apos;s get in touch
          <solidIcons.LocationArrow size={20} />
        </a>

        <LightPlus className="absolute -top-12 left-1/4 animate-float" />
        <LightPlus className="absolute -bottom-12 right-1/4 animate-float" />
        <LightStar className="absolute -top-36 right-1/4 animate-spin opacity-35" />
        <LightStar className="absolute -bottom-36 left-1/4 animate-spin opacity-35" />
      </div>
    </section>
  );
}
