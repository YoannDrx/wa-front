import Image from "next/image";
import { useTranslation, Trans } from "react-i18next";
import PageJumbo from "@/components/PageJumbo";
import Head from "next/head";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxMedia from "@/components/ParallaxMedia";
import RevealGroup from "@/components/RevealGroup";

const transComponents = {
  nl: (
    <>
      <br />
      <br />
    </>
  ),
  bold: <span className="font-bold" key="0" />,
  highlight: <span style={{ backgroundColor: "#E4EDF1" }} key="1" />,
  a: <a key="2" />,
  leftblue: <span className="leftblue" key="2" />,
  blue: <span className="font-bold text-primary" key="3" />,
};

const whoCards = [
  {
    title: "whoWeAre.NOUS SOMMES DEDIES A VOTRE SUCCES",
    body: "whoWeAre.nous-sommes-dedies-a-votre-succes-description",
    tone: "dark",
  },
  {
    title: "whoWeAre.NOUS SOMMES INTERNATIONAUX",
    body: "whoWeAre.nous-sommes-internationnaux-description",
    tone: "light",
  },
  {
    title: "whoWeAre.PLUS LOIN PLUS INTELLIGENT PLUS RAPIDE",
    body: "whoWeAre.plus-loin-plus-intelligent-plus-rapide-description",
    tone: "mist",
  },
  {
    title: "whoWeAre.VOTRE CONFIANCE NOUS HONORE",
    body: "whoWeAre.votre-confiance-nous-honore-description",
    tone: "dark",
  },
];

const toneClasses = {
  dark: "border-wa-deep bg-wa-deep text-white shadow-[0_26px_80px_rgba(17,50,72,0.2)]",
  light: "border-primary/15 bg-white text-neutral shadow-[0_24px_70px_rgba(17,50,72,0.08)]",
  mist: "border-primary/15 bg-light-blue/70 text-neutral shadow-[0_24px_70px_rgba(17,50,72,0.08)]",
};

const WhoCard = ({ item, index }) => (
  <article className={["group relative flex min-h-[360px] flex-col overflow-hidden rounded-[6px] border p-7 transition duration-300 hover:-translate-y-1 md:p-9", toneClasses[item.tone]].join(" ")}>
    <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-current/10 transition duration-500 group-hover:scale-125" />
    <span className="mb-8 font-mono text-xs font-bold uppercase tracking-[0.2em] opacity-55">{String(index + 1).padStart(2, "0")}</span>
    <h2 className={["mb-5 text-2xl", item.tone === "dark" ? "text-white" : "text-primary"].join(" ")}>
      <Trans i18nKey={item.title} />
    </h2>
    <p className={["mb-0 leading-8", item.tone === "dark" ? "text-white/[0.88]" : "text-neutral/85"].join(" ")}>
      <Trans i18nKey={item.body} components={transComponents} />
    </p>
  </article>
);

export default function WhoWeAre() {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>{t("Qui sommes-nous")}</title>
        <meta name="description" content={t("whoWeAre.pageDescriptionSEO")} />
      </Head>
      <div className="container">
        <PageJumbo titleKey={t("whoWeAre.presentation")} textKey={t("whoWeAre.firmPresentation")} />
      </div>
      <div className="container pb-16">
        <section className="mb-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <AnimatedSection direction="left" className="relative">
            <ParallaxMedia className="relative overflow-hidden rounded-[6px] shadow-[0_28px_80px_rgba(17,50,72,0.16)]" distance={32}>
              <Image
                src="/assets/who-we-are/Salle-de-conference.png"
                alt={t("whoWeAre.presentation")}
                width={1628}
                height={917}
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="h-[360px] w-full object-cover md:h-[520px]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(11,35,50,0.7))]" />
            </ParallaxMedia>
            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 rounded-[6px] border border-white/20 bg-white/[0.88] text-center shadow-[0_22px_60px_rgba(0,0,0,0.16)] backdrop-blur">
              {["1974", "FR", "DE"].map((item) => (
                <div key={item} className="border-r border-primary/10 px-3 py-4 last:border-r-0">
                  <span className="block font-mono text-lg font-bold text-primary">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" className="relative rounded-[6px] border border-primary/15 bg-wa-porcelain p-7 shadow-[0_24px_70px_rgba(17,50,72,0.08)] md:p-10">
            <span className="wa-eyebrow">{t("whoWeAre.presentation")}</span>
            <h2 className="mt-4 text-primary">
              <Trans i18nKey="whoWeAre.PLUS LOIN PLUS INTELLIGENT PLUS RAPIDE" />
            </h2>
            <p className="wa-prose mb-0">
              <Trans i18nKey="whoWeAre.plus-loin-plus-intelligent-plus-rapide-description" components={transComponents} />
            </p>
          </AnimatedSection>
        </section>

        <section>
          <RevealGroup className="grid grid-cols-1 gap-5 lg:grid-cols-2" childClassName="h-full" stagger={0.11}>
            {whoCards.map((item, index) => (
              <WhoCard key={item.title} item={item} index={index} />
            ))}
          </RevealGroup>
        </section>
      </div>
    </div>
  );
}
