import React from 'react';
import './Service.css';
const Service = (props) => {
    const { name, img, description } = props.service
    return (
        <div className="row row-cols-1 row-cols-md-1 g-4">
            <div className="col">
                <div className="card h-100 service-container pb-3">
                    <img src={img} className="card-img-top img-fluid p-3" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-primary fw-bold fs-5">{name}</h5>
                        <p className="card-text pb-4">{description}</p>
                        <button className="px-3 py-2 border border-info rounded">Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;