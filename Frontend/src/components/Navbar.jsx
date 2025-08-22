import React from "react";
import { NavLink } from "react-router";
import { Home, PlusSquare, Images } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-screen h-16 bg-gray-900 text-gray-100 flex justify-center items-center gap-10 shadow-lg border-b border-gray-700">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-2 rounded-md transition ${
            isActive
              ? "text-indigo-400 font-semibold bg-gray-800"
              : "hover:text-indigo-300 hover:bg-gray-800"
          }`
        }
      >
        <Home className="w-5 h-5" />
        Home
      </NavLink>

      <NavLink
        to="/creation"
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-2 rounded-md transition ${
            isActive
              ? "text-indigo-400 font-semibold bg-gray-800"
              : "hover:text-indigo-300 hover:bg-gray-800"
          }`
        }
      >
        <PlusSquare className="w-5 h-5" />
        Post Creation
      </NavLink>

      <NavLink
        to="/post"
        className={({ isActive }) =>
          `flex items-center gap-2 px-3 py-2 rounded-md transition ${
            isActive
              ? "text-indigo-400 font-semibold bg-gray-800"
              : "hover:text-indigo-300 hover:bg-gray-800"
          }`
        }
      >
        <Images className="w-5 h-5" />
        View Posts
      </NavLink>
    </nav>
  );
};

export default Navbar;
