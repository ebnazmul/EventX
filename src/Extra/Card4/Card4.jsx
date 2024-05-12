/* eslint-disable react/prop-types */

import axios from "axios";
import toast from "react-hot-toast";

const Card4 = ({ card }) => {
  const handleState = (e) => {
    console.log(e.target.value);

    axios
      .patch(`${import.meta.env.VITE_API_URL}/changestate`, {
        id: card._id,
        status: e.target.value,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success(`Order marked as ${e.target.value}`);
        } else {
          toast.error("Something went wrong.");
        }
      })
      .catch(() => {
        toast.error("Something went wrong.");
      });
  };

  return (
    <div className="w-full border p-4 flex justify-between items-center">
      <div className="space-y-2">
        <img className="h-10" src={card.image_url} alt="" />
        <h4>{card.service_name}</h4>
        <p>Pice: ${card.price}</p>
        <p className="px-2 py-1 border rounded">
          {card.specialInstructions || "No special instructions"}
        </p>
        <div>
          <p>Buyer Email: {card.buyerEmail}</p>
          <p></p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className={`px-3 py-1 rounded text-white ${
            card.status === "Pending"
              ? "bg-blue-400"
              : card.status === "Working"
              ? "bg-blue-400"
              : "bg-green-500"
          }`}>
          {card.status}
        </button>
        <select defaultValue={card.status}
          onChange={handleState}
          name="status"
          className="border px-2 py-1 rounded">
          <option value="Pending">Pending</option>
          <option value="Working">Working</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default Card4;
