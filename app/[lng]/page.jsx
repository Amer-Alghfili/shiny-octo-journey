import { useTranslation } from "@/i18n";
import { Button } from "@nextui-org/button";

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng, "translation");

  return (
    <div className="zad bg-red">
      {t("home")}
      <Button>Hey</Button>
    </div>
  );
}
