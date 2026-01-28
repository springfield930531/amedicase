interface SectionTitleProps {
  label: string;
  className?: string;
}

export function SectionTitle({ label, className = "" }: SectionTitleProps) {
  return (
    <div className={`flex flex-col gap-2 items-start mb-[60px] ${className}`}>
      <p
        className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] relative shrink-0 text-[20px] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a] w-full"
        style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100" }}
      >
        {label}
      </p>
    </div>
  );
}

