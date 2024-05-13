import { useContext } from "react";
import { AuthContexts } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { emailPasswordLogin, continueWithGoogle } = useContext(AuthContexts);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    emailPasswordLogin(form.email.value, form.password.value)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleGoogle = () => {
    continueWithGoogle()
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Helmet><title>Login - EventX</title></Helmet>
      <div className="border w-fit px-10 py-10 mx-auto my-32">
        <h2 className="text-center font-bold text-xl mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <h3 className="mb-2">Email</h3>
            <input
              name="email"
              type="email"
              className="px-2 py-1 border border-gray-400 outline-none"
              placeholder="Enter you email..."
            />
          </div>
          <div>
            <h3 className="my-2">Password</h3>
            <input
              name="password"
              type="password"
              className="px-2 py-1 border border-gray-400 outline-none"
              placeholder="Enter you password..."
            />
          </div>
          <p className="text-sm my-2">
            Dont have a account?{" "}
            <Link className="text-blue-500" to="/register">
              Register Now
            </Link>
          </p>
          <div className="flex justify-center">
            <button className="py-2 px-5 w-full text-gray-300 bg-gray-800 rounded hover:bg-gray-800/80 mt-4 ">
              Login
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

export default Login;
