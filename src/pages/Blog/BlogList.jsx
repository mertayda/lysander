import React from "react";
import { useBlogContext } from "../../context/BlogContext";
import BlogPost from "./BlogPost";

const BlogList = () => {
  const { articles } = useBlogContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <BlogPost key={article.id} article={article} />
      ))}
    </div>
  );
};

export default BlogList;
