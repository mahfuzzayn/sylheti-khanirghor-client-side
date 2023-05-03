import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import PageFooter from "../pages/Shared/PageFooter/PageFooter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
    return (
        <div className="main-content">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <PageFooter></PageFooter>
            {/* React Toastify Component */}
            <ToastContainer />
        </div>
    );
};

export default Main;
