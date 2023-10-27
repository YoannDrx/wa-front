import Button from "@/components/Button";
import Image from "next/image";
import { Trans, useTranslation } from "react-i18next";
import ArticleCard from "@/components/ArticleCard";

const Jumbo = () => {
  const { t } = useTranslation();

  return (
    <div className="jumbo-background">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center pt-24 pb-36 gap-24">
          <div className="flex-1">
            <h1>{t("VOTRE CONFIANCE NOUS HONORE")}</h1>
            <p>{t("Un cabinet d'excellence dédié au conseil des entreprises internationales")}</p>
            <Button color="primary">{t("Nous contacter")}</Button>
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
              <Image src={"/assets/home/berlin.jpg"} width={200} height={200} alt="Avocat Berlin" />
              <Image src={"/assets/home/paris.jpg"} width={200} height={200} alt="Avocat Paris" />
              <Image src={"/assets/home/nyc.jpg"} width={200} height={200} alt="Avocat New York City" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-center underblue">{t("PRESENTATION")}</h2>
            <div className="flex flex-col items-center justify-center">
              <p>
                <Trans
                  i18nKey="home1"
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
              <Button className="rounded-none mt-4" color="primary">
                {t("En savoir plus")}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/assets/home/rectangle29.png')] bg-cover">
        <div className="container py-20">
          <div className="flex flex-col xl:flex-row justify-between items-center">
            <div>
              <div className="flex justify-start pr-24">
                <h2 className="text-center mr-4 mb-0">{t("Further.")}</h2>
                <h2 className="text-center mb-0">{t("Smarter.")}</h2>
              </div>
              <h2 className="text-primary">{t("Swiftly")}</h2>
            </div>
            <div>
              {t(
                "Notre cabinet est membre d'un réseau international de cabinets d'avocats partageant sa culture d'excellence et d'efficacité. Nos avocats sont également admis à exercer devant des barreaux étrangers, notamment en Allemagne ou au barreau de New York. Outre le français et l'anglais, l'équipe travaille également en allemand, ce qui fait du cabinet un partenaire de haut niveau, expert dans les relations d'affaires transfrontalières entre la France et l'Allemagne."
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container py-20">
        <h2 className="text-center underblue">Articles</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <ArticleCard
            className="min-w-[256px]"
            title={t("Discrimination sexiste en France")}
            backgroundImage="/assets/home/image-test.jpg"
            date="01.01.2023"
          />
          <ArticleCard
            className="min-w-[256px]"
            title={t("Discrimination sexiste en France")}
            backgroundImage="/assets/home/image-test.jpg"
            date="01.01.2023"
          />
          <ArticleCard
            className="min-w-[256px]"
            title={t("Discrimination sexiste en France")}
            backgroundImage="/assets/home/image-test.jpg"
            date="01.01.2023"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
