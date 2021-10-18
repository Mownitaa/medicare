import React from 'react';
import './Appointment.css'
const Appointment = () => {
    // const doctor = 'https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg';
    const doctor = 'https://image.freepik.com/free-vector/medicine-concept-illustration_114360-4119.jpg';
    return (
        <div className="container pb-5 mb-5">
            <h2 className="text-info pt-5 mt-3">Book An Appointments</h2>
            <p className="text-warning">______________________________</p>
            <div className="d-flex row row-cols-sm-1 row-cols-md-2 justify-content-center align-items-center p-5">
                <div>
                    <img className="img-fluid w-75" src={doctor} alt="" />
                </div>
                <div className="">
                    <form action="" className="border border-3 border-info p-4">
                        <h4 className="text-warning fw-bolder">Give Your Information</h4>
                        <br />
                        <input className="w-75 border border-warning p-2" type="text" placeholder="Your Full Name" />
                        <br /> <br />
                        <input className="w-75 border border-warning p-2" type="text" placeholder="Email" />
                        <br /> <br />
                        <input className="w-75 border border-warning p-2" type="text" placeholder="Phone Number" />
                        <br /> <br />
                        <input className="w-75 border border-warning p-2" type="text" placeholder="DD/MM/YY" /><br />
                        <button className="border  rounded bg-info  text-white fw-bold mt-4 px-3 py-2">Book Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Appointment;