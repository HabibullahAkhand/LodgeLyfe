import { Link } from "react-router-dom";


const Estate = ({ estate }) => {
    const { id, segment_name, estate_title, image, description, price, status, area, location, facilities, view_property_button } = estate;
    return (
        <div data-aos="zoom-in-up">
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl md:h-60 lg:h-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{description}</p>
                    <p>Price: {price} </p>
                    <div className="card-actions">
                        <Link
                            to={`/estateProperty/${id}`} 
                            className="btn btn-primary bg-[#cfa25a] border-none text-white hover:bg-[#836535] ">View Property</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;