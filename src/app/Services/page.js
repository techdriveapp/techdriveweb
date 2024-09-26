"use client"; // use client
import React from "react";

function Page() {
  return (
    <div className="bg-gray-500 min-h-screen mt-16 flex flex-col justify-center items-center p-6">
      <h1 className="text-5xl font-bold mb-6 text-white text-center">
        Driving Courses Partnership
      </h1>
      <p className="text-xl mb-8 text-white text-center">
        We are excited to collaborate with Abhi Driving School to offer
        specialized driving courses through our partnered car dealerships.
      </p>

      <h2 className="text-3xl font-semibold mb-4 text-white text-center">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col">
          <h3 className="text-xl font-bold mb-2">Increased Sales</h3>
          <p>
            Enhance your dealerships revenue by offering driving courses that
            attract more customers.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col">
          <h3 className="text-xl font-bold mb-2">Customer Convenience</h3>
          <p>
            Provide customers with comprehensive packages that include both car
            purchases and driving lessons for a seamless experience.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col">
          <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
          <p>
            Courses offered by Abhi Driving School ensure top-notch driving
            education,enhancing customer trust.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col">
          <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
          <p>
            We offer flexible scheduling for driving lessons accommodating your
            customers busy lives.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col">
          <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
          <p>
            Our team consists of experienced and certified instructors dedicated
            to delivering quality education.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col">
          <h3 className="text-xl font-bold mb-2">Custom Packages</h3>
          <p>
            Create custom packages that cater to the unique needs of your
            customers, enhancing their driving experience.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-4 mt-8 text-white text-center">
        Join Us Today!
      </h2>
      <p className="text-xl text-white text-center mb-6">
        Partner with us to boost your sales and offer value to your customers.
        For more details contact us at{" "}
        <a href="/Contact" className="text-blue-200 underline">
          Click here
        </a>
        .
      </p>
    </div>
  );
}

export default Page;
