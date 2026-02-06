import { GradientTitle } from "@/components/shared/GradientTitle";
import { DEFAULT_YOUTUBE_ID, extractYoutubeId } from "@/lib/youtube";
import type { VideoEmbedSection as VideoEmbedSectionData } from "@/lib/page-types";

type Props = {
  data?: VideoEmbedSectionData;
};

export function VideoEmbedSection({ data }: Props) {
  const youtubeId = extractYoutubeId(data?.youtubeId) || DEFAULT_YOUTUBE_ID;
  const label = data?.label || "Video";
  return (
    <section className="relative py-8 lg:py-16 overflow-x-hidden">
      <div className="mx-auto px-4 md:px-[26px] xl:px-0 max-w-[1440px]">
        <div className="flex flex-col gap-[48px] items-start w-full">
          <GradientTitle label={label} className="mb-0" />

          {/* Video Player Container - Responsive YouTube embed */}
          <div className="w-full rounded-[12px] overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={label}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

