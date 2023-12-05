import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Register/Login";
import Register from "../components/Register/Register";
import UserDashboard from "../components/UserDashboard/UserDashboard";
import Home from "../components/Home/Home";
import UserProfile from "../components/UserDashboard/UserProfile";
import DoctorProfile from "../components/UserDashboard/Features/Doctors/DoctorProfile";
import SeeDetails from "../components/UserDashboard/Features/Doctors/SeeDetails";

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
    children: [
      {
        path: "userProfile",
        element: <UserProfile></UserProfile>,
      },
      
      {
        path: "doctorProfile",
        element: <DoctorProfile></DoctorProfile>,
      },
      {
        path: "seeDetails/:_id",
        element: <SeeDetails></SeeDetails>,
      },

    ],
  },
]);

export default router;
