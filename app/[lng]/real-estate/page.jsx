import Hero from "@/components/hero";
import SectionHeader from "@/components/sectionHeader";
import { useTranslation } from "@/i18n";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default async function RealEstatePage({ params: { lng } }) {
  const { t } = await useTranslation(lng, "translation");

  return (
    <>
      <Hero title={t("real_estate_hero")} src="/img/hero-real-estate.png" />
      <section className="flex flex-col gap-[5.15875em] mt-[8.469375em]">
        <SectionHeader title={t("real_estate_service")} />
        <div className="flex flex-col gap-[1.6875em]">
          <Section1 t={t} />
          <div className="flex flex-wrap gap-[1.6875em]">
            <Card
              src="/img/real-estate-2.svg"
              title={t("real_estate_service_1")}
              message={t("real_estate_service_message_1")}
              bg="#FFEDE5"
            />
            <Card
              src="/img/real-estate-3.svg"
              title={t("real_estate_service_2")}
              message={t("real_estate_service_message_2")}
              bg="#E5E3FF"
            />
            <Card
              src="/img/real-estate-4.svg"
              title={t("real_estate_service_3")}
              message={t("real_estate_service_message_3")}
              bg="#E5E3FF"
            />
            <Card
              src="/img/real-estate-5.svg"
              title={t("real_estate_service_4")}
              message={t("real_estate_service_message_4")}
              bg="#FFEDE5"
            />
            <Card
              src="/img/real-estate-6.svg"
              title={t("real_estate_service_5")}
              message={t("real_estate_service_message_5")}
              bg="#FFEDE5"
            />
            <Card
              src="/img/real-estate-7.svg"
              title={t("real_estate_service_6")}
              message={t("real_estate_service_message_6")}
              bg="#E5E3FF"
            />
          </div>
          <Card
            src="/img/real-estate-8.svg"
            title={t("real_estate_service_7")}
            message={t("real_estate_service_message_7")}
            bg="#E5E3FF"
          />
        </div>
      </section>
    </>
  );
}

function Card({ src, title, message, bg }) {
  return (
    <div
      style={{ background: bg }}
      className="flex-[32em] [@media(min-width:106.875em)]:flex-[48em] flex flex-col items-center justify-center gap-[5em] py-[6em] rounded-[30px]"
    >
      <Image src={src} width={120} height={111} alt="developer" quality={100} />
      <div className="flex flex-col gap-[3.4075em]">
        <div className="flex flex-col items-center gap-[1.618125em]">
          <h6 className="text-black font-medium text-[1.5625em]">{title}</h6>
        </div>
        <p className="max-w-[25em] text-center">{message}</p>
      </div>
    </div>
  );
}

function Section1({ t }) {
  const imgProps = {
    src: "/img/real-estate-1.png",
    className: "rounded-[30px]",
    quality: 100,
    priority: true,
  };

  const mobileView = (
    <div className="flex flex-col gap-[1.5625em]">
      <div className="flex-[35em] relative">
        <Image
          {...imgProps}
          className={`${imgProps.className} object-cover object-[50%_50%]`}
          fill={true}
          alt="icon"
        />
      </div>
      <div className="flex flex-col gap-[5em] items-center relative rounded-[30px] bg-[#FFD1C0] py-[4em] px-[2.5em] text-center">
        <p className="text-black text-[1.125rem] w-[80%] [@media(min-width:108.375em)]:w-auto [@media(min-width:108.375em)]:max-w-[13em] text-center [@media(min-width:108.375em)]:text-start">
          {t("real_estate_service_message")}
        </p>
        <Button className="zad bg-orange-1 text-white rounded-[100px] px-[2em] text-[1.125rem] min-w-[11.75em]">
          {t("real_estate_service_action")}
        </Button>
      </div>
    </div>
  );

  const view = (
    <div className="flex gap-[1.5625em]">
      <div className="flex-[49.43875em] flex flex-col gap-[8em] justify-center items-start relative rounded-[30px] bg-[#FFD1C0] p-[2.5em] ps-[8em]">
        <p className="text-black text-[1.125rem] w-[80%] max-w-[13em]">
          {t("real_estate_service_message")}
        </p>
        <Button className="zad bg-orange-1 text-white rounded-[100px] px-[2em] text-[1.125rem] min-w-[11.75em]">
          {t("real_estate_service_action")}
        </Button>
      </div>
      <Image {...imgProps} width={791} height={640} alt="icon" />
    </div>
  );

  return (
    <>
      <div className="[@media(min-width:82.1876em)]:hidden">{mobileView}</div>
      <div className="[@media(max-width:82.1874em)]:hidden">{view}</div>
    </>
  );
}
