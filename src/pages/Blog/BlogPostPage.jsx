import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBlogContext } from "../../context/BlogContext";
import ReusableHero from "../../components/HomeHero/ReusableHero";

import Footer from "../../components/Footer/Footer";
import AuthorProfile from "./BlogComponents/AuthorProfile";

const BlogPostPage = () => {
  const { id } = useParams();
  const { getArticleById, getWriterByName } = useBlogContext();
  const [article, setArticle] = useState(null);
  const [articleAuthor, setArticleAuthor] = useState(null);

  useEffect(() => {
    const foundArticle = getArticleById(id);
    setArticle(foundArticle);

    if (foundArticle && foundArticle.author) {
      const foundAuthor = getWriterByName(foundArticle.author);

      setArticleAuthor(foundAuthor);
    }
  }, [id, getArticleById, getWriterByName]);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 flex items-center justify-center">
        <p className="text-white text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <ReusableHero title={article.title} fullHeight={false} />
      <div className=" max-w-3xl  mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="mb-8 text-gray-300">
          {articleAuthor ? (
            <AuthorProfile writers={articleAuthor} />
          ) : (
            <p>Author information not available</p>
          )}
          <p className="mt-4">
            {article.readTime} | Category: {article.category}
          </p>
          {article.featured && (
            <p className="text-yellow-400">Featured Article</p>
          )}
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Excerpt</h2>
          <p className="text-gray-300">{article.excerpt}</p>
        </div>
        <div className="prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
        {article.comments && article.comments.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            {article.comments.map((comment) => (
              <div key={comment.id} className="mb-4 bg-gray-800 p-4 rounded">
                <p className="font-semibold">{comment.author}</p>
                <p className="text-gray-300">{comment.content}</p>
                <p className="text-sm text-gray-400">
                  {new Date(comment.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
