import ArticleCard from "@/components/ArticleCard";
import axios from "axios";

export async function getStaticProps({ params, locale }) {
    const articles = (await axios.get('/api/articles')).data
    return { props: { articles } };
}

const EditableField = ({name, value}) => <div>{name}: {value}</div>

export default function Articles({ articles }) {
    return <div className="container">
        {articles.map((article) => (
            <div key={article.id} className="flex flex-col gap-4 border p-2">
                <EditableField name={'title_fr'} value={article.title_fr}/>
                <EditableField name={'title_en'} value={article.title_en}/>
                <EditableField name={'title_de'} value={article.title_de}/>
                <EditableField name={'description_fr'} value={article.description_fr}/>
                <EditableField name={'description_en'} value={article.description_en}/>
                <EditableField name={'description_de'} value={article.description_de}/>
                <EditableField name={'author'} value={article.author}/>
                <EditableField name={'link'} value={article.link}/>
            </div>
        ))
        }
    </div>
}