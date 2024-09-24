"use client"; // use client
import React, { useEffect } from "react";
import Image from "next/image";

const teamMembers = [
  { name: "John Doe", position: "CEO", imageUrl: "team-member-image-url-1" },
  { name: "Jane Smith", position: "CTO", imageUrl: "team-member-image-url-2" },
  {
    name: "Alice Johnson",
    position: "CMO",
    imageUrl: "team-member-image-url-3",
  },
  { name: "Bob Brown", position: "CFO", imageUrl: "team-member-image-url-4" },
];

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            We are committed to delivering the best solutions for your business
            needs.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center text-gray-800">
            Our Story
          </h2>
          <p className="mt-6 text-center text-lg text-gray-600">
            Founded in [Year], we have been leading the way in innovative
            solutions for companies worldwide. With a strong commitment to
            excellence and customer satisfaction, we take pride in our unique
            approach.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Mission
              </h3>
              <p className="mt-4 text-gray-600">
                We aim to empower businesses by providing world-class services
                that fuel growth and efficiency.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Vision
              </h3>
              <p className="mt-4 text-gray-600">
                To be the global leader in providing innovative solutions that
                transform businesses for the future.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Values
              </h3>
              <p className="mt-4 text-gray-600">
                Integrity, Innovation, and Excellence are at the core of
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center text-gray-800">
            Meet Our Team
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-lg text-center"
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="mt-2 text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-white">
            Ready to Learn Driving?
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Let’s take your business to the next level with our innovative
            solutions.
          </p>
          <div className="flex justify-center mt-6 space-x-4">
            <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg shadow-lg">
              {/* Google Play SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                viewBox="30 336.7 120.9 129.2"
                xmlSpace="preserve"
              >
                <path
                  fill="#FFD700"
                  d="M48.6 402.4L30.5 413.5v-59.5l18.1 9.2v39.2z"
                />
                <path
                  fill="#FF4500"
                  d="M99.1 376.7l-12.7 12.9-40.2-20.5 6.3-3.2c2.9-1.5 6.3-1.5 9.2 0L99.1 376.7z"
                />
                <path
                  fill="#00FF00"
                  d="M99.1 376.7L41.1 414.6v27.6c-.5.1-1.1 0-1.6-.1l.7 11c.9-.2 2.1-.3 3-.3L99.1 376.7z"
                />
                <path
                  fill="#0000FF"
                  d="M99.1 410.6v-11.7L67.9 394.5l31.2-16.7v-11.7l-31.2 16.7 31.2 16.7z"
                />
              </svg>
              <span className="text-sm">Get on Google Play</span>
            </button>

            <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg shadow-lg">
              {/* App Store SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                viewBox="0 0 384 512"
                fill="currentColor"
              >
                <path d="M318.7 268c-.3-70.5 57.7-104.7 60.4-106.2-33-48.2-84.2-54.7-102.1-55.4-43.6-4.4-84.7 25.8-106.6 25.8s-55-25.3-90.2-24.6c-46.4.7-89.7 27.2-113.8 69-49 84.9-12.6 209.9 34.8 278.7 23.1 33.2 50.5 70.3 86.4 68.8 34.5-1.4 47.6-22.4 89.4-22.4s53.4 22.4 90.2 21.7c37.4-.6 61.1-33.1 83.8-66.4 26.5-39 37.4-76.7 38-78.8-1-.3-71.2-27.3-71.5-108.3z" />
                <path d="M267.9 72.5c18.1-22 30.4-53 27.2-84.4-26.3 1-57.9 17.5-76.5 39.5-16.8 19.5-31.5 51.2-27.5 81.2 29.2.5 58.8-14.8 76.8-36.3z" />
              </svg>
              <span className="text-sm">Download on the App Store</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
