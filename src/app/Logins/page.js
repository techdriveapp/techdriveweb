"use client"; // use client
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [loginType, setLoginType] = useState("user");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must contain at least one letter, one number, and one special character."
      );
      return;
    }

    try {
      // Simulated login validation
      if (email === "shivam@gmail.com" && password === "SHIvam@2006") {
        localStorage.setItem("authToken", "admin123");
        router.push("/Adminboard"); // Direct route change
      } else if (
        email === "delership@gmail.com" &&
        password === "DELership@123"
      ) {
        localStorage.setItem("authToken", "delership123");
        router.push("/Cardelership"); // Direct route change for dealership
      } else if (email === "school@gmail.com" && password === "SCHool@123") {
        localStorage.setItem("authToken", "school123");
        router.push("/Drivingschool"); // Direct route change for driving school
      } else {
        setPasswordError("Invalid email or password");
        return;
      }
    } catch (error) {
      console.error("Error during login:", error);
      setPasswordError("An error occurred while logging in.");
    }
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
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Login Type:</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={loginType}
              onChange={(e) => setLoginType(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

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
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </span>
          </div>

          {passwordError && (
            <p className="text-red-500 mb-4">{passwordError}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {loginType === "admin" ? "Admin Login" : "User Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
