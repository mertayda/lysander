import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogPost = ({ article }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 border border-blue-500/30 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-500 group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>
      <div className="p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="flex justify-between items-start mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 rounded-full backdrop-blur-sm">
            {article.category}
          </span>
        </div>
        <h2 className="text-2xl font-bold mb-3 text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
          <Link to={`/blog/${article.id}`} className="hover:underline">
            {article.title}
          </Link>
        </h2>
        <p className="text-gray-300 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
          {article.excerpt}
        </p>
        <div className="flex flex-wrap items-center text-sm text-gray-400 space-x-4">
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            {article.author}
          </span>
          <time className="flex items-center" dateTime={article.date}>
            <svg
              className="w-4 h-4 mr-1 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {article.date}
          </time>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            {article.readTime}
          </span>
        </div>
      </div>
      <div className="bg-blue-900/30 p-4 flex justify-between items-center backdrop-blur-sm">
        <span className="text-sm text-blue-300">
          {article.comments ? article.comments.length : 0} comments
        </span>
        <Link
          to={`/blog/${article.id}`}
          className="text-blue-300 hover:text-blue-100 hover:bg-blue-500/20 px-4 py-2 rounded-full transition-all duration-300 group-hover:scale-105 flex items-center"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogPost;
