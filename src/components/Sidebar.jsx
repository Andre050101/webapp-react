import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <ul className="list-unstyled">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => 
                            `${styles.link} ${isActive ? styles.active : ''}`
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => 
                            `${styles.link} ${isActive ? styles.active : ''}`
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => 
                            `${styles.link} ${isActive ? styles.active : ''}`
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;