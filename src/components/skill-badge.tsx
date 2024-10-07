export default function SkillBadge({ name }: { name: string }) {
  return <span className="w-fit rounded-lg bg-gray-800 px-5 py-3 text-center text-xs font-bold text-gray-100">{name}</span>;
}
