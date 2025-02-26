import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-200 shadow-md p-4">
      <div className="mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        <ul className=" font-bold mx-auto flex space-x-8 p-2">
          <NavLink to="/" className="text-black-500">
            Home
          </NavLink>
          <NavLink to="/platform" className="text-black-500">
            Platform
          </NavLink>
          <NavLink to="/resources" className="text-black-500">
            Resources
          </NavLink>
          <NavLink to="/services" className="text-black-500">
            Services
          </NavLink>
          <NavLink to="/trackorder" className="text-black-500">
            Trackorder
          </NavLink>
        </ul>

        <Link to="/ship now">
          <button
          onClick={() => setIsOpen(!isOpen)} 
          className="bg-white text-black-500 px-4 py-2 rounded-lg font-bold shadow-md flex items-center hover:bg-gray-200 transition">
            Ship Now
            <FaChevronDown  className={`text-sm transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
          </button>
          </Link>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2">
              <Link to="/personal courier" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                Personal Courier
              </Link>
              <Link to="/business shipment" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                Business Shipment
              </Link>
            </div>
          )}  
      </div>
    </nav>
  );
}
