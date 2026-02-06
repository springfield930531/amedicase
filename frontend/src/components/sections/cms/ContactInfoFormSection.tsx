import type { SectionRendererPageContext } from "@/components/sections/registry";
import type { ContactInfoFormSection as ContactInfoFormSectionData } from "@/lib/page-types";

type Props = {
  data?: ContactInfoFormSectionData;
  page?: SectionRendererPageContext;
};

export function ContactInfoFormSection({ data, page }: Props) {
  const fallback = {
    label: "Contact Information",
    infoCards: [
      { title: "Main Office", body: "Amedicase Operations\nChisinau, Moldova" },
      { title: "Email", body: "support@amedicase.com" },
      { title: "Phone", body: "+373 (xxx) xxx xxx" },
      { title: "Business Hours", body: "Monday - Friday: 9:00-18:00 (EET)\nU.S. overlap included." },
    ],
    formTitle: "Send Us a Message",
    fields: [
      { name: "firstName", type: "text" as const, placeholder: "First Name" },
      { name: "lastName", type: "text" as const, placeholder: "Last Name" },
      { name: "email", type: "email" as const, placeholder: "Email" },
      { name: "phone", type: "tel" as const, placeholder: "Phone Number" },
      { name: "company", type: "text" as const, placeholder: "Company Name" },
      { name: "message", type: "textarea" as const, placeholder: "Message / Service Inquiry", rows: 4 },
    ],
    submitLabel: "Submit",
  };

  const rawCards = data?.infoCards?.length ? data.infoCards : fallback.infoCards;
  const infoCards = rawCards.map((card) => {
    const title = (card.title || "").toLowerCase();
    if (title === "main office" && page?.contact?.address) {
      return { ...card, body: page.contact.address };
    }
    if (title === "email" && page?.contact?.email) {
      return { ...card, body: page.contact.email };
    }
    if (title === "phone" && page?.contact?.phone) {
      return { ...card, body: page.contact.phone };
    }
    return card;
  });

  const fields = data?.fields?.length ? data.fields : fallback.fields;
  const label = data?.label || fallback.label;
  const formTitle = data?.formTitle || fallback.formTitle;
  const submitLabel = data?.submitLabel || fallback.submitLabel;

  const getField = (name: string) => fields.find((field) => field.name === name);

  return (
    <section className="relative py-8 lg:py-16 overflow-x-hidden">
      <div className="mx-auto px-5 md:px-8 xl:px-0 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[60px] items-start">
          {/* Contact Information */}
          <div className="flex flex-col gap-[72px] items-start w-full lg:w-[394px]">
            <p
              className="bg-clip-text bg-gradient-to-r font-sans font-medium from-[#d01127] leading-[1.1] text-[clamp(13px,1.8vw,20px)] to-[#1e3a8a] uppercase via-20% via-[#1e3a8a]"
              style={{
                WebkitTextFillColor: "transparent",
                fontVariationSettings: "'wdth' 100",
              }}
            >
              {label}
            </p>
            <div className="flex flex-col gap-[28px] items-start w-full">
              {infoCards.map((card, index) => (
                <div
                  key={`contact-info-${index}`}
                  className="backdrop-blur-[15px] backdrop-filter bg-gradient-to-b border border-[rgba(99,103,146,0.8)] border-solid from-[rgba(204,211,234,0.25)] rounded-[12px] shadow-[0px_2px_4px_0px_rgba(114,116,146,0.3)] to-[rgba(80,86,104,0.125)] p-[40px] w-full"
                >
                  <div className="flex flex-col gap-[20px] items-start">
                    <p
                      className="font-sans font-medium leading-[1.1] text-[clamp(24px,3vw,33px)] text-blue-900 tracking-[-0.66px]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {card.title}
                    </p>
                    <p
                      className="font-sans font-normal leading-[1.2] text-[clamp(16px,2vw,20px)] text-[#000618] tracking-[-0.4px] whitespace-pre-line"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {card.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col gap-[44px] items-start w-full lg:w-[640px]">
            <h2
              className="font-sans font-semibold leading-[1.1] text-[clamp(28px,4vw,52px)] text-[#000618] tracking-[-1.04px] w-full whitespace-pre-wrap"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {formTitle}
            </h2>
            <form className="flex flex-col gap-[20px] w-full">
              {/* First Name and Last Name Row */}
              <div className="flex flex-col md:flex-row gap-[20px] w-full">
                <input
                  type="text"
                  placeholder={getField("firstName")?.placeholder || "First Name"}
                  className="border border-[#d4283c] border-solid h-[80px] rounded-[12px] px-[19px] font-sans font-normal text-[clamp(16px,2vw,20px)] text-[#e2abba] tracking-[-0.4px] w-full"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                />
                <input
                  type="text"
                  placeholder={getField("lastName")?.placeholder || "Last Name"}
                  className="border border-[#d4283c] border-solid h-[80px] rounded-[12px] px-[19px] font-sans font-normal text-[clamp(16px,2vw,20px)] text-[#e2abba] tracking-[-0.4px] w-full"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder={getField("email")?.placeholder || "Email"}
                className="border border-[#d4283c] border-solid h-[80px] rounded-[12px] px-[19px] font-sans font-normal text-[clamp(16px,2vw,20px)] text-[#e2abba] tracking-[-0.4px] w-full"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />

              {/* Phone Number */}
              <input
                type="tel"
                placeholder={getField("phone")?.placeholder || "Phone Number"}
                className="border border-[#d4283c] border-solid h-[80px] rounded-[12px] px-[19px] font-sans font-normal text-[clamp(16px,2vw,20px)] text-[#e2abba] tracking-[-0.4px] w-full"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />

              {/* Company Name */}
              <input
                type="text"
                placeholder={getField("company")?.placeholder || "Company Name"}
                className="border border-[#d4283c] border-solid h-[80px] rounded-[12px] px-[19px] font-sans font-normal text-[clamp(16px,2vw,20px)] text-[#e2abba] tracking-[-0.4px] w-full"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />

              {/* Message */}
              <textarea
                placeholder={getField("message")?.placeholder || "Message / Service Inquiry"}
                rows={getField("message")?.rows || 4}
                className="border border-[#d4283c] border-solid min-h-[160px] rounded-[12px] px-[19px] py-[19px] font-sans font-normal text-[clamp(16px,2vw,20px)] text-[#e2abba] tracking-[-0.4px] w-full resize-none"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="backdrop-blur-[7.555px] backdrop-filter bg-gradient-to-b border-2 border-[rgba(209,51,69,0.8)] border-solid from-[rgba(205,27,48,0.3)] h-[104px] rounded-[16px] shadow-[0px_2px_8px_0px_rgba(167,32,41,0.5)] to-[rgba(215,45,64,0.2)] w-full hover:opacity-90 transition-opacity"
              >
                <p
                  className="font-sans font-semibold leading-[1.1] text-[clamp(24px,3vw,33px)] text-[#d94052] text-center tracking-[-0.66px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {submitLabel}
                </p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
