import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContexts } from "../../Contexts/AuthContext";
import toast from "react-hot-toast";

const BookService = () => {
  const { id } = useParams();

  const { user } = useContext(AuthContexts);

  const [singleData, setSingleData] = useState({});

  const [isLoading, seIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/post/${id}`).then((res) => {
      setSingleData(res.data);
      // console.log(res.data);
      seIsLoading(false);
    });
  }, [id]);

  const handleBooking = (e) => {
    e.preventDefault();

    const form = e.target;

    const bookData = {
      ...singleData,
      buyerEmail: form.buyerEmail.value,
      date: form.date.value,
      specialInstructions: form.specialInstructions.value,
      status: "Pending",
    };

    delete bookData._id;

    console.log(bookData);

    axios
      .post(`${import.meta.env.VITE_API_URL}/bookservice`, bookData)
      .then((res) => {
        console.log(res);
        if (res.data.acknowledged) {
          toast.success(
            "You succesfully booked the service, wait for providers reply!"
          );
          navigate("/bookedservices");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("You already brought this service!");
      });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-dots loading-lg text-center mt-20"></span>
      </div>
    );
  }

  return (
    <div className="my-10 max-w-screen-2xl mx-auto">
      <form onSubmit={handleBooking}>
        <div className="mb-2">
          <h3 className="mb-2">Service ID</h3>
          <input
            name="service_id"
            type="text"
            className="px-2 py-1 border border-gray-400 outline-none w-full"
            value={singleData._id}
            disabled
          />
        </div>

        <div className="mb-2">
          <h3 className="mb-2">Service Name</h3>
          <input
            name="service_name"
            type="text"
            className="px-2 py-1 border border-gray-400 outline-none w-full"
            value={singleData.service_name}
            disabled
          />
        </div>

        <div className="mb-2">
          <h3 className="mb-2">Image URL</h3>
          <input
            name="image_url"
            type="text"
            className="px-2 py-1 border border-gray-400 outline-none w-full"
            value={singleData.image_url}
            disabled
          />
        </div>

        <div className="mb-2">
          <h3 className="mb-2">Price in USD ($)</h3>
          <input
            name="price"
            type="text"
            className="px-2 py-1 border border-gray-400 outline-none w-full"
            value={singleData.price}
            disabled
          />
        </div>
        <div className="mb-2">
          <h3 className="mb-2">Provaider Name</h3>
          <input
            name="provaiderName"
            type="text"
            className="px-2 py-1 border border-gray-400 outline-none w-full"
            value={singleData.provider.provider_name}
            disabled
          />
        </div>
        <div className="mb-2">
          <h3 className="mb-2">Provaider Email</h3>
          <input
            name="provaiderEmail"
            type="text"
            className="px-2 py-1 border border-gray-400 outline-none w-full"
            value={singleData.provider.provider_email}
            disabled
          />
        </div>
        <div className="mb-2">
          <h3 className="mb-2">Your Name</h3>
          <input
            name="service_area"
            type="text"
            className="px-2 py-1 border border-gray-400 outline-none w-full"
            value={user.displayName || "Set a name"}
            disabled
          />
        </div>
        <div className="mb-2">
          <h3 className="mb-2">Your Email</h3>
          <input
            name="buyerEmail"
            type="text"
            className="px-2 py-1 border border-gray-400 outline-none w-full"
            value={user.email}
            disabled
          />
        </div>
        <div className="mb-2">
          <h3 className="mb-2">Select a date</h3>
          <input
            name="date"
            type="date"
            className="px-2 py-1 border border-gray-400 outline-none"
            autoFocus
            required
          />
        </div>
        <div className="mb-2">
          <h3 className="mb-2">Special instruction</h3>
          <textarea
            placeholder="Special instuctions..."
            className="border px-2 border-black outline-none"
            name="specialInstructions"
            rows="4"
            cols="50"></textarea>
        </div>
        <div className="text-center">
          <button className="mt-4 py-2 px-4 bg-blue-400 text-white rounded">
            Purchase Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookService;
