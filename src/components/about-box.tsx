export default function AboutBox({ className = "", children }: { className?: string; children?: React.ReactNode }) {
  return <article className={`rounded-3xl border border-gray-900 text-gray-50 shadow-lg ${className}`}>{children}</article>;
}
