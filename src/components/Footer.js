import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useArticlesContext } from "../../contexts/ArticlesContext";
import { useRouter } from "next/router";

const Footer = () => {
  const { t } = useTranslation();
  const { articles } = useArticlesContext();
  const router = useRouter();

  const expertiseItems = t("expertise.expertiseList", { returnObjects: true });

  const formatTitle = (title) => {
    if (!title) return "";
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  };

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
            01 44 15 98 98
            <br />
            info@weil-paris.fr
          </div>
          <div className="leftblue">
            <h3>{t("footer.Pratique Juridique")}</h3>
            {expertiseItems.map((item) => (
              <Link key={item.id} href={`/expertise/${item.id}`}>
                {t(item.title)}
              </Link>
            ))}
          </div>

          <div className="leftblue">
            <h3>{t("footer.À propos de notre cabinet")}</h3>
            <Link href="/qui-sommes-nous">{t("footer.Ce que nous faisons")}</Link>
            <Link href="/qui-sommes-nous">{t("footer.Notre histoire")}</Link>
            <Link href="/team/partenaires">{t("footer.Notre équipe")}</Link>
            <Link href="/team/partenaires">{t("footer.Partenaires")}</Link>
            <Link href="/carriere">{t("footer.Rejoignez-nous : Carrières")}</Link>
            <Link href="/carriere">{t("footer.Rejoignez-nous : Stagiaire juridique")}</Link>
            <Link href="/politique-confidentialite">{t("footer.politiqueConfidentialite")}</Link>
            <Link href="/politique-cookies">{t("footer.politiqueCookies")}</Link>
          </div>

          <div className="leftblue">
            <h3>{t("footer.Ressources")}</h3>
            {articles.slice(3, 13).map((article) => (
              <Link key={article.id} href={article.link}>
                {formatTitle(article[`title_${router.locale}`])}
              </Link>
            ))}
          </div>
        </footer>
      </div>
      <div className="bg-[#113248] text-center text-white p-5">{t("footer.allRightsReserved")}</div>
    </div>
  );
};

export default Footer;
