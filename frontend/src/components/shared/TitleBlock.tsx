interface TitleBlockProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
}

/**
 * TitleBlock - Titlu cu gradient + titlu principal + subtitlu opțional
 * Folosit pentru secțiuni care au un label cu gradient și un titlu principal
 */
export function TitleBlock({ 
  label, 
  title, 
  subtitle,
  className = "",
  titleClassName = ""
}: TitleBlockProps) {
  return (
    <div className={`flex flex-col gap-2 items-start mb-[40px] md:mb-[60px] w-full ${className}`}>
      <h2 
        className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] text-[clamp(14px,1.8vw,20px)] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a] w-full"
        style={{ 
          WebkitTextFillColor: "transparent", 
          fontVariationSettings: "'wdth' 100" 
        }}
      >
        {label}
      </h2>
      <h2 
        className={`font-sans font-semibold leading-[1.1] text-[#000618] text-[clamp(28px,4vw,52px)] tracking-[-1.04px] w-full whitespace-pre-wrap ${titleClassName}`}
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className="font-sans font-normal leading-[1.1] text-[#000618] text-[clamp(20px,2.5vw,33px)] tracking-[-0.66px] w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

