import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBlogContext } from "../../context/BlogContext";

const BlogPostPage = () => {
  const { id } = useParams();
  const { articles } = useBlogContext();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const foundArticle = articles.find((a) => a.id === id);
    setArticle(foundArticle);
  }, [id, articles]);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 flex items-center justify-center">
        <p className="text-white text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="mb-8 text-gray-300">
          <p>
            By {article.author} | {new Date(article.date).toLocaleDateString()}{" "}
            | {article.readTime}
          </p>
          <p>Category: {article.category}</p>
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
    </div>
  );
};

export default BlogPostPage;
