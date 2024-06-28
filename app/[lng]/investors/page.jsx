import Hero from "@/components/hero";
import SectionHeader from "@/components/sectionHeader";
import { useTranslation } from "@/i18n";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default async function InvestorsPage({ params: { lng } }) {
  const { t } = await useTranslation(lng, "translation");

  return (
    <>
      <Hero title={t("investors_hero")} src="/img/hero-investors.png" />
      <Service1 t={t} />
      <Service2 t={t} />
      <Service3 t={t} />
    </>
  );
}

function Service1({ t }) {
  return (
    <section className="flex flex-col gap-[5.15875em] mt-[8.469375em]">
      <SectionHeader title={t("investors_service")} />
      <div className="flex flex-col gap-[1.6875em]">
        <div className="flex flex-wrap gap-[1.5625em]">
          <div className="flex-[26em] bg-[#FFD1C0] flex flex-col gap-[5em] [@media(min-width:61.125em)]:gap-[8em] justify-center items-center [@media(min-width:61.125em)]:items-start p-[2.5em] [@media(min-width:61.125em)]:ps-[8em] relative rounded-[30px]">
            <p className="text-black text-[1.125rem] w-[70%] [@media(min-width:61.125em)]:w-auto [@media(min-width:61.125em)]:max-w-[13em] text-center [@media(min-width:61.125em)]:text-start">
              {t("investors_service_1")}
            </p>
            <Button className="zad bg-orange-1 text-white rounded-[100px] px-[2em] text-[1.125rem] min-w-[11.75em]">
              {t("investors_service_1_action")}
            </Button>
          </div>
          <div className="flex-[26em] relative h-[36em]">
            <Image
              src="/img/investors-service-1-1.png"
              className="object-cover rounded-[30px]"
              fill={true}
              quality={100}
              priority={true}
              alt="icon"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-[1.6875em]">
          <Card
            src="/img/investors-service-1-2.svg"
            title={t("investors_service_1_2")}
            message={t("investors_service_1_2_message")}
            bg="#E5E3FF"
          />
          <Card
            src="/img/investors-service-1-3.svg"
            title={t("investors_service_1_3")}
            message={t("investors_service_1_3_message")}
            bg="#FFEDE5"
          />
          <Card
            src="/img/investors-service-1-4.svg"
            title={t("investors_service_1_4")}
            message={t("investors_service_1_4_message")}
            bg="#FFEDE5"
          />
          <Card
            src="/img/investors-service-1-5.svg"
            title={t("investors_service_1_5")}
            message={t("investors_service_1_5_message")}
            bg="#E5E3FF"
          />
        </div>
        <Card
          src="/img/investors-service-1-6.svg"
          title={t("investors_service_1_6")}
          message={t("investors_service_1_6_message")}
          bg="#E5E3FF"
        />
      </div>
    </section>
  );
}

function Service2({ t }) {
  return (
    <section className="flex flex-col gap-[5.15875em] mt-[8.469375em]">
      <SectionHeader title={t("investors_service_2")} />
      <div className="flex flex-wrap gap-[1.5625em]">
        <div className="flex-[25em] bg-[#FFD1C0] flex flex-col gap-[3em] [@media(min-width:59.0625em)]:gap-[5em] justify-center items-center [@media(min-width:59.0625em)]:items-start p-[5em] [@media(min-width:59.0625em)]:p-[2.5em] [@media(min-width:59.0625em)]:ps-[8em] relative rounded-[30px]">
          <h5 className="zad text-orange-1 text-[2.1875rem] font-medium">
            {t("investors_service_2_title")}
          </h5>
          <p className="text-black text-[1.125rem] w-[70%] [@media(min-width:59.0625em)]:w-auto [@media(min-width:59.0625em)]:max-w-[13em] text-center [@media(min-width:59.0625em)]:text-start">
            {t("investors_service_2_message")}
          </p>
        </div>
        <div className="flex-[25em] relative h-[32em] w-full">
          <Image
            src="/img/investors-service-2.png"
            className="object-cover rounded-[30px]"
            fill={true}
            quality={100}
            priority={true}
            alt="icon"
          />
        </div>
      </div>
    </section>
  );
}

function Service3({ t }) {
  return (
    <section className="flex flex-col gap-[5.15875em] mt-[8.469375em]">
      <SectionHeader title={t("investors_service_3")} />
      <div className="flex flex-col gap-[1.6875em]">
        <div className="relative h-[32em]">
          <Image
            src="/img/investors-service-3-1.png"
            className="object-cover rounded-[30px]"
            fill={true}
            quality={100}
            priority={true}
            alt="icon"
          />
        </div>
        <div className="flex flex-wrap gap-[1.6875em]">
          <Card
            src="/img/investors-service-3-2.svg"
            title={t("investors_service_3_2")}
            message={t("investors_service_3_2_message")}
            bg="#E5E3FF"
          />
          <Card
            src="/img/investors-service-3-3.svg"
            title={t("investors_service_3_3")}
            message={t("investors_service_3_3_message")}
            bg="#FFEDE5"
          />
          <Card
            src="/img/investors-service-3-4.svg"
            title={t("investors_service_3_4")}
            message={t("investors_service_3_4_message")}
            bg="#FFEDE5"
          />
          <Card
            src="/img/investors-service-3-5.svg"
            title={t("investors_service_3_5")}
            message={t("investors_service_3_5_message")}
            bg="#E5E3FF"
          />
          <Card
            src="/img/investors-service-3-6.svg"
            title={t("investors_service_3_6")}
            message={t("investors_service_3_6_message")}
            bg="#E5E3FF"
          />
          <Card
            src="/img/investors-service-3-7.svg"
            title={t("investors_service_3_7")}
            message={t("investors_service_3_7_message")}
            bg="#FFEDE5"
          />
        </div>
        <Card
          src="/img/investors-service-3-8.svg"
          title={t("investors_service_3_8")}
          message={t("investors_service_3_8_message")}
          bg="#E5E3FF"
        />
      </div>
    </section>
  );
}

function Card({ src, title, message, bg }) {
  return (
    <div
      style={{ background: bg }}
      className="flex-[30em] flex flex-col items-center justify-center gap-[5em] py-[6em] rounded-[30px]"
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
