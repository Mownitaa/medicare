import React from 'react';
import './Banner.css';

const Banner = () => {
    const bannerImg = 'https://www.urmicare.com/images/health%20care.jpg';
    return (
        <div>
            <img className="banner-img img-fluid" src={bannerImg} alt="" />
            <div className="banner-text">
                <div className="texts">
                    <h1>Welcome To MediCare</h1>
                    <p>Your health and well-being is our top priority.Because your health is an investment,not an expense</p>
                </div>
                <button className="border border-info rounded px-3 py-2 bg-light text-dark fw-bold">Click Here</button>
            </div>
            <div className="click-btn">
                <button className=" btn border border-info rounded px-3 py-2 bg-primary text-white fw-bold">Click Here</button>
            </div>
        </div>
    );
};

export default Banner;