export type ContentUnavailableProps = {
  message?: string;
};

export function ContentUnavailable({ message = "Content not available" }: ContentUnavailableProps) {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-6 py-20 text-center text-[#0b1737]">
      <p className="font-sans text-[16px] font-medium">{message}</p>
    </div>
  );
}
