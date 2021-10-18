import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="navbar navigation-bar navbar-expand-lg navbar-light px-5">
                <div className="container-fluid">
                    <h3 className="text-info fw-bold ps-3"><i className="fas fa-user-md"></i> MediCare</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse px-5" id="navbarNav">
                        <ul className="navbar-nav ms-5 ps-5">
                            <li className="nav-item">
                                <NavLink className="nav-link text-primary fs-5 pe-4" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-primary fs-5 pe-4" to="/services">Services</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link text-primary fs-5 pe-4" to="/doctors">Doctors</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-primary fs-5 pe-4" to="/book">Book Now</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* <div>
                        <p className="pe-5">login</p>
                    </div> */}
                </div>

            </nav>
        </div >
    );
};

export default Header;