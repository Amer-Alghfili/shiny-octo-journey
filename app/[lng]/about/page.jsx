import Hero from "@/components/hero";
import { useTranslation } from "@/i18n";
import Image from "next/image";

export default async function AboutPage({ params: { lng } }) {
  const { t } = await useTranslation(lng, "translation");

  return (
    <>
      <Hero
        title={t("about_hero")}
        message={t("about_hero_message")}
        src="/img/hero-about.png"
      />
      <div className="flex flex-col gap-[1.5625em] mt-[2.5em]">
        <PartnerEven
          name={t("suhail")}
          position={t("suhail_position")}
          qualification={t("suhail_qualifications")}
          src="/img/suhail.png"
        />
        <PartnerOdd
          name={t("aziz")}
          position={t("aziz_position")}
          qualification={t("aziz_qualifications")}
          src="/img/aziz.png"
        />
        <PartnerEven
          name={t("yasser")}
          position={t("yasser_position")}
          qualification={t("yasser_qualifications")}
          src="/img/yasser.png"
        />
      </div>
    </>
  );
}

function PartnerEven({ name, position, qualification, src }) {
  return (
    <section className="flex flex-col-reverse lg:flex-row gap-[1.5625em]">
      <div className="zad w-full lg:w-[60%] bg-violet-10 flex flex-col items-center lg:items-start gap-[4em] lg:gap-[8em] py-[5em] ps-0 lg:ps-[5em] relative rounded-[30px]">
        <div className="flex flex-col items-center lg:items-start gap-[1em]">
          <h5 className="text-[#FF652D] font-bold text-[2.8125rem]">{name}</h5>
          <div className="text-[1.125rem]">{position}</div>
        </div>
        <p className="text-[0.8125rem] max-w-[23em]">{qualification}</p>
      </div>
      <div className="relative h-[35em] md:h-[50em] w-full lg:w-[40%] ">
        <Image
          src={src}
          className="object-cover rounded-[30px]"
          fill={true}
          quality={100}
          priority={true}
          alt="icon"
        />
      </div>
    </section>
  );
}

function PartnerOdd({ name, position, qualification, src }) {
  return (
    <section className="flex flex-col lg:flex-row gap-[1.5625em]">
      <div className="relative h-[35em] md:h-[50em] w-full lg:w-[40%] ">
        <Image
          src={src}
          className="object-cover rounded-[30px]"
          fill={true}
          quality={100}
          priority={true}
          alt="icon"
        />
      </div>
      <div className="zad w-full lg:w-[60%] bg-violet-10 flex flex-col items-center lg:items-start gap-[4em] lg:gap-[8em] py-[5em] ps-0 lg:ps-[5em] relative rounded-[30px]">
        <div className="flex flex-col gap-[1em]">
          <h5 className="text-[#FF652D] font-bold text-[2.8125rem]">{name}</h5>
          <div className="text-[1.125rem]">{position}</div>
        </div>
        <p className="text-[0.8125rem] max-w-[23em]">{qualification}</p>
      </div>
    </section>
  );
}
