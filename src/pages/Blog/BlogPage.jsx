import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBlogContext } from "../../context/BlogContext";
import FeaturedArticleCarousel from "../../ui/Carousel/FeaturedArticleCarousel";
import BlogList from "./BlogList";
import NewsletterSignup from "../../components/NewsLetterSignUp/NewsLetterSignUp";
import CategoryFilter from "../../components/CategoryFilter/CategortFilter";
import SearchBar from "../../components/SearchBar/SearchBar";
import ReusableHero from "../../components/HomeHero/ReusableHero";
import RelatedArticles from "../Blog/BlogComponents/RelatedArticles";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const BlogPage = () => {
  const {
    filteredArticles,
    getUniqueCategories,
    searchQuery,
    handleSearch,
    selectedCategory,
    handleCategorySelect,
    getRelatedArticles,
  } = useBlogContext();

  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setFeaturedArticles(filteredArticles.filter((article) => article.featured));
  }, [filteredArticles]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900"
    >
      <ReusableHero
        title="Lysander Tech Blog"
        description="Exploring the Cutting Edge of Technology and Innovation"
      />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearch} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <CategoryFilter
            categories={getUniqueCategories}
            selectedCategory={selectedCategory}
            setSelectedCategory={handleCategorySelect}
          />
        </motion.div>

        {featuredArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white">
              Featured Articles
            </h2>
            <FeaturedArticleCarousel articles={featuredArticles} />
          </motion.div>
        )}

        <AnimatePresence>
          <BlogList articles={filteredArticles} />
        </AnimatePresence>

        {filteredArticles.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-xl text-gray-300 mt-8"
          >
            No articles found. Try adjusting your search or category filter.
          </motion.p>
        )}

        {filteredArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <RelatedArticles
              currentArticle={filteredArticles[0]}
              relatedArticles={getRelatedArticles(filteredArticles[0])}
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16"
        >
          <NewsletterSignup />
        </motion.div>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUpIcon className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BlogPage;
