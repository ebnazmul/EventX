import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Register/Register";
import AddService from "../Pages/AddService/AddService";
import PrivateRoute from "./PrivateRoute";
import AllServices from "../Pages/AllServices/AllServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "addservice",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "allservices",
        element: (
          <PrivateRoute>
            <AllServices />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
