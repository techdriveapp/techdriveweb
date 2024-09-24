"use client";
import React from "react";

function Page() {
  const positions = [
    {
      jobcode: "J003",
      title: "Business Development Associate",
      location: "Delhi, IN",
      description:
        "We are seeking a Business Development Associate with 0-1 year of experience to assist in driving sales and building client relationships. A valid driving license is required.",
      applyEmail: "miilan.india.in@gmail.com",
    },
    {
      jobcode: "J004",
      title: "Business Development Manager",
      location: "Delhi, IN",
      description:
        "Join our team as a Business Development Manager with 1-2 years of MBA experience. You will be responsible for strategizing and managing client relationships to drive business growth.",
      applyEmail: "miilan.india.in@gmail.com",
    },
  ];

  return (
    <div className="container mx-auto px-6 lg:px-12 py-10">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Open Positions</h1>
      <div className="grid gap-8">
        {positions.map((position, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold">{position.title}</h2>
            <p className="text-gray-600">{position.location}</p>
            <p className="mt-2 text-sm">{position.description}</p>
            <a
              href={`mailto:${position.applyEmail}?subject=Application for ${position.title} - Job Code: ${position.jobcode}`}
              className="mt-4 inline-block text-blue-500 underline"
            >
              Apply
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
