import { Trans, useTranslation } from "react-i18next";
import { expertiseItems } from "@/data/expertiseData";
import PageJumbo from "@/components/PageJumbo";
import Image from "next/image";

export async function getStaticProps({ params }) {
  const expertise = expertiseItems.find((item) => item.id.toString() === params.expertise);

  if (!expertise) {
    return { notFound: true };
  }

  return { props: { expertise } };
}

export async function getStaticPaths() {
  const paths = expertiseItems.map((item) => ({
    params: { expertise: item.id.toString() },
  }));

  return { paths, fallback: false };
}

export default function ExpertisePage({ expertise }) {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <PageJumbo titleKey={t(expertise.titleKey)} textKey={t(expertise.intro)} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div className="flex flex-col items-center relative w-full h-full">
          <div className="border border-black p-2 w-[300px] h-[300px] flex items-center justify-center relative group overflow-hidden">
            <div style={{ backgroundColor: "#E4EDF1" }} className="absolute w-[90%] h-[90%] rounded-full opacity-50"></div>
            <div className="w-full h-full relative z-10 p-2 flex items-center justify-center">
              <Image src={expertise.image} alt={t(expertise.titleKey)} width={280} height={280} />
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
    </div>
  );
}
