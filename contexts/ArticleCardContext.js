import React, { createContext, useState, useContext } from "react";

const ArticleCardContext = createContext();

export function useArticleCardContext() {
  return useContext(ArticleCardContext);
}

export function CardProvider({ children }) {
  const [openedCard, setOpenedCard] = useState(null);

  const value = {
    openedCard,
    setOpenedCard,
  };

  return <ArticleCardContext.Provider value={value}>{children}</ArticleCardContext.Provider>;
}
