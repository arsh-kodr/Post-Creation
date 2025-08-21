import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="w-screen h-14 bg-amber-200 flex justify-center items-center gap-4 shadow-md">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-bold text-red-500 hover:border-b-2 border-red-500"
            : "hover:border-b-2 border-red-500"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-bold text-red-500 hover:border-b-2 border-red-500"
            : "hover:border-b-2 border-red-500"
        }
        to="/creation"
      >
        Post Creation
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "font-bold text-red-500 hover:border-b-2 border-red-500"
            : "hover:border-b-2 border-red-500"
        }
        to="/post"
      >
        View Posts
      </NavLink>
    </div>
  );
};

export default Navbar;
