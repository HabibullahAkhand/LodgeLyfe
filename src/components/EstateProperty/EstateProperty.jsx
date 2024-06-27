import { useParams, useLoaderData, Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const EstateProperty = () => {
    const propertes = useLoaderData();
    const { id } = useParams();
    // console.log(id);
    const idInt = parseInt(id);
    const property = propertes.find(property => property.id === idInt);
    const { segment_name, estate_title, image, description, price, status, area, location, facilities,  } = property;

    return (
        <div>
            <Helmet>
                <title>Estate Property || LodgeLyfe</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="space-y-4">
                        <h1 className="text-5xl font-bold text-blue-600">{segment_name}</h1>
                        <h1 className="text-3xl font-bold">{estate_title}</h1>
                        <p className="py-6">{description}</p>
                        <p>Price: {price}</p>
                        <p>Status: {status}</p>
                        <p>Area: {area}</p>
                        <p>Location: {location}</p>
                        <p>Facilities:
                            <div className="ml-6">
                            {
                                facilities.map((FC,idx) => <li key={idx}>
                                    <span>{FC} </span>
                                </li>)
                            }
                            </div>
                        </p>

                        <div className="flex justify-between">
                            <button className="btn btn-primary bg-[#cfa25a] border-none text-white hover:bg-[#836535]">Reserve</button>
                        <Link
                            to={'/'} 
                            className="btn btn-primary bg-[#cfa25a] border-none text-white hover:bg-[#836535]">Go Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateProperty;