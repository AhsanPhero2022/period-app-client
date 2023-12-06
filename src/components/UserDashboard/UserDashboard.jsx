/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Outlet } from "react-router-dom";

import Footer from "../Home/Footer";

import DashboardNavbar from "./DashboardNavbar/DashboardNavbar";

const UserDashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  ">
          {/* Page content here */}
          <DashboardNavbar></DashboardNavbar>
          
          <Outlet></Outlet>
          <Footer></Footer>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Menu
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className=" menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li className="mt-3">
              <Link to="/">
              <ion-icon name="home"></ion-icon>
                Home</Link>
            </li>
            <li className="mt-3">
              <Link to="/">
              <ion-icon name="settings-outline"></ion-icon>
                Settings
                </Link>
            </li>
            <li className="mt-3">
              <Link to="/">
              <ion-icon name="help-outline"></ion-icon>
                Help Center
                </Link>
            </li>
            <li className="mt-3">
              <Link to="">
              <ion-icon name="bag-handle-outline"></ion-icon>
                Shop
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;