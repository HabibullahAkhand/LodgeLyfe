import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperSlider = () => {
    return (
        <div className='mt-10'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/3yP4nb0/view-pool-hotel-ocean-water.jpg)' }}>
                        <div className="hero-overlay rounded-lg"></div>
                        <div className="hero-content  text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold  text-white">Hotels</h1>
                                <p className="mb-5 text-white">Experience unparalleled luxury and comfort at our exquisite hotels. Immerse yourself in opulent surroundings, indulge in gourmet dining, and enjoy impeccable service tailored to exceed your every expectation. Your perfect retreat awaits.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/dcfhZX9/front-desk-hotel-reception-lobby.jpg)' }}>
                        <div className="hero-overlay rounded-lg"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold text-white">Desk hotel reception lobby</h1>
                                <p className="mb-5 text-white">Experience warmth and efficiency at our hotel reception desk, where personalized service meets seamless check-ins. Our lobby is a welcoming haven, offering a blend of comfort and sophistication, ensuring your stay begins with a delightful touch of hospitality.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="hero min-h-screen rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/JxyNyzJ/thatch-roof-house.jpg)' }}>
                    <div className="hero-overlay rounded-lg"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold text-white">Roof house</h1>
                            <p className="mb-5 text-white">Experience luxury and tranquility at our rooftop houses. Unwind in stylish comfort with breathtaking views. Your perfect urban escape awaits atop our exquisite roof houses.</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/BjwDT1q/8907427.jpg)' }}>
                        <div className="hero-overlay rounded-lg"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold text-white">Guesthouses</h1>
                                <p className="mb-5 text-white">Experience comfort and charm at our guesthouses, where personalized service meets cozy accommodations. Nestled in scenic locales, our welcoming spaces offer a home away from home, with amenities designed to ensure a memorable stay. Book your retreat today!</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperSlider;