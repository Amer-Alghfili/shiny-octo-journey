import Image from "next/image";

export default function Hero({ title, message, src }) {
  return (
    <section className="flex flex-col gap-[2.90875em] mt-[3em]">
      <header className="flex flex-col gap-[3.125em] items-center">
        <h3 className="font-bold text-[2.8125rem] text-center leading-[4.375rem] max-w-[12em]">
          {title}
        </h3>
        {message ? (
          <div className="max-w-[24.403125em] text-center">{message}</div>
        ) : null}
      </header>
      <Image
        src={src}
        width={1609}
        height={640}
        className="rounded-[30px]"
        quality={100}
        priority={true}
        alt="icon"
      />
    </section>
  );
}
