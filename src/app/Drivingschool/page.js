"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Logoutbutton from "../../components/Logoutbutton";

function Dashboard() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("newCustomers");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const drivingSchoolName = "Your Driving School"; // Replace with actual driving school name
  const location = "Location: Your City"; // Replace with actual location

  // Sample data for new customers
  const newCustomers = [
    { id: 1, name: "John Doe", contact: "123-456-7890" },
    { id: 2, name: "Jane Smith", contact: "987-654-3210" },
  ];

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    // If no token or wrong token, redirect to login page
    if (!token || token !== "school123") {
      router.push("/");
    }

    // Set date and time when the component is rendered on the client
    const date = new Date().toLocaleDateString("en-GB");
    const time = new Date().toLocaleTimeString();
    setCurrentDate(date);
    setCurrentTime(time);
  }, [router]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    if (section === "newCustomers") {
      setSelectedCustomer(null); // Reset selected customer when navigating to new customers
    }
  };

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="flex mt-16">
      {/* Sidebar Section */}
      <aside className="w-1/4 bg-gray-800 text-white h-screen p-4">
        <h2 className="text-xl font-bold mb-4">{drivingSchoolName}</h2>
        <div className="flex flex-col space-y-2">
          <button
            onClick={() => handleSectionChange("newCustomers")}
            className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            New Customers
          </button>
          <button
            onClick={() => handleSectionChange("history")}
            className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            History
          </button>
          <button
            onClick={() => handleSectionChange("payment")}
            className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Payment
          </button>
          <button
            onClick={() => handleSectionChange("reports")}
            className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Reports
          </button>
          <button
            onClick={() => handleSectionChange("settings")}
            className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Settings
          </button>
          <div className="w-full text-left text-white hover:bg-gray-700 p-2 rounded">
            <Logoutbutton />
          </div>
        </div>
      </aside>

      {/* Main Content Section */}
      <main className="flex-1 p-6 bg-gray-100">
        <header className="flex justify-between items-center bg-blue-600 text-white p-4 rounded mb-6">
          <div>
            <h1 className="text-2xl font-bold">{drivingSchoolName}</h1>
            <p>
              {currentDate} | {currentTime} | {location}
            </p>
          </div>
        </header>

        {/* Render the active section */}
        {activeSection === "newCustomers" && (
          <section className="mt-6">
            <h2 className="text-xl font-bold">New Customers</h2>
            <div className="border border-gray-300 rounded mt-4">
              {newCustomers.map((customer) => (
                <div
                  key={customer.id}
                  className="flex justify-between items-center border-b border-gray-300 p-4 cursor-pointer"
                  onClick={() => handleCustomerSelect(customer)}
                >
                  <div>
                    <h3 className="font-semibold">{customer.name}</h3>
                    <p>{customer.contact}</p>
                  </div>
                  <div>
                    <button className="bg-green-500 text-white px-4 py-1 rounded mr-2">
                      Accept
                    </button>
                    <button className="bg-red-500 text-white px-4 py-1 rounded">
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Display selected customer details */}
            {selectedCustomer && (
              <div className="mt-6 p-4 bg-gray-200 border border-gray-300 rounded">
                <h2 className="text-lg font-bold">Selected Customer Details</h2>
                <p>Name: {selectedCustomer.name}</p>
                <p>Contact: {selectedCustomer.contact}</p>
              </div>
            )}
          </section>
        )}

        {activeSection === "history" && (
          <section className="mt-6">
            <h2 className="text-xl font-bold">History</h2>
            <p className="mt-4">History details go here...</p>
          </section>
        )}

        {activeSection === "payment" && (
          <section className="mt-6">
            <h2 className="text-xl font-bold">Payment</h2>
            <p className="mt-4">Payment details go here...</p>
          </section>
        )}

        {activeSection === "reports" && (
          <section className="mt-6">
            <h2 className="text-xl font-bold">Reports</h2>
            <p className="mt-4">Reports details go here...</p>
          </section>
        )}

        {activeSection === "settings" && (
          <section className="mt-6">
            <h2 className="text-xl font-bold">Settings</h2>
            <p className="mt-4">Settings details go here...</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
