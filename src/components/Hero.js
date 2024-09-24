"use client"; // use client
import React from "react";

const Hero = () => {
  return (
    <div className="pt-1">
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 h-screen flex items-center justify-center ">
        <div className="absolute top-10 mt-8 px-6 py-2 bg-gray-800 bg-opacity-70 rounded-full text-gray-200 text-sm">
          Announcing our next way of learning to drive.{" "}
          <span className="underline text-white cursor-pointer">
            Read more →
          </span>
        </div>

        <div className="text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Start Your Self-Driving Journey
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Personalized Training Tailored Just for You
          </h2>
          <p className="mt-2 text-base sm:text-lg max-w-md mx-auto">
            Experience the convenience of learning to drive with expert
            instructors at your doorstep.
          </p>
          {/* <p className="mt-4 text-lg sm:text-xl max-w-md mx-auto">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p> */}

          <div className="flex justify-center mt-6 space-x-4">
            <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg shadow-lg">
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
      </div>
    </div>
  );
};

export default Hero;
