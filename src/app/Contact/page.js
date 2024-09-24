import React from "react";

import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

function Page() {
  return (
    <div className="bg-gray-200 flex flex-col items-center py-20">
      <header className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-black py-10 text-center shadow-lg">
        <h1 className="text-3xl font-bold">Contact Us</h1>
      </header>

      <div className="mt-10 w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <form>
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
                      name="first-name"
                      type="text"
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
                      name="last-name"
                      type="text"
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
                      name="phone"
                      type="tel"
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
            Phone: <span className="font-medium">(123) 456-7890</span>
          </p>
          <p className="text-sm leading-6 text-gray-900">
            Email: <span className="font-medium">support@example.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
