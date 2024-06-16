import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet/>
    </main>
  );
};

export default MainLayout;
