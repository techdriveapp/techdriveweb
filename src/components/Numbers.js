"use client"; // use client
import React, { useEffect, useState, useRef } from "react";

const Numbers = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const numbersSectionRef = useRef(null); // Reference for the numbers section
  const [hasAnimated, setHasAnimated] = useState(false); // Control when animation happens

  useEffect(() => {
    const animateCount = (target, setCount) => {
      let start = 0;
      const end = target;
      const duration = 2000;
      const increment = end / (duration / 100);

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(interval);
          setCount(end);
        } else {
          setCount(Math.ceil(start));
        }
      }, 50);
    };

    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasAnimated) {
        animateCount(2, setCount1);
        animateCount(30, setCount2);
        animateCount(10, setCount3);
        setHasAnimated(true); // Ensure animation happens only once per scroll into view
      } else if (!entry.isIntersecting) {
        // Reset counts when out of view
        setCount1(0);
        setCount2(0);
        setCount3(0);
        setHasAnimated(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    const currentRef = numbersSectionRef.current; // Store the current ref value
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={numbersSectionRef}
      className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-16"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Our Numbers</h2>
          <p className="text-gray-200 mt-4">
            Some cool stats about our journey so far
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-xl p-8 rounded-lg text-center transform transition duration-500 hover:scale-110 hover:shadow-2xl">
            <div className="w-24 h-24 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-4">
              <h3 className="text-5xl font-extrabold text-indigo-600 animate-counter">
                {count1}+
              </h3>
            </div>
            <p className="mt-2 text-gray-600">Number of cities</p>
          </div>

          <div className="bg-white shadow-xl p-8 rounded-lg text-center transform transition duration-500 hover:scale-110 hover:shadow-2xl">
            <div className="w-24 h-24 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-4">
              <h3 className="text-5xl font-extrabold text-indigo-600 animate-counter">
                {count2}+
              </h3>
            </div>
            <p className="mt-2 text-gray-600">Happy Learners</p>
          </div>

          <div className="bg-white shadow-xl p-8 rounded-lg text-center transform transition duration-500 hover:scale-110 hover:shadow-2xl">
            <div className="w-24 h-24 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-4">
              <h3 className="text-5xl font-extrabold text-indigo-600 animate-counter">
                {count3}+
              </h3>
            </div>
            <p className="mt-2 text-gray-600">
              Years of Experience Driving Instructors
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-white text-2xl">Curious to know more?</p>
        </div>
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
  );
};

export default Numbers;
