import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Register/Login";
import Register from "../components/Register/Register";
import UserDashboard from "../components/UserDashboard/UserDashboard";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "userDashboard",
    element: <UserDashboard></UserDashboard>,
  },
]);

export default router;
