import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Register/Login";
import Register from "../components/Register/Register";
import UserDashboard from "../components/UserDashboard/UserDashboard";
import Home from "../components/Home/Home";
import UserProfile from "../components/UserDashboard/UserProfile";
import DoctorProfile from "../components/UserDashboard/Features/Doctors/DoctorProfile";
import SeeDetails from "../components/UserDashboard/Features/Doctors/SeeDetails";
import PeriodTracker from "../components/UserDashboard/Features/PeriodTracker/PeriodTracker";
import Blog from "../components/Home/pages/BlogPage/Blog";
import AboutUs from "../components/Home/pages/BlogPage/AboutUs/AboutUs";
import AppointmentDetails from "../components/UserDashboard/Features/Doctors/AppointmentDetails";
import Shop from "../components/Shop/Shop";
import PrivateRoute from "../route/PrivateRout";
import Cart from "../components/Shop/Cart";
import ProductDetails from "../components/Shop/ProductDetails";
import AddProduct from "../components/Shop/AddProduct";
import SeeConsult from "../components/UserDashboard/ConsulRequest/SeeConsult";



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
      {
        path: 'aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "shop",
        element: <Shop></Shop>
      },
      {
        path: "addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "cart",
        element: <Cart></Cart>
      },
      
      {
        path: "productDetails/:_id",
        element: <PrivateRoute>
          <ProductDetails></ProductDetails>
        </PrivateRoute>
      },
      
    ],
  },
  {
    path: "userDashboard",
    element: <PrivateRoute>
      <UserDashboard></UserDashboard>
    </PrivateRoute>,
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
      {
        path: 'periodTracker',
        element: <PeriodTracker></PeriodTracker>,
      },
      {
        path: 'appointmentDetails/:_id',
        element: <AppointmentDetails></AppointmentDetails>,
      },
      {
        path: 'seeConsult',
        element: <SeeConsult></SeeConsult>
      }
    ],
  },
]);

export default router;
