import Hero from "@/components/hero";
import SectionHeader from "@/components/sectionHeader";
import { TextServiceCard } from "@/components/serviceCard/Text";
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
        <div className="flex gap-[1.5625em]">
          <TextServiceCard
            height="40em"
            className="zad flex-[100%] bg-violet-9 flex flex-col justify-center p-[2.5em]"
          >
            <p className="text-black text-[1.125rem] max-w-[19.426875em]">
              {t("real_estate_service_message")}
            </p>
            <Button className="zad bg-orange-1 text-white rounded-[100px] px-[2em] text-[1.125rem]">
              {t("real_estate_service_action")}
            </Button>
          </TextServiceCard>
          <TextServiceCard
            height="40em"
            className="flex-[100%] bg-[#FFE4D9] flex flex-col items-center justify-between p-[2.5em]"
          >
            <Image
              src="/img/home-service-3-developer.png"
              width={771}
              height={446}
              className="rounded-[30px]"
              alt="developer"
              quality={100}
            />
            <div className="flex justify-between w-full">
              <span className="text-black font-medium text-[2.5rem]">
                {t("register_as_developer")}
              </span>
              <Button className="zad bg-orange-1 text-white rounded-[100px] px-[2em] text-[1.125rem] items-center">
                {t("developer")}
              </Button>
            </div>
          </TextServiceCard>
        </div>
      </section>
    </>
  );
}
