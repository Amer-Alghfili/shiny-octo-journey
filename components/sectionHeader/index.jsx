export default function SectionHeader({ title }) {
  return (
    <div className="flex flex-col gap-1 items-center mt-[8.469375em]">
      <div className="zad h-[2px] w-[15.5em] bg-orange-1" />
      <h4 className="text-[2.8125rem] font-bold">{title}</h4>
    </div>
  );
}