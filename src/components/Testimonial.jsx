import Client from "./Client";
import Emily from '../assets/image/image-emily.jpg'
import Jennie from '../assets/image/image-jennie.jpg'
import Thomas from '../assets/image/image-thomas.jpg'

function Testimonial() {
    return (
        <section className="p-15">
            <h4 className="text-center text-gray-500 font-medium mb-5">CLIENT TESTIMONIALS</h4>
            <div className="md:flex gap-10">
                <Client img={Emily} text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit." client="Emily R." role="Marketing Director" />
                <Client img={Thomas} text="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience." client="Thomas S." role="Chief Operating Officer" />
                <Client img={Jennie} text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!" client="Jennie F." role="Business Owner" />
            </div>
        </section>
    );
}

export default Testimonial;