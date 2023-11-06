import FR from "@/components/lang/FR";
import UK from "@/components/lang/UK";
import DE from "@/components/lang/DE";

import { Input, Textarea } from "react-daisyui";
import Button from "@/components/Button";
import axios from "axios";

export default function NewArticle(params) {

    // TODO send new

    // TODO LIST

    //TODO edit

    // TODO delete

    const submit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        console.log(`3148 `, formProps);
        let {data, error} = await axios.post('/api/articles', formProps)
    }


    return <div className="container py-12">
        <h1>Nouvel article</h1>

        <form className="flex flex-col gap-6" onSubmit={submit}>
            <div>
                <label htmlFor="author" className="flex text-2xl gap-2 items-center">Auteur</label>
                <Input id="author" name="author" className="w-full" />
            </div>
            <div>
                <label htmlFor="title_fr" className="flex text-2xl gap-2 items-center"><FR /> Titre</label>
                <Input id="title_fr" name="title_fr" className="w-full" />
            </div>
            <div>
                <label htmlFor="title_en" className="flex text-2xl gap-2 items-center"><UK /> Title</label>
                <Input id="title_en" name="title_en" className="w-full" />
            </div>
            <div>
                <label htmlFor="title_de" className="flex text-2xl gap-2 items-center"><DE /> Titre</label>
                <Input id="title_de" name="title_de" className="w-full" />
            </div>

            <div>
                <label htmlFor="description_fr" className="flex text-2xl gap-2 items-center"><FR /> Description</label>
                <Textarea id="description_fr" name="description_fr" className="w-full" />
            </div>
            <div>
                <label htmlFor="description_en" className="flex text-2xl gap-2 items-center"><UK /> Description</label>
                <Textarea id="description_en" name="description_en" className="w-full" />
            </div>
            <div>
                <label htmlFor="description_de" className="flex text-2xl gap-2 items-center"><DE /> Description</label>
                <Textarea id="description_de" name="description_de" className="w-full" />
            </div>
            <div>
                <label htmlFor="link" className="flex text-2xl gap-2 items-center">Lien</label>
                <Input id="link" name="link" className="w-full" />
            </div>

            <div className="flex justify-end mt-4">
                <Button color="primary" type="submit">Envoyer</Button>
            </div>
        </form>
    </div>
}