import Layout from "@/components/Layout";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/lang/en";
import de from "@/lang/de";
import fr from "@/lang/fr";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { CardProvider } from "../../contexts/ArticleCardContext";
import axios from "axios";
import { ArticlesProvider } from "../../contexts/ArticlesContext";
import Head from "next/head";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";

axios.defaults.baseURL =
  process?.env?.NODE_ENV === "development" ? "http://localhost:3000/api" : "https://wa-front.vercel.app/api";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      de: {
        translation: de,
      },
      fr: {
        translation: fr,
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "fr",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  useEffect(() => {
    // Vérifier si le cookie de consentement existe
    const consentCookie = document.cookie.split("; ").find((row) => row.startsWith("CookieConsent="));

    if (consentCookie) {
      // Si le cookie existe, le réinitialiser
      document.cookie = "CookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    i18n.changeLanguage(router.locale);
  }, [router.locale]);

  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return <Layout>{page}</Layout>;
    };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <CardProvider>
        <ArticlesProvider>{renderWithLayout(<Component {...pageProps} />)}</ArticlesProvider>
      </CardProvider>
      <CookieConsent
        location="bottom"
        style={{ background: "#37749E", width: "100%" }}
        buttonWrapperClasses="flex flex-col xs:flex-row sm:flex-col 2xl:flex-row"
        overlay={true}
        expires={150}
        acceptOnScroll={true}
        buttonText={"J'accepte"}
        buttonStyle={{
          backgroundColor: "#4B6F44",
          color: "white",
          fontSize: "16px",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          margin: "5px",
        }}
        enableDeclineButton={true}
        declineButtonText={"Continuer sans accepter"}
        declineButtonStyle={{
          backgroundColor: "#A43820",
          color: "white",
          fontSize: "16px",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          margin: "5px",
        }}
        onDecline={() => {
          window.close();
        }}>
        <p>
          Nous utilisons des cookies pour améliorer l'expérience utilisateur.
          <br />
          En poursuivant votre navigation sur ce site, vous acceptez notre utilisation des cookies conformément à notre{" "}
          <Link href="/politique-cookies" style={{ color: "#F1D302" }}>
            Politique de Cookies
          </Link>
          . <br />
          Pour plus d'informations, veuillez consulter notre{" "}
          <Link href="/politique-confidentialite" style={{ color: "#F1D302" }}>
            Politique de Confidentialité
          </Link>
          .
        </p>
      </CookieConsent>
    </>
  );
}
