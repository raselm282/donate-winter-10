import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";


const MainLayouts = () => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-334.67px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
