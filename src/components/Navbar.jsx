import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-warning fixed-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    <strong>
                        <span>We</span>
                        <i className="fa fa-heart" style={{ color: 'red', margin: '0 5px' }}></i>
                        <span>films.com</span>
                    </strong>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;