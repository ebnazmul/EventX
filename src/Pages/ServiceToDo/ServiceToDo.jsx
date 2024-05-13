import { useContext, useEffect, useState } from "react";
import { AuthContexts } from "../../Contexts/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import Card4 from "../../Extra/Card4/Card4";
import { Helmet } from "react-helmet-async";

const ServiceToDo = () => {
  const { user } = useContext(AuthContexts);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user.email) {
      axios
        .post(`${import.meta.env.VITE_API_URL}/servicetodo`, {
          email: user.email,
        })
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch(() => {
          toast.error("Something went wrong.");
          setLoading(false);
        });
    }
  }, [user.email]);

  console.log(data);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-dots loading-lg text-center mt-20"></span>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto space-y-2 mt-10">
      <Helmet><title>Service To Do - EventX</title></Helmet>
      {data.map((card) => (
        <Card4 key={card._id} card={card} />
      ))}
    </div>
  );
};

export default ServiceToDo;
