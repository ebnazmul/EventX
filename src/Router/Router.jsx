import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Register/Register";
import AddService from "../Pages/AddService/AddService";
import PrivateRoute from "./PrivateRoute";
import AllServices from "../Pages/AllServices/AllServices";
import Details from "../Pages/Details/Details";
import BookService from "../Pages/BookService/BookService";
import ManageService from "../Pages/ManageService/ManageService";
import BookedServices from "../Pages/BookedServices/BookedServices";
import ServiceToDo from "../Pages/ServiceToDo/ServiceToDo";
import UpdateService from "../Pages/UpdateService/UpdateService";

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
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
      },
      {
        path: "book/:id",
        element: <PrivateRoute><BookService/></PrivateRoute>
      },
      {
        path: "manageservice",
        element: <PrivateRoute><ManageService/></PrivateRoute>
      },
      {
        path: "bookedservices",
        element: <PrivateRoute><BookedServices/></PrivateRoute>
      },
      {
        path: "servicetodo",
        element: <PrivateRoute><ServiceToDo/></PrivateRoute>
      },
      {
        path: "update/:id",
        element: <PrivateRoute><UpdateService/></PrivateRoute>
      }
    ],
  },
]);

export default router;
