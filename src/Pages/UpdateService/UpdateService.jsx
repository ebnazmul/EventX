import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateService = () => {
  const { id } = useParams();

  const [singleData, setSingleData] = useState({});
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/post/${id}`).then((res) => {
      setSingleData(res.data);
      console.log(res.data);
      setLoading(false)
    });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      category: form.category.value,
      image_url: form.image_url.value,
      service_name: form.service_name.value,
      price: form.price.value,
      service_area: form.service_area.value,
      description: form.description.value,
    };

    axios.patch(`${import.meta.env.VITE_API_URL}/update/${id}`, data)
    .then(res=>{
        if(res.data.modifiedCount>0){
            toast.success("Post Successfully updated!")
            navigate("/manageservice")
        }
    })
  };


  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-dots loading-lg text-center mt-20"></span>
      </div>
    );
  }


  return (
    <div className="mt-10 max-w-screen-2xl mx-auto">
      <form onSubmit={handleUpdate}>
        <div className="mb-2">
          <h3 className="mb-2">Category</h3>
          <select defaultValue={singleData.category} className="border w-full py-2" name="category">
            <option value="Bibaho">Bibaho</option>
            <option value="Milad">Milad</option>
            <option value="Khatna">Khatna</option>
          </select>
        </div>
        <div className="mb-2">
          <h3 className="mb-2">Image URL</h3>
          <input defaultValue={singleData.image_url}
            name="image_url"
            type="text"
            className="px-2 py-1 border border-gray-400 outline-none w-full"
            placeholder="Enter the services image URL..."
            required
          />
        </div>
        <div className="mb-2">
          <h3 className="mb-2">Service Name</h3>
          <input
          defaultValue={singleData.service_name}
            name="service_name"
            type="text"
            className="px-2 py-1 border border-gray-400 outline-none w-full"
            placeholder="Enter the services name..."
            required
          />
        </div>
        <div className="mb-2">
          <h3 className="mb-2">Price in USD ($)</h3>
          <input
          defaultValue={singleData.price}
            name="price"
            type="text"
            className="px-2 py-1 border border-gray-400 outline-none w-full"
            placeholder="Enter the services price..."
            required
          />
        </div>
        <div className="mb-2">
          <h3 className="mb-2">Service Area</h3>
          <input
          defaultValue={singleData.service_area}
            name="service_area"
            type="text"
            className="px-2 py-1 border border-gray-400 outline-none w-full"
            placeholder="Enter the services area..."
            required
          />
        </div>
        <div className="mb-2">
          <h3 className="mb-2">Description</h3>
          <input
          defaultValue={singleData.description}
            name="description"
            type="text"
            className="px-2 py-1 border border-gray-400 outline-none w-full"
            placeholder="Enter the services description..."
            required
          />
        </div>
        <div className="text-center">
          <button className="mt-4 py-2 px-4 bg-blue-400 text-white rounded">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateService;
