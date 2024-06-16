import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";


const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet/>
      <Footer/>
    </main>
  );
};

export default MainLayout;
