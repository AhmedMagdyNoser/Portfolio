import AboutBox from "./about-box";

const GAP = "gap-8";

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-[#0a0a0a] to-[#000310] py-20">
      <div className={`container flex flex-col ${GAP}`}>
        <div className={`grid grid-cols-1 ${GAP} lg:grid-cols-5`}>
          <AboutBox className="h-[500px] lg:col-span-3"></AboutBox>
          <div className={`grid grid-cols-1 ${GAP} lg:col-span-2`}>
            <AboutBox></AboutBox>
            <AboutBox></AboutBox>
          </div>
        </div>
        <div className={`grid grid-cols-1 ${GAP} lg:grid-cols-5`}>
          <div className={`grid grid-cols-1 ${GAP} lg:col-span-2`}>
            <AboutBox></AboutBox>
            <AboutBox></AboutBox>
          </div>
          <AboutBox className="h-[500px] lg:col-span-3"></AboutBox>
        </div>
      </div>
    </section>
  );
}
