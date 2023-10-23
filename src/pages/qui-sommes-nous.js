import { useTranslation } from "react-i18next";

export default function WhoWeAre() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("Qui sommes-nous")}</h2>
    </div>
  );
}
