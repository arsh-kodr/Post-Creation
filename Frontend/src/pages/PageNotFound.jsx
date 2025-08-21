import React from "react";
import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-50 px-4 overflow-hidden">
      <h1 className="text-6xl sm:text-8xl text-red-500 font-extrabold mb-4 text-center">
        404
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-6 text-center">
        Oops! The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
      >
        Back to Home
      </button>
    </div>
  );
};

export default PageNotFound;
