import React from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router";

const Layout = () => {
  const location = useLocation();
  const isPostPage = location.pathname === "/post";

  return (
    <div
      className={`min-h-screen flex flex-col bg-gray-50  ${
        isPostPage ? "overflow-y-auto" : "overflow-hidden"
      }`}
    >
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
