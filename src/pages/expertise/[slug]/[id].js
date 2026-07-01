import { Trans, useTranslation } from "react-i18next";
import PageJumbo from "@/components/PageJumbo";
import Image from "next/image";
import Head from "next/head";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxMedia from "@/components/ParallaxMedia";

export async function getStaticProps({ params, locale }) {
  const translations = require(`../../../lang/${locale}.json`);
  const expertise = translations.expertise.expertiseList.find((item) => item.id.toString() === params.id);

  if (!expertise) {
    return { notFound: true };
  }

  return { props: { expertise } };
}

export async function getStaticPaths() {
  const frItems = require("../../../lang/fr.json").expertise.expertiseList;
  const deItems = require("../../../lang/de.json").expertise.expertiseList;
  const enItems = require("../../../lang/en.json").expertise.expertiseList;

  const paths = [
    ...frItems.map((item) => ({ params: { slug: item.slug, id: item.id.toString() }, locale: "fr" })),
    ...deItems.map((item) => ({ params: { slug: item.slug, id: item.id.toString() }, locale: "de" })),
    ...enItems.map((item) => ({ params: { slug: item.slug, id: item.id.toString() }, locale: "en" })),
  ];

  return { paths, fallback: "blocking" };
}

export default function ExpertisePage({ expertise }) {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>{t(expertise.title)}</title>
        <meta
          name="description"
          content={t("expertise.metaDescription", {
            title: t(expertise.title),
          })}
        />
      </Head>

      <PageJumbo titleKey={t(expertise.title)} textKey={t(expertise.intro)} backgroundColor="#F7FAFB" />
      <div className="my-12 grid grid-cols-1 gap-8 md:grid-cols-[0.74fr_1.26fr] md:items-start">
        <AnimatedSection direction="left" className="relative flex h-full w-full flex-col items-center">
          <ParallaxMedia className="relative flex aspect-square w-full max-w-[420px] items-center justify-center overflow-hidden rounded-[6px] border border-primary/15 bg-wa-porcelain p-6 shadow-[0_24px_70px_rgba(17,50,72,0.1)]" distance={24}>
            <div className="wa-blueprint absolute inset-0 opacity-70" />
            <div className="absolute h-[76%] w-[76%] rounded-full border border-primary/15 bg-light-blue/70" />
            <div className="relative z-10 flex h-full w-full items-center justify-center p-4">
              <Image src={expertise.image} alt={t(expertise.title)} width={300} height={300} className="h-auto max-h-full w-auto max-w-full drop-shadow-[0_24px_30px_rgba(17,50,72,0.18)]" />
            </div>
          </ParallaxMedia>
        </AnimatedSection>
        <AnimatedSection direction="right" className="wa-shell min-w-0 p-6 md:p-9">
          <div className="wa-prose space-y-5">
          <p>
            <Trans
              i18nKey={expertise.paragraph1}
              components={{
                nl: (
                  <>
                    <br />
                    <br />
                  </>
                ),
                bold: <span className="font-bold" key="0" />,
                highlight: <span style={{ backgroundColor: "#37749E", color: "white" }} key="1" />,
                a: <a key="2" style={{ backgroundColor: "#37749E", color: "white", padding: "3px" }} />,
                leftblue: <span className="leftblue" key="2" />,
                blue: <span className="font-bold" style={{ color: "#37749E" }} key="3" />,
                square: <span className="square-blue" key="4" />,
              }}
            />
          </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

// Avec flottement de l'image :

// export default function ExpertisePage({ expertise }) {
//   const { t } = useTranslation();

//   return (
//     <div className="container mx-auto px-4">
//       <PageJumbo titleKey={t(expertise.title)} textKey={t(expertise.intro)} />
//       <div className="my-12">
//         {/* Image avec style de flottement */}
//         <div className="float-left mr-4 mb-4">
//           <div className="border border-black p-2 w-[400px] h-[400px] flex items-center justify-center relative group overflow-hidden">
//             <div style={{ backgroundColor: "#E4EDF1" }} className="absolute w-[90%] h-[90%] rounded-full opacity-50"></div>
//             <div className="w-full h-full relative z-10 p-2 flex items-center justify-center">
//               <Image src={expertise.image} alt={t(expertise.titleKey)} width={280} height={280} />
//             </div>
//           </div>
//         </div>

//         {/* Texte s'enroulant autour de l'image */}
//         <div className="text-md leading-7 space-y-5">
//           <p>
//             <Trans
//               i18nKey={expertise.paragraph1}
//               components={{
//                 nl: (
//                   <>
//                     <br />
//                     <br />
//                   </>
//                 ),
//                 bold: <span className="font-bold" key="0" />,
//                 highlight: <span style={{ backgroundColor: "#E4EDF1" }} key="1" />,
//                 a: <a key="2" />,
//                 leftblue: <span className="leftblue" key="2" />,
//                 blue: <span className="font-bold" style={{ color: "#37749E" }} key="3" />,
//                 square: <span className="square-blue" key="4" />,
//               }}
//             />{" "}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
