import React, { useState } from "react";
import { useBlogContext } from "../../context/BlogContext";

const AddBlogPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addArticle } = useBlogContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      id: Date.now(),
      title,
      content,
      author: "Anonymous",
      date: new Date().toISOString().split("T")[0],
    };
    addArticle(newArticle);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-6 bg-gray-800 rounded-lg">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Article Title"
        className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Article Content"
        className="w-full p-2 mb-4 bg-gray-700 text-white rounded h-32"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Article
      </button>
    </form>
  );
};

export default AddBlogPost;
