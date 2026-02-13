import Card from "../components/Card";
import desktopTransform from "../assets/image/desktop/image-transform.jpg"
import mobileTransform from "../assets/image/mobile/image-transform.jpg"
import desktopStand from "../assets/image/desktop/image-stand-out.jpg"
import mobileStand from "../assets/image/mobile/image-stand-out.jpg"


function Section() {
    return (
        <section className="">
            <Card
                className="md:grid grid-cols-2" classname="hidden md:block w-full h-full"
                deskImg={desktopTransform} mobileImg={mobileTransform} alt="Transform"
                title="Transform your brand"
                text="We are a full-service creavite agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you." />
            <Card
                className="md:grid  grid-cols-2" classname="hidden  md:block order-1 w-full  h-full"
                deskImg={desktopStand} mobileImg={mobileStand} alt="Stand out"
                title="Stand out to the right audience"
                text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places." />
        </section>
    );
}

export default Section;