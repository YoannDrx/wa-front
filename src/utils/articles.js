const getLocalizedField = (article, field, locale) =>
  article?.[`${field}_${locale}`] || article?.[`${field}_fr`] || article?.[`${field}_en`] || article?.[`${field}_de`] || "";

export const slugifyArticleValue = (value = "") =>
  value
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/&/g, "et")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const stripNewsPrefix = (value = "") => value.replace(/^\/?news\/?/i, "");

export const isExternalHref = (href = "") => /^(https?:)?\/\//i.test(href) || /^(mailto|tel):/i.test(href);

const getLegacyMediaPath = (href = "") => {
  try {
    const url = new URL(href, "https://www.weil-paris.fr");
    const host = url.hostname.replace(/^www\./, "");

    if (host === "weil-paris.fr" && url.pathname.startsWith("/media/")) {
      return `${url.pathname}${url.search}${url.hash}`;
    }
  } catch {}

  return "";
};

export const localizedArticle = (article, locale) => ({
  ...article,
  title: getLocalizedField(article, "title", locale),
  description: getLocalizedField(article, "description", locale),
});

export const getArticleSlug = (article, locale) => {
  const rawLink = article?.link?.trim();

  if (getLegacyMediaPath(rawLink)) {
    const titleSlug = slugifyArticleValue(getLocalizedField(article, "title", locale));
    return [titleSlug, article?.id].filter(Boolean).join("-");
  }

  if (rawLink && !isExternalHref(rawLink)) {
    return slugifyArticleValue(stripNewsPrefix(rawLink));
  }

  const titleSlug = slugifyArticleValue(getLocalizedField(article, "title", locale));
  return [titleSlug, article?.id].filter(Boolean).join("-");
};

export const getArticleHref = (article, locale) => {
  const rawLink = article?.link?.trim();
  const legacyMediaPath = getLegacyMediaPath(rawLink);

  if (legacyMediaPath) {
    return legacyMediaPath;
  }

  if (rawLink && isExternalHref(rawLink)) {
    return rawLink;
  }

  if (rawLink?.startsWith("/news/")) {
    return rawLink;
  }

  return `/news/${getArticleSlug(article, locale)}`;
};

export const findArticleBySlug = (articles, slug, locale) => {
  const normalizedSlug = slugifyArticleValue(stripNewsPrefix(slug));

  return articles.find((article) => {
    const titleSlug = slugifyArticleValue(getLocalizedField(article, "title", locale));
    const internalSlug = getArticleSlug(article, locale);
    const rawLink = article?.link?.trim();
    const linkSlug = rawLink && !isExternalHref(rawLink) ? slugifyArticleValue(stripNewsPrefix(rawLink)) : "";

    return [String(article.id), titleSlug, `${titleSlug}-${article.id}`, internalSlug, linkSlug].filter(Boolean).includes(normalizedSlug);
  });
};
