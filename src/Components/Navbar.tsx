import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = ():React.ReactNode => {

  return (
    <div className="navbar bg-[#191a1a] bg-opacity-70 backdrop-blur-md sticky top-0 z-[999]">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost text-xl font-semibold">
          Random Verse
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
