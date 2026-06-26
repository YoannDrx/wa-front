import ArticleHomeCard from "@/components/ArticleHomeCard";
import Button from "@/components/Button";
import { apiClient } from "@/services/apiClient";
import Image from "next/image";
import { useRouter } from "next/router";
import { Trans, useTranslation } from "react-i18next";
import { useArticlesContext } from "../../contexts/ArticlesContext";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Head from "next/head";

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

const Jumbo = () => {
  const { t } = useTranslation();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      //videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <div className="jumbo-background">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-12 py-16 md:py-24 xl:flex-row xl:gap-24">
          <div className="flex-1">
            <h1 className="max-w-3xl">{t("home.votreConfiance")}</h1>
            <p className="max-w-2xl text-lg text-white/90">{t("home.heroSubtitle")}</p>
            <div className="flex flex-col items-start gap-6 pt-2 sm:flex-row sm:items-center">
              <Button href={"/contact"} color="primary">
                {t("Nous contacter")}
              </Button>
              <Image
                src="/assets/home/best-law-firms-france-2026.png"
                width={1921}
                height={2246}
                alt="Best Law Firms France 2026"
                className="h-auto w-28 sm:w-36"
                priority
              />
            </div>
          </div>
          <div className="relative w-full flex-1 overflow-hidden shadow-2xl ring-1 ring-white/10">
            {/* <video ref={videoRef} src="/assets/home/cabinet.mp4" controls={false} loop autoPlay muted /> */}
            <Image
              src="/assets/home/cabinet.gif"
              width={784}
              height={440}
              alt="video Paris Berlin New-York"
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function Home({ articles }) {
  const { t } = useTranslation();
  const router = useRouter();
  const { setArticles } = useArticlesContext();

  const firstThreeArticles = articles.slice(0, 3);

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
      <div className="container py-16 md:py-20">
        <div className="flex flex-col items-center justify-between gap-12 xl:flex-row xl:gap-24">
          <div className="flex-1">
            <div className="grid w-full grid-cols-3 gap-2">
              <Image
                src={"/assets/home/berlin.jpg"}
                width={203}
                height={531}
                sizes="(min-width: 1280px) 200px, 30vw"
                className="h-auto w-full object-cover"
                alt="Avocat Berlin"
              />
              <Image
                src={"/assets/home/paris.jpg"}
                width={203}
                height={531}
                sizes="(min-width: 1280px) 200px, 30vw"
                className="h-auto w-full object-cover"
                alt="Avocat Paris"
              />
              <Image
                src={"/assets/home/nyc.jpg"}
                width={202}
                height={531}
                sizes="(min-width: 1280px) 200px, 30vw"
                className="h-auto w-full object-cover"
                alt="Avocat New York City"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-center underblue">{t("home.presentation")}</h2>
            <div className="flex flex-col items-center justify-center">
              <p className="px-0 leading-7 text-neutral/90 md:px-4">
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
              <Button href={"/qui-sommes-nous"} className="mt-4" color="primary">
                {t("En savoir plus")}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/assets/home/rectangle29.png')] bg-cover">
        <div className="container py-14 md:py-16">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div className="lg:pl-24">
              <div>
                <h2>{t("home.further")}.</h2>
                <h2>{t("home.smarter")}.</h2>
              </div>
              <h2 className="text-primary">{t("home.swiftly")}.</h2>
            </div>
            <div className="max-w-2xl leading-7 lg:pl-24">
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
            </div>
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

      <div className="container py-16 md:py-20">
        <h2 className="text-center underblue">{t("home.organisation")}</h2>
        <div className="flex flex-col items-center justify-evenly gap-6 sm:flex-row">
          <Link
            href="https://www.innangard.global/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:shadow-lg p-8 transition-shadow duration-300">
            <Image
              src={"/assets/home/logo-innangard.png"}
              alt={"logo-innangard"}
              className="w-72 h-auto"
              width={676}
              height={200}
              sizes="288px"
            />
          </Link>
          <Link
            href="https://irglobal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:shadow-lg p-8 transition-shadow duration-300">
            <Image
              src={"/assets/home/logo-ir-global.png"}
              alt={"logo-ir-global"}
              className="w-52 h-auto"
              width={349}
              height={170}
              sizes="208px"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
