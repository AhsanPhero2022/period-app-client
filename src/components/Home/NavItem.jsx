// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";

function NavItem() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => console.log(error));
  };

  return (
    <div>
      <div className="navbar bg-[#e34fe3] text-white">
        <div className="navbar-start">
          <div className="dropdown lg:hidden ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>

            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Blogs</a>
              </li>
              <li>
                <a>Shop</a>
              </li>
            </ul>
          </div>
          <div className="navbar-start">
            <Link to="userDashboard/userProfile">My Dashboard</Link>
          </div>
        </div>

        <div className="navbar-center hidden  md:hidden sm:hidden lg:block">
          <ul className="flex gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button> */}
          {/* cart start */}
          <Link to="/cart">
          <div className="flex-none">
            <div role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
          </div>
          </Link>
          {/* cart end */}
          {user?.email ? (
            <button
              onClick={handleLogOut}
              className="  px-4 py-2 rounded hover:bg-green-500 mr-2"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-green-300  px-4 py-2 rounded hover:bg-green-200 mr-2">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavItem;
