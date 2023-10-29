import ArticleCard from "@/components/ArticleCard";
import PageJumbo from "@/components/PageJumbo";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "DISCRIMINATION SEXISTE EN FRANCE",
    author: "Mathilde Houet Weil",
    description:
      "Le Code du travail français, créé au début des années 70, énumère tous les motifs de discrimination interdits par le droit de l’UE : origine, sexe, préférence sexuelle, âge, situation familiale, grossesse, citoyenneté, race, convictions politiques ou religieuses, l’apparence physique, le nom de famille, les problèmes de santé ou les handicaps.",
    categories: ["Droit du travail", "Discrimination"],
    tags: ["France", "UE", "Sexisme"],
  },
  {
    id: 2,
    title: "PROTECTION DES DONNÉES ET DE LA VIE PRIVÉE SUR LE LIEU DE TRAVAIL",
    author: "Mathilde Houet Weil",
    description:
      "Le droit à la vie privée est un domaine de droit très développé en Europe. Les Européens sont parfaitement conscients des dangers associés à l’utilisation incontrôlée des informations personnelles, comme ils l’ont appris de leurs expériences de la Seconde Guerre mondiale – gouvernements fascistes, et post-War - régimes communistes, où la divulgation de la race, l’ethnicité ou les opinions politiques ont mené à des dénonciations secrètes qui ont causé la persécution et l’assassinat de nombreuses personnes.",
    categories: ["Droit à la vie privée", "Droit européen"],
    tags: ["Données personnelles", "Europe"],
  },
  {
    id: 3,
    title: "EDDE SUMMER",
    author: "Mathilde Houet Weil",
    description:
      "La France, où la liberté individuelle est très prisée, est un bastion de la vie privée au travail. l’État de droit français trouve son appui dans l’article 8 de la Convention européenne des droits de l’homme, qui prévoit le droit au respect de sa vie privée, de sa vie familiale, de son domicile et de sa correspondance, soumis uniquement à des restrictions jugées strictement nécessaires dans une société démocratique. En outre, l’article 9 du Code civil prévoit que toute personne a droit au respect de sa vie privée. Ces deux dispositions s’appliquent aux salariés sur le lieu de travail et pendant le temps de travail. Le droit à la vie privée de l’employé s’étend aux conversations et aux communications qui ont lieu au travail ou dans les systèmes de travail",
    categories: ["Droit à la vie privée", "Droit français"],
    tags: ["France", "Liberté individuelle"],
  },
];

export default function Blog() {
  return (
    <div>
      <PageJumbo titleKey="Articles" />
      <div className="container mx-auto">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
