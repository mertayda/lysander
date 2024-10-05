import React, { useState, useEffect } from "react";

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const article = document.querySelector("article");
    const headingElements = article.querySelectorAll("h2, h3");
    const headingData = Array.from(headingElements).map((heading) => ({
      id: heading.id,
      text: heading.textContent,
      level: parseInt(heading.tagName.charAt(1)),
    }));
    setHeadings(headingData);
  }, []);

  return (
    <nav className="bg-gray-800 rounded-lg p-6 mb-8">
      <h2 className="text-xl font-bold text-white mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`${heading.level === 2 ? "ml-0" : "ml-4"}`}
          >
            <a
              href={`#${heading.id}`}
              className="text-blue-400 hover:text-blue-300"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
