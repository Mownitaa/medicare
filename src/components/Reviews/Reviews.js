import React from 'react';
import './Reviews.css';
const Reviews = () => {
    const reviewer1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcC7tEjV_h-nyGUPrLvGkpsEAEdj5wMpb7Sw&usqp=CAU';
    const reviewer2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZuLlm3Iqz8Jae5IZKPocITJnLRWDsRwsBs9DMG8WgnSIfAozcBkMF4g0J-RBjpmXuos4&usqp=CAU';
    const reviewer3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqoAWWIV2djyCuvgHJ4m3FCadD7O_BeLYUdnZgP8Dn1GCKPtcnsZEtwWB6Hn85jkXkhlg&usqp=CAU';
    return (
        <div className="container p-5 mb-3">
            <h2 className="text-white pt-4">Clients Reviews</h2>
            {/* <p className="text-primary fw-bold fs-2">_________</p> */}
            <div className="d-flex justify-content-center align-items-center row row-cols-sm-1 row-cols-md-3 mt-5">
                <div className="box">
                    <img src={reviewer1} alt="" />
                    <h3 className="p-3">John</h3>
                    <div className="">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half"></i>
                    </div>
                    <p className="p-3 lh-lg">
                        MediCare Has Experts for Every Type of diseases, Including Yours. World Class Treatment. Book an Appointment at MediCare. Personalized Treatment. 130+ Years Experience.
                    </p>
                </div>
                <div className="box">
                    <img src={reviewer2} alt="" />
                    <h3 className="p-3">Julie</h3>
                    <div className="">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half"></i>
                    </div>
                    <p className="p-3 lh-lg">
                        MediCare Has Experts for Every Type of diseases, Including Yours. World Class Treatment. Book an Appointment at MediCare. Personalized Treatment. 130+ Years Experience.
                    </p>
                </div>
                <div className="box">
                    <img src={reviewer3} alt="" />
                    <h3 className="p-3">Jesan</h3>
                    <div className="">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half"></i>
                    </div>
                    <p className="p-3 lh-lg">
                        MediCare Has Experts for Every Type of diseases, Including Yours. World Class Treatment. Book an Appointment at MediCare. Personalized Treatment. 130+ Years Experience.
                    </p>
                </div>
            </div>
            <p className="text-info p-4">______________________________</p>
        </div>
    );
};

export default Reviews;