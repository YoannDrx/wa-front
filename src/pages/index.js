import ArticleHomeCard from "@/components/ArticleHomeCard";
import Button from "@/components/Button";
import Image from "next/image";
import { Trans, useTranslation } from "react-i18next";

const Jumbo = () => {
  const { t } = useTranslation();

  return (
    <div className="jumbo-background">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center pt-24 pb-36 gap-24">
          <div className="flex-1">
            <h1>{t("home.votreConfiance")}</h1>
            <p>{t("home.heroSubtitle")}</p>
            <Button href={"/contact"} color="primary">
              {t("Nous contacter")}
            </Button>
          </div>
          <div className="flex-1">
            <video src="/assets/home/cabinet.mp4" />
          </div>
        </div>
      </div>
    </div>
  );
};

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Jumbo />
      <div className="container py-20">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-24">
          <div className="flex-1">
            <div className="flex gap-2">
              <Image
                src={"/assets/home/berlin.jpg"}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[200px] h-auto"
                alt="Avocat Berlin"
              />
              <Image
                src={"/assets/home/paris.jpg"}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[200px] h-auto"
                alt="Avocat Paris"
              />
              <Image
                src={"/assets/home/nyc.jpg"}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[200px] h-auto"
                alt="Avocat New York City"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-center underblue">{t("home.presentation")}</h2>
            <div className="flex flex-col items-center justify-center">
              <p>
                <Trans
                  i18nKey="home.home1"
                  components={{
                    nl: (
                      <>
                        <br />
                        <br />
                      </>
                    ),
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
        <div className="container py-10">
          <div className="flex flex-col lg:flex-row xl:flex-row justify-between items-center">
            <div className="lg:pl-24 ">
              <div>
                <h2>{t("home.further")}.</h2>
                <h2>{t("home.smarter")}.</h2>
              </div>
              <h2 className="text-primary">{t("home.swiftly")}.</h2>
            </div>
            <div className="lg:pl-24">
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
      <div className="container py-20">
        <h2 className="text-center underblue">{t("home.articles.title")}</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <ArticleHomeCard
            title={t("home.articles.art1")}
            backgroundImage="/assets/home/article1.png"
            date="01.01.2023"
            slug={
              "THE-PROTECTION-OF-TRADE-SECRECY-IS-STRENGTHENED-UNDER-FRENCH-LAW?fbclid=IwAR3rmT9QRDYtgcXDVWshtYRcxohgHEYWJomAaTPX-FY3cfwD4WIFGrvWVFs"
            }
          />
          <ArticleHomeCard
            title={t("home.articles.art2")}
            backgroundImage="/assets/home/article1.png"
            date="01.01.2023"
            slug={
              "THE-PROTECTION-OF-TRADE-SECRECY-IS-STRENGTHENED-UNDER-FRENCH-LAW?fbclid=IwAR3rmT9QRDYtgcXDVWshtYRcxohgHEYWJomAaTPX-FY3cfwD4WIFGrvWVFs"
            }
          />
          <ArticleHomeCard
            title={t("home.articles.art3")}
            backgroundImage="/assets/home/article1.png"
            date="01.01.2023"
            slug={
              "THE-PROTECTION-OF-TRADE-SECRECY-IS-STRENGTHENED-UNDER-FRENCH-LAW?fbclid=IwAR3rmT9QRDYtgcXDVWshtYRcxohgHEYWJomAaTPX-FY3cfwD4WIFGrvWVFs"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
