interface GradientTitleProps {
  label: string;
  className?: string;
}

/**
 * GradientTitle - Titlu cu gradient roșu-albastru
 * Folosit pentru secțiuni care au doar un label cu gradient, fără subtitlu
 */
export function GradientTitle({ label, className = "" }: GradientTitleProps) {
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
    </div>
  );
}

