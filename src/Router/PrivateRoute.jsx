/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContexts } from "../Contexts/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContexts);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-dots loading-lg text-center mt-20"></span>
      </div>
    );
  }

  if (!user.metadata) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
