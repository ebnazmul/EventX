import { useEffect, useState } from "react";
import Card from "../../Extra/Card/Card";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AllServices = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/allposts`)
      .then((res) => setPosts(res.data));
  }, []);

  const handleSearch = (e) => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/search?posts=${e.target.value}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.err(err));
  };

  return (
    <div className="max-w-screen-2xl mx-auto my-10">
      <Helmet>
        <title>All Services - EventX</title>
      </Helmet>
      <div>
        <input
          onChange={handleSearch}
          type="text"
          className="border-2 py-1 px-2 rounded outline-blue-400"
          placeholder="Search..."
        />
      </div>
      <div className="mt-10 space-y-2">
        {posts.map((post) => (
          <Card key={post._id} post={post} />
        ))}
        {/* <Card/> */}
      </div>
    </div>
  );
};

export default AllServices;
