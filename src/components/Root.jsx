import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Root = () => {
    AOS.init();

    return (
        <div >
            <div className="container mx-auto mt-6">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;