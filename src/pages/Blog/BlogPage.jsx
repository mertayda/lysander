import React from "react";
import { BlogProvider } from "../../context/BlogContext";
import BlogList from "../Blog/BlogList";
import AddBlogPost from "../Blog/AddBlogPost";
import Navigation from "../../components/Navigation/Navigation/Navigation";

const BlogPage = () => {
  return (
    <BlogProvider>
      <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Lysander Tech Blog
          </h1>
          <AddBlogPost />
          <BlogList />
        </div>
      </div>
    </BlogProvider>
  );
};

export default BlogPage;
