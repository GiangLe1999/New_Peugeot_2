import React from "react";

const BigArticleCardSkeleton = () => {
  return (
    <div className="xl:grid grid-cols-2 gap-x-8">
      <div className="w-full aspect-video bg-gray-200 rounded-md animate-pulse"></div>
      <div className="flex flex-col justify-between py-4">
        <div>
          <div className="w-[200px] h-10  bg-gray-200 rounded-md animate-pulse mb-3"></div>
          <div className="w-full h-16 bg-gray-200 rounded-md animate-pulse mb-3"></div>
          <div className="w-full h-24 bg-gray-200 rounded-md animate-pulse"></div>
        </div>

        <div className="flex items-center gap-2 xl:mt-0 mt-3">
          <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-[100px] h-12 bg-gray-200 rounded-md animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default BigArticleCardSkeleton;
