export default function Divider({
  outerBg = "bg-[#000310]",
  innerBg = "bg-gray-900",
  className,
}: {
  outerBg?: string;
  innerBg?: string;
  className?: string;
}) {
  return (
    <div className={`${className} ${outerBg}`}>
      <div className={`mx-auto h-1 w-[100px] rounded ${innerBg}`} />
    </div>
  );
}
