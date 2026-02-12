import Navbar from "./Navbar";
import desktopHeader from "../assets/image/desktop/image-header.jpg"
import mobileHeader from "../assets/image/mobile/image-header.jpg"
import arrow from "../assets/image/icon-arrow-down.svg"

function Creative() {
    return (
        <section className="top">
            <Navbar />
            {/* Mobile View */}
            <img className="orange top-0  -z-10 w-full md:hidden" src={mobileHeader} alt="header image" />
            {/* Desktop View */}
            <img className="orange hidden h-full md:block w-full top-0 -z-10" src={desktopHeader} alt="header image" />

            <h1 className="text-center text-6xl md: text-white font-bold mt-[10vh] ">WE ARE CREATIVE</h1>
            <img className="arrow grid h-[25vh] place-self-center mt-[9vh]" src={arrow} alt="Arrow down icon" />
        </section>
    );
}

export default Creative;