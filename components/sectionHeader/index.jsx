export default function SectionHeader({ title, withMargin = true }) {
  return (
    <div className="flex flex-col gap-[1em] items-center">
      <div className="zad h-[3px] w-[15.5em] bg-orange-1 rounded-[16px]" />
      <h4 className="text-[2.8125rem] font-bold text-center">{title}</h4>
    </div>
  );
}
