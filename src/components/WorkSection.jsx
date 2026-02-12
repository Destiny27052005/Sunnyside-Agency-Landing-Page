import Work from "./Work";
import deskGraphic from "../assets/image/desktop/image-graphic-design.jpg"
import mobileGraphic from "../assets/image/mobile/image-graphic-design.jpg"
import desktopPhotography from "../assets/image/desktop/image-photography.jpg"
import mobilePhotography from "../assets/image/mobile/image-photography.jpg"


function WorkSection() {
    return (
        <div className="flex">
            <Work deskImg={deskGraphic}
                mobileImg={mobileGraphic}
                className=""
                title="Graphic Design"
                text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
            />
            <Work deskImg={desktopPhotography}
                mobileImg={mobilePhotography}
                className=""
                title="Photography"
                text="Increase your credibility by getting the most stunning, high-quality photos that improve business image."
            />
        </div>
    );
}

export default WorkSection;