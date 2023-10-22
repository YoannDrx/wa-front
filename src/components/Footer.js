import Image from "next/image";
import Link from "next/link";
import {useTranslation} from "react-i18next";

const Footer = () => {
	const {t} = useTranslation();
	return (
		<div>
			<div className={"bg-[#1C3D54] mt-6"}>
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
						<h3>{t("Pratique Juridique")}</h3>
						<Link href="#">{t("Droit du travail & de l'emploi")}</Link>
						<Link href="#">{t("Fusions & Acquisitions")}</Link>
						<Link href="#">{t("Propriété intellectuelle / industrielle")}</Link>
						<Link href="#">{t("Droit des sociétés")}</Link>
						<Link href="#">{t("Litige & Arbitrage")}</Link>
						<Link href="#">{t("Droit commercial & de la concurrence")}</Link>
						<Link href="#">{t("Droit de la faillite")}</Link>
						<Link href="#">{t("Délinquance financière")}</Link>
					</div>

					<div className="leftblue">
						<h3>{t("À propos de notre cabinet")}</h3>
						<Link href="#">{t("Ce que nous faisons")}</Link>
						<Link href="#">{t("Notre histoire")}</Link>
						<Link href="#">{t("Notre équipe")}</Link>
						<Link href="#">{t("Partenaires")}</Link>
						<Link href="#">{t("Rejoignez-nous : Carrières")}</Link>
						<Link href="#">{t("Rejoignez-nous : Stagiaire juridique")}</Link>
						<Link href="#">{t("Diversité & Inclusion")}</Link>
						<Link href="#">{t("Pro bono")}</Link>
					</div>

					<div className="leftblue">
						<h3>{t("Ressources")}</h3>
						<Link href="#">{t("Articles & Publications")}</Link>
						<Link href="#">{t("Rapport sur la propriété intellectuelle 2022")}</Link>
						<Link href="#">{t("Rapport sur le droit du travail 2022")}</Link>
						<Link href="#">{t("Prévisions M&A 2022")}</Link>
						<Link href="#">{t("Réseau d'alliance Innangard")}</Link>
						<Link href="#">{t("Prix & Reconnaissance")}</Link>
						<Link href="#">{t("Rapport sur le droit des sociétés 2022")}</Link>
						<Link href="#">{t("Blog")}</Link>
					</div>
				</footer>
			</div>
			<div className="bg-[#113248] text-center text-white p-5">
				2023 Weil & Associés. Legal Informations. All Rights Reserved.
			</div>
		</div>
	);
};

export default Footer;
