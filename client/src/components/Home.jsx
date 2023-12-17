import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <div className="main">
        <Navbar />
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
