import { useContext, useEffect, useState } from "react";
import { AuthContexts } from "../../Contexts/AuthContext";
import axios from "axios";
import Card3 from "../../Extra/Card3/Card3";
import toast from "react-hot-toast";

const BookedServices = () => {

  const { user } = useContext(AuthContexts);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user.email) {
      axios
        .post(`${import.meta.env.VITE_API_URL}/bookedservices`, {
          email: user.email,
        })
        .then((res) => {
            setData(res.data)
            setLoading(false)
        })
        .catch(()=> {
            toast.error("Something went wrong.")
            setLoading(false);
        })
        
    }
  }, [user.email]);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-dots loading-lg text-center mt-20"></span>
      </div>
    );
  }

  if (data.length > 0) {
    return (
      <div className="max-w-screen-2xl mx-auto mt-10 space-y-2">
        {data.map((card) => (
          <Card3 key={card._id} card={card} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="max-w-screen-2xl mx-auto mt-10">
        <h3 className="text-xl text-center my-20">You didnt booked any services yet!!</h3>
      </div>
    );
  }
};

export default BookedServices;
