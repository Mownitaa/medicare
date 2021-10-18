import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="d-flex text-white  align-items-center justify-content-between py-3 px-5">
                <div>
                    <h4 className="text-warning"> <span className="fs-5 text-info">MediCare</span></h4>
                </div>
                <nav>
                    <NavLink className="text-decoration-none text-dark fs-5 px-3" to="/home">Home</NavLink>
                    <NavLink className="text-decoration-none text-dark fs-5 px-3" to="/about">About</NavLink>
                    <NavLink className="text-decoration-none text-dark fs-5 px-3" to="/services">Services</NavLink>
                    <NavLink className="text-decoration-none text-dark fs-5 px-3" to="/Teachers">Teachers</NavLink>
                    <i className="fas fa-sign-in-alt text-info px-4 fs-4"></i>
                </nav>
            </div>
        </div>
    );
};

export default Header;