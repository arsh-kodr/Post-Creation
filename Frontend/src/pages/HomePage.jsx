import React from "react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100 px-6">
     
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-8">
         Your Post Creation
      </h1>
      <p className="text-gray-600 text-lg text-center max-w-xl mb-10">
        Create, share and explore posts with ease. Start your journey now!
      </p>

     
      <div className="flex gap-6">
        <Link
          to="/creation"
          className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition-all duration-300"
        >
          Create Post
        </Link>
        <Link
          to="/post"
          className="px-6 py-3 border border-purple-600 text-purple-600 rounded-xl shadow-md hover:bg-purple-50 transition-all duration-300"
        >
          View Posts
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
