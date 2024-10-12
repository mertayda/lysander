import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useBlogContext } from "../../context/BlogContext";
import ReusableHero from "../../components/HomeHero/ReusableHero";
import Footer from "../../components/Footer/Footer";
import AuthorProfile from "./BlogComponents/AuthorProfile";
import { motion } from "framer-motion";

const BlogPostPage = () => {
  const { id } = useParams();
  const { getArticleById, getWriterByName } = useBlogContext();
  const [article, setArticle] = useState(null);
  const [articleAuthor, setArticleAuthor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArticleData = useCallback(async () => {
    try {
      setIsLoading(true);
      const foundArticle = await getArticleById(id);
      if (!foundArticle) throw new Error("Article not found");

      setArticle(foundArticle);

      if (foundArticle.author) {
        const foundAuthor = await getWriterByName(foundArticle.author);
        setArticleAuthor(foundAuthor);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [id, getArticleById, getWriterByName]);

  useEffect(() => {
    fetchArticleData();
  }, [fetchArticleData]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-2xl"
        >
          Loading...
        </motion.p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-2xl"
        >
          Error: {error}
        </motion.p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <ReusableHero title={article.title} fullHeight={false} />
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {article.title}
        </h1>
        <div className="mb-8 text-gray-300">
          {articleAuthor ? (
            <AuthorProfile writers={articleAuthor} />
          ) : (
            <p>Author information not available</p>
          )}
          <p className="mt-4 text-sm sm:text-base">
            {article.readTime} | Category: {article.category}
          </p>
          {article.featured && (
            <p className="text-yellow-400 text-sm sm:text-base mt-2">
              Featured Article
            </p>
          )}
        </div>
        <motion.figure
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            className="w-full object-cover rounded-xl h-64 sm:h-80 md:h-96"
            src={article.image}
            alt={article.title}
            loading="lazy"
          />
        </motion.figure>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-sm sm:prose lg:prose-lg prose-invert max-w-none"
        >
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </motion.div>
        {article.comments && article.comments.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            {article.comments.map((comment, index) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="mb-4 bg-gray-800 p-4 rounded"
              >
                <p className="font-semibold">{comment.author}</p>
                <p className="text-gray-300 text-sm sm:text-base">
                  {comment.content}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-2">
                  {new Date(comment.date).toLocaleDateString()}
                </p>
              </motion.div>
            ))}
          </motion.section>
        )}
      </motion.article>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
