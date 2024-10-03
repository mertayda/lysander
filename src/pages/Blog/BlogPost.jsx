import React from "react";
import Card from "../../ui/Card/Card";

const BlogPost = ({ article }) => {
  return (
    <Card>
      <h2 className="text-2xl font-bold mb-2 text-blue-400">{article.title}</h2>
      <p className="text-gray-300 mb-4">
        {article.content.substring(0, 150)}...
      </p>
      <div className="flex justify-between text-sm text-gray-400">
        <span>{article.author}</span>
        <span>{article.date}</span>
      </div>
    </Card>
  );
};

export default BlogPost;
