// src/Components/ChallengeSkeletonCard.jsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ChallengeSkeletonCard = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden max-w-4xl mx-auto border border-gray-100 animate-pulse">
      {/* Left side skeleton (image) */}
      <div className="md:w-1/2 w-full">
        <Skeleton height={200} />
      </div>

      {/* Right side skeleton (text) */}
      <div className="md:w-1/2 w-full p-6 flex flex-col justify-between bg-gray-50">
        <Skeleton height={24} width="70%" className="mb-4" />
        <div className="space-y-2">
          <Skeleton count={6} height={14} />
        </div>
        <Skeleton height={40} width="100%" className="mt-6 rounded-xl" />
      </div>
    </div>
  );
};

export default ChallengeSkeletonCard;
