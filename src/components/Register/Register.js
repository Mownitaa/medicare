import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h3 className="text-info fw-bold pt-4">MediCare</h3>


            <div className="mx-5 d-flex align-items-center justify-content-center">

                <div className="container pt-4 pb-5 border border-4 border-warning m-5 w-75">
                    <h1 className="text-primary fw-bold pb-3">Register</h1>
                    <form onSubmit="">
                        <input className="w-50 border border-info p-2" type="email" name="" id="" placeholder="Your Email" />
                        <br />
                        <br />
                        <input className="w-50  border border-info p-2" type="password" name="" id="" placeholder="Enter Password" />
                        <br />
                        <br />
                        <input className="w-50  border border-info p-2" type="password" name="" id="" placeholder="Re-enter Password" />
                        <br />
                        <br />
                        <input className="bg-white border rounded border-warning text-primary fw-bold px-3" type="submit" value="Submit" />
                    </form>

                    <p className="pt-5">Already Have An Account? <Link to="/login">Login</Link> </p>
                    <div className="pb-2 fs-5">or,</div>
                    <button className="btn btn-info border border-primary fs-6 fw-bold text-white p-3">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Register;