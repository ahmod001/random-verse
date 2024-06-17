import React from "react";
import { NavLink } from "react-router-dom";
import '../css/logo.css'

const Navbar = (): React.ReactNode => {
  return (
    <div className="  bg-[#191a1a] bg-opacity-70 backdrop-blur-md sticky top-0 z-[999]">
      <div className="px-2 max-w-6xl mx-auto navbar">
        <div className="flex-1">
          <NavLink to="/" className="shine text-xl font-semibold">
          Random Verse
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/ahmod-hasan">About me</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
