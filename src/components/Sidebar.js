// src/components/Sidebar.js
import { FaPlusCircle, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu Icon */}
      <div className="md:hidden p-4 bg-gray-800  text-white">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block md:w-64 bg-gray-800 min-h-screen p-5`}
      >
        <h1 className="text-white text-2xl mb-10">
          <Link to="/">Admin Dashboard</Link>
        </h1>
        <ul className="">
          <li className="mb-20 mt-20">
            <Link
              to="/create-series"
              className="text-white text-2xl flex items-center"
            >
              <FaPlusCircle className="mr-2" /> Create Series
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
