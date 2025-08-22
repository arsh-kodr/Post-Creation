import React from "react";
import { useLoaderData } from "react-router-dom";

const PostPage = () => {
  const postData = useLoaderData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 sm:px-8 py-10">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Latest Posts
      </h1>

      {/* Post Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {postData && postData.length > 0 ? (
          postData.map((post) => (
            <div
              key={post._id}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-purple-500/40 transition-all duration-300"
            >
              <img
                className="w-full h-56 object-cover"
                src={post.url}
                alt={post.caption}
              />
              <div className="px-5 py-4">
                <h2 className="font-semibold text-lg text-gray-100 truncate">
                  {post.caption}
                </h2>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400 text-lg">
            No posts yet 🚀
          </p>
        )}
      </div>
    </div>
  );
};

export default PostPage;
