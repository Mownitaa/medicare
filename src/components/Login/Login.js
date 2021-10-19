import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/services';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div>
            <h3 className="text-info fw-bold pt-4">MediCare</h3>


            <div className="mx-5 d-flex align-items-center justify-content-center">

                <div className="container pt-4 pb-5 border border-4 border-warning m-5 w-75">
                    <h1 className="text-primary fw-bold pb-3"><i className="fas fa-user-md"></i></h1>
                    <form>
                        <input className="w-50 border border-info p-2" type="email" name="" id="" placeholder="Email" />
                        <br />
                        <br />
                        <input className="w-50  border border-info p-2" type="password" name="" id="" placeholder="Password" />
                        <br />
                        <br />
                        <input className="bg-white border rounded border-warning text-primary fw-bold px-3" type="submit" value="Submit" />
                    </form>

                    <p className="pt-5">New to MediCare? <Link to="/register">Create Account</Link> </p>
                    <div className="pb-2 fs-5">or,</div>
                    <button onClick={handleGoogleLogin}
                        className="btn btn-info border border-primary fs-6 fw-bold text-white p-3">Google Sign In</button>
                </div>
            </div>
            <p className="text-primary pb-4">__________________________</p>
        </div>
    );
};

export default Login;