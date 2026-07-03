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
import { ArticlesProvider } from "../../contexts/ArticlesContext";
import Head from "next/head";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";

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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <CardProvider>
        <ArticlesProvider>{renderWithLayout(<Component {...pageProps} />)}</ArticlesProvider>
      </CardProvider>
      <CookieConsent
        location="bottom"
        containerClasses="cookie-consent-banner"
        contentClasses="cookie-consent-content"
        buttonWrapperClasses="cookie-consent-actions"
        overlay={true}
        expires={150}
        acceptOnScroll={true}
        buttonText={t("cookieConsent.acceptButton")}
        buttonStyle={{
          backgroundColor: "#E4EDF1",
          color: "#113248",
          fontSize: "16px",
          padding: "12px 22px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          margin: "0",
          minWidth: "150px",
        }}
        enableDeclineButton={true}
        declineButtonText={t("cookieConsent.declineButton")}
        declineButtonStyle={{
          backgroundColor: "transparent",
          color: "white",
          fontSize: "14px",
          padding: "12px 0",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          margin: "0",
          textDecoration: "underline",
          textUnderlineOffset: "4px",
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
            1: <Link href={t("cookieConsent.policyCookiesLinkHref")} className="cookie-consent-link" />,
            3: <Link href={t("cookieConsent.privacyPolicyLinkHref")} className="cookie-consent-link" />,
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
