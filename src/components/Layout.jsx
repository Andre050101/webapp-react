import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import './Layout.css'

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-lg-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 col-lg-10 mt100px">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;