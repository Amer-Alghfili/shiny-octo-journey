import Hero from "@/components/hero";
import SectionHeader from "@/components/sectionHeader";
import { useTranslation } from "@/i18n";

export default async function RealEstatePage({ params: { lng } }) {
  const { t } = await useTranslation(lng, "translation");

  return (
    <>
      <Hero title={t("qa")} src="/img/hero-qa.png" />
      <Section1 t={t} />
      <Section2 t={t} />
      <Section3 t={t} />
      <Section4 t={t} />
    </>
  );
}

function Section1({ t }) {
  return (
    <section className="zad mt-[2.465625em] bg-violet-9 flex flex-col gap-[1.9em] rounded-[30px] px-[8.5em] py-[4.86375em]">
      <h5 className="zad text-orange-1 font-medium text-[2.5rem]">
        {t("contact_us")}
      </h5>
      <div className="flex gap-[7em] self-end">
        <div className="flex flex-col gap-[2.478125em]">
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
        </div>
        <div className="flex flex-col gap-[2.478125em]">
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
      </div>
    </section>
  );
}

function Section2({ t }) {
  return (
    <section className="bg-[rgba(250,170,141,0.1)] flex flex-col items-center gap-[12.90625em] px-[3em] py-[6.25em] rounded-[30px] mt-[12.5em]">
      <div className="max-w-[37.0625em] text-center">
        <SectionHeader title={t("qa_1")} withMargin={false} />
      </div>
      <table className="border-spacing-[3.0625em] border-separate">
        <thead>
          <tr>
            <td className="zad text-orange-1 font-medium text-[2.1875rem]">
              {t("qa_1_cell_1")}
            </td>
            <td className="zad text-orange-1 font-medium text-[2.1875rem]">
              {t("qa_1_cell_2")}
            </td>
            <td className="zad text-orange-1 font-medium text-[2.1875rem]">
              {t("qa_1_cell_3")}
            </td>
          </tr>
        </thead>
        <tr>
          <td className="pt-[0.5em] zad border-t border-orange-1 w-[15.4375em]">
            {t("qa_1_cell_4")}
          </td>
          <td className="pt-[0.5em] zad border-t border-orange-1">
            {t("qa_1_cell_5")}
          </td>
          <td className="pt-[0.5em] zad border-t border-orange-1">
            {t("qa_1_cell_6")}
          </td>
        </tr>
        <tr>
          <td className="pt-[0.5em] zad border-t border-orange-1">
            {t("qa_1_cell_8")}
          </td>
          <td className="pt-[0.5em] zad border-t border-orange-1">
            {t("qa_1_cell_9")}
          </td>
          <td className="pt-[0.5em] zad border-t border-orange-1">
            {t("qa_1_cell_10")}
          </td>
        </tr>
        <tr>
          <td className="pt-[0.5em] zad border-t border-orange-1 align-top">
            {t("qa_1_cell_11")}
          </td>
          <td className="pt-[0.5em] zad border-t border-orange-1 align-top">
            {t("qa_1_cell_12")}
          </td>
          <td className="pt-[0.5em] zad border-t border-orange-1 align-top">
            {t("qa_1_cell_13")}
          </td>
        </tr>
        <tr>
          <td className="pt-[0.5em] zad border-t border-orange-1 align-top">
            {t("qa_1_cell_14")}
          </td>
          <td className="pt-[0.5em] zad border-t border-orange-1 align-top">
            {t("qa_1_cell_15")}
          </td>
          <td className="pt-[0.5em] zad border-t border-orange-1 align-top">
            {t("qa_1_cell_16")}
          </td>
        </tr>
        <tr>
          <td className="pt-[0.5em] zad border-t border-orange-1 align-top">
            {t("qa_1_cell_17")}
          </td>
          <td className="pt-[0.5em] zad border-t border-orange-1 align-top">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div>{t("qa_1_cell_18_1_title")}</div>
                <div>{t("qa_1_cell_18_1_message")}</div>
              </div>
              <div className="flex flex-col">
                <div>{t("qa_1_cell_18_1_title")}</div>
                <div>{t("qa_1_cell_18_1_message")}</div>
              </div>
            </div>
          </td>
          <td className="pt-[0.5em] zad border-t border-orange-1 align-top">
            {t("qa_1_cell_19")}
          </td>
        </tr>
        <tr>
          <td className="pt-[0.5em] zad border-t border-orange-1 align-top">
            {t("qa_1_cell_20")}
          </td>
          <td className="pt-[0.5em] zad border-t border-orange-1 align-top">
            <ul>
              <li>{t("qa_1_cell_21_1")}</li>
              <li>{t("qa_1_cell_21_2")}</li>
              <li>{t("qa_1_cell_21_3")}</li>
              <li>{t("qa_1_cell_21_4")}</li>
              <li>{t("qa_1_cell_21_5")}</li>
              <li>{t("qa_1_cell_21_6")}</li>
            </ul>
          </td>
          <td className="pt-[0.5em] zad border-t border-orange-1 align-top">
            {t("qa_1_cell_22")}
          </td>
        </tr>
      </table>
    </section>
  );
}

function Section3({ t }) {
  return (
    <section className="bg-[rgba(197,191,255,0.3)] flex flex-col items-center gap-[5em] px-[3em] pt-[6.25em] pb-[10em] rounded-[30px] mt-[12.5em]">
      <div className="max-w-[37.0625em] text-center">
        <SectionHeader title={t("qa_2")} withMargin={false} />
      </div>
      <p className="text-[1.125rem] max-w-[42.773125em] text-center">
        {t("qa_2_answer")}
      </p>
    </section>
  );
}

function Section4({ t }) {
  return (
    <section className="bg-[rgba(250,170,141,0.3)] flex flex-col items-center gap-[5em] px-[3em] pt-[6.25em] pb-[10em] rounded-[30px] mt-[12.5em]">
      <div className="max-w-[37.0625em] text-center">
        <SectionHeader title={t("qa_3")} withMargin={false} />
      </div>
      <p className="text-[1.125rem] max-w-[42.773125em] text-center">
        {t("qa_3_answer")}
      </p>
    </section>
  );
}
