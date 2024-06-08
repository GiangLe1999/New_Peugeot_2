import React from "react";

const ArticleCardSkeleton = () => {
  return (
    <div className="border shadow-md transform overflow-hidden rounded-md bg-white transition duration-500">
      <div className="animate-pulse w-full aspect-video bg-gray-200 rounded"></div>
      <div className="p-4 pb-6">
        <div className="w-full h-10 bg-gray-200 rounded-md animate-pulse"></div>
        <div className="w-full h-10 bg-gray-200 rounded-md animate-pulse mt-2"></div>
        <div className="w-full h-28 bg-gray-200 rounded-md animate-pulse mt-2"></div>
        <div className="w-full h-10 bg-gray-200 rounded-md animate-pulse mt-2"></div>
      </div>
    </div>
  );
};

export default ArticleCardSkeleton;
