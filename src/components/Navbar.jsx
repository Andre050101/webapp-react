import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <strong>
                        <span>We</span>
                        <i className="fa fa-heart" style={{ color: 'red', margin: '0 5px' }}></i>
                        <span>films.com</span>
                    </strong>
                </Link>
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
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;