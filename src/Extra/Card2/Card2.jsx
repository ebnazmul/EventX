
const Card2 = ({post}) => {
    return (
        <div className="w-full border p-4 rounded flex justify-between">
            <div>
                <h3>{post.service_name}</h3>
                <img className="h-12 my-2" src={post.image_url} alt="" />
                <p>${post.price}</p>
            </div>
            <div className="text-white">
                <button className="px-4 py-2 rounded bg-blue-400 mb-2">Update</button><br />
                <button className="px-4 py-2 rounded bg-red-400">Delete</button>
            </div>
        </div>
    );
};

export default Card2;