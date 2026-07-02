import { useTranslation, Trans } from "react-i18next";
import PageJumbo from "@/components/PageJumbo";
import Head from "next/head";
import RevealGroup from "@/components/RevealGroup";
import { FaBalanceScale, FaGlobeEurope, FaHandshake, FaLayerGroup } from "react-icons/fa";

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
    icon: FaBalanceScale,
  },
  {
    title: "whoWeAre.NOUS SOMMES INTERNATIONAUX",
    body: "whoWeAre.nous-sommes-internationnaux-description",
    tone: "light",
    icon: FaGlobeEurope,
  },
  {
    title: "whoWeAre.PLUS LOIN PLUS INTELLIGENT PLUS RAPIDE",
    body: "whoWeAre.plus-loin-plus-intelligent-plus-rapide-description",
    tone: "mist",
    icon: FaLayerGroup,
  },
  {
    title: "whoWeAre.VOTRE CONFIANCE NOUS HONORE",
    body: "whoWeAre.votre-confiance-nous-honore-description",
    tone: "dark",
    icon: FaHandshake,
  },
];

const toneClasses = {
  dark: {
    root: "border-wa-deep bg-wa-deep text-white shadow-[0_26px_80px_rgba(17,50,72,0.2)]",
    title: "text-white",
    body: "text-white/[0.88]",
    icon: "bg-white/10 text-light-blue",
    number: "text-white/50",
    line: "bg-light-blue",
  },
  light: {
    root: "border-primary/15 bg-white text-neutral shadow-[0_24px_70px_rgba(17,50,72,0.08)]",
    title: "text-primary",
    body: "text-neutral/85",
    icon: "bg-light-blue text-primary",
    number: "text-primary/45",
    line: "bg-primary",
  },
  mist: {
    root: "border-primary/15 bg-light-blue/70 text-neutral shadow-[0_24px_70px_rgba(17,50,72,0.08)]",
    title: "text-wa-ink",
    body: "text-neutral/85",
    icon: "bg-white text-primary",
    number: "text-primary/45",
    line: "bg-primary",
  },
};

const WhoCard = ({ item, index }) => {
  const tone = toneClasses[item.tone] || toneClasses.light;
  const Icon = item.icon;

  return (
    <article className={["group relative flex min-h-[440px] h-full flex-col overflow-hidden rounded-[6px] border p-7 transition duration-300 hover:-translate-y-1 md:p-9 lg:min-h-[520px]", tone.root].join(" ")}>
      <div className="wa-blueprint absolute inset-0 opacity-[0.08]" aria-hidden="true" />
      <div className="absolute inset-x-7 top-0 h-px overflow-hidden bg-current/10 md:inset-x-9">
        <span className={["block h-full w-1/2 -translate-x-full opacity-75 transition duration-700 group-hover:translate-x-[220%]", tone.line].join(" ")} />
      </div>
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full border border-current/10 transition duration-700 group-hover:scale-125" />
      <div className="relative flex h-full flex-col">
        <div className="mb-8 flex items-center justify-between gap-4">
          <span className={["font-mono text-xs font-bold uppercase tracking-[0.2em]", tone.number].join(" ")}>{String(index + 1).padStart(2, "0")}</span>
          <span className={["flex h-11 w-11 items-center justify-center rounded-[4px] transition duration-300 group-hover:-translate-y-1", tone.icon].join(" ")}>
            <Icon aria-hidden="true" />
          </span>
        </div>
        <h2 className={["mb-5 text-2xl", tone.title].join(" ")}>
          <Trans i18nKey={item.title} />
        </h2>
        <p className={["mb-0 leading-8", tone.body].join(" ")}>
          <Trans i18nKey={item.body} components={transComponents} />
        </p>
      </div>
    </article>
  );
};

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
      <section className="relative overflow-hidden bg-wa-porcelain/70 pb-16 pt-2 md:pb-20">
        <div className="wa-blueprint absolute inset-0 opacity-[0.24]" aria-hidden="true" />
        <div className="container relative">
          <RevealGroup className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:auto-rows-fr" childClassName="h-full" stagger={0.1} distance={34}>
            {whoCards.map((item, index) => (
              <WhoCard key={item.title} item={item} index={index} />
            ))}
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
