import { IllustrationServiceCard } from "../serviceCard/Illustration";

export default function Hero({ title, src }) {
  return (
    <section>
      <header className="flex flex-col gap-[3.125em] mt-[5.125em]">
        <h3 className="font-bold text-[2.8125rem] text-center leading-[4.375rem] max-w-[48.866875em]">
          {title}
        </h3>
        <IllustrationServiceCard src={src} />
      </header>
    </section>
  );
}
