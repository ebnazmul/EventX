/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Card2 = ({ post }) => {
  const [deletePopup, setDeletePopup] = useState(false);

  const handleDelete = () => {
    console.log(post._id);
    axios.delete(`${import.meta.env.VITE_API_URL}/delete/${post._id}`)
    .then(res=> {
      if(res.data.deletedCount > 0){
        toast.success("Deleted Successfully")
      }
    })
  }

  return (
    <div className="w-full border p-4 rounded flex justify-between">
      <div>
        <h3>{post.service_name}</h3>
        <img className="h-12 my-2" src={post.image_url} alt="" />
        <p>${post.price}</p>
      </div>
      {deletePopup && (
        <div>
          <p className="text-balance">
            Do you sure you want to delete this post?
          </p>
          <div className="space-x-2 *:px-2 *:py-1 *:border *:rounded">
            <button onClick={handleDelete} className="bg-red-400 text-white">Sure, Delete it</button>
            <button onClick={() => setDeletePopup(false)} className="bg-blue-300">Cancel</button>
          </div>
        </div>
      )}
      <div className="text-white">
        <Link to={`/update/${post._id}`}>
          <button className="px-4 py-2 rounded bg-blue-400 mb-2">Update</button>
        </Link>
        <br />
        <button
          onClick={() => setDeletePopup(true)}
          className="px-4 py-2 rounded bg-red-400">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card2;
