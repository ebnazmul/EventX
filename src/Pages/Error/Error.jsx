import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center space-y-3 mt-60 border w-fit mx-auto px-20 py-20">
           <h3 className="text-4xl">404!</h3>
           <p>Page not found.</p>
           <Link to="/"><button className="py-2 px-4 mt-4 bg-blue-400 rounded text-white">Go Home</button></Link>
        </div>
    );
};

export default Error;