import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import './Navbar.module.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning fixed-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    <strong>
                        <span>We</span>
                        <i className="fa fa-heart" style={{ color: 'red', margin: '0 5px' }}></i>
                        <span>films.com</span>
                    </strong>
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'active' : ''}`
                                }
                                to="/"
                                style={{ fontSize: '1.25rem', fontWeight: 'bold' }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'active' : ''}`
                                }
                                to="/about"
                                style={{ fontSize: '1.25rem', fontWeight: 'bold' }}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'active' : ''}`
                                }
                                to="/contact"
                                style={{ fontSize: '1.25rem', fontWeight: 'bold' }}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;