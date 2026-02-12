import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/image/logo.svg"
import Menu from "../assets/image/icon-hamburger.svg"

function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const nav = () => {
        setIsActive(!isActive);
        document.querySelector('.nav').classList.toggle('show')
    }

    return (
        <nav className="w-full flex items-center justify-between p-5">
            <img className="w-20" src={Logo} alt="Sunnyside Logo" />
            <img src={Menu} className="md:hidden" onClick={nav} alt="" />
            <div className="nav hidden md:flex items-center  gap-5">
                <Link className="first md:text-white text-[15px] font-medium" to="/about">About</Link>
                <Link className="md:text-white text-[15px] font-medium" to="/services">Services</Link>
                <Link className="md:text-white text-[15px] font-medium" to="/projects">Projects</Link>
                <Link className="bg-amber-400 md:bg-white text-sm p-1.5 rounded-3xl transition hover:bg-[#ffffffb3]" to="/contact">CONTACT</Link>
            </div>
        </nav>
    );
}

export default Navbar;