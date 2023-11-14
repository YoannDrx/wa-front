import Button from "@/components/Button";
import axios from "axios";

export async function getStaticProps({ params, locale }) {
    return { props: { articles:[] } }; //TODOREMOVE

    const articles = (await axios.get('/articles')).data
    return { props: { articles } };
}

const EditableField = ({ name, value }) => <div><span className="text-xl font-bold">{name}:</span> {value}</div>

export default function Articles({ articles }) {
    const deleteArticle = id => async () => {
        if(confirm(`Supprimer l'article ${id} ?`)){
           await axios.delete(`/articles/${id}`)
        }
    }

    return <div className="container">
        <div className="flex justify-between mb-8">
            <h1>Tous les articles</h1>
            <Button color='primary' href={`/admin/article`}>Ajouter un article</Button>
        </div>
        {articles.map((article) => (
            <div key={article.id} className="flex flex-col gap-4 border p-4 mb-4">
                <div className="flex justify-between">
                    #{article.id}
                    <div>
                        <Button color='error' onClick={deleteArticle(article.id)} className='mr-1'>Supprimer</Button>
                        <Button color='primary' href={`/admin/articles/${article.id}`}>Modifier</Button>
                    </div>
                </div>

                <EditableField name={'title_fr'} value={article.title_fr} />
                <EditableField name={'title_en'} value={article.title_en} />
                <EditableField name={'title_de'} value={article.title_de} />
                <EditableField name={'description_fr'} value={article.description_fr} />
                <EditableField name={'description_en'} value={article.description_en} />
                <EditableField name={'description_de'} value={article.description_de} />
                <EditableField name={'author'} value={article.author} />
                <EditableField name={'link'} value={article.link} />
            </div>
        ))
        }
    </div>
}