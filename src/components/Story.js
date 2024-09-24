"use client"; // use client
import React, { useEffect, useRef } from "react";
import Image from "next/image";

// Ensure image paths are correct or dynamically imported
const testimonials = [
  {
    id: 1,
    name: "Alice",
    story: "This service changed my life!",
    image: "",
  },
  {
    id: 2,
    name: "Bob",
    story: "I learned to drive in no time!",
    image: "",
  },
  // Add more testimonials...
];

function Story() {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (testimonialsRef.current) {
        testimonialsRef.current.scrollBy({
          left: testimonialsRef.current.offsetWidth / 3, // Adjust scroll amount dynamically
          behavior: "smooth",
        });
      }
    }, 3000); // Adjust the interval for scrolling

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[500px] border flex-col bg-gray-200 border-black">
      <div className="w-full p-4 flex-col justify-center items-center text-center">
        <h1 className="text-2xl font-bold">Testimonial</h1>
        <p>
          Our platform connects learners with driving schools, providing a
          flexible and affordable way to learn to drive.
        </p>
      </div>
      <div className="w-full p-4 overflow-hidden flex justify-center items-center">
        <div
          ref={testimonialsRef}
          className="overflow-x-hidden whitespace-nowrap space-x-4"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="inline-block bg-white p-4 rounded shadow w-92 h-[300px] text-center"
            >
              <Image
                src={testimonial.image}
                alt={`Testimonial from ${testimonial.name}`}
                className="w-16 h-16 rounded-full mx-auto mb-2"
              />
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p>{testimonial.story}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Story;
