import React, { createContext, useState, useContext, useMemo } from "react";
import { initialArticles } from "../data/initialArticles";

const BlogContext = createContext();

export const useBlogContext = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [articles, setArticles] = useState(initialArticles);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addArticle = (newArticle) => {
    setArticles([newArticle, ...articles]);
  };

  const filteredArticles = useMemo(() => {
    return articles.filter(
      (article) =>
        (selectedCategory === "All" || article.category === selectedCategory) &&
        (article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.content.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [articles, searchQuery, selectedCategory]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const getArticleById = (id) => {
    return articles.find((article) => article.id === parseInt(id));
  };

  const getRelatedArticles = (currentArticle, limit = 3) => {
    return articles
      .filter(
        (article) =>
          article.id !== currentArticle.id &&
          article.category === currentArticle.category
      )
      .slice(0, limit);
  };

  const getUniqueCategories = useMemo(() => {
    return ["All", ...new Set(articles.map((article) => article.category))];
  }, [articles]);

  return (
    <BlogContext.Provider
      value={{
        articles,
        addArticle,
        handleSearch,
        handleCategorySelect,
        filteredArticles,
        getRelatedArticles,
        getArticleById,
        getUniqueCategories,
        searchQuery,
        selectedCategory,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
