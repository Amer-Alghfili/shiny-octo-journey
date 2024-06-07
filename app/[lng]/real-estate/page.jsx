import { IllustrationServiceCard } from "@/components/IllustrationCard";
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
      <section className="flex flex-col gap-[5.15875em]">
        <SectionHeader title={t("real_estate_service")} />
        <div className="flex flex-col gap-[1.6875em]">
          <div className="flex gap-[1.5625em]">
            <div className="flex-[85%] bg-[#FFD1C0] flex flex-col gap-[8em] justify-center p-[2.5em] ps-[8em] relative rounded-[30px]">
              <p className="text-black text-[1.125rem] max-w-[13em]">
                {t("real_estate_service_message")}
              </p>
              <Button className="zad bg-orange-1 text-white rounded-[100px] px-[2em] text-[1.125rem] self-start min-w-[11.75em]">
                {t("real_estate_service_action")}
              </Button>
            </div>
            <IllustrationServiceCard src="/img/real-estate-1.png" />
          </div>
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
      className="flex-[48%] flex flex-col items-center justify-center gap-[5em] py-[6em] rounded-[30px]"
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
