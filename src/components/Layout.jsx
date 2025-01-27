import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;