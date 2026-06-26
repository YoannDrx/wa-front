import React, { createContext, useState, useEffect, useContext } from "react";
import { apiClient } from "@/services/apiClient";

const ArticlesContext = createContext();

export function useArticlesContext() {
  return useContext(ArticlesContext);
}

export function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    apiClient
      .get("/articles")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  const value = {
    articles,
    setArticles,
  };

  return <ArticlesContext.Provider value={value}>{children}</ArticlesContext.Provider>;
}
