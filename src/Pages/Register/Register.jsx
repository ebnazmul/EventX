import { useContext } from "react";
import { AuthContexts } from "../../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const {
    emailPasswordRegister,
    continueWithGoogle,
    updateUserProfile,
    iUpdate,
    setIUpdate,
  } = useContext(AuthContexts);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    emailPasswordRegister(form.email.value, form.password.value)
      .then(() => {
        updateUserProfile(form.name.value, form.photoURL.value)
          .then(() => {
            toast.success("Registered successfully");
            setIUpdate(!iUpdate);
            navigate("/")
          })
          .catch(() => toast.error("Something went wrong"));
      })
      .catch((err) => {
        toast.error("Something went wrong!");
        console.log(err);
      });
  };

  const handleGoogle = () => {
    continueWithGoogle()
      .then(() => {
        toast.success("Login successfully")
        navigate("/")
      })
      .catch(() => toast.error("Something went wrong!"));
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Helmet>
        <title>Register - EventX</title>
      </Helmet>
      <div className="border w-fit px-10 py-10 mx-auto my-32">
        <h2 className="text-center font-bold text-xl mb-4">Register</h2>
        <form onSubmit={handleLogin}>
          <div>
            <h3 className="mb-2">Name</h3>
            <input
              name="name"
              type="text"
              className="px-2 py-1 border border-gray-400 outline-none"
              placeholder="Enter you name..."
              required
            />
          </div>
          <div>
            <h3 className="mb-2">Email</h3>
            <input
              name="email"
              type="email"
              className="px-2 py-1 border border-gray-400 outline-none"
              placeholder="Enter you email..."
              required
            />
          </div>
          <div>
            <h3 className="my-2">Password</h3>
            <input
              name="password"
              type="password"
              className="px-2 py-1 border border-gray-400 outline-none"
              placeholder="Enter you password..."
              required
            />
          </div>
          <div>
            <h3 className="mb-2">Photo URL</h3>
            <input
              name="photoURL"
              type="text"
              className="px-2 py-1 border border-gray-400 outline-none"
              placeholder="Enter you photos url..."
              required
            />
          </div>
          <p className="text-sm my-2">
            Dont have a account?{" "}
            <Link className="text-blue-500" to="/login">
              Login Now
            </Link>
          </p>
          <div className="flex justify-center">
            <button className="py-2 px-5 w-full text-gray-300 bg-gray-800 rounded hover:bg-gray-800/80 mt-4 ">
              Register
            </button>
          </div>
        </form>
        <div>
          <button
            onClick={handleGoogle}
            className="w-full py-1 bg-sky-600 text-white mt-4 rounded">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
