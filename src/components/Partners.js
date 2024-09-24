"use client";
import React from "react";
import { motion } from "framer-motion"; // Assuming you're using Framer Motion for animations

// Sample data for partner instructors
const partners = [
  {
    name: "John Doe",
    city: "New York",
    description: "Driving instructor with 5 years of experience.",
  },
  {
    name: "Jane Smith",
    city: "Los Angeles",
    description: "Expert in teaching defensive driving.",
  },
  {
    name: "Sam Brown",
    city: "Chicago",
    description: "Specializes in automatic vehicle training.",
  },
  {
    name: "Lisa White",
    city: "Houston",
    description: "Certified driving instructor for all age groups.",
  },
  ,
  {
    name: "Lisa White",
    city: "Houston",
    description: "Certified driving instructor for all age groups.",
  },
  ,
  {
    name: "Lisa White",
    city: "Houston",
    description: "Certified driving instructor for all age groups.",
  },
  ,
  {
    name: "Lisa White",
    city: "Houston",
    description: "Certified driving instructor for all age groups.",
  },
  ,
  {
    name: "Lisa White",
    city: "Houston",
    description: "Certified driving instructor for all age groups.",
  },
  ,
  {
    name: "Lisa White",
    city: "Houston",
    description: "Certified driving instructor for all age groups.",
  },
  ,
  {
    name: "Lisa White",
    city: "Houston",
    description: "Certified driving instructor for all age groups.",
  },
  ,
  {
    name: "Lisa White",
    city: "Houston",
    description: "Certified driving instructor for all age groups.",
  },
];

function Partners() {
  return (
    <div className="w-full h-auto bg-gradient-to-r from-purple-500 to-blue-500 flex flex-col items-center p-4">
      {/* Header Section */}
      <h1 className="text-white text-3xl font-bold mb-4 text-center">
        Our Partners
      </h1>
      <p className="text-white text-lg mb-6 text-center">
        Experience driving training with our trusted partners who provide
        personal training to enhance your driving skills.
      </p>

      {/* Partners Card Section */}
      <div className="flex flex-wrap justify-center">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="m-2 w-64 h-[390px] bg-white rounded-lg shadow-md flex flex-col justify-center p-4 hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="font-semibold text-lg text-center text-gray-900">
              {partner.name}
            </h2>
            <p className="text-gray-600 text-center">{partner.city}</p>
            <p className="text-gray-500 text-center">{partner.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Work With Us Section */}
      <div className="w-full h-auto bg-white rounded-lg shadow-lg p-6 mt-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Work with Us as a Partner
        </h2>
        <p className="text-gray-700 mb-6">
          Are you a driving instructor or school? Join us and offer personalized
          driving lessons to learners across the country. Contact us today to
          learn more about partnering with us.
        </p>

        {/* Contact Button */}
        <a
          href="/Contact"
          className="inline-block bg-purple-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-600 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default Partners;
