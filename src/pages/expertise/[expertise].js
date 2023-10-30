import { Trans, useTranslation } from "react-i18next";
import { expertiseItems } from "@/data/expertiseData";
import PageJumbo from "@/components/PageJumbo";

export async function getStaticPaths() {
  const paths = expertiseItems.map((item) => ({
    params: { expertise: item.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const expertise = expertiseItems.find((item) => item.id.toString() === params.expertise);

  if (!expertise) {
    return { notFound: true };
  }

  return { props: { expertise } };
}

export default function ExpertisePage({ expertise }) {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <PageJumbo titleKey={t(expertise.titleKey)} textKey={t(expertise.intro)} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-12">
        <div className="bg-white border-2 border-[#37749E] p-8">
          <h2 className="text-2xl font-semibold text-primary">{t(expertise.titleBloc1)}</h2>
          <p className="text-black">
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
                highlight: <span className="bg-yellow-400" key="1" />,
              }}
            />
          </p>
        </div>
        <div className="bg-[#37749E] p-8">
          <h2 className="text-2xl font-semibold text-white">{t(expertise.titleBloc2)}</h2>
          <p className="text-white">
            <Trans
              i18nKey={expertise.paragraph2}
              components={{
                nl: (
                  <>
                    <br />
                    <br />
                  </>
                ),
                bold: <span className="font-bold" key="0" />,
                highlight: <span style={{ backgroundColor: "#F8F8F8", color: "grey" }} key="1" />,
              }}
            />
          </p>
        </div>
      </div>
      <div className="bg-[#2E2E2E] p-8 my-12">
        <h2 className="text-2xl font-semibold text-white">{t(expertise.titleBloc3)}</h2>
        <p className="text-white">
          <Trans
            i18nKey={expertise.paragraph3}
            components={{
              nl: (
                <>
                  <br />
                  <br />
                </>
              ),
              bold: <span className="font-bold" key="0" />,
              highlight: <span style={{ backgroundColor: "#37749E" }} key="1" />,
            }}
          />
        </p>
      </div>
    </div>
  );
}
