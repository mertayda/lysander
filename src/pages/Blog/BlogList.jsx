import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBlogContext } from "../../context/BlogContext";
import BlogPost from "./BlogPost";

const BlogList = () => {
  const { filteredArticles } = useBlogContext();
  const [displayCount, setDisplayCount] = useState(6);
  const [sortBy, setSortBy] = useState("date");
  const [viewMode, setViewMode] = useState("grid");

  const sortedArticles = useMemo(() => {
    return [...filteredArticles].sort((a, b) => {
      if (sortBy === "date") return new Date(b.date) - new Date(a.date);
      if (sortBy === "readTime") return a.readTime - b.readTime;
      return 0;
    });
  }, [filteredArticles, sortBy]);

  const visibleArticles = sortedArticles.slice(0, displayCount);

  const handleLoadMore = useCallback(() => {
    setDisplayCount((prevCount) => prevCount + 3);
  }, []);

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <label htmlFor="sort-select" className="mr-2 text-gray-300">
            Sort by:
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="date">Date</option>
            <option value="readTime">Read Time</option>
          </select>
        </div>
        <button
          onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300"
        >
          {viewMode === "grid" ? "List View" : "Grid View"}
        </button>
      </div>

      <AnimatePresence>
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className={`grid ${
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          } gap-8`}
        >
          {visibleArticles.map((article) => (
            <motion.div key={article.id} variants={itemVariants}>
              <BlogPost article={article} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {displayCount < sortedArticles.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={handleLoadMore}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition duration-300 transform hover:scale-105"
          >
            Load More
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default React.memo(BlogList);
