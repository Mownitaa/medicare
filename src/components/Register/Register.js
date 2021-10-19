// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// const Register = () => {

//     const auth = getAuth();

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [rePassword, setRePassword] = useState('');
//     const [error, setError] = useState('');


//     const handleRegistration = e => {
//         e.preventDefault();
//         console.log(email, password, rePassword);
//         if (password.length < 6) {
//             setError('Password must be at least 6 characters long');
//             return;
//         }
//         if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
//             setError('Password must contain two uppercase letters');
//             return;
//         }
//         createUserWithEmailAndPassword(auth, email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//             })
//             .catch(error => {
//                 setError(error.message);
//             })
//     }


//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     }


//     const handlePassChange = (e) => {
//         setPassword(e.target.value);
//     }


//     const handleRePassChange = (e) => {
//         setRePassword(e.target.value);
//     }

//     return (
//         <div>
//             <h3 className="text-info fw-bold pt-4">MediCare</h3>


//             <div className="mx-5 d-flex align-items-center justify-content-center">

//                 <div className="container pt-4 pb-5 border border-4 border-warning m-5 w-75">
//                     <h1 className="text-primary fw-bold pb-3">Register</h1>
//                     <form onSubmit={handleRegistration}>
//                         <input onBlur={handleEmailChange} className="w-50 border border-info p-2" type="email" name="" id="" placeholder="Your Email" required />
//                         <br />
//                         <br />
//                         <input onBlur={handlePassChange} className="w-50  border border-info p-2" type="password" name="" id="" placeholder="Enter Password" required />
//                         <br />
//                         <br />
//                         <input onBlur={handleRePassChange} className="w-50  border border-info p-2" type="password" name="" id="" placeholder="Re-enter Password" required />
//                         <br />
//                         <br />
//                         <input className="bg-white border rounded border-warning text-primary fw-bold px-3" type="submit" value="Submit" />


//                         <div className="row mt-3 ms-5 ps-5 text-danger text-center">{error}</div>
//                     </form>

//                     <p className="pt-5">Already Have An Account? <Link to="/login">Login</Link> </p>
//                     <div className="pb-2 fs-5">or,</div>
//                     <button className="btn btn-info border border-primary fs-6 fw-bold text-white p-3">Google Sign In</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;