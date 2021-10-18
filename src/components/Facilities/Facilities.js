import React from 'react';

const Facilities = () => {
    const img1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUmQvfyUGn42hJF42MkSW7hMO7QKfQets7w&usqp=CAU';
    const img9 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVmngNohNAbdZe7xjfqYeE-3dpRsPZafCGSg&usqp=CAU';
    const img3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7qzk6pg6U1bFhS3YnXGzwiY-BiZw7ucD5Zw&usqp=CAU';
    const img4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Y4p0b1lBU5jes107PVE5lj0ltJw80Q9cEQ&usqp=CAU';
    const img5 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc2XSNHIVRupcuTjP2okmxRsCeT3FRgkP8Aw&usqp=CAU';
    const img6 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4aGbV2_jlnbOMqaBpkU9e2PbR7JMkS34AhQ&usqp=CAU';
    const img7 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1ZcgBmX2GE04Iz6sjDiXt3LwR_jlc4_eOw&usqp=CAU';
    const img8 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6E2Tcb-C5rEn98x6E3XVf6IGhMJv6ytnWfA&usqp=CAU';
    const img2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz70SgOziHoTHF6jwWQJPcA43MuCgMKzB_0A&usqp=CAU';

    return (
        <div className="container py-5">
            <h2 className="text-warning fw-bold">Our Facilities</h2>
            <hr />
            <div className="row row-cols-sm-1 row-cols-md-3 g-4 mt-4 mb-5">
                <img className="img-fluid" src={img1} alt="" />
                <img className="img-fluid" src={img2} alt="" />
                <img className="img-fluid" src={img3} alt="" />
                <img className="img-fluid" src={img4} alt="" />
                <img className="img-fluid" src={img5} alt="" />
                <img className="img-fluid" src={img6} alt="" />
                <img className="img-fluid" src={img7} alt="" />
                <img className="img-fluid" src={img8} alt="" />
                <img className="img-fluid" src={img9} alt="" />
            </div>
            <p className="text-warning fw-bold fs-2">________________<i className="text-info fas fa-plus"></i>_______________</p>
        </div>

    );
};

export default Facilities;