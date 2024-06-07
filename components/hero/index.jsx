import { IllustrationServiceCard } from "../IllustrationCard";

export default function Hero({ title, message, src }) {
  return (
    <section>
      <header className="flex flex-col gap-[3.125em] mt-[5.125em]">
        <div className="flex flex-col items-center gap-[1.5em]">
          <h3 className="font-bold text-[2.8125rem] text-center leading-[4.375rem] max-w-[12em]">
            {title}
          </h3>
          {message ? (
            <div className="max-w-[24.403125em] text-center">{message}</div>
          ) : null}
        </div>
        <IllustrationServiceCard src={src} />
      </header>
    </section>
  );
}
