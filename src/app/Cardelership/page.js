"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Updated import path for useRouter
import Logoutbutton from "../../components/Logoutbutton";

function CarDealershipDashboard() {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const [activeSection, setActiveSection] = useState("overview"); // Track which section is active

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    // If no token or wrong token, redirect to login page
    if (!token || token !== "delership123") {
      router.push("/");
    }

    const date = new Date().toLocaleDateString("en-GB");
    const time = new Date().toLocaleTimeString();
    setCurrentDate(date);
    setCurrentTime(time);
    // Cleanup on unmount
  }, [router]); // Add router to the dependency array

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex w-full h-screen mt-16 bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-800 p-4">
        <h2 className="text-white text-2xl mb-4">Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => handleSectionChange("addVehicle")}
              className="w-full text-left text-white hover:bg-gray-700 p-2 rounded"
            >
              Add Vehicle
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSectionChange("history")}
              className="w-full text-left text-white hover:bg-gray-700 p-2 rounded"
            >
              History
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSectionChange("payment")}
              className="w-full text-left text-white hover:bg-gray-700 p-2 rounded"
            >
              Payment Section
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSectionChange("reports")}
              className="w-full text-left text-white hover:bg-gray-700 p-2 rounded"
            >
              Reports
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSectionChange("settings")}
              className="w-full text-left text-white hover:bg-gray-700 p-2 rounded"
            >
              Settings
            </button>
          </li>
        </ul>
        <div className="w-full text-left text-white hover:bg-gray-700 p-2 rounded">
          <Logoutbutton />
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 p-4">
        {/* Header for Date and Time */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Car Dealership Dashboard</h2>
          <div className="text-gray-700">
            <p>{currentDate}</p>
            <p>{currentTime}</p>
          </div>
        </div>

        {/* Active Section Content */}
        {activeSection === "addVehicle" && (
          <div className="bg-white shadow-lg rounded p-4">
            <h2 className="text-xl font-bold mb-4">Add Vehicle</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Vehicle Name:
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter vehicle name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Vehicle Model:
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter vehicle model"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Price:</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter price"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Add Vehicle
              </button>
            </form>
          </div>
        )}

        {activeSection === "history" && (
          <div className="bg-white shadow-lg rounded p-4">
            <h2 className="text-xl font-bold mb-4">History</h2>
            <p className="text-gray-700">Total Customers: 120</p>
            {/* Add more detailed history info here */}
          </div>
        )}

        {activeSection === "payment" && (
          <div className="bg-white shadow-lg rounded p-4">
            <h2 className="text-xl font-bold mb-4">Payment Section</h2>
            <p className="text-gray-700">Payment Records:</p>
            <ul className="list-disc pl-5">
              <li>Card Payment: $1000</li>
              <li>Cash Payment: $500</li>
              {/* Add more payment records or a chart component here */}
            </ul>
          </div>
        )}

        {activeSection === "reports" && (
          <div className="bg-white shadow-lg rounded p-4">
            <h2 className="text-xl font-bold mb-4">Reports</h2>
            <p className="text-gray-700">Sales Report for this Month:</p>
            {/* Add a chart component or detailed report info here */}
          </div>
        )}

        {activeSection === "settings" && (
          <div className="bg-white shadow-lg rounded p-4">
            <h2 className="text-xl font-bold mb-4">Settings</h2>
            <p className="text-gray-700">
              Manage your dealership settings here.
            </p>
            {/* Add settings options or forms here */}
          </div>
        )}

        {activeSection === "overview" && (
          <div className="bg-white shadow-lg rounded p-4">
            <h2 className="text-xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700">
              Welcome to the Car Dealership Dashboard!
            </p>
            {/* Add more dashboard content as needed */}
          </div>
        )}
      </div>
    </div>
  );
}

export default CarDealershipDashboard;
