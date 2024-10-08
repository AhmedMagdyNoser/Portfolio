const spanClasses = "absolute left-1/2 top-1/2 h-[20px] rounded w-[1.5px] -translate-x-1/2 -translate-y-1/2 bg-white";

export function LightPlus({ className = "" }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <div className="relative opacity-25">
        <span className={`${spanClasses} rotate-[0deg]`} />
        <span className={`${spanClasses} rotate-[90deg]`} />
      </div>
    </div>
  );
}

export function LightStar({ className = "" }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <div className="relative opacity-25">
        <span className={`${spanClasses} rotate-[0deg]`} />
        <span className={`${spanClasses} rotate-[45deg]`} />
        <span className={`${spanClasses} rotate-[90deg]`} />
        <span className={`${spanClasses} rotate-[135deg]`} />
      </div>
    </div>
  );
}
