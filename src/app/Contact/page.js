"use client"; // use client
import React, { useState } from "react";
import axios from "axios";

function Page() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobileNumber: "",
    message: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/api/createcontact", formData)
      .then((response) => {
        console.log(response.data);
        setSubmitMessage(
          "Your message has been sent successfully team will reach out to you shortly."
        );
        // Clear the form fields
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          mobileNumber: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        setSubmitMessage("There was an error submitting your message.");
      });
  };

  return (
    <div className="bg-gray-200 flex flex-col items-center py-20">
      <header className="w-full text-black py-10 text-center">
        <h1 className="text-5xl font-bold">Contact Us</h1>
      </header>

      <div className="mt-10 w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-8">
            <div className="pb-8">
              <h2 className="text-lg font-semibold leading-7 text-gray-900">
                Fill in Your Details
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                We will reach out to you shortly.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* Personal Information Fields */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="firstname"
                      type="text"
                      value={formData.firstname}
                      onChange={handleChange}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="last-name"
                      name="lastname"
                      type="text"
                      value={formData.lastname}
                      onChange={handleChange}
                      autoComplete="family-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="mobileNumber"
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Your Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </form>
        {submitMessage && (
          <div className="mt-4 text-center text-green-600">{submitMessage}</div>
        )}
      </div>

      {/* Team Contact Information */}
      <div className="mt-10 w-full max-w-2xl text-center bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold leading-7 text-gray-900">
          Contact Our Team
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          For immediate assistance, you can reach out to us:
        </p>
        <div className="mt-4">
          <p className="text-sm leading-6 text-gray-900">
            Phone: <span className="font-medium">+91-9120163229</span>
          </p>
          <p className="text-sm leading-6 text-gray-900">
            Email: <span className="font-medium">help@techdriveapp.in</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
