import Layout from "@/components/Layout";
import i18n from "i18next";
import { Trans, initReactI18next, useTranslation } from "react-i18next";
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
  process?.env?.NODE_ENV === "development" ? "http://localhost:3000/api" : "https://www.weil-paris.fr/api";

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
  const { t } = useTranslation();

  useEffect(() => {
    const consentCookie = document.cookie.split("; ").find((row) => row.startsWith("CookieConsent="));
    if (consentCookie) {
      const consentValue = consentCookie.split("=")[1];
      if (consentValue === "accepted") {
        // Full access
      } else if (consentValue === "declined") {
        // No access
      }
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
        style={{ background: "#37749E", width: "100%", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
        buttonWrapperClasses="flex flex-col xs:flex-row sm:flex-col 2xl:flex-row"
        overlay={true}
        expires={150}
        acceptOnScroll={true}
        buttonText={t("cookieConsent.acceptButton")}
        buttonStyle={{
          backgroundColor: "#E4EDF1",
          color: "#37749E",
          fontSize: "16px",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          margin: "15px",
        }}
        enableDeclineButton={true}
        declineButtonText={t("cookieConsent.declineButton")}
        declineButtonStyle={{
          backgroundColor: "#37749E",
          color: "white",
          fontSize: "14px",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          margin: "15px",
          textDecoration: "underline",
        }}
        onAccept={() => {
          document.cookie = "CookieConsent=accepted; max-age=31536000; path=/; samesite=lax"; // 1 an
        }}
        onDecline={() => {
          document.cookie = "CookieConsent=declined; max-age=31536000; path=/; samesite=lax"; // 1 an
        }}>
        <Trans
          i18nKey="cookieConsent.message"
          components={{
            1: <Link href={t("cookieConsent.policyCookiesLinkHref")} style={{ color: "lightgreen" }} />,
            3: <Link href={t("cookieConsent.privacyPolicyLinkHref")} style={{ color: "lightgreen" }} />,
            nl: (
              <>
                <br />
                <br />
              </>
            ),
            br: <br />,
            bold: <span className="font-bold" key="2" />,
          }}
        />
      </CookieConsent>
    </>
  );
}
