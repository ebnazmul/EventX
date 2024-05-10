import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <Toaster />
        </>
    );
};

export default Layout;