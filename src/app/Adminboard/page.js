"use client"; // Use client-side rendering
import React, { useEffect, useState } from "react"; // Make sure to import useEffect
import { useRouter } from "next/navigation"; // Import from next/navigation for Next.js 13+
import LogoutButton from "@/components/Logoutbutton";
import Message from "@/components/Admin/Message/Message";

function AdminDashboard() {
  // State for the current action
  const [action, setAction] = useState("dashboard");
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false); // State to check if the component is mounted

  // Sample data
  const customers = [
    {
      id: 1,
      name: "John Doe",
      dealership: "ABC Motors",
      assignedSchool: "Driving School 1",
      location: "Delhi",
      paymentStatus: "Paid",
    },
    {
      id: 2,
      name: "Jane Doe",
      dealership: "XYZ Motors",
      assignedSchool: "Driving School 2",
      location: "Noida",
      paymentStatus: "Pending",
    },
  ];

  const drivingSchools = [
    { id: 1, name: "Driving School 1", location: "Delhi" },
    { id: 2, name: "Driving School 2", location: "Noida" },
    { id: 3, name: "Driving School 3", location: "Gurugram" },
  ];

  useEffect(() => {
    setIsMounted(true); // Set mounted to true on mount
    const token = localStorage.getItem("authToken");

    if (!token || token !== "admin123") {
      // If the token is missing or incorrect, redirect to login
      router.push("/Logins");
    }
  }, [router]);

  // Render nothing until the component is mounted
  if (!isMounted) {
    return null;
  }

  const handleAction = (selectedAction) => {
    setAction(selectedAction);
  };

  // const logout = () => {
  //   <LogoutButton />;
  //   console.log("Logged out");
  // };
  return (
    <div className="flex h-screen mt-16">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold mb-4">Admin Dashboard</h2>
        <button
          className="w-full py-2 my-2 bg-blue-500 hover:bg-blue-700 rounded"
          onClick={() => handleAction("viewMessage")}
        >
          view Message
        </button>
        <button
          className="w-full py-2 my-2 bg-blue-500 hover:bg-blue-700 rounded"
          onClick={() => handleAction("addCustomer")}
        >
          Add Customer
        </button>
        <button
          className="w-full py-2 my-2 bg-blue-500 hover:bg-blue-700 rounded"
          onClick={() => handleAction("assignSchool")}
        >
          Assign Driving School
        </button>
        <button
          className="w-full py-2 my-2 bg-blue-500 hover:bg-blue-700 rounded"
          onClick={() => handleAction("viewPayments")}
        >
          View Payment Details
        </button>

        <button className="w-full py-2 my-2 bg-blue-500 hover:bg-blue-700 rounded">
          <LogoutButton />
        </button>
      </div>

      {/* Right Content */}
      <div className="w-3/4 bg-gray-100 p-6">
        {action === "dashboard" && (
          <h2 className="text-2xl">Welcome to Admin Dashboard</h2>
        )}

        {action === "viewMessage" && (
          <div>
            <h2 className="text-2xl mb-4">View Payments</h2>
            <Message />
          </div>
        )}

        {action === "addCustomer" && (
          <div>
            <h2 className="text-2xl mb-4">Add Customer</h2>
            {/* Form to add customer */}
            <form>
              <input
                className="border p-2 w-full mb-4"
                placeholder="Customer Name"
              />
              <input
                className="border p-2 w-full mb-4"
                placeholder="Dealership Name"
              />
              <button
                className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
                type="submit"
              >
                Add Customer
              </button>
            </form>
          </div>
        )}

        {action === "assignSchool" && (
          <div>
            <h2 className="text-2xl mb-4">Assign Driving School</h2>
            {/* Dropdown to select customer */}
            <select className="border p-2 w-full mb-4">
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name} - {customer.dealership}
                </option>
              ))}
            </select>

            {/* Dropdown to select driving school */}
            <select className="border p-2 w-full mb-4">
              {drivingSchools.map((school) => (
                <option key={school.id} value={school.id}>
                  {school.name} - {school.location}
                </option>
              ))}
            </select>

            <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">
              Assign School
            </button>
          </div>
        )}

        {action === "viewPayments" && (
          <div>
            <h2 className="text-2xl mb-4">Dealership Payment Details</h2>
            {/* Table to display payment details */}
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-gray-200">Customer Name</th>
                  <th className="py-2 px-4 bg-gray-200">Dealership</th>
                  <th className="py-2 px-4 bg-gray-200">Assigned School</th>
                  <th className="py-2 px-4 bg-gray-200">Location</th>
                  <th className="py-2 px-4 bg-gray-200">Payment Status</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td className="border px-4 py-2">{customer.name}</td>
                    <td className="border px-4 py-2">{customer.dealership}</td>
                    <td className="border px-4 py-2">
                      {customer.assignedSchool}
                    </td>
                    <td className="border px-4 py-2">{customer.location}</td>
                    <td
                      className={`border px-4 py-2 ${
                        customer.paymentStatus === "Paid"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {customer.paymentStatus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
