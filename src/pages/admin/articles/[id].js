import Button from "@/components/Button";
import DE from "@/components/lang/DE";
import FR from "@/components/lang/FR";
import UK from "@/components/lang/UK";
import axios from "axios";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { Input, Textarea } from "react-daisyui";

export default function ArticleEdit() {
    const [article, setArticle] = useState({})
    const params = useParams()
    const router = useRouter()

    useEffect(() => {
        if (!params || !params.id) return

        (async () => {
            let { data, error } = await axios.get(`/articles/${params.id}`)
            if (!error) {
                setArticle(data)
            }
        })()

    }, [params])
    
    const submit = async e => {
        e.preventDefault()

        const {data, error} = await axios.put(`/articles/${params.id}`, article)
        if(!error){
            router.push('/admin/articles')
        }
    }

    const bbRegister = name => ({
        id:name,
        name,
        value:article[name],
        onChange:e=>setArticle({...article, [name]:e.target.value})
    })

    if (!article.id) {
        return <div />
    }


    return <div className="container py-12">
        <h1>Modification article #{article.id}</h1>

        <form className="flex flex-col gap-6" onSubmit={submit}>
            <div>
                <label htmlFor="title_fr" className="flex text-2xl gap-2 items-center"><FR /> Titre</label>
                <Input {...bbRegister("title_fr")} className="w-full" />
            </div>
            <div>
                <label htmlFor="title_en" className="flex text-2xl gap-2 items-center"><UK /> Title</label>
                <Input {...bbRegister("title_en")} className="w-full" />
            </div>
            <div>
                <label htmlFor="title_de" className="flex text-2xl gap-2 items-center"><DE /> Titre</label>
                <Input {...bbRegister("title_de")} className="w-full" />
            </div>

            <div>
                <label htmlFor="description_fr" className="flex text-2xl gap-2 items-center"><FR /> Description</label>
                <Textarea {...bbRegister("description_fr")} className="w-full" />
            </div>
            <div>
                <label htmlFor="description_en" className="flex text-2xl gap-2 items-center"><UK /> Description</label>
                <Textarea {...bbRegister("description_en")} className="w-full" />
            </div>
            <div>
                <label htmlFor="description_de" className="flex text-2xl gap-2 items-center"><DE /> Description</label>
                <Textarea {...bbRegister("description_de")} className="w-full" />
            </div>
            <div>
                <label htmlFor="author" className="flex text-2xl gap-2 items-center">Auteur</label>
                <Input {...bbRegister("author")} className="w-full"  />
            </div>
            <div>
                <label htmlFor="link" className="flex text-2xl gap-2 items-center">Lien</label>
                <Input {...bbRegister("link")} className="w-full" />
            </div>

            <div className="flex justify-end mt-4">
                <Button color="primary" type="submit">Envoyer</Button>
            </div>
        </form>
    </div>
}