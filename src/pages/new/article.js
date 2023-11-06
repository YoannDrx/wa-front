import FR from "@/components/lang/FR";
import UK from "@/components/lang/UK";
import DE from "@/components/lang/DE";

import { Input, Textarea } from "react-daisyui";
import Button from "@/components/Button";

export default function NewArticle(params) {

    // TODO send new

    // TODO LIST

    //TODO edit

    // TODO delete


    return <div className="container py-12">
        <h1>Nouvel article</h1>

        <div className="flex flex-col gap-6">
            <div>
                <label htmlFor="author" className="flex text-2xl gap-2 items-center">Auteur</label>
                <Input id="author" className="w-full" />
            </div>
            <div>
                <label htmlFor="title_fr" className="flex text-2xl gap-2 items-center"><FR /> Titre</label>
                <Input id="title_fr" className="w-full" />
            </div>
            <div>
                <label htmlFor="title_en" className="flex text-2xl gap-2 items-center"><UK /> Title</label>
                <Input id="title_en" className="w-full" />
            </div>
            <div>
                <label htmlFor="title_de" className="flex text-2xl gap-2 items-center"><DE /> Titre</label>
                <Input id="title_de" className="w-full" />
            </div>

            <div>
                <label htmlFor="description_fr" className="flex text-2xl gap-2 items-center"><FR /> Description</label>
                <Textarea id="description_fr" className="w-full" />
            </div>
            <div>
                <label htmlFor="description_en" className="flex text-2xl gap-2 items-center"><UK /> Description</label>
                <Textarea id="description_en" className="w-full" />
            </div>
            <div>
                <label htmlFor="description_de" className="flex text-2xl gap-2 items-center"><DE /> Description</label>
                <Textarea id="description_de" className="w-full" />
            </div>
            <div>
                <label htmlFor="link" className="flex text-2xl gap-2 items-center">Lien</label>
                <Input id="link" className="w-full" />
            </div>
        </div>

        <Button />

    </div>
}