import React from "react";
import { Link } from "react-router-dom";

const RelatedArticles = ({ currentArticle, relatedArticles }) => {
  if (!relatedArticles || relatedArticles.length === 0) {
    return null;
  }
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4 text-white">
        Related Articles
      </h3>
      <div className="space-y-4">
        {relatedArticles.map((article) => (
          <div key={article.id} className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-lg font-medium text-white mb-2">
              {article.title}
            </h4>
            <p className="text-gray-300">{article.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
