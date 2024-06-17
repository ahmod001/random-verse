import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import ToggleContents from "../Components/ToggleContents";


const MainLayout = ():React.ReactNode => {
  return (
    <main>
      <Navbar />
      <ToggleContents/>
      <Outlet/>
      <Footer/>
    </main>
  );
};

export default MainLayout;
