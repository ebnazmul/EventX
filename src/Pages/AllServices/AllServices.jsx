import { useEffect, useState } from "react";
import Card from "../../Extra/Card/Card";
import axios from "axios";

const AllServices = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      axios
        .get(`${import.meta.env.VITE_API_URL}/allposts`)
        .then((res) => setPosts(res.data));
    }, []);
  


    return (
        <div className="max-w-screen-2xl mx-auto my-10">
           <div>Search</div>
           <div className="mt-10 space-y-2">
            {
                posts.map(post=> <Card key={post._id} post={post}/>)
            }
            {/* <Card/> */}
           </div>
        </div>
    );
};

export default AllServices;