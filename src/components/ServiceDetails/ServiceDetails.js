import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';


const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setService(data[`${serviceId - 1}`]));
    }, [serviceId])
    return (
        <div className="container p-5">
            <h2 className="text-danger pb-3">"Service ID: {serviceId}"</h2>
            <div className="border border-3 border-warning py-5">
                <img src={service.img} alt="" />
                <h4 className="pt-5 text-primary">Service : {service.name}</h4>
                <p>{service.description}</p>
                <button className="p-3 mt-3 border-danger rounded bg-white fs-6"> <NavLink className="text-decoration-none" to="/services">Back To Services</NavLink>
                </button>
            </div>
        </div>
    );
};

export default ServiceDetails;