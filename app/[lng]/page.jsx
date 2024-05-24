import Hero from "@/components/hero";
import { useTranslation } from "@/i18n";

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng, "translation");

  return <Hero title={t("home_hero")} src="/img/hero-home.png" />;
}
