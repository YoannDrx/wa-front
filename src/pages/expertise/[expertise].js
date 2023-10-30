import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { expertiseItems } from "@/data/expertiseData";
import Image from "next/image";
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
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <PageJumbo titleKey={expertise.titleKey} textKey="Votre texte d'introduction ici." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div className="w-full h-full">
          <Image src={expertise.image} alt={t(expertise.titleKey)} layout="responsive" width={700} height={500} />
        </div>
        <div className="text-lg leading-7 space-y-5">
          <h2 className="text-2xl font-semibold">{t("Sous-titre 1")}</h2>
          <p>{t("Texte détaillé sur cette section de l'expertise. Vous pouvez discuter des points clés, des avantages, etc.")}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div className="text-lg leading-7 space-y-5">
          <h2 className="text-2xl font-semibold">{t("Sous-titre 2")}</h2>
          <p>
            {t(
              "Un autre paragraphe détaillé sur cette section de l'expertise. Vous pouvez discuter d'autres aspects importants ici."
            )}
          </p>
        </div>
        <div className="w-full h-full">
          <Image src={expertise.image} alt={t(expertise.titleKey)} layout="responsive" width={700} height={500} />
        </div>
      </div>
    </div>
  );
}
