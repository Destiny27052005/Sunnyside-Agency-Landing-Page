
function Card({ className, deskImg,classname, mobileImg, alt, title, text }) {
    return (
        <div className={className} >
            <img className={classname} src={deskImg} alt={alt} />
            <img className="md:hidden" src={mobileImg} alt={alt} />
            <div className="md:place-content-center p-25">
                <h2 className="text-center font-bold text-2xl md:text-left md:text-7xl mb-5">{title}</h2>
                <p className="mb-3 text-center md:text-left">{text}</p>
                <a href="#" id="learn" className="font-medium  grid place-self-center md:place-self-start">LEARN MORE</a>
            </div>
        </div>
    );
}

export default Card;