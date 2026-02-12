import desktopCone from '../assets/image/desktop/image-gallery-cone.jpg'
import mobileCone from '../assets/image/mobile/image-gallery-cone.jpg'
import desktopMilkbottles from '../assets/image/desktop/image-gallery-milkbottles.jpg'
import mobileMilkbottles from '../assets/image/mobile/image-gallery-milkbottles.jpg'
import desktopOrange from '../assets/image/desktop/image-gallery-orange.jpg'
import mobileOrange from '../assets/image/mobile/image-gallery-orange.jpg'
import desktopSugarcubes from '../assets/image/desktop/image-gallery-sugarcubes.jpg'
import mobileSugarcubes from '../assets/image/mobile/image-gallery-sugar-cubes.jpg'

function Images() {
    return (
        <section className=''>
            <div className="hidden md:grid grid-cols-4 ">
                {/* Desktop */}
                <img src={desktopCone} alt="" />
                <img src={desktopMilkbottles} alt="" />
                <img src={desktopOrange} alt="" />
                <img src={desktopSugarcubes} alt="" />
            </div>
            <div className='grid grid-cols-2 md:hidden'>
                {/* Mobile */}
                <img src={mobileCone} alt="" />
                <img src={mobileMilkbottles} alt="" />
                <img src={mobileOrange} alt="" />
                <img src={mobileSugarcubes} alt="" />
            </div>
        </section>
    );
}

export default Images;