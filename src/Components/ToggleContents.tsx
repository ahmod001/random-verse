import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavItem {
  id?: number;
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  {
    name: "Memes",
    path: "/",
  },
  {
    name: "Motivation",
    path: "/motivation",
  },
];

const ToggleContents = (): React.ReactNode => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavToggle = (pathname: string): void => {
    navigate(pathname);
  };

  return (
    <div className="flex justify-center mt-2">
      <div className="join">
        {navItems.map((navItem, i) => (
          <input
            onChange={() => handleNavToggle(navItem.path)}
            defaultChecked={navItem.path === location.pathname}
            key={i}
            className="join-item btn"
            type="radio"
            name="options"
            aria-label={navItem.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ToggleContents;
