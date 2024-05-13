import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContexts } from "../Contexts/AuthContext";
import { IoLogOutSharp } from "react-icons/io5";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const { user, setUser, signOutAuth } = useContext(AuthContexts);
  const [isDarkMode, setIsDarkMode] = useState(null);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutAuth()
      .then(() => setUser({}))
      .catch((err) => console.log(err));
  };

  const handleDropdown = (e) => {
    navigate(`/${e.target.value}`);
  };

  console.log(isDarkMode);

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
          <li>
            <Link to="/allservices">Services</Link>
          </li>
          {user.metadata && (
            <li>
              <select onChange={handleDropdown} className="border outline-none">
                <option value="">Dashboard</option>
                <option value="addservice">Add Service</option>
                <option value="manageservice">Manage Service</option>
                <option value="bookedservices">Booked-Services</option>
                <option value="servicetodo">Service-To-Do</option>
              </select>
            </li>
          )}
        </ul>
      </div>

      <div className="flex items-center gap-2">
        <label className="cursor-pointer grid place-items-center">
          <input
            onClick={(e) => setIsDarkMode(e.target.value)}
            type="checkbox"
            value="dark"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>

        {user.metadata ? (
          <div className="flex items-center">
            <div
              title={user?.displayName || "No Name"}
              className="h-14 w-14 rounded-full bg-blue-400">
              <img
                className="h-14 w-14 rounded-full"
                src={
                  user.photoURL ||
                  "https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                }
              />
            </div>

            <button onClick={handleSignOut} className="text-3xl ml-2">
              <IoLogOutSharp />
            </button>
          </div>
        ) : (
          <div onClick={() => setDropdown(!dropdown)} className="relative">
            <button className="py-2 px-5 text-gray-300 bg-gray-800 rounded hover:bg-gray-300 hover:text-gray-800 duration-150 hover:shadow-md">
              Sign In
            </button>

            {dropdown && (
              <div className="z-50 border *:py-2 *:px-3 *:border *:bg-gray-400 text-white absolute top-10 right-0">
                <p onClick={() => setDropdown(!dropdown)}>
                  <Link to="/login">Login</Link>
                </p>
                <p onClick={() => setDropdown(!dropdown)}>
                  <Link to="/register">Register</Link>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
