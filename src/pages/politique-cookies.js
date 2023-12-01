import React, { useEffect } from "react";
import Image from "next/image";
import { useTranslation, Trans } from "react-i18next";
import PageJumbo from "@/components/PageJumbo";

export default function PolitiqueCookies() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  useEffect(() => {}, [i18n.language]);

  return (
    <div>
      <PageJumbo titleKey={t("footer.politiqueCookies")} textKey={t("intro à trouver")} />
      <div className="container pb-12">
        <div className="hdrd">
          <h1>Politique d'utilisation des cookies</h1>
          <br />
          <p>
            Mail Certificate s’engage à ce que la collecte et le traitement de vos données, effectués sur notre site, soient
            conformes au Règlement général sur la protection des données (RGPD), à la « loi Informatique et Libertés » et des
            lignes directrices CNIL issues des Délibérations.
          </p>
          <p>
            L’objectif de cette politique est de vous fournir des informations transparentes sur les cookies utilisés par Mail
            Certificate.
          </p>
        </div>
        <h2>
          <br />
          1. Qu’est-ce que les cookies ?
        </h2>
        <p>
          Selon la définition donnée par la CNIL: «un « cookie » est une suite d’informations, généralement de petite taille et
          identifié par un nom, qui peut être transmis à votre navigateur par un site web sur lequel vous vous connectez.
          <br />
          Votre navigateur web le conservera pendant une certaine durée, et le renverra au serveur web chaque fois que vous vous y
          reconnecterez».
        </p>
        <p>
          Les cookies ont de multiples usages : ils vous permettent d’enregistrer vos préférences de navigation, de naviguer
          aisément d’une page à l’autre, d’enregistrer votre identifiant de connexion etc.
        </p>
        <h3>Les cookies peuvent être catégorisés en fonction de leur objectif :</h3>
        <p>
          <strong>Les cookies nécessaires au service</strong>: il s’agit de cookies indispensables au fonctionnement de notre
          service, notamment en ce qui concerne le procédé de réception des courriers certifiés par horodatage par les
          destinataires ou l’ajout d’une carte bancaire pour la facturation.
        </p>
        <p>
          <strong>Les cookies de statistiques de visites anonymes</strong>: ce sont les cookies qui permettent de récolter de
          manière agrégée, et donc anonyme, des informations concernant la navigation des utilisateurs. Les cookies Google
          Analytics en font partie.
        </p>
        <p>
          <strong>Les cookies d’analyses tierces</strong>: ces cookies permettent à notre site d’enregistrer vos préférences de
          navigation et améliorent donc votre expérience d’utilisation.
        </p>

        <p>
          <strong>Les cookies publicitaires</strong>: ce sont les cookies qui permettent de vous montrer les publicités les plus
          adaptées à vos intérêts. Ils permettent également de ne pas afficher une même publicité plusieurs fois et de mesurer
          l’efficacité de la campagne publicitaire.
        </p>
        <h2>
          <br />
          2. Comment Mail Certificate utilise les cookies ?
        </h2>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>Types de cookies</th>
              <th>Objectifs</th>
              <th>Nom du Cookie</th>
              <th>Durée de conservation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nécessaires au service (cookies de session)</td>
              <td>Ces cookies sont nécessaires pour nous permettre d’exploiter le service Mail Certificate demandé.</td>
              <td>Session</td>
              <td>12 mois</td>
            </tr>
            <tr>
              <td>Google Analytics (cookies tiers)</td>
              <td>
                Collecte des informations sur la façon dont les visiteurs utilisent notre site. Nous utilisons ces informations
                pour compiler des rapports et nous aider à améliorer le site.
              </td>
              <td>_ga, _gid, _gat</td>
              <td>12 mois</td>
            </tr>
            <tr>
              <td>Facebook (cookies tiers)</td>
              <td>
                Ces cookies permettent à Facebook de proposer les Facebook Products à vous et à d'autres personnes, et de
                comprendre les informations reçues sur vous, y compris les informations sur votre utilisation d'autres sites web
                et applications, que vous soyez ou non inscrit ou connecté.
              </td>
              <td>fr, datr, sb, _fbp, wd, spin</td>
              <td>12 mois</td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>
          Les cookies peuvent être catégorisés en fonction de leur objectif : Les cookies nécessaires au service : il s’agit de
          cookies indispensables au fonctionnement de notre service.
        </p>
        <p>
          Les cookies de statistiques de visites anonymes : ce sont les cookies qui permettent de récolter de manière agrégée, et
          donc anonyme, des informations concernant la navigation des utilisateurs.
        </p>
        <p>
          Les cookies d’analyses tierces : ces cookies permettent à notre site d’enregistrer vos préférences de navigation et
          améliorent donc votre expérience d’utilisation. Les cookies publicitaires : ce sont les cookies qui permettent de vous
          montrer les publicités les plus adaptées à vos intérêts.
        </p>
        <h2>
          <br />
          3. Comment gérer vos préférences en matière de cookies ?
        </h2>
        <p>
          Les cookies nécessaires au bon fonctionnement de notre site internet sont des cookies exemptés du recueil du
          consentement et son autorisés par défaut.
        </p>
        <p>
          La base légale pour le traitement de vos données personnelles est votre consentement, symbolisé par une case à cocher à
          la fin des formulaires ou un bouton « accepter » à côté d’un bouton « refuser » pour les cookies.
        </p>
        <p>
          Si l'utilisateur n'effectue aucune action spécifique, Mail Certificate interprète cela comme une acceptation tacite de
          l'utilisation de ses cookies. Cette acceptation est alors automatiquement déduite lorsque l'utilisateur fait défiler la
          page.
        </p>
        <h2>4. Mises à jour de cette Politique</h2>
        <p>La présente Politique de cookies peut être amenée à évoluer.</p>
        <h2>5. Nous contacter</h2>
        <p>
          Nous vous rappelons que vous avez le droit d’introduire une réclamation auprès de l’autorité de contrôle, la Commission
          Nationale de l’Informatique et des Libertés (CNIL).
        </p>
        <p>
          La désignation d’un Délégué à la Protection des Données témoigne de l’attachement de Mail Certificate filiale du groupe
          Docaposte à la protection, la sécurité et la confidentialité des Données Personnelles de ses clients. Si vous avez des
          questions concernant la présente politique de confidentialité et les activités de traitement des données mises en œuvre
          par Mail Certificate, ou si vous souhaitez exercer l’un de vos droits en vertu du RGPD, veuillez contacter :
        </p>
        <ul>
          <li>Par courrier :</li>
          <ul>
            <li>Mail Certificate</li>
            <li>37 A Avenue Egle</li>
            <li>78600 Maisons-Laffitte</li>
          </ul>
          <li>Par email :</li>
          <ul>
            <li>
              <a href="mailto:contact@mail-certificate.com">contact@mail-certificate.com</a>
            </li>
          </ul>
        </ul>
        <h2>6. Modifications de la page</h2>
        <p>Ce document Mail Certificate peut être amené à évoluer.</p>
        <br />
      </div>
    </div>
  );
}
