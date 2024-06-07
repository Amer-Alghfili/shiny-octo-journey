import { IllustrationServiceCard } from "@/components/IllustrationCard";
import Hero from "@/components/hero";
import { useTranslation } from "@/i18n";

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
    <section className="flex flex-col gap-[5.15875em]">
      <div className="flex gap-[1.5625em]">
        <div className="zad flex-[60%] bg-violet-10 flex flex-col gap-[8em] py-[5em] ps-[5em] relative rounded-[30px]">
          <div className="flex flex-col gap-[1em]">
            <h5 className="text-[#FF652D] font-bold text-[2.8125rem]">
              {name}
            </h5>
            <div className="text-[1.125rem]">{position}</div>
          </div>
          <p className="text-[0.8125rem] max-w-[23em]">{qualification}</p>
        </div>
        <div className="flex-[40%]">
          <IllustrationServiceCard src={src} height="45em" />
        </div>
      </div>
    </section>
  );
}

function PartnerOdd({ name, position, qualification, src }) {
  return (
    <section className="flex flex-col gap-[5.15875em]">
      <div className="flex gap-[1.5625em]">
        <div className="flex-[40%]">
          <IllustrationServiceCard src={src} height="45em" />
        </div>
        <div className="flex-[60%] bg-[#FFEDE5] flex flex-col gap-[8em] py-[5em] ps-[5em] relative rounded-[30px]">
          <div className="flex flex-col gap-[1em]">
            <h5 className="text-[#FF652D] font-bold text-[2.8125rem]">
              {name}
            </h5>
            <div className="text-[1.125rem]">{position}</div>
          </div>
          <p className="text-[0.8125rem] max-w-[23em]">{qualification}</p>
        </div>
      </div>
    </section>
  );
}
