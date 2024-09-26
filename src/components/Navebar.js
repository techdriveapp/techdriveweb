"use client"; // Use client
import React, { useEffect, useState } from "react"; // Import useEffect
import Link from "next/link";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { useRouter } from "next/navigation"; // Adjusted import from next/navigation

function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerAdmin, setCustomerAdmin] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token === "admin123") {
      setCustomerAdmin("Admin User");
      setIsLoggedIn(true);
    } else if (token === "delership123") {
      setCustomerName("Dealership User");
      setIsLoggedIn(true);
    } else if (token === "school123") {
      setCustomerName("Drivingschool User");
      setIsLoggedIn(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleDashboardRedirect = () => {
    const token = localStorage.getItem("authToken");
    if (token === "admin123") {
      router.push("/Adminboard");
    } else if (token === "delership123") {
      router.push("/Cardelership");
    } else if (token === "school123") {
      router.push("/Drivingschool");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setCustomerName("");
    setCustomerAdmin("");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 fixed w-full top-0 left-0 z-50 transition-transform ease-in-out duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-extrabold text-gray-800 flex items-center space-x-2">
          <svg
            className="w-8 h-8 text-white"
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
            ></path>
          </svg>
          <Link href="/" className="text-2xl">
            TechDrive
          </Link>
        </div>

        <div className="hidden lg:flex flex-grow items-center justify-center space-x-8">
          <Link
            href="/"
            className="text-gray-800 hover:text-white transition-transform transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="text-gray-800 hover:text-white transition-transform transform hover:scale-105"
          >
            About
          </Link>
          <Link
            href="/Services"
            className="text-gray-800 hover:text-white transition-transform transform hover:scale-105"
          >
            Services
          </Link>
          <Link
            href="/Blogs"
            className="text-gray-800 hover:text-white transition-transform transform hover:scale-105"
          >
            Blogs
          </Link>
          <Link
            href="/Contact"
            className="text-gray-800 hover:text-white transition-transform transform hover:scale-105"
          >
            Contact
          </Link>

          <div className="relative group">
            <button className="text-gray-800 hover:text-white transition-transform transform hover:scale-105 focus:outline-none">
              Download App
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 z-50 w-64">
              <Link
                href="#"
                className="flex items-center px-4 py-3 hover:bg-gray-100 transition duration-300"
              >
                <span className="text-sm">Get on Google Play</span>
              </Link>
              <Link
                href="#"
                className="flex items-center px-4 py-3 hover:bg-gray-100 transition duration-300"
              >
                <span className="text-sm">Download on the App Store</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-2">
          {isLoggedIn ? (
            <div className="relative">
              <button className="text-white" onClick={handleToggleDropdown}>
                {customerName || customerAdmin}
              </button>
              {/* <button className="text-white" onClick={handleToggleDropdown}>
                {customerAdmin}
              </button> */}
              {isDropdownOpen && ( // Render dropdown if open
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                  <button
                    onClick={handleDashboardRedirect}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  >
                    Logout
                  </button>
                  {/* Add more options here if needed */}
                </div>
              )}
            </div>
          ) : (
            <>
              {/* <Link href="/Register">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-6 focus:ring-blue-300 font-medium rounded-full text-md px-5 py-2.5 text-center"
                >
                  Register
                </button>
              </Link> */}
              <Link href="/Logins">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-6 focus:ring-blue-300 font-medium rounded-full text-md px-5 py-2.5 text-center"
                >
                  Login
                </button>
              </Link>
            </>
          )}
        </div>

        <div className="lg:hidden flex items-center justify-end w-full">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <RiMenu3Fill className="w-8 h-8" />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={closeMenu}
        ></div>

        <div
          className={`relative bg-white h-full flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-gray-800 focus:outline-none"
          >
            <RiCloseFill className="w-8 h-8" />
          </button>

          <Link
            href="/"
            className="text-gray-800 text-2xl font-semibold"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/About"
            className="text-gray-800 text-2xl font-semibold"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/Services"
            className="text-gray-800 text-2xl font-semibold"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            href="/Blogs"
            className="text-gray-800 text-2xl font-semibold"
            onClick={closeMenu}
          >
            Blogs
          </Link>
          <Link
            href="/Contact"
            className="text-gray-800 text-2xl font-semibold"
            onClick={closeMenu}
          >
            Contact
          </Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-blue-600 font-semibold"
            >
              Logout
            </button>
          ) : (
            <>
              {/* <Link href="/Register" onClick={closeMenu}>
                <button className="text-blue-600 font-semibold">
                  Register
                </button>
              </Link> */}
              <Link href="/Logins" onClick={closeMenu}>
                <button className="text-blue-600 font-semibold">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
