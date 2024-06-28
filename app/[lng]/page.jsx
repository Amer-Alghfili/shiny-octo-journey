import { IllustrationServiceCard } from "@/components/IllustrationCard";
import Hero from "@/components/hero";
import SectionHeader from "@/components/sectionHeader";
import { useTranslation } from "@/i18n";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng, "translation");

  return (
    <>
      <Hero
        title={t("home_hero")}
        src="/img/hero-home.png"
        classes="xl:object-[0_40%]"
      />
      <Section1 t={t} />
      <Section2 t={t} />
      <Section3 t={t} />
      <Section4 t={t} />
      <Section5 t={t} />
      <Section6 t={t} />
      <Section7 t={t} />
      <Section8 t={t} />
      <Section9 t={t} />
      <Section12 t={t} />
    </>
  );
}
function Section1({ t }) {
  return (
    <section className="flex flex-col gap-[5.15875em] mt-[8.469375em]">
      <SectionHeader title={t("home_page_service_1")} />
      <div className="flex flex-col gap-[1.469375em]">
        <div className="flex flex-col-reverse lg:flex-row gap-[1.5625em]">
          <div className="zad lg:flex-[35%] relative rounded-[30px] bg-violet-10 flex flex-col gap-[2em] py-[3em] ps-[6em] pe-[3em]">
            <h5 className="zad text-orange-1 text-[2.8125rem] font-bold">
              {t("zad")}
            </h5>
            <p className="text-[black] text-[1.125rem]">{t("about_zad")}</p>
          </div>
          <div className="lg:flex-[65%] h-[25em] 2xl:h-[30em] relative">
            <Image
              src="/img/home-service-1.png"
              className="object-cover rounded-[30px]"
              fill={true}
              quality={100}
              priority={true}
              alt="icon"
            />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-[1.5625em]">
          <div className="zad lg:flex-[70%] relative bg-orange-9 rounded-[30px] flex flex-col justify-center">
            <Image
              src="/img/app-sample.png"
              className="rounded-[30px]"
              width="1064"
              height="750"
              quality={100}
              priority={true}
              alt="icon"
            />
          </div>
          <div className="zad lg:flex-[30%] rounded-[30px] bg-violet-9 flex flex-col items-center pt-[7.5em] pb-[5em] px-[3em] md:px-[5.184375em]">
            <h5 className="zad text-black text-[2.8125rem] font-bold text-center">
              {t("download_app")}
            </h5>
            <p className="text-[black] text-[1.2rem] xl:text-[0.8125rem] text-center max-w-[14em] mt-[2.5em] xl:mt-[5.76em] mb-[4em] xl:mb-[8em]">
              {t("download_app_message")}
            </p>
            <div className="flex flex-col gap-[1.20375em] w-full items-center">
              <Link
                href="/"
                className="bg-[#FAAA8D] flex items-center justify-center py-[1.45125em] px-[2em] w-full max-w-[18em] rounded-[30px]"
              >
                <Image
                  src="/img/google-play.png"
                  width="143"
                  height="34"
                  alt="googl-play"
                  quality={100}
                />
              </Link>
              <Link
                href="/"
                className="bg-[#C5BFFF] flex items-center justify-center py-[1.45125em] px-[2em] w-full max-w-[18em] rounded-[30px]"
              >
                <Image
                  src="/img/ios.png"
                  width="143"
                  height="34"
                  alt="ios"
                  quality={100}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section2({ t }) {
  return (
    <section className="flex flex-col gap-[5.15875em] mt-[12.895625em]">
      <SectionHeader title={t("home_page_service_2")} />
      <div className="flex flex-col-reverse xl:flex-row  gap-[1.5625em]">
        <div className="xl:flex-[38.4259259259%] zad bg-violet-10 relative rounded-[30px] flex flex-col gap-[3em] justify-between py-[6.5625em] px-[2em] xl:ps-[8.299375em] xl:pe-[3em] items-center xl:items-start">
          <p className="text-[black] text-[1.125rem] w-[80%] xl-w-auto xl:max-w-[25em] text-center xl:text-start">
            {t("service_2_message")}
          </p>
          <Button className="zad bg-orange-1 text-white rounded-[100px] px-[3em] text-[1.125rem] font-normal">
            {t("submit_order_btn")}
          </Button>
        </div>
        <div className="xl:flex-[61.5740740741%] h-[33em] lg:h-[40em] relative">
          <Image
            src="/img/home-service-2.png"
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

function Section3({ t }) {
  return (
    <section className="flex flex-col gap-[5.15875em] mt-[12.5em]">
      <SectionHeader title={t("home_page_service_3")} />
      <div className="flex flex-col md:flex-row gap-[1.5625em]">
        <div className="zad flex-[61.5740740741%] bg-violet-9 flex flex-col gap-[2em] xl:gap-[8.75em] items-center justify-between p-[2em] rounded-[30px]">
          <div className="relative w-full h-[25em] md:h-[18em] xl:h-[22em] 2xl:h-[27em]">
            <Image
              src="/img/home-service-3-investor.png"
              className="object-cover rounded-[30px]"
              fill={true}
              alt="developer"
              quality={100}
            />
          </div>
          <div className="flex flex-col xl:flex-row gap-[2em] [@media(max-width:71.25em)]:justify-center lg:justify-between w-full items-center px-[2em]">
            <span className="text-black font-medium text-[2rem] lg:text-[2.5rem]">
              {t("register_as_investor")}
            </span>
            <Button className="zad bg-orange-1 text-white rounded-[100px] px-[3em] py-[1.2em] md:py-[1.5em] text-[1.125rem]">
              {t("investor")}
            </Button>
          </div>
        </div>
        <div className="zad flex-[61.5740740741%] bg-[#FFE4D9] flex flex-col items-center justify-between p-[2em] relative rounded-[30px]">
          <div className="relative w-full h-[25em] md:h-[18em] xl:h-[22em] 2xl:h-[27em]">
            <Image
              src="/img/home-service-3-developer.png"
              className="object-cover rounded-[30px]"
              fill={true}
              alt="developer"
              quality={100}
            />
          </div>
          <div
            className="flex flex-col xl:flex-row gap-[2em]
          [@media(max-width:74.375em)]:justify-center lg:justify-between w-full
          items-center px-[2em]"
          >
            <span className="text-black font-medium text-[2rem] lg:text-[2.5rem]">
              {t("register_as_developer")}
            </span>
            <Button className="zad bg-orange-1 text-white rounded-[100px] px-[3em] py-[1.2em] md:py-[1.5em] text-[1.125rem]">
              {t("developer")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section4({ t }) {
  return (
    <section className="flex flex-col gap-[5.15875em] mt-[12.895625em]">
      <SectionHeader title={t("home_page_service_4")} />
      <div className="relative h-[20em] md:h-[40.021875em]">
        <Image
          src="/img/home-service-4.png"
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

function Section5({ t }) {
  function Card({ src, title, message }) {
    return (
      <div className="flex-[20em] bg-[#FFEDE5] flex flex-col items-center justify-center gap-[5em] p-[2.5em] relative rounded-[30px]">
        <Image
          src={src}
          width={120}
          height={111}
          alt="developer"
          quality={100}
        />
        <div className="flex flex-col gap-[3.4075em]">
          <div className="flex flex-col items-center gap-[1.618125em]">
            <h6 className="text-black font-medium text-[1.5625em] text-center">
              {title}
            </h6>
            <div className="h-[2px] bg-[#8000FF] w-[6.25em]" />
          </div>
          <p>{message}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-[5.15875em] mt-[6.25em]">
      <SectionHeader title={t("home_page_service_5")} />
      <div className="flex flex-wrap gap-[1.5625em]">
        <Card
          src="/img/home-service-5-3.svg"
          title={t("home-service-5-2")}
          message={t("home-service-5-3-message")}
        />
        <Card
          src="/img/home-service-5-2.svg"
          title={t("home-service-5-3")}
          message={t("home-service-5-2-message")}
        />
        <Card
          src="/img/home-service-5-1.svg"
          title={t("home-service-5-1")}
          message={t("home-service-5-1-message")}
        />
      </div>
    </section>
  );
}

function Section6({ t }) {
  function Card({ src, title, message }) {
    return (
      <div className="zad flex-[20em] bg-violet-10 flex flex-col items-center justify-center gap-[5em] p-[2.5em] relative rounded-[30px]">
        <Image
          src={src}
          width={120}
          height={111}
          alt="developer"
          quality={100}
        />
        <div className="flex flex-col gap-[3.4075em]">
          <div className="flex flex-col items-center gap-[1.618125em]">
            <h6 className="text-black font-medium text-[1.5625em] text-center">
              {title}
            </h6>
            <div className="h-[2px] bg-[#8000FF] w-[6.25em]" />
          </div>
          <p>{message}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-[5.15875em] mt-[6.229375em]">
      <SectionHeader title={t("home_page_service_6")} />
      <div className="flex flex-wrap gap-[1.5625em]">
        <Card
          src="/img/home-service-6-1.svg"
          title={t("home-service-6-1")}
          message={t("home-service-6-1-message")}
        />
        <Card
          src="/img/home-service-6-2.svg"
          title={t("home-service-6-2")}
          message={t("home-service-6-2-message")}
        />
        <Card
          src="/img/home-service-6-3.svg"
          title={t("home-service-6-3")}
          message={t("home-service-6-3-message")}
        />
      </div>
    </section>
  );
}

function Section7({ t }) {
  return (
    <section className="flex flex-col gap-[5.15875em] mt-[12.895625em]">
      <SectionHeader title={t("home_page_service_7")} />
      <div className="flex flex-wrap gap-[1.5625em]">
        <div className="flex-[20em] bg-[rgba(250,170,141,0.3)] flex flex-col items-center gap-[3em] p-[2.5em] pt-[5em] relative rounded-[30px]">
          <h6 className="text-[#FF652D] font-medium text-[2.5rem]">
            {t("halal")}
          </h6>
          <p className="text-[1.125rem] text-black max-w-[17.625em] text-center">
            {t("halal_message")}
          </p>
          <Image
            src="/img/halal.png"
            width={193}
            height={193}
            alt="halal"
            quality={100}
          />
        </div>
        <div className="flex-[20em] bg-[rgba(250,170,141,0.3)] flex flex-col items-center gap-[3em] rounded-[30px]">
          <IllustrationServiceCard
            src="/img/home-service-7.png"
            height="37.5em"
          />
        </div>
        <div className="flex-[20em] bg-[rgba(197,191,255,0.3)] flex flex-col items-center gap-[3em] p-[2.5em] pt-[5em] relative rounded-[30px]">
          <h6 className="text-[#FF652D] font-medium text-[2.5rem]">
            {t("home_section_7_2")}
          </h6>
          <p className="text-[1.125rem] text-black max-w-[17.625em] text-center">
            {t("home_service_7_2_message")}
          </p>
        </div>
      </div>
    </section>
  );
}

function Section8({ t }) {
  function Card({ src, title, message }) {
    return (
      <div className="zad flex-[20em] bg-violet-10 flex flex-col items-center gap-[5em] p-[2.5em] pt-[6em] relative rounded-[30px]">
        <Image
          src={src}
          width={100}
          height={111}
          alt="developer"
          quality={100}
        />
        <div className="flex flex-col gap-[3.4075em]">
          <div className="flex flex-col items-center gap-[1.618125em]">
            <h6 className="text-black font-medium text-[1.5625em]">{title}</h6>
            <div className="h-[2px] bg-[#8000FF] w-[6.25em]" />
          </div>
          <p className="text-center">{message}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-[5.15875em] mt-[12.895625em]">
      <SectionHeader title={t("home_page_service_8")} />
      <div className="flex flex-col gap-[2.5em]">
        <div className="relative h-[20em] md:h-[37.5em]">
          <Image
            src="/img/home-service-8-1.png"
            className="object-cover rounded-[30px]"
            fill={true}
            quality={100}
            priority={true}
            alt="icon"
          />
        </div>
        <div className="flex flex-wrap gap-[1.5625em]">
          <Card
            src="/img/home-service-8-4.svg"
            title={t("home-service-8-3")}
            message={t("home-service-8-3-message")}
          />
          <Card
            src="/img/home-service-8-3.svg"
            title={t("home-service-8-2")}
            message={t("home-service-8-2-message")}
          />
          <Card
            src="/img/home-service-8-2.svg"
            title={t("home-service-8-1")}
            message={t("home-service-8-1-message")}
          />
        </div>
      </div>
    </section>
  );
}

function Section9({ t }) {
  return (
    <section className="flex flex-col gap-[5.15875em] mt-[12.895625em]">
      <SectionHeader title={t("home_page_service_9")} />
      <div className="flex flex-col gap-[1.6875em]">
        <div className="flex flex-wrap gap-[1.5625em]">
          <div className="flex-[20em] bg-[rgb(255,237,229)] flex flex-col gap-[5em] pt-[4.916875em] pb-[3em] px-[6.179375em] relative rounded-[30px]">
            <h6 className="text-black font-bold text-[2.8125rem]">555,000</h6>
            <p className="text-[0.8125rem]">{t("service-9-2-message")}</p>
          </div>
          <div className="flex-[20em]">
            <div className="relative h-[28em]">
              <Image
                src="/img/home-service-9.png"
                className="object-cover rounded-[30px]"
                fill={true}
                quality={100}
                priority={true}
                alt="icon"
              />
            </div>
          </div>
          <div className="flex-[20em] bg-[rgb(255,237,229)] flex flex-col gap-[5em] pt-[4.916875em] pb-[3em] px-[6.179375em] relative rounded-[30px]">
            <h6 className="text-black font-bold text-[2.8125rem]">127%</h6>
            <p className="text-[0.8125rem]">{t("service-9-1-message")}</p>
            <p className="zad text-orange-1 tet-[0.8125rem]">
              {t("service-9-1-message-2")}
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[1.5625em]">
          <div className="zad flex-[50%] bg-violet-9 flex flex-col gap-[5em] pt-[4.916875em] pb-[3em] px-[6.179375em] relative rounded-[30px]">
            <h6 className="text-black font-bold text-[2.8125rem]">
              {t("service-9-2")}
            </h6>
            <p className="text-[0.8125rem]">{t("service-9-2-1-message")}</p>
            <p className="zad text-orange-1 tet-[0.8125rem]">
              {t("service-9-2-message-2")}
            </p>
          </div>
          <div className="flex-[100%]">
            <div className="relative h-[28em]">
              <Image
                src="/img/home-service-9-1.png"
                className="object-cover rounded-[30px]"
                fill={true}
                quality={100}
                priority={true}
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section12({ t }) {
  return (
    <section className="flex flex-col gap-[5.15875em] mt-[12.895625em]">
      <SectionHeader title={t("contact_us")} />
      <div className="flex flex-col-reverse lg:flex-row gap-[1.5625em]">
        <div className="zad flex-[30%] bg-violet-9 flex flex-col justify-center gap-[2.478125em] px-[8em] py-[2em] relative rounded-[30px]">
          <div className="flex items-center gap-[2.5em]">
            <div className="flex items-center justify-center w-[2.5em] h-[2.5em] bg-black rounded-full">
              <img src="/img/twitter.svg" alt="twitter" />
            </div>
            <p className="text-[1.125rem]">zadcapital</p>
          </div>
          <div className="flex items-center gap-[2.5em]">
            <div className="flex items-center justify-center w-[2.5em] h-[2.5em] bg-black rounded-full">
              <img src="/img/linkedin.svg" alt="twitter" />
            </div>
            <p className="text-[1.125rem]">zadcapital</p>
          </div>
          <div className="flex items-center gap-[2.5em]">
            <div className="flex items-center justify-center w-[2.5em] h-[2.5em] bg-black rounded-full">
              <img src="/img/whatsapp.svg" alt="twitter" />
            </div>
            <p className="text-[1.125rem]">00966551234567</p>
          </div>
          <div className="flex items-center gap-[2.5em]">
            <div className="flex items-center justify-center w-[2.5em] h-[2.5em] bg-black rounded-full">
              <img src="/img/email.svg" alt="twitter" />
            </div>
            <p className="text-[1.125rem]">info@zadcapital.sa</p>
          </div>
        </div>
        <div className="relative h-[41.675625em]">
          <Image
            src="/img/home-service-12.png"
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
