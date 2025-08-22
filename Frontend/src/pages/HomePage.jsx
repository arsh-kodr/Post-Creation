import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 text-gray-100">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Your Post Creation
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-lg text-center max-w-xl mb-10">
        Create, share and explore posts with ease. Start your journey now!
      </p>

      {/* Buttons */}
      <div className="flex gap-6">
        <Link
          to="/creation"
          className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 hover:scale-105 transform transition-all duration-300"
        >
          Create Post
        </Link>
        <Link
          to="/post"
          className="px-6 py-3 border border-purple-500 text-purple-400 rounded-xl shadow-lg hover:bg-purple-800 hover:text-white hover:scale-105 transform transition-all duration-300"
        >
          View Posts
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
