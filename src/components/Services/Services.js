import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container p-5">
            <div>
                <h1 className="text-primary fw-bold mt-5">Our Services</h1>
            </div>
            <div className="services-container d-flex mb-5 pb-5 row row-cols-1 row-cols-md-3 g-4 ">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;