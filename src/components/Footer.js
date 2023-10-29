import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
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
            01 44 15 98 98 / 01 44 15 98 99
            <br />
            info@weil-paris.fr
          </div>
          <div className="leftblue">
            <h3>{t("footer.Pratique Juridique")}</h3>
            <Link href="#">{t("footer.Droit du travail & de l'emploi")}</Link>
            <Link href="#">{t("footer.Fusions & Acquisitions")}</Link>
            <Link href="#">{t("footer.Propriété intellectuelle / industrielle")}</Link>
            <Link href="#">{t("footer.Droit des sociétés")}</Link>
            <Link href="#">{t("footer.Litige & Arbitrage")}</Link>
            <Link href="#">{t("footer.Droit commercial & de la concurrence")}</Link>
            <Link href="#">{t("footer.Droit de la faillite")}</Link>
            <Link href="#">{t("footer.Délinquance financière")}</Link>
          </div>

          <div className="leftblue">
            <h3>{t("footer.À propos de notre cabinet")}</h3>
            <Link href="#">{t("footer.Ce que nous faisons")}</Link>
            <Link href="#">{t("footer.Notre histoire")}</Link>
            <Link href="#">{t("footer.Notre équipe")}</Link>
            <Link href="#">{t("footer.Partenaires")}</Link>
            <Link href="#">{t("footer.Rejoignez-nous : Carrières")}</Link>
            <Link href="#">{t("footer.Rejoignez-nous : Stagiaire juridique")}</Link>
            <Link href="#">{t("footer.Diversité & Inclusion")}</Link>
            <Link href="#">{t("footer.Pro bono")}</Link>
          </div>

          <div className="leftblue">
            <h3>{t("footer.Ressources")}</h3>
            <Link href="#">{t("footer.Articles & Publications")}</Link>
            <Link href="#">{t("footer.Rapport sur la propriété intellectuelle 2022")}</Link>
            <Link href="#">{t("footer.Rapport sur le droit du travail 2022")}</Link>
            <Link href="#">{t("footer.Prévisions M&A 2022")}</Link>
            <Link href="#">{t("footer.Réseau d'alliance Innangard")}</Link>
            <Link href="#">{t("footer.Prix & Reconnaissance")}</Link>
            <Link href="#">{t("footer.Rapport sur le droit des sociétés 2022")}</Link>
            <Link href="#">{t("footer.Blog")}</Link>
          </div>
        </footer>
      </div>
      <div className="bg-[#113248] text-center text-white p-5">{t("footer.allRightsReserved")}</div>
    </div>
  );
};

export default Footer;
