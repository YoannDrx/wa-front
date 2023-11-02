import { useRouter } from "next/router";
import { Trans, useTranslation } from "react-i18next";
import { expertiseItems } from "@/data/expertiseData";
import PageJumbo from "@/components/PageJumbo";

export async function getStaticPaths() {
  const paths = expertiseItems.map((item) => ({
    params: { expertise: item.slug },
  }));

  console.log("Paths générés dans getStaticPaths: ", paths);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log("Paramètres reçus dans getStaticProps: ", params);

  const expertise = expertiseItems.find((item) => item.slug === params.expertise);

  console.log("Expertise trouvée dans getStaticProps: ", expertise);

  if (!expertise) {
    return { notFound: true };
  }

  return { props: { expertise } };
}

export default function ExpertisePage({ expertise }) {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <PageJumbo titleKey={expertise.titleKey} textKey={expertise.intro} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div className="flex flex-col items-center relative w-full h-full">
          <div className="border border-black p-2 w-[300px] h-[300px] flex items-center justify-center relative group overflow-hidden">
            <div style={{ backgroundColor: "#E4EDF1" }} className="absolute w-[90%] h-[90%] rounded-full opacity-50"></div>
            <div className="w-full h-full relative z-10 p-2 flex items-center justify-center">
              <Image
                src={expertise.image}
                alt={t(expertise.titleKey)}
                className="object-contain  "
                layout="fixed"
                width={280}
                height={280}
              />
            </div>
          </div>
        </div>
        <div className="text-md leading-7 space-y-5">
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
                highlight: <span style={{ backgroundColor: "#E4EDF1" }} key="1" />,
                a: <a key="2" />,
                leftblue: <span className="leftblue" key="2" />,
                blue: <span className="font-bold" style={{ color: "#37749E" }} key="3" />,
                square: <span className="square-blue" key="4" />,
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
              highlight: <span style={{ backgroundColor: "#37749E", fontStyle: "italic", fontWeight: "bold" }} key="1" />,
            }}
          />
        </p>
      </div>
    </div>
  );
}
