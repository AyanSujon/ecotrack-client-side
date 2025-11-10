// EcoTipCard.jsx
import React from "react";

const EcoTipCard = ({ tip }) => {
  const { title, content, category, author, authorName, upvotes, createdAt } = tip;

  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
      {/* Card Header */}
      <div className="bg-[#297B33] px-4 py-2">
        <h2 className="text-white font-semibold text-lg">{title}</h2>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <p className="text-gray-700 mb-2">{content}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <span className="font-medium">Category:</span> {category}
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <span className="font-medium">Author Email:</span> {author}
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <span className="font-medium">Author Name:</span> {authorName}
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <span className="font-medium">Upvotes:</span> {upvotes}
        </div>
        <div className="text-sm text-gray-400">
          Posted on: {formattedDate}
        </div>
      </div>

      {/* Hover footer */}
      <div className="px-4 py-2 bg-[#297B33] text-white text-center font-medium cursor-pointer hover:bg-[#82B532] transition-colors duration-300">
        Upvote Tip
      </div>
    </div>
  );
};

export default EcoTipCard;
