
import { useEffect, useState } from 'react';
import SwiperSlider from './Swiper/SwiperSlider';
import Estate from './Estate/Estate';
import {Helmet} from "react-helmet";

const Home = () => {
    const [estates, setEstates] = useState([]);
    useEffect(() => {
        fetch("estates.json")
            .then(res => res.json())
            .then(data => setEstates(data))
    }, [estates])
    // estates.map(x=>console.log(Object.keys(x).join(",")))

    // const {id,segment_name,estate_title,image,description,price,status,area,location,facilities,view_property_button} = estates;
    return (
        <div>
            <SwiperSlider></SwiperSlider>
            <Helmet>
                <title>Home || LodgeLyfe</title>
                <meta name="description" content="Helmet application" />
            </Helmet>

            <div className="my-10 space-y-6">
                <h1 className='text-2xl  lg:text-7xl md:text-5xl text-center '>Hospitality</h1>
                <p className='text-center'>Hospitality involves welcoming and accommodating guests with warmth, generosity, and attentiveness to ensure a comfortable and enjoyable experience.</p>
                <div className="grid md:grid-cols-2 gap-3 ">
                    {
                        estates.map((estate) => <Estate key={estate.id} estate={estate} > </Estate>)
                    }
                </div>
            </div>



        </div>
    );
};

export default Home;