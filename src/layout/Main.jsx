import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import PageFooter from "../pages/Shared/PageFooter/PageFooter";

const Main = () => {
    return <div className="main-content">
        <NavBar></NavBar>
        <Outlet></Outlet>
        <PageFooter></PageFooter>
    </div>;
};

export default Main;
