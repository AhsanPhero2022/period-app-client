/* eslint-disable no-unused-vars */
import {
  ArrowLeftEndOnRectangleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Home/Footer";
import DashboardNavbar from "./DashboardNavbar/DashboardNavbar";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useState } from "react";

const UserDashboard = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    setMenuCollapse(!menuCollapse);
  };

  return (
    <div>
      <div className="drawer lg:drawer-open ">
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
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="flex">
            <Sidebar
              className="h-screen shadow-lg"
              collapsed={menuCollapse}
              collapsedWidth="80px"
            >
              <div className="border-y py-6 text-center">
                <Link to="/" className="cursor-pointer text-blue-500">
                  {menuCollapse ? "App" : "Awesome Period Tracker App"}
                </Link>
              </div>
              <div className="flex justify-end mx-2" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
                {menuCollapse ? (
                  <ArrowRightIcon className="h-6 w-6 text-blue-500  rounded-full hover:bg-gray-200" />
                ) : (
                  <ArrowLeftIcon className="h-6 w-6 text-blue-500  rounded-full hover:bg-gray-200" />
                )}
              </div>
              <Menu
                menuItemStyles={{
                  button: ({ level, active, disabled }) => {
                    if (level === 0)
                      return {
                        color: disabled ? "#f5d9ff" : "#00000",
                        backgroundColor: active ? "#eecef9" : undefined,
                        transition: "background-color 0.3s, color 0.3s",
                      };
                  },
                }}
              >
                <MenuItem
                  component={<Link to="/userDashboard/seeConsult"></Link>}
                  icon={<HomeIcon />}
                >
                  Consul Request
                </MenuItem>
                <MenuItem>Post a blog</MenuItem>
                <SubMenu label="Home" icon={<HomeIcon />}>
                  <MenuItem icon={<HomeIcon />}> submit tool </MenuItem>
                  <MenuItem icon={<HomeIcon />}> submit tool </MenuItem>
                  <MenuItem icon={<HomeIcon />}> submit tool </MenuItem>
                  <MenuItem icon={<HomeIcon />}> submit tool </MenuItem>
                </SubMenu>

                <SubMenu icon={<HomeIcon />} label="manager">
                  <MenuItem icon={<HomeIcon />}> manage tool </MenuItem>
                  <MenuItem icon={<HomeIcon />}>my-ai-tool </MenuItem>
                  <MenuItem icon={<HomeIcon />}>my-ai-tool </MenuItem>
                  <MenuItem>my-ai-tool </MenuItem>
                  <MenuItem>my-ai-tool </MenuItem>
                  <MenuItem>my-ai-tool </MenuItem>
                  <MenuItem>my-ai-tool </MenuItem>
                </SubMenu>
                <SubMenu icon={<HomeIcon />} label="admin">
                  <MenuItem
                    component={<Link to="/dashboard/manage-user"></Link>}
                  >
                    {" "}
                    mange user{" "}
                  </MenuItem>
                  <MenuItem> manage employee </MenuItem>
                  <MenuItem> manage employee </MenuItem>
                  <MenuItem> manage employee </MenuItem>
                  <MenuItem> manage employee </MenuItem>
                  <MenuItem> manage employee </MenuItem>
                  <MenuItem> manage employee </MenuItem>
                  <MenuItem> manage employee </MenuItem>
                </SubMenu>
              </Menu>
              <div className="border-t p-4 text-center">
                <Link to="/" className="cursor-pointer text-blue-500">
                  {menuCollapse ? (
                    <ArrowLeftEndOnRectangleIcon className="h-8 w-8 inline text-blue-500  rounded-full hover:bg-gray-200" />
                  ) : (
                    <div>
                      <ArrowLeftEndOnRectangleIcon className="h-8 w-8 inline text-blue-500  rounded-full hover:bg-gray-200" />
                      Logout
                    </div>
                  )}
                </Link>
              </div>
            </Sidebar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
