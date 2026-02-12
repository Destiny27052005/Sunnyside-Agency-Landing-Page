
function Client({ img, text, client, role }) {
    return (
        <div className="mb-8">
            <img className="place-self-center rounded-[50%] mb-3" src={img} alt="" />
            <p className="text-center mb-5">{text}</p>
            <h5 className="text-center">{client}</h5>
            <p className="text-center">{role}</p>
        </div>
    );
}

export default Client;