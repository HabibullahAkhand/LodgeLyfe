import { IoLocationSharp } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
import { MdPhoneInTalk } from "react-icons/md";
import { MdOutlineTimer } from "react-icons/md";
const Footer = () => {
    return (
        <div className="bg-base-300">
            <footer className="footer p-10 container mx-auto text-base-content">
                <div className="">
                    <h3 className="text-3xl opacity-70 font-bold">About Hospitality</h3>
                    <p className="max-w-sm">Hospitality encompasses the art of welcoming and catering to guests' needs with warmth, care, and efficiency, creating memorable experiences.</p>
                </div>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Hotel accommodation</a>
                    <a className="link link-hover">Restaurant dining</a>
                    <a className="link link-hover">Concierge services</a>
                    <a className="link link-hover">Event planning and catering</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Usefull Links</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Consultants</a>
                    <a className="link link-hover">Working Hours</a>
                    <a className="link link-hover">Procedures</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact Details</h6>
                    <div className="grid">
                        <a href="" className="flex gap-3 mb-3"><span><IoLocationSharp /></span>Park Drive, Varick Str NY 10012, USA</a>
                        <a href="" className="flex gap-3 mb-3"><span><RiMessage2Line /></span>Getwell@Hospitals.com</a>
                        <a href="" className="flex gap-3 mb-3"><span><MdPhoneInTalk /></span>(123) 0200 12345 & 7890</a>
                        <a href="" className="flex gap-3 mb-3"><span><MdOutlineTimer /></span>Mon-Friday: 9am to 18pm</a>
                        <a href="" className="flex gap-3 mb-3"><span><MdOutlineTimer /></span>Sat-Sunday: 10am to 16pm</a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;