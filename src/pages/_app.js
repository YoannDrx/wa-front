import Layout from "@/components/Layout"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "@/lang/en"
import de from "@/lang/de"
import "@/styles/globals.css"
import { useRouter } from 'next/router'
import { useEffect } from "react"

i18n
.use(initReactI18next) // passes i18n down to react-i18next
.init({
    resources: {
        en: {
            translation: en
        },
        de: {
            translation: de
        },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "fr",

    interpolation: {
        escapeValue: false // react already safes from xss
    }
});

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    const router = useRouter()

    useEffect(() => {
        i18n.changeLanguage(router.locale)
    }, [router.locale])

    const renderWithLayout =
        Component.getLayout ||
        function (page) {
            return <Layout>{page}</Layout>;
        };


    return (<>
        {renderWithLayout(<Component {...pageProps} />)}
    </>
    );
}