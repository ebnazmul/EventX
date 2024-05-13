import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  const [singleData, setSingleData] = useState({});

  const [isLoading, seIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/post/${id}`).then((res) => {
      setSingleData(res.data);
      // console.log(res.data);
      seIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-dots loading-lg text-center mt-20"></span>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto mt-10">
      <Helmet><title>{singleData.service_name} - EventX</title></Helmet>
      <div className="my-4">
        <p className="font-bold italic">Provaider Details -&gt;</p>
        <div className="flex gap-2 items-center">
          <img
            className="rounded-full h-12"
            src={singleData.provider.provider_image}
          />
          <h2>{singleData.provider.provider_name}</h2>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <h4>Service Area</h4>
        <button className="py-1 px-2 rounded bg-blue-300 my-2 text-white">{singleData.service_area}</button>
      </div>
      <div
        className="h-80 w-full rounded bg-cover mb-4"
        style={{ backgroundImage: `url("${singleData.image_url}")` }}
      />
      <div>
        <h2 className="text-2xl mt-2">{singleData.service_name}</h2>
        <p>{singleData.description}</p>
      </div>
      <div className="my-4"><h2 className="border py-2 px-4 rounded text-xl">Package Start from: ${singleData.price}</h2></div>
      <Link to={`/book/${id}`}><button className="w-full py-2 bg-blue-400 text-white rounded">Book Now ✅</button></Link>
    </div>
  );
};

export default Details;
