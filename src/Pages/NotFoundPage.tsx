import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = (): React.ReactNode => {
  return (
    <div className="">
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-8xl font-bold text-gray-100">404</h1>
        <p className="md:text-4xl text-2xl font-medium text-gray-100">Page Not Found</p>
        <NavLink to="/" className="mt-4 md:text-xl text-lg text-blue-600 hover:underline">
          Go back home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
