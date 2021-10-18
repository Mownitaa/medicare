import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="mt-3 footer">
            <div className="d-flex my-2 py-3 justify-content-center">
                <div className="mx-5">
                    <h5 className="pb-2 text-info fw-bold">Quick Links</h5>
                    <p>Home</p>
                    <p>Services</p>
                    <p>Book</p>
                    <p>Doctors</p>
                    <p>Reviews</p>
                    <p>Blogs</p>
                </div>
                <div className="mx-5">
                    <h5 className="pb-2">Our Services</h5>
                    <p>24/7 Support</p>
                    <p>Free Checkup</p>
                    <p>Diagnosis</p>
                    <p>Ambulance Service</p>
                    <p>Bed Facility</p>
                    <p>Spare parts</p>
                </div>
                <div className="mx-5">
                    <h5 className="pb-2 text-info fw-bold">Contact Info</h5>
                    <p>+123-1234-6780</p>
                    <p>+333-7889-578</p>
                    <p>medicare@gmail.com</p>
                    <p>medicare_789</p>
                    <p>Savar,Dhaka,Bangladesh</p>
                </div>
                <div className="mx-5">
                    <h5 className="pb-2">Follow Us</h5>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Linkedin</p>
                    <p>Pinterest</p>
                </div>
                <div className="mx-5">
                    <h6 className="text-info fw-bold">Stay Updated With Us</h6>
                    <input className="my-3 pe-5 ps-1 py-1 border border-none border border-info" type=" email" placeholder="Enter your e-mail" />
                    <br />
                    <button className="bg-info py-2  px-3 border border-none rounded text-dark fw-bolder text-white">Sign Up</button>
                </div>
            </div>
            <div className="border text-center py-1">
                <i className="far fa-copyright"></i> All <span className="text-info fw-bolder">Rights</span> Reserved
            </div>
        </div>
    );
};

export default Footer;