import { TitleBlock } from "@/components/shared/TitleBlock";
import { TeamCarousel } from "@/components/sections/TeamCarousel";
import { getMediaUrl } from "@/lib/strapi-home";
import type { AboutTeamSection as AboutTeamSectionData } from "@/lib/page-types";

type Props = {
  data?: AboutTeamSectionData;
};

export function AboutTeamSection({ data }: Props) {
  const members =
    data?.teamMembers?.length
      ? data.teamMembers.map((member) => ({
          name: member.firstName || "",
          surname: member.lastName || "",
          position: member.role || "",
          description: member.bio || "",
          photo: getMediaUrl(member.photo) || "",
        }))
      : [];

  const mobileProfilePhoto = getMediaUrl(data?.mobileProfilePhoto) || undefined;
  const dotImagePrimary = getMediaUrl(data?.dotImagePrimary) || undefined;
  const dotImageSecondary = getMediaUrl(data?.dotImageSecondary) || undefined;

  return (
    <section className="relative py-8 lg:py-16 overflow-x-hidden">
      <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
        <TitleBlock
          label={data?.label || ""}
          title={data?.title || ""}
          subtitle={data?.subtitle}
        />

        {/* Team Carousel without repeating title */}
        <div className="mt-8">
          <TeamCarousel
            members={members}
            mobileProfilePhoto={mobileProfilePhoto}
            dotImagePrimary={dotImagePrimary}
            dotImageSecondary={dotImageSecondary}
          />
        </div>
      </div>
    </section>
  );
}
