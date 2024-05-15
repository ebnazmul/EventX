import { useContext, useEffect, useState } from "react";
import { AuthContexts } from "../../Contexts/AuthContext";
import axios from "axios";
import Card2 from "../../Extra/Card2/Card2";
import { Helmet } from "react-helmet-async";

const ManageService = () => {
  const { user, loading } = useContext(AuthContexts);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (user.email) {
      axios
        .post(`${import.meta.env.VITE_API_URL}/manageservice`, {
          email: user.email,
        })
        .then((res) => {
          //   console.log(res);
          setData(res.data);
        });
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-dots loading-lg text-center mt-20"></span>
      </div>
    );
  }

  return (
    <div className="mt-10 max-w-screen-2xl mx-auto space-y-2">
      <Helmet>
        <title>Manage Services - EventX</title>
      </Helmet>
      {data.length < 1 ? (
        <h2 className="text-xl text-center mt-10">Nothing to manage!</h2>
      ) : (
        data.map((post) => <Card2 key={post._id} post={post} />)
      )}
    </div>
  );
};

export default ManageService;
