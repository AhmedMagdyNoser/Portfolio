import solidIcons from "@/components/icons/solid";

export default function ContactSection({ className = "" }: { className?: string }) {
  return (
    <section className={`section ${className}`}>
      <div className="flex-center container flex-col gap-10">
        <h2
          className="w-[650px] max-w-full text-center text-3xl font-bold text-gray-50 md:text-5xl"
          style={{ lineHeight: 1.35 }}
        >
          Ready to take <span className="text-purple-300">your</span> digital presence to the next level?
        </h2>
        <p className="w-[650px] max-w-full text-center text-gray-400">
          Let&apos;s make something special. Let&apos;s discuss how I can help you achieve your goals.
        </p>
        <a className="basic-btn" href="mailto:ahmed.magdy.1138@gmail.com">
          Let&apos;s get in touch
          <solidIcons.LocationArrow size={20} />
        </a>
      </div>
    </section>
  );
}
