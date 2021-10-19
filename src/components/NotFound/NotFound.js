import React from 'react';
import { NavLink } from 'react-router-dom';


const NotFound = () => {
    const notFoundImg = 'https://image.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1933.jpg';
    return (
        <div className="container d-flex  justify-content-center lh-lg">
            <div className="text-center w-50 py-5 m-4">
                {/* notfound image */}
                <img src={notFoundImg} alt="" />

                <div className="ms-5">
                    {/* homepage button */}
                    <button className="m-3"> <NavLink className="text-decoration-none text-dark p-4 fw-bolder" to="/home">HOME</NavLink> </button>
                    <h3 className="mt-2">
                        <small>
                            <i className="fab fa-twitter-square me-3 text-primary"></i>
                            <i className="fab fa-facebook-square me-3 text-primary"></i>
                            <i className="fab fa-linkedin me-3 text-primary"></i>
                            <i className="fab fa-youtube-square text-primary"></i>
                        </small>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
