import svgPaths from "@/lib/imports/svg-ie2km5jka3";
import type { BackgroundPatternSection as BackgroundPatternSectionData } from "@/lib/page-types";

type Props = {
  data?: BackgroundPatternSectionData;
};

export function BackgroundPatternSection({ data }: Props) {
  if (data?.enabled === false) return null;

  const svgPath = data?.svgPath || svgPaths.p2ff94480;
  if (!svgPath) return null;

  return (
    <div
      className="absolute max-w-[100vw] opacity-80 pointer-events-none z-0 overflow-hidden"
      style={{
        top: data?.top ?? 572,
        left: data?.left ?? 0,
        width: data?.width ?? 516,
        height: data?.height ?? 1300,
      }}
    >
      <svg className="w-full h-full" fill="none" viewBox={data?.viewBox || "0 0 517 1300"}>
        <path
          d={svgPath}
          fill={data?.fill || "#7F92C7"}
          opacity={data?.opacity ?? 0.5}
        />
      </svg>
    </div>
  );
}

