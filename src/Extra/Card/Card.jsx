/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { motion } from "framer-motion"


// eslint-disable-next-line react/prop-types
const Card = ({ post }) => {
  // console.log();

  return (
    <motion.div whileHover={{scale: 1.02}} className="w-full p-1 md:p-2 lg:p-3 border rounded">
      <div
        className="h-80 w-full rounded bg-cover mb-4"
        style={{ backgroundImage: `url("${post.image_url}")` }}
      />
      <div className="space-y-2">
        <h3 className="text-xl lg:text-3xl">{post.service_name}</h3>
        <p>{post.description}</p>
        <div className="md:flex gap-4">
            <p>Service Area: {post.service_area}</p>
            <p>Service Charge <span className="bg-blue-300 px-4 py-2 text-xs text-white rounded font-bold">Starting from only ${post.price}</span></p>
        </div>
        <div className="md:flex gap-4 items-center">
          <img
            className="rounded-lg h-12"
            src={post.provider.provider_image}
            alt=""
          />
          <h2>{post.provider.provider_name}</h2>
        </div>
      </div>
      <Link to={`/details/${post._id}`}><button className="w-full py-3 mt-4 rounded bg-blue-400 text-white">View Details</button></Link>
    </motion.div>
  );
};

export default Card;
