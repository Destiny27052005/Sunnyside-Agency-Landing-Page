import Creative from "../components/Creative";
import Section from "../components/Section";
import WorkSection from "../components/WorkSection";
import Testimonial from "../components/Testimonial";
import Images from "../components/Images";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Creative />
            <Section />
            <WorkSection />
            <Testimonial />
            <Images/>
            <Footer/>
        </div>
    );
}

export default Home;