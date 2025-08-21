import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import PostForm from "./PostForm";
import PostPage from "../pages/PostPage";
import PageNotFound from "../pages/PageNotFound";
import axios from "axios";
import SkeletonLoader from "../components/SkeletonLoader"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/creation",
        element: <PostForm />,
      },
      {
        path: "/post",
        element: <PostPage />,
        loader: async () => {
          try {
            const res = await axios.get("http://localhost:3000/posts");
            return res.data.data;
          } catch (error) {
            console.error(error);
            return [];
          }
        },
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<SkeletonLoader />} 
    />
  );
};

export default AppRouter;
