import 'animate.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Helmet} from "react-helmet";

// Data representing each section of the route
const routeData = [
    {
        title: "Introduction to Hospitality Industry",
        content: [
            "Brief overview of the hospitality industry, encompassing hotels, motels, resorts, vacation rentals, lodges, guesthouses, etc.",
            "Importance of hospitality in the travel and tourism sector."
        ]
    },
    {
        title: "Traditional Hospitality Practices",
        content: [
            "Historical background of hospitality, tracing its origins.",
            "Traditional practices in hospitality, such as personalized service, concierge services, and guest interaction."
        ]
    },
    {
        title: "Emergence of Hospitality Technology",
        content: [
            "Introduction of technology into the hospitality industry.",
            "Evolution from manual processes to automated systems.",
            "Impact of technology on guest experiences and operational efficiencies."
        ]
    },
    {
        title: "Key Technological Innovations",
        content: [
            "Reservation systems",
            "Property management systems (PMS)",
            "Online booking platforms",
            "Mobile apps for guest services",
            "IoT (Internet of Things) devices in hotel rooms",
            "Virtual reality (VR) tours for vacation rentals and resorts",
            "AI-powered chatbots for customer service",
            "Contactless check-in and payment systems"
        ]
    },
    {
        title: "Benefits of Hospitality Technology",
        content: [
            "Improved guest experiences, such as faster check-ins, personalized recommendations, and enhanced communication with staff.",
            "Increased operational efficiency for hotel management, including streamlined booking processes, better inventory management, and data-driven decision-making."
        ]
    },
    {
        title: "Challenges and Considerations",
        content: [
            "Adoption challenges faced by hotels and other hospitality businesses, such as cost, integration with existing systems, and staff training.",
            "Privacy and security concerns related to guest data and IoT devices.",
            "Ensuring inclusivity and accessibility in technology implementations."
        ]
    },
    {
        title: "Future Trends and Innovations",
        content: [
            "Predictions for the future of hospitality technology, including advancements in AI, machine learning, and data analytics.",
            "Emerging technologies that could further revolutionize the industry, such as biometrics for security and personalization, blockchain for transparent and secure transactions, and augmented reality (AR) for immersive guest experiences."
        ]
    },
    {
        title: "Case Studies and Examples",
        content: [
            "Showcase of successful implementations of hospitality technology by leading hotels, resorts, and vacation rental platforms.",
            "Analysis of how these technologies have transformed guest experiences and improved business operations."
        ]
    },
    {
        title: "Conclusion",
        content: [
            "Recap of the significance of hospitality technology in the modern hospitality industry.",
            "Reflection on the potential of technology to continue shaping the future of hospitality.",
            "Call to action for hospitality businesses to embrace innovation and adapt to technological advancements to stay competitive in the market."
        ]
    },
    {
        title: "Types of Accommodations",
        content: [
            "Hotels: Traditional accommodation offering various amenities and services to guests.",
            "Motels: Typically located along highways, offering convenient overnight stays for travelers.",
            "Resorts: Destination properties offering extensive facilities and recreational activities for guests.",
            "Vacation Rentals: Private residences rented out to guests for short-term stays, often booked through online platforms.",
            "Lodges: Rustic accommodations usually situated in natural settings, offering a cozy retreat for guests.",
            "Guesthouses: Small lodging establishments offering a homely atmosphere and personalized service."
        ]
    }
];

