"use client"; // use client
import React, { useState } from "react";

function Page() {
  const [category, setCategory] = useState("drivingSchool");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must contain at least one letter, one number, and one special character."
      );
      return;
    }
    // Handle form submission here (password is valid)
    console.log("Form submitted with category:", category);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = (password) => {
    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  return (
    <div className="w-full h-[800px] bg-white flex items-center justify-center">
      <div className="w-[400px] p-4 bg-gray-100 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Category Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Register as:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="drivingSchool">Driving School</option>
              <option value="carDealership">Car Dealership</option>
            </select>
          </div>

          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone Number:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* Eye Icon for toggling visibility */}
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </span>
          </div>

          {/* Password Error Message */}
          {passwordError && (
            <p className="text-red-500 mb-4">{passwordError}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
