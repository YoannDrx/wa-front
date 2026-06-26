import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const expertiseItems = t("expertise.expertiseList", { returnObjects: true });

  return (
    <div>
      <div className="bg-[#1C3D54]">
        <footer className="container grid gap-10 py-10 text-white md:grid-cols-2 lg:grid-cols-4">
          <div className="leading-7">
            <Image src={"/assets/logo_white.png"} width={168} height={67} alt={"logo weil & associés"} />
            26 Avenue de La Grande Armée
            <br />
            75017 PARIS FRANCE
            <br />
            +33 (0)1 44 15 98 98
            <br />
            info@weil-paris.fr
          </div>
          <div className="leftblue flex flex-col gap-2">
            <h3>{t("footer.Pratique Juridique")}</h3>
            {expertiseItems.map((item) => (
              <Link key={item.id} href={t(`/expertise/${item.slug}/${item.id}`)} className="hover:underline">
                {t(item.title)}
              </Link>
            ))}
          </div>

          <div className="leftblue flex flex-col gap-2">
            <h3>{t("footer.À propos de notre cabinet")}</h3>
            <Link href={t("/qui-sommes-nous")} className="hover:underline">{t("footer.Ce que nous faisons")}</Link>
            <Link href={t("/qui-sommes-nous")} className="hover:underline">{t("footer.Notre histoire")}</Link>
            <Link href={t("/team/partenaires")} className="hover:underline">{t("footer.Notre équipe")}</Link>
            <Link href={t("/team/partenaires")} className="hover:underline">{t("footer.Partenaires")}</Link>
            <Link href={t("/carriere")} className="hover:underline">{t("footer.Carrieres")}</Link>
            <Link href={t("/carriere")} className="hover:underline">{t("footer.StagiaireJuridique")}</Link>
          </div>

          <div className="leftblue flex flex-col gap-2">
            <h3>{t("footer.NosPolitiques")}</h3>
            <Link href={t("/politique-confidentialite")} className="hover:underline">{t("privacyPolicy.title")}</Link>
            <Link href={t("/politique-cookies")} className="hover:underline">{t("cookiesPolicy.title")}</Link>
            <Link href={t("/mentions-legales")} className="hover:underline">{t("legalMentions.title")}</Link>
          </div>
        </footer>
      </div>
      <div className="bg-[#113248] text-center text-white p-5">
        {t("footer.allRightsReserved", { year: currentYear })}
      </div>
    </div>
  );
};

export default Footer;
