import { Helmet } from "react-helmet";


const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact || LodgeLyfe</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="lg:grid  lg:grid-cols-4 gap-8 mt-6 md:mt-10 space-y-5">
                <div className="col-span-3">
                    <h1 className="p-8 text-xl font-bold lg:text-5xl md:lg:text-3xl ">Contact Us</h1>
                    <hr />
                    <div className="mt-8 space-y-5">
                        <p>At LodgeLyfe, we value your feedback and inquiries. Whether you have questions about our services, suggestions for improvement, or are interested in collaborating with us, our team is dedicated to providing prompt and helpful assistance. Your satisfaction is our priority, and we are committed to delivering the best possible support to meet your needs. Feel free to reach out to us via the contact information provided below. We look forward to hearing from you!</p>
                        <p><span className="font-bold">Email: </span>contact@example.com</p>
                        <p><span className="font-bold">Phone: </span> +123-456-7890</p>
                        <p><span className="font-bold">Fax: </span>  +123-456-7891</p>
                        <p><span className="font-bold">Address: </span>
                            LodgeLyfe ,
                            123 Main Street,
                            Dhaka,
                            Bangladesh</p>
                    </div>
                    <div className="lg:flex gap-4 my-10">
                        <form className="flex-1">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text"
                                    name="name"
                                    placeholder="Your First Name"
                                    required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text"
                                    name="name"
                                    placeholder="Your Last Name"
                                    required className="input input-bordered" />
                            </div>
                            
                        </form>
                        <form className="flex-1">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Address:</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    name="Email"
                                    placeholder="Email Address"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input
                                    type="Number"
                                    required
                                    name="Phone"
                                    placeholder="Phone number"
                                    className="input input-bordered" />
                            </div>
                        </form>

                    </div>
                    <select className="select select-primary w-full mb-10">
                        <option disabled selected>What is the property bing sold?</option>
                        <option>Hotels</option>
                        <option>motels</option>
                        <option>resorts</option>
                        <option>vacation rentals</option>
                        <option>Lodges</option>
                        <option>Guesthouses</option>
                    </select>
                    <p className="font-semibold">How may we help you?</p>
                    <textarea placeholder="Help me Understand How can help you?" className="textarea textarea-bordered textarea-lg w-full mb-10" ></textarea>
                    <button onClick={()=>{alert('submitted successfully done')}} className="btn btn-primary bg-[#cfa25a] border-none md:mb-10 text-white hover:bg-[#836535] w-full" >Submit</button>
                </div>
                <div className="col-span-1 space-y-3">
                    <div className="p-8 text-xl font-bold lg:text-2xl bg-white rounded-lg">
                        Call Us At 01712345678
                    </div>
                    <div className="">
                        <img src='https://i.ibb.co/TcV2HDY/contact-us-image.jpg' className="rounded-lg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;