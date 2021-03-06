import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navigation-bar navbar-expand-lg navbar-light px-5">
                <div className="container-fluid">
                    <h3 className="text-info fw-bold ps-3 mb-4"><i className="fas fa-user-md"></i> MediCare</h3>
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
                                <NavLink className="nav-link text-primary fs-5 pe-4" to="/facilities">Facilities</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-primary fs-5 pe-4" to="/reviews">Reviews</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-primary fs-5 pe-4" to="/appointment">Appointment</NavLink>
                            </li>
                            <li className="nav-item">
                                {
                                    user.email ?
                                        <button className="btn btn-primary" onClick={logOut}>Log Out</button> :
                                        <NavLink className="nav-link text-primary fs-5 pe-4" to="/login">Login</NavLink>}
                                <span className="text-warning fw-bold fs-5 mt-2 pt-5 ps-3">{user.displayName} </span>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div >
    );
};

export default Header;