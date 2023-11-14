
/* map title_fr, title_en, description_fr, .... to title and description */
export const localizedArticle = (article, locale) => ({
    ...article,
    title: article[`title_${locale}`],
    description: article[`description_${locale}`]
})