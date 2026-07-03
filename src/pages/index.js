import Button from "@/components/Button";
import { apiClient } from "@/services/apiClient";
import Image from "next/image";
import { Trans, useTranslation } from "react-i18next";
import { useArticlesContext } from "../../contexts/ArticlesContext";
import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxMedia from "@/components/ParallaxMedia";
import RevealGroup from "@/components/RevealGroup";
import { motion, useReducedMotion } from "motion/react";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

export async function getServerSideProps() {
  let articles = [];
  try {
    const response = await apiClient.get("/articles");
    articles = response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
  return { props: { articles } };
}

const heroCityImages = [
  { src: "/assets/home/berlin.jpg", width: 203, height: 531, alt: "Avocat Berlin", label: "Berlin" },
  { src: "/assets/home/paris.jpg", width: 203, height: 531, alt: "Avocat Paris", label: "Paris" },
  { src: "/assets/home/nyc.jpg", width: 202, height: 531, alt: "Avocat New York City", label: "New York" },
];

const splitHeroTitle = (value) => {
  const normalized = value.trim().toUpperCase() === "YOUR TRUST IS OUR PRIDE" ? "Your trust is our pride" : value;
  const words = normalized.trim().split(/\s+/);

  if (words.length <= 2) {
    return [normalized];
  }

  return [words.slice(0, 2).join(" "), words.slice(2).join(" ")];
};

const HeroTitle = ({ title }) => {
  const shouldReduceMotion = useReducedMotion();
  const lines = splitHeroTitle(title);

  return (
    <h1 className="mb-5 max-w-none text-[3.45rem] normal-case leading-[0.9] text-white sm:max-w-3xl sm:text-6xl lg:text-7xl">
      <span className="sr-only">{lines.join(" ")}</span>
      <span aria-hidden="true">
        {lines.map((line, index) => (
          <span key={line} className="contents">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 26, filter: shouldReduceMotion ? "none" : "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.9, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}>
              {line}
            </motion.span>
          </span>
        ))}
      </span>
    </h1>
  );
};

const HeroBadge = ({ className = "", shouldReduceMotion }) => (
  <motion.div
    className={["shrink-0 drop-shadow-[0_16px_32px_rgba(0,0,0,0.24)]", className].filter(Boolean).join(" ")}
    animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
    <Image
      src="/assets/home/best-law-firms-france-2026.png"
      width={1921}
      height={2246}
      alt="Best Law Firms France 2026"
      className="h-auto w-full"
      priority
    />
  </motion.div>
);

const CityStack = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid w-full grid-cols-3 items-start gap-2 sm:gap-3 lg:gap-4">
      {heroCityImages.map((image, index) => (
        <motion.div
          key={image.src}
          className={[
            "group relative overflow-hidden rounded-[6px] bg-wa-ink shadow-[0_20px_55px_rgba(17,50,72,0.12)]",
            index === 1 ? "sm:mt-8" : "",
          ].join(" ")}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.78, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}>
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1280px) 220px, (min-width: 640px) 30vw, 33vw"
            className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-[1.04] sm:h-[520px] xl:h-[560px]"
            alt={image.alt}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-wa-ink/85 to-transparent px-2 py-3 text-white sm:p-4">
            <span className="block truncate font-mono text-[10px] font-bold uppercase tracking-[0.1em] sm:text-xs sm:tracking-[0.18em]">{image.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const NetworkLogoCard = ({ href, src, alt, imageClassName, width, height, sizes }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex min-h-[180px] w-full items-center justify-center overflow-hidden rounded-[6px] border border-primary/15 bg-light-blue/35 p-8 transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-white hover:shadow-[0_28px_70px_rgba(17,50,72,0.14)]">
    <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-[4px] border border-primary/20 bg-white text-primary transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-primary group-hover:text-white">
      <FaExternalLinkAlt aria-hidden="true" />
    </span>
    <span className="absolute inset-x-6 top-0 h-px overflow-hidden bg-primary/15">
      <span className="block h-full w-1/2 bg-primary/60 opacity-0 transition group-hover:opacity-100 group-hover:[animation:wa-line-scan_1.2s_ease-in-out]" />
    </span>
    <Image src={src} alt={alt} className={["h-auto transition duration-300 group-hover:scale-[1.03]", imageClassName].join(" ")} width={width} height={height} sizes={sizes} />
  </Link>
);

const Jumbo = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="jumbo-background overflow-hidden">
      <div className="container mx-auto">
        <div className="grid min-h-[calc(100svh-5rem)] items-center gap-10 py-10 md:min-h-[calc(100svh-5.625rem)] md:py-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 xl:gap-20">
          <AnimatedSection className="relative z-10">
            <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/72">
              <span className="h-px w-10 bg-white/45" />
              <span>Weil & Associés</span>
            </div>
            <HeroTitle title={t("home.votreConfiance")} />
            <div className="flex items-start gap-4 sm:block">
              <p className="mb-0 max-w-2xl flex-1 text-xl leading-8 text-white/90 md:text-2xl md:leading-9">{t("home.heroSubtitle")}</p>
              <HeroBadge className="mt-1 w-20 sm:hidden" shouldReduceMotion={shouldReduceMotion} />
            </div>
            <div className="mt-8 flex justify-center sm:items-center sm:justify-start sm:gap-6">
              <Button href={"/contact"} color="primary" size="lg" className="w-full min-[430px]:max-w-72 sm:w-auto sm:max-w-none">
                <span>{t("Nous contacter")}</span>
                <FaArrowRight aria-hidden="true" className="ml-2 text-sm" />
              </Button>
              <HeroBadge className="hidden w-[142px] sm:block" shouldReduceMotion={shouldReduceMotion} />
            </div>
          </AnimatedSection>
          <div className="w-full">
            <ParallaxMedia className="group relative overflow-hidden rounded-[6px] border border-white/10 shadow-[0_34px_90px_rgba(0,0,0,0.28)]" distance={28}>
              {/* <video src="/assets/home/cabinet.mp4" controls={false} loop autoPlay muted /> */}
              <Image
                src="/assets/home/cabinet.gif"
                width={784}
                height={440}
                alt="video Paris Berlin New-York"
                className="h-auto w-full scale-[1.01] transition duration-700 group-hover:scale-[1.035]"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.16),transparent_32%,transparent_68%,rgba(228,237,241,0.12))]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/30" />
              <div className="pointer-events-none absolute inset-y-6 right-6 w-px bg-white/18" />
            </ParallaxMedia>
          </div>
        </div>
      </div>
    </div>
  );
};

function Home({ articles }) {
  const { t } = useTranslation();
  const { setArticles } = useArticlesContext();

  useEffect(() => {
    setArticles(articles);
  }, [articles, setArticles]);

  return (
    <div>
      <Head>
        <title>{t("Accueil")}</title>
        <meta name="description" content={t("home.pageDescriptionSEO")} />
      </Head>
      <Jumbo />
      <section className="relative overflow-hidden bg-wa-porcelain">
        <div className="wa-blueprint absolute inset-0 opacity-[0.32]" aria-hidden="true" />
        <div className="container relative wa-section">
          <div className="grid items-center gap-12 xl:grid-cols-[0.95fr_1.05fr] xl:gap-24">
            <AnimatedSection direction="left" className="min-w-0">
              <CityStack />
            </AnimatedSection>
            <AnimatedSection direction="right" className="flex-1">
              <h2 className="text-center underblue">{t("home.presentation")}</h2>
              <div className="flex flex-col items-center justify-center">
                <p className="wa-prose px-0 md:px-4">
                  <Trans
                    i18nKey="home.home1"
                    components={{
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
                      blue: <span className="font-bold" style={{ color: "#37749E" }} key="3" />,
                      square: <span className="square-blue" key="4" />,
                    }}
                  />
                </p>
                <Button href={"/qui-sommes-nous"} className="mt-2" color="primary" size="lg">
                  {t("En savoir plus")}
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <div className="bg-[url('/assets/home/rectangle29.png')] bg-cover">
        <div className="container py-16 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <AnimatedSection direction="left" className="lg:pl-14">
              <div>
                <h2>{t("home.further")}.</h2>
                <h2>{t("home.smarter")}.</h2>
              </div>
              <h2 className="text-primary">{t("home.swiftly")}.</h2>
            </AnimatedSection>
            <AnimatedSection direction="right" className="max-w-3xl text-[17px] leading-8">
              <Trans
                i18nKey="home.home2"
                components={{
                  nl: (
                    <>
                      <br />
                      <br />
                    </>
                  ),
                }}
              />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Articles Section */}

      {/* <div className="container py-20">
        <h2 className="text-center underblue">{t("home.articles.title")}</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {firstThreeArticles.map((article, index) => {
            let backgroundImage = "";
            if (index === 0) backgroundImage = "/assets/home/discrimination-sexiste.jpg";
            if (index === 1) backgroundImage = "/assets/home/protection-donnees.jpg";
            if (index === 2) backgroundImage = "/assets/home/liberte-indiv.jpg";

            return (
              <ArticleHomeCard
                key={index}
                title={article[`title_${router.locale}`]}
                backgroundImage={backgroundImage}
                date={article.created_at}
                link={article.link}
                description={article[`description_${router.locale}`]}
              />
            );
          })}
        </div>
      </div> */}

      {/* End Articles Section */}

      <div className="bg-wa-porcelain">
        <div className="container wa-section">
          <AnimatedSection>
            <h2 className="text-center underblue">{t("home.organisation")}</h2>
          </AnimatedSection>
          <RevealGroup className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2" childClassName="h-full">
            <NetworkLogoCard
              href="https://www.innangard.global/"
              src="/assets/home/logo-innangard.png"
              alt="logo-innangard"
              imageClassName="w-72"
              width={676}
              height={200}
              sizes="288px"
            />
            <NetworkLogoCard
              href="https://irglobal.com/"
              src="/assets/home/logo-ir-global.png"
              alt="logo-ir-global"
              imageClassName="w-52"
              width={349}
              height={170}
              sizes="208px"
            />
          </RevealGroup>
        </div>
      </div>
    </div>
  );
}

export default Home;
