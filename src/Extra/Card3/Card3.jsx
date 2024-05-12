/* eslint-disable react/prop-types */

const Card3 = ({card}) => {

   
    return (
        <div className="w-full border p-4 flex justify-between items-center">
            <div className="space-y-2">
                <img className="h-10" src={card.image_url} alt="" />
                <h4>{card.service_name}</h4>
                <p>Pice: ${card.price}</p>
            </div>
            <div className={`px-3 py-1  rounded text-white ${card.status === "Pending" ? "bg-blue-400" : card.status === "Working" ? "bg-blue-400" : "bg-green-500" }`}>{card.status}</div>
        </div>
    );
};

export default Card3;