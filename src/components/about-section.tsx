export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-[#0a0a0a] to-[#000310] py-20">
      <div className="container flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <article className="h-[500px] rounded-3xl border border-gray-800 bg-[#030510] lg:col-span-3"></article>
          <div className="grid w-full grid-cols-1 gap-8 lg:col-span-2">
            <article className="h-full rounded-3xl border border-gray-800 bg-[#030510]"></article>
            <article className="h-full rounded-3xl border border-gray-800 bg-[#030510]"></article>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="grid w-full grid-cols-1 gap-8 lg:col-span-2">
            <article className="h-full rounded-3xl border border-gray-800 bg-[#030510]"></article>
            <article className="h-full rounded-3xl border border-gray-800 bg-[#030510]"></article>
          </div>
          <article className="h-[500px] rounded-3xl border border-gray-800 bg-[#030510] lg:col-span-3"></article>
        </div>
      </div>
    </section>
  );
}
