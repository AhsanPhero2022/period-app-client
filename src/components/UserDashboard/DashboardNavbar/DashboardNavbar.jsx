import React, { useState } from "react";
import { Link } from "react-router-dom";

function DashboardNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-[#ba759a] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Logo</div>

        {/* Hamburger menu for smaller screens */}
        <div className="absolute top-2 right-5 lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navbar links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm  lg:flex-grow">
            <Link
              to="userProfile"
              className="mr-4 text-white hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              to="periodTracker"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4"
            >
              Period Tracker
            </Link>
            <Link
              to="doctorProfile"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4"
            >
              Consultancy
            </Link>
            <Link
              to="doctorProfile"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4"
            >
              Analysis
            </Link>
           
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavbar;
