import { useContext } from "react";
import { AuthContexts } from "../../Contexts/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AddService = () => {
  const { user } = useContext(AuthContexts);

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      category: form.category.value,
      image_url: form.image_url.value,
      service_name: form.service_name.value,
      price: form.price.value,
      service_area: form.service_area.value,
      description: form.description.value,
      provider: {
        provider_email: user.email,
        provider_image: user.photoURL,
        provider_name: user.displayName,
      },
    };

    axios
      .put(`${import.meta.env.VITE_API_URL}/addservice`, data)
      .then((res) => {
        if(res.data.acknowledged){
            toast.success("Your post has been added.")
        }
        else{
            toast.error("Something went wrong!")
        }
      });
  };

  return (
    <div className="mt-10 max-w-screen-2xl mx-auto">
      <Helmet><title>Add Services - EventX</title></Helmet>
      <form onSubmit={handleAddService}>
        <div className="mb-2">
          <h3 className="mb-2">Category</h3>
          <select className="border w-full py-2" name="category">
            <option value="Bibaho">Bibaho</option>
            <option value="Milad">Milad</option>
            <option value="Khatna">Khatna</option>
          </select>
        </div>
        <div className="mb-2">
          <h3 className="mb-2">Image URL</h3>
          <input
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
            name="description"
            type="text"
            className="px-2 py-1 border border-gray-400 outline-none w-full"
            placeholder="Enter the services description..."
            required
          />
        </div>
        <div className="text-center">
          <button className="mt-4 py-2 px-4 bg-blue-400 text-white rounded">
            Add Services
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
