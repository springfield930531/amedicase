interface SectionTitleWithSubtitleProps {
  label: string;
  title: string;
  className?: string;
  titleClassName?: string;
}

export function SectionTitleWithSubtitle({ 
  label, 
  title, 
  className = "",
  titleClassName = ""
}: SectionTitleWithSubtitleProps) {
  return (
    <div className={`flex flex-col gap-2 items-start ${className}`}>
      <p
        className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] relative shrink-0 text-[20px] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a] w-full"
        style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100" }}
      >
        {label}
      </p>
      <h2
        className={`font-sans font-semibold leading-[1.1] relative shrink-0 text-[#000618] text-[52px] tracking-[-1.04px] w-full whitespace-pre-wrap ${titleClassName}`}
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {title}
      </h2>
    </div>
  );
}

