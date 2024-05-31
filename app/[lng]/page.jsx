import Hero from "@/components/hero";
import SectionHeader from "@/components/sectionHeader";
import { IllustrationServiceCard } from "@/components/serviceCard/Illustration";
import { TextServiceCard } from "@/components/serviceCard/Text";
import { useTranslation } from "@/i18n";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng, "translation");

  return (
    <>
      <Hero title={t("home_hero")} src="/img/hero-home.png" />
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
    <section className="flex flex-col gap-[5.15875em]">
      <SectionHeader title={t("home_page_service_1")} />
      <div className="flex flex-col gap-[1.469375em]">
        <div className="flex gap-[1.5625em]">
          <div className="flex-[38.4259259259%]">
            <TextServiceCard height="31.25em" className="bg-violet-10">
              <div className="flex flex-col gap-[3em] py-[6.5625em] px-[8.299375em]">
                <h5 className="zad text-orange-1 text-[2.8125rem] font-bold">
                  {t("zad")}
                </h5>
                <p className="text-[black] text-[1.125rem]">{t("about_zad")}</p>
              </div>
            </TextServiceCard>
          </div>
          <div className="flex-[61.5740740741%]">
            <IllustrationServiceCard
              src="/img/hero-home.png"
              height="31.25em"
            />
          </div>
        </div>
        <div className="flex gap-[1.5625em]">
          <div className="zad flex-[61.5740740741%] bg-orange-9 rounded-[30px] flex items-center">
            <Image
              src="/img/app-sample.png"
              height={750}
              width={1064}
              className="block rounded-[30px]"
              alt="icon"
              quality={100}
            />
          </div>
          <div className="flex-[38.4259259259%]">
            <TextServiceCard height="46.875em" className="bg-violet-9">
              <div className="flex flex-col items-center gap-[5.76em] py-[6.5625em] px-[5.184375em]">
                <h5 className="zad text-black text-[2.8125rem] font-bold">
                  {t("download_app")}
                </h5>
                <p className="text-[black] text-[0.8125rem] max-w-[11.90625em]">
                  {t("download_app_message")}
                </p>
                <div className="flex flex-col gap-[1.20375em] w-full">
                  <Link href="/">
                    <TextServiceCard
                      height="5.031875em"
                      className="bg-[#FAAA8D] flex items-center justify-center"
                    >
                      <Image
                        src="/img/google-play.png"
                        width="143"
                        height="34"
                        alt="googl-play"
                      />
                    </TextServiceCard>
                  </Link>
                  <Link href="/">
                    <TextServiceCard
                      height="5.031875em"
                      className="bg-[#C5BFFF] flex items-center justify-center"
                    >
                      <Image
                        src="/img/ios.png"
                        width="143"
                        height="34"
                        alt="googl-play"
                      />
                    </TextServiceCard>
                  </Link>
                </div>
              </div>
            </TextServiceCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section2({ t }) {
  return (
    <section className="flex flex-col gap-[5.15875em]">
      <SectionHeader title={t("home_page_service_2")} />
      <div className="flex gap-[1.5625em]">
        <div className="flex-[61.5740740741%]">
          <IllustrationServiceCard
            src="/img/home-service-2.png"
            height="31.25em"
          />
        </div>
        <div className="flex-[38.4259259259%]">
          <TextServiceCard height="31.25em" className="bg-violet-10">
            <div className="flex flex-col gap-[3em] py-[6.5625em] px-[8.299375em] items-start">
              <p className="text-[black] text-[1.125rem]">
                {t("service_2_message")}
              </p>
              <Button className="zad bg-orange-1 text-white rounded-[100px] px-[3em] text-[1.125rem] font-normal">
                {t("submit_order_btn")}
              </Button>
            </div>
          </TextServiceCard>
        </div>
      </div>
    </section>
  );
}

function Section3({ t }) {
  return (
    <section className="flex flex-col gap-[5.15875em]">
      <SectionHeader title={t("home_page_service_3")} />
      <div className="flex gap-[1.5625em]">
        <TextServiceCard
          height="40em"
          className="zad flex-[61.5740740741%] bg-violet-9 flex flex-col items-center justify-between p-[2.5em]"
        >
          <Image
            src="/img/home-service-3-investor.png"
            width={771}
            height={446}
            className="rounded-[30px]"
            alt="developer"
            quality={100}
          />
          <div className="flex justify-between w-full items-center">
            <span className="text-black font-medium text-[2.5rem]">
              {t("register_as_investor")}
            </span>
            <Button className="zad bg-orange-1 text-white rounded-[100px] px-[2em] text-[1.125rem]">
              {t("investor")}
            </Button>
          </div>
        </TextServiceCard>
        <TextServiceCard
          height="40em"
          className="flex-[61.5740740741%] bg-[#FFE4D9] flex flex-col items-center justify-between p-[2.5em]"
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
  );
}

function Section4({ t }) {
  return (
    <section className="flex flex-col gap-[5.15875em]">
      <SectionHeader title={t("home_page_service_4")} />
      <IllustrationServiceCard
        src="/img/home-service-4.png"
        height="40.021875em"
      />
    </section>
  );
}

function Section5({ t }) {
  return (
    <section className="flex flex-col gap-[5.15875em]">
      <SectionHeader title={t("home_page_service_5")} />
      <div className="flex gap-[1.5625em]">
        <TextServiceCard
          height="37.5em"
          className="flex-[100%] bg-[#FFEDE5] flex flex-col items-center justify-center gap-[5em] p-[2.5em]"
        >
          <Image
            src="/img/home-service-5-3.svg"
            width={120}
            height={111}
            alt="developer"
            quality={100}
          />
          <div className="flex flex-col gap-[3.4075em]">
            <div className="flex flex-col items-center gap-[1.618125em]">
              <h6 className="text-black font-medium text-[1.5625em]">
                {t("home-service-5-3")}
              </h6>
              <div className="h-[2px] bg-[#8000FF] w-[6.25em]" />
            </div>
            <p>{t("home-service-5-3-message")}</p>
          </div>
        </TextServiceCard>
        <TextServiceCard
          height="37.5em"
          className="flex-[100%] bg-[#FFEDE5] flex flex-col items-center justify-center gap-[5em] p-[2.5em]"
        >
          <Image
            src="/img/home-service-5-2.svg"
            width={98}
            height={111}
            alt="developer"
            quality={100}
          />
          <div className="flex flex-col gap-[3.4075em]">
            <div className="flex flex-col items-center gap-[1.618125em]">
              <h6 className="text-black font-medium text-[1.5625em]">
                {t("home-service-5-2")}
              </h6>
              <div className="h-[2px] bg-[#8000FF] w-[6.25em]" />
            </div>
            <p>{t("home-service-5-2-message")}</p>
          </div>
        </TextServiceCard>
        <TextServiceCard
          height="37.5em"
          className="flex-[100%] bg-[#FFEDE5] flex flex-col items-center justify-center gap-[5em] p-[2.5em]"
        >
          <Image
            src="/img/home-service-5-1.svg"
            width={98}
            height={111}
            alt="developer"
            quality={100}
          />
          <div className="flex flex-col gap-[3.4075em]">
            <div className="flex flex-col items-center gap-[1.618125em]">
              <h6 className="text-black font-medium text-[1.5625em]">
                {t("home-service-5-1")}
              </h6>
              <div className="h-[2px] bg-[#8000FF] w-[6.25em]" />
            </div>
            <p>{t("home-service-5-1-message")}</p>
          </div>
        </TextServiceCard>
      </div>
    </section>
  );
}

function Section6({ t }) {
  return (
    <section className="flex flex-col gap-[5.15875em]">
      <SectionHeader title={t("home_page_service_6")} />
      <div className="flex gap-[1.5625em]">
        <TextServiceCard
          height="37.5em"
          className="zad flex-[100%] bg-violet-10 flex flex-col items-center justify-center gap-[5em] p-[2.5em]"
        >
          <Image
            src="/img/home-service-6-1.svg"
            width={120}
            height={111}
            alt="developer"
            quality={100}
          />
          <div className="flex flex-col gap-[3.4075em]">
            <div className="flex flex-col items-center gap-[1.618125em]">
              <h6 className="text-black font-medium text-[1.5625em]">
                {t("home-service-6-1")}
              </h6>
              <div className="h-[2px] bg-[#8000FF] w-[6.25em]" />
            </div>
            <p>{t("home-service-6-1-message")}</p>
          </div>
        </TextServiceCard>
        <TextServiceCard
          height="37.5em"
          className="zad flex-[100%] bg-violet-10 flex flex-col items-center justify-center gap-[5em] p-[2.5em]"
        >
          <Image
            src="/img/home-service-6-2.svg"
            width={130}
            height={111}
            alt="developer"
            quality={100}
          />
          <div className="flex flex-col gap-[3.4075em]">
            <div className="flex flex-col items-center gap-[1.618125em]">
              <h6 className="text-black font-medium text-[1.5625em]">
                {t("home-service-6-2")}
              </h6>
              <div className="h-[2px] bg-[#8000FF] w-[6.25em]" />
            </div>
            <p>{t("home-service-6-2-message")}</p>
          </div>
        </TextServiceCard>
        <TextServiceCard
          height="37.5em"
          className="zad flex-[100%] bg-violet-10 flex flex-col items-center justify-center gap-[5em] p-[2.5em]"
        >
          <Image
            src="/img/home-service-6-3.svg"
            width={98}
            height={111}
            alt="developer"
            quality={100}
          />
          <div className="flex flex-col gap-[3.4075em]">
            <div className="flex flex-col items-center gap-[1.618125em]">
              <h6 className="text-black font-medium text-[1.5625em]">
                {t("home-service-6-3")}
              </h6>
              <div className="h-[2px] bg-[#8000FF] w-[6.25em]" />
            </div>
            <p>{t("home-service-6-3-message")}</p>
          </div>
        </TextServiceCard>
      </div>
    </section>
  );
}

function Section7({ t }) {
  return (
    <section className="flex flex-col gap-[5.15875em]">
      <SectionHeader title={t("home_page_service_7")} />
      <div className="flex gap-[1.5625em]">
        <TextServiceCard className="flex-[100%] bg-[rgba(250,170,141,0.3)] flex flex-col items-center gap-[3em] p-[2.5em] pt-[5em]">
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
        </TextServiceCard>
        <div className="flex-[100%] bg-[rgba(250,170,141,0.3)] flex flex-col items-center gap-[3em] rounded-[30px]">
          <IllustrationServiceCard
            src="/img/home-service-7.png"
            height="37.5em"
          />
        </div>
        {/* <TextServiceCard
          height="37.5em"
          className="zad flex-[100%] bg-violet-10 flex flex-col items-center justify-center gap-[5em] p-[2.5em]"
        >
          <Image
            src="/img/home-service-7.png"
            width={130}
            height={111}
            alt="developer"
            quality={100}
          />
          <div className="flex flex-col gap-[3.4075em]">
            <div className="flex flex-col items-center gap-[1.618125em]">
              <h6 className="text-black font-medium text-[1.5625em]">
                {t("home-service-6-2")}
              </h6>
              <div className="h-[2px] bg-[#8000FF] w-[6.25em]" />
            </div>
            <p>{t("home-service-6-2-message")}</p>
          </div>
        </TextServiceCard> */}
        <TextServiceCard
          height="37.5em"
          className="flex-[100%] bg-[rgba(197,191,255,0.3)] flex flex-col items-center gap-[3em] p-[2.5em] pt-[5em]"
        >
          <h6 className="text-[#FF652D] font-medium text-[2.5rem]">
            {t("home_section_7_2")}
          </h6>
          <p className="text-[1.125rem] text-black max-w-[17.625em] text-center">
            {t("home_service_7_2_message")}
          </p>
        </TextServiceCard>
      </div>
    </section>
  );
}

function Section8({ t }) {
  return (
    <section className="flex flex-col gap-[5.15875em]">
      <SectionHeader title={t("home_page_service_8")} />
      <div className="flex flex-col gap-[2.5em]">
        <IllustrationServiceCard
          src="/img/home-service-8-1.png"
          height="37.5em"
        />
        <div className="flex gap-[1.5625em]">
          <TextServiceCard
            height="37.5em"
            className="zad flex-[100%] bg-violet-10 flex flex-col items-center gap-[5em] p-[2.5em] pt-[6em]"
          >
            <Image
              src="/img/home-service-8-4.svg"
              width={100}
              height={111}
              alt="developer"
              quality={100}
            />
            <div className="flex flex-col gap-[3.4075em]">
              <div className="flex flex-col items-center gap-[1.618125em]">
                <h6 className="text-black font-medium text-[1.5625em]">
                  {t("home-service-8-3")}
                </h6>
                <div className="h-[2px] bg-[#8000FF] w-[6.25em]" />
              </div>
              <p className="text-center">{t("home-service-8-3-message")}</p>
            </div>
          </TextServiceCard>
          <TextServiceCard
            height="37.5em"
            className="zad flex-[100%] bg-violet-10 flex flex-col items-center gap-[5em] p-[2.5em] pt-[6em]"
          >
            <Image
              src="/img/home-service-8-3.svg"
              width={95}
              height={111}
              alt="developer"
              quality={100}
            />
            <div className="flex flex-col gap-[3.4075em]">
              <div className="flex flex-col items-center gap-[1.618125em]">
                <h6 className="text-black font-medium text-[1.5625em]">
                  {t("home-service-8-2")}
                </h6>
                <div className="h-[2px] bg-[#8000FF] w-[6.25em]" />
              </div>
              <p className="text-center">{t("home-service-8-2-message")}</p>
            </div>
          </TextServiceCard>
          <TextServiceCard
            height="37.5em"
            className="zad flex-[100%] bg-violet-10 flex flex-col items-center gap-[5em] p-[2.5em] pt-[6em]"
          >
            <Image
              src="/img/home-service-8-2.svg"
              width={120}
              height={111}
              alt="developer"
              quality={100}
            />
            <div className="flex flex-col gap-[3.4075em]">
              <div className="flex flex-col items-center gap-[1.618125em]">
                <h6 className="text-black font-medium text-[1.5625em]">
                  {t("home-service-8-1")}
                </h6>
                <div className="h-[2px] bg-[#8000FF] w-[6.25em]" />
              </div>
              <p className="text-center">{t("home-service-8-1-message")}</p>
            </div>
          </TextServiceCard>
        </div>
      </div>
    </section>
  );
}

function Section9({ t }) {
  return (
    <section className="flex flex-col gap-[5.15875em]">
      <SectionHeader title={t("home_page_service_9")} />
      <div className="flex flex-col gap-[1.6875em]">
        <div className="flex gap-[1.5625em]">
          <TextServiceCard
            // height="25em"
            className="flex-[100%] bg-[rgb(255,237,229)] flex flex-col gap-[5em] pt-[4.916875em] pb-[3em] px-[6.179375em]"
          >
            <h6 className="text-black font-bold text-[2.8125rem]">555,000</h6>
            <p className="text-[0.8125rem]">{t("service-9-2-message")}</p>
          </TextServiceCard>
          <div className="flex-[100%]">
            <IllustrationServiceCard
              src="/img/home-service-9.png"
              height="28em"
            />
          </div>
          <TextServiceCard className="flex-[100%] bg-[rgb(255,237,229)] flex flex-col gap-[5em] pt-[4.916875em] pb-[3em] px-[6.179375em]">
            <h6 className="text-black font-bold text-[2.8125rem]">127%</h6>
            <p className="text-[0.8125rem]">{t("service-9-1-message")}</p>
            <p className="zad text-orange-1 tet-[0.8125rem]">
              {t("service-9-1-message-2")}
            </p>
          </TextServiceCard>
        </div>
        <div className="flex gap-[1.5625em]">
          <TextServiceCard className="zad flex-[50%] bg-violet-9 flex flex-col gap-[5em] pt-[4.916875em] pb-[3em] px-[6.179375em]">
            <h6 className="text-black font-bold text-[2.8125rem]">
              {t("service-9-2")}
            </h6>
            <p className="text-[0.8125rem]">{t("service-9-2-1-message")}</p>
            <p className="zad text-orange-1 tet-[0.8125rem]">
              {t("service-9-2-message-2")}
            </p>
          </TextServiceCard>
          <div className="flex-[100%]">
            <IllustrationServiceCard
              src="/img/home-service-9-1.png"
              height="28em"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Section12({ t }) {
  return (
    <section className="flex flex-col gap-[5.15875em]">
      <SectionHeader title={t("contact_us")} />
      <div className="flex gap-[1.5625em]">
        <TextServiceCard className="zad flex-[30%] bg-violet-9 flex flex-col justify-center gap-[2.478125em] px-[8em]">
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
        </TextServiceCard>
        <IllustrationServiceCard
          src="/img/home-service-12.png"
          height="41.675625em"
        />
      </div>
    </section>
  );
}
