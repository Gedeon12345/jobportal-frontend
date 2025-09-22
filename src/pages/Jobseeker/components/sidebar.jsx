import React, { useState } from "react";
import {
  FaHome,
  FaUserGraduate,
  FaBriefcase,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-16"
      } bg-white h-screen shadow-md transition-all duration-300 fixed`}
    >
      {/* Logo + Toggle */}
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className={`text-xl font-bold ${!isOpen && "hidden"}`}>
          JobPortal
        </h1>
        <button onClick={toggleSidebar} className="text-gray-600">
          <FaBars />
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        <Link
          to="/jobseeker/dashboard"
          className="flex items-center p-4 text-gray-700 hover:bg-blue-100"
        >
          <FaHome className="text-lg" />
          {isOpen && <span className="ml-4">Dashboard</span>}
        </Link>

        <Link
          to="/jobseeker/competencies"
          className="flex items-center p-4 text-gray-700 hover:bg-blue-100"
        >
          <FaUserGraduate className="text-lg" />
          {isOpen && <span className="ml-4">My Competencies</span>}
        </Link>

        <Link
          to="/jobseeker/competencies/add"
          className="flex items-center p-4 text-gray-700 hover:bg-blue-100"
        >
          <FaPlus className="text-lg" />
          {isOpen && <span className="ml-4">Add Competency</span>}
        </Link>

        <Link
          to="/jobseeker/applied"
          className="flex items-center p-4 text-gray-700 hover:bg-blue-100"
        >
          <FaBriefcase className="text-lg" />
          {isOpen && <span className="ml-4">Applied Jobs</span>}
        </Link>

        <Link
          to="/jobseeker/profile"
          className="flex items-center p-4 text-gray-700 hover:bg-blue-100"
        >
          <FaUser className="text-lg" />
          {isOpen && <span className="ml-4">Profile</span>}
        </Link>

        <Link
          to="/logout"
          className="flex items-center p-4 text-red-500 hover:bg-red-100 mt-6"
        >
          <FaSignOutAlt className="text-lg" />
          {isOpen && <span className="ml-4">Logout</span>}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
