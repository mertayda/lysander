import React, { createContext, useState, useContext } from "react";
import { initialArticles } from "../data/initialArticles";

const BlogContext = createContext();

export const useBlogContext = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [articles, setArticles] = useState(initialArticles);

  const addArticle = (newArticle) => {
    setArticles([newArticle, ...articles]);
  };

  return (
    <BlogContext.Provider value={{ articles, addArticle }}>
      {children}
    </BlogContext.Provider>
  );
};
