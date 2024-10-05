import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative mb-8">
      <input
        type="text"
        placeholder="Search articles..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2 pl-10 pr-4 text-gray-100 bg-gray-800 border border-gray-700 rounded-full focus:outline-none focus:border-blue-500"
      />
      <MagnifyingGlassIcon className="absolute w-5 h-5 text-gray-400 left-3 top-1/2 transform -translate-y-1/2" />
    </div>
  );
};

export default SearchBar;
