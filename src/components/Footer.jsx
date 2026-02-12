import { Link } from "react-router-dom";
import Logo from '../assets/image/logo.svg';
import Facebook from '../assets/image/icon-facebook.svg';
import Instagram from '../assets/image/icon-instagram.svg';
import Twitter from '../assets/image/icon-twitter.svg';
import Pinterest from '../assets/image/icon-pinterest.svg';

function Footer() {
    return (
        <footer className="bg-green-300 p-8 grid place-content-center">
            <img className="place-self-center" src={Logo} alt="" />
            <div className="flex place-self-center mt-8 gap-3">
                <Link>About</Link>
                <Link>Services</Link>
                <Link>Projects</Link>
            </div>

            <div className="mt-10 place-self-center flex gap-5">
                <a href=""><img src={Facebook} alt="" /></a>
                <a href=""><img src={Instagram} alt="" /></a>
                <a href=""><img src={Twitter} alt="" /></a>
                <a href=""><img src={Pinterest} alt="" /></a>
            </div>
        </footer>
    );
}

export default Footer;