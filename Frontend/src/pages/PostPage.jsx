import React from "react";
import { useLoaderData } from "react-router";

const PostPage = () => {
  const postData = useLoaderData(); 

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-8 py-10 overflow-hidden">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-800">
         Latest Posts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {postData && postData.length > 0 ? (
          postData.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <img
                className="w-full h-56 object-cover"
                src={post.url}
                alt={post.caption}
              />
              <div className="px-5 py-4">
                <h2 className="font-semibold text-lg text-gray-800 truncate">
                  {post.caption}
                </h2>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">
            No posts yet. 🚀
          </p>
        )}
      </div>
    </div>
  );
};

export default PostPage;
