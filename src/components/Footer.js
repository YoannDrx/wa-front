import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const expertiseItems = t("expertise.expertiseList", { returnObjects: true });

  return (
    <div>
      <div className={"bg-[#1C3D54]"}>
        <footer className="footer py-10 container text-white font-light">
          <div className="leading-6">
            <Image src={"/assets/logo_white.png"} width={168} height={67} alt={"logo weil & associés"} />
            26 Avenue de La Grande Armée
            <br />
            75017 PARIS FRANCE
            <br />
            +33 (0)1 44 15 98 98
            <br />
            info@weil-paris.fr
          </div>
          <div className="leftblue">
            <h3>{t("footer.Pratique Juridique")}</h3>
            {expertiseItems.map((item) => (
              <Link key={item.id} href={t(`/expertise/${item.slug}/${item.id}`)}>
                {t(item.title)}
              </Link>
            ))}
          </div>

          <div className="leftblue">
            <h3>{t("footer.À propos de notre cabinet")}</h3>
            <Link href={t("/qui-sommes-nous")}>{t("footer.Ce que nous faisons")}</Link>
            <Link href={t("/qui-sommes-nous")}>{t("footer.Notre histoire")}</Link>
            <Link href={t("/team/partenaires")}>{t("footer.Notre équipe")}</Link>
            <Link href={t("/team/partenaires")}>{t("footer.Partenaires")}</Link>
            <Link href={t("/carriere")}>{t("footer.Carrieres")}</Link>
            <Link href={t("/carriere")}>{t("footer.StagiaireJuridique")}</Link>
          </div>

          <div className="leftblue">
            <h3>{t("footer.NosPolitiques")}</h3>
            <Link href={t("/politique-confidentialite")}>{t("privacyPolicy.title")}</Link>
            <Link href={t("/politique-cookies")}>{t("cookiesPolicy.title")}</Link>
            <Link href={t("/mentions-legales")}>{t("legalMentions.title")}</Link>
          </div>
        </footer>
      </div>
      <div className="bg-[#113248] text-center text-white p-5">{t("footer.allRightsReserved")}</div>
    </div>
  );
};

export default Footer;
