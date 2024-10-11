import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import { useBlogContext } from "../../context/BlogContext";
import FeaturedArticleCarousel from "../../ui/Carousel/FeaturedArticleCarousel";
import BlogList from "./BlogList";
import NewsletterSignup from "../../components/NewsLetterSignUp/NewsLetterSignUp";
import CategoryFilter from "../../components/CategoryFilter/CategortFilter";
import SearchBar from "../../components/SearchBar/SearchBar";
import ReusableHero from "../../components/HomeHero/ReusableHero";
import RelatedArticles from "../Blog/BlogComponents/RelatedArticles";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import ParticleBackground from "../../ui/Particle/ParticleBackground";

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

  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

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
      className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
    >
      <ParticleBackground />

      <motion.div style={{ opacity, scale }} className="sticky top-0 z-10">
        <ReusableHero
          title="Lysander Tech Blog"
          description="Exploring the Cutting Edge of Technology and Innovation"
        />
      </motion.div>

      <div className="container mx-auto px-4 py-12 relative z-10">
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
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Featured Articles
            </h2>
            <FeaturedArticleCarousel articles={featuredArticles} />
          </motion.div>
        )}

        <AnimatePresence>
          <BlogList articles={filteredArticles} />
        </AnimatePresence>

        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8 p-8 bg-white/10 backdrop-blur-md rounded-xl"
          >
            <p className="text-xl text-gray-300">
              No articles found. Try adjusting your search or category filter.
            </p>
          </motion.div>
        )}

        {filteredArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 p-8 bg-white/10 backdrop-blur-md rounded-xl"
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
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300 z-50"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUpIcon className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BlogPage;