const blog = [
    {
        "title": "Luxury Resorts in the Sundarbans",
        "image": "https://i.ibb.co/MRHjDwV/Sundarban-Tiger.jpg",
        "description": "Nestled amidst the lush mangrove forests of the Sundarbans, these luxury resorts offer a serene retreat for nature lovers and adventure seekers alike. With breathtaking views of the rivers and abundant wildlife, guests can indulge in a range of activities including guided jungle safaris, bird watching, and boat cruises. The resorts feature spacious and elegantly designed rooms, delectable local cuisine, and top-notch hospitality. Whether you're looking for a romantic getaway or a family vacation, the Sundarbans resorts provide an unforgettable experience in the heart of nature."
    },
    {
        "title": "Charming Guesthouses in Cox's Bazar",
        "image": "https://i.ibb.co/Svg96qj/cox.jpg",
        "description": "Experience the true essence of coastal living at these charming guesthouses dotted along the sandy shores of Cox's Bazar. Each guesthouse boasts cozy accommodations with stunning ocean views, allowing guests to relax and unwind in a tranquil setting. From leisurely walks along the beach to thrilling water sports activities, there's something for everyone to enjoy. The friendly staff and warm hospitality add to the appeal of these guesthouses, making them the perfect choice for a memorable beach vacation in Bangladesh."
    },
    {
        "title": "Riverside Lodges in Sylhet",
        "image": "https://i.ibb.co/8bDC7Tw/beautiful-strawberry-garden-sunrise-doi-ang-khang-chiang-mai-thailand.jpg",
        "description": "Escape to the picturesque landscapes of Sylhet and stay at one of its charming riverside lodges for a peaceful retreat. Surrounded by lush tea gardens and rolling hills, these lodges offer a serene environment away from the hustle and bustle of city life. Guests can rejuvenate their senses with scenic nature walks, explore nearby waterfalls and tea estates, or simply relax by the riverside with a cup of freshly brewed tea. With comfortable accommodations and warm hospitality, a stay at these lodges promises a truly unforgettable experience in the heart of nature."
    },
    {
        "title": "Vacation Rentals in Saint Martin's Island",
        "image": "https://i.ibb.co/k9YkzFp/saint-martin-s-island.jpg",
        "description": "Discover the beauty of Saint Martin's Island and make yourself at home in one of its cozy vacation rentals. From quaint beach cottages to spacious villas with panoramic views of the ocean, there's a wide range of accommodations to choose from to suit every traveler's preference. Spend your days exploring the island's pristine beaches, snorkeling in crystal-clear waters, or indulging in delicious seafood at local eateries. With warm hospitality and personalized service, these vacation rentals offer a perfect island getaway for those seeking relaxation and adventure."
    }
]





// Main Component representing the entire route
function HospitalityTechnologyRoute() {
    return (
        <div>
            <Helmet>
                <title>Blog || LodgeLyfe</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <h1 className="lg:text-6xl text-2xl font-semibold text-center my-10 text-[#44b3d2] animate__animated animate__bounce">Hospitality Technology Evolution</h1>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >


                <div className="space-y-6 ">
                    {routeData.map((section, index) => (

                        <section key={index}>
                            <SwiperSlide>
                                <div className="hero  min-h-screen rounded-lg opacity-80" style={{ backgroundImage: 'url(https://i.ibb.co/Xb9nxqf/chef-using-ar-technology-his-profession.jpg)' }}>
                                    <div className=""></div>
                                    <div className="hero-content  text-center text-neutral-content">
                                        <div className="">
                                            <h1 className="mb-5 text-xl lg:text-5xl md:lg:text-3xl font-bold  text-white animate__animated animate__lightSpeedInRight animate__infinite	infinite">{section.title}</h1>
                                            <ul>
                                                {section.content.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </section>
                    ))}
                </div>



            </Swiper>


            <div className="space-y-4 mt-20">
                {
                    blog.map((bl,idx)=>(<div key={idx} className="hero md:p-10 lg:p-20 bg-[#18305c]">
                    <div className="hero-content  flex-col lg:flex-row-reverse">
                        <div className="w-full md:w-1/3">
                        <img src={bl.image} className="w-full rounded-lg shadow-2xl animate__animated animate__bounceOut animate__slow	2s animate__infinite	infinite" />
                        </div>
                        <div  className='w-2/3'>
                            <h1 className="text-xl lg:text-5xl md:lg:text-3xl font-bold text-[#cfa25a]">{bl.title}</h1>
                            <p className="py-6 text-white">{bl.description}</p>
                        </div>
                    </div>
                </div>))
                }
            </div>
            


        </div>
    );
}

export default HospitalityTechnologyRoute;
