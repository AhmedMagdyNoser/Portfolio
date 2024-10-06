export default function AboutBox({ className = "", children }: { className?: string; children?: React.ReactNode }) {
  return <article className={`rounded-3xl border border-gray-800 bg-[#030510] ${className}`}>{children}</article>;
}
