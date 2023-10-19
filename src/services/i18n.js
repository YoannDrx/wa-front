import FR from "@/components/lang/FR"
import UK from "@/components/lang/UK"
import DE from "@/components/lang/DE"

export const readableLocale = locale => {
    switch (locale) {
        case "fr":
            return <div className="gap-2 flex"><FR/> Français</div>
        case "en":
            return <div className="gap-2 flex"><UK/> English</div>
        case "de":
            return <div className="gap-2 flex"><DE/> Deutsch</div>
        default:
            return <div className="gap-2 flex"><FR/> Français</div>
    }
}