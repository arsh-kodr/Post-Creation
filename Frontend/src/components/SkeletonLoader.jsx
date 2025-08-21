import React from "react";

const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-56 bg-gray-300"></div>
      <div className="px-5 py-4">
        <div className="h-5 bg-gray-300 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
};

const SkeletonLoader = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-8 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-800">
        📸 Loading Posts...
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
