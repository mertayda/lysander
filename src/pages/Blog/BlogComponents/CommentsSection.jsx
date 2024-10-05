import React, { useState } from "react";

const CommentsSection = ({ comments: initialComments }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: "Anonymous",
        content: newComment,
        date: new Date().toISOString(),
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  return (
    <div className="mt-12 bg-gray-800 rounded-lg p-6">
      <h3 className="text-2xl font-bold text-white mb-6">Comments</h3>
      <form onSubmit={handleSubmit} className="mb-8">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-2 rounded bg-gray-700 text-white"
          rows="4"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Post Comment
        </button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-700 rounded p-4">
            <p className="text-white mb-2">{comment.content}</p>
            <p className="text-sm text-gray-400">
              By {comment.author} on{" "}
              {new Date(comment.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
