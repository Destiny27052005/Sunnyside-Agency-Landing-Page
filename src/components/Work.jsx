

function Work({ deskImg, mobileImg, alt, title, text }) {
    return (
        <div className="relative w-full">
            <img className="hidden md:block w-full" src={deskImg} alt={alt} />
            <img className="md:hidden" src={mobileImg} alt={alt} />
            <div className="w-full h-full absolute top-0 place-content-end pb-20 pl-3 pr-3">
                <h3 className="text-center text-2xl font-bold">{title}</h3>
                <p className="text-center text-[17px] mt-2">{text}</p>
            </div>
        </div>
    );
}

export default Work;