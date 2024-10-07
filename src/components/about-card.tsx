export default function AboutCard({ className = "", children }: { className?: string; children?: React.ReactNode }) {
  return (
    <article className={`overflow-hidden rounded-3xl border border-[#151930] text-gray-50 shadow-lg ${className}`}>
      {children}
    </article>
  );
}
