import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const auth = getAuth();

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/services';
    const [isLoading, setIsLoading] = useState(true);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false));
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain two uppercase letters');
            return;
        }
        isLogin ? processLogin(email, password) : registerNewUser(email, password);
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }


    const handlePassChange = (e) => {
        setPassword(e.target.value);
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <div>
            <h3 className="text-info fw-bold pt-4">Please {isLogin ? 'Login' : 'Register'} !!!</h3>


            <div className="mx-5 d-flex align-items-center justify-content-center">

                <div className="container pt-4 pb-5 border border-4 border-warning m-5 w-75">
                    <h1 className="text-primary fw-bold pb-3"><i className="fas fa-user-md"></i></h1>
                    <form onSubmit={handleLogin}>
                        <input onBlur={handleEmailChange} className="w-50 border border-info p-2" type="email" name="" id="" placeholder="Email" required />
                        <br />
                        <br />
                        <input onBlur={handlePassChange} className="w-50  border border-info p-2" type="password" name="" id="" placeholder="Password" required />
                        <br />
                        <br />
                        <button type="submit" className="bg-white border rounded border-warning text-primary fw-bold px-3 py-2">{isLogin ? 'Login' : 'Register'}</button>

                        <div className="row mt-3 text-danger d-flex align-items-center justify-content-center text-center">{error}</div>
                    </form>
                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                    <label className="form-check-label ps-2" htmlFor="gridCheck1">Already Registered?</label>
                    <br /> <br />
                    {/* <button type="submit" className="bg-white border rounded border-warning text-primary fw-bold px-3 py-2">{isLogin ? 'Login' : 'Register'}</button> */}


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