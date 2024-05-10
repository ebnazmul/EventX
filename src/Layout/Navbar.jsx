import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  

  return (
    <div className="max-w-screen-2xl mx-auto mt-10 flex items-center justify-between">
      <h2 className="font-semibold text-3xl italic">
        <Link to="/">EventX</Link>
      </h2>
      <div>
        <ul className="flex gap-1 *:border *:py-2 *:px-5 rounded">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Services</li>
        </ul>
      </div>
      <div onClick={() => setDropdown(!dropdown)} className="relative">
      
          <button className="py-2 px-5 text-gray-300 bg-gray-800 rounded hover:bg-gray-300 hover:text-gray-800 duration-150 hover:shadow-md">
            Sign In
          </button>
        
        {dropdown && (
          <div className="border *:py-2 *:px-3 *:border *:bg-gray-400 text-white absolute top-10 right-0">
            <p onClick={() => setDropdown(!dropdown)}><Link to="/login">Login</Link></p>
            <p onClick={() => setDropdown(!dropdown)}><Link to="/register">Register</Link></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
