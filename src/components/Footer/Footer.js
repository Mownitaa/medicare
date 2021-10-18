import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="mt-3 footer">
            <div className="d-flex my-2 py-3 justify-content-center row row-cols-sm-2 row-cols-md-6  ps-5 ms-5">
                <div className="p-3">
                    {/* quick links section */}
                    <p className="pb-2 text-info fw-bold">Quick Links</p>
                    <p><i class="far fa-hand-point-right text-primary"></i> Home</p>
                    <p><i class="far fa-hand-point-right text-primary"></i> Services</p>
                    <p><i class="far fa-hand-point-right text-primary"></i> Book</p>
                    <p><i class="far fa-hand-point-right text-primary"></i> Doctors</p>
                    <p><i class="far fa-hand-point-right text-primary"></i> Reviews</p>
                    {/* our services section */}
                </div>
                <div className="p-3">
                    <p className="pb-2  text-primary fw-bold">Our Services</p>
                    <p><i class="fas fa-chevron-right text-info"></i> 24/7 Support</p>
                    <p><i class="fas fa-chevron-right text-info"></i> Free Checkup</p>
                    <p><i class="fas fa-chevron-right text-info"></i> Ambulance Service</p>
                    <p><i class="fas fa-chevron-right text-info"></i> Bed Facility</p>
                    <p><i class="fas fa-chevron-right text-info"></i> Spare parts</p>
                </div>

                {/* contact info section */}
                <div className="p-3">
                    <p className="pb-2 text-info fw-bold">Contact Info</p>
                    <p><i class="fas fa-phone text-primary"></i> +123-1234-6780</p>
                    <p><i class="fab fa-whatsapp-square text-primary"></i> +333-7889-578</p>
                    <p><i class="fas fa-at text-primary"></i> medicare@gmail.com</p>
                    <p><i class="fab fa-instagram-square text-primary"></i> medicare_789</p>
                    <p><i class="fas fa-map-marker-alt text-primary"></i> Dhaka,Bangladesh</p>
                </div>

                {/* follow us section */}
                <div className="p-3 mx-5">
                    <p className="pb-2  text-primary fw-bold">Follow Us</p>
                    <p><i class="fab fa-facebook-square text-info"></i> Facebook</p>
                    <p><i class="fab fa-twitter-square text-info"></i> Twitter</p>
                    <p><i class="fab fa-instagram-square text-info"></i> Instagram</p>
                    <p><i class="fab fa-linkedin text-info"></i> Linkedin</p>
                    <p><i class="fab fa-pinterest-square text-info"></i> Pinterest</p>
                </div>
            </div>
            {/* copyright */}
            <div className="border text-center py-1">
                <i className="far fa-copyright"></i> All <span className="text-primary fw-bolder">Rights</span> Reserved
            </div>
        </div>
    );
};

export default Footer;