"use client"; // use client
import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Alice",
    story: "This service changed my life!",
    image: "path/to/image1.jpg",
  },
  {
    id: 2,
    name: "Bob",
    story: "I learned to drive in no time!",
    image: "path/to/image2.jpg",
  },
  {
    id: 3,
    name: "Charlie",
    story: "The instructors were very helpful.",
    image: "path/to/image3.jpg",
  },
  {
    id: 4,
    name: "Diana",
    story: "Highly recommend to everyone!",
    image: "path/to/image4.jpg",
  },
  {
    id: 5,
    name: "Ethan",
    story: "Great experience overall.",
    image: "path/to/image5.jpg",
  },
  {
    id: 6,
    name: "Fiona",
    story: "Best driving school I've been to!",
    image: "path/to/image6.jpg",
  },
  {
    id: 7,
    name: "George",
    story: "Professional and friendly instructors.",
    image: "path/to/image7.jpg",
  },
  {
    id: 8,
    name: "Hannah",
    story: "I passed my test on the first try!",
    image: "path/to/image8.jpg",
  },
  {
    id: 9,
    name: "Isaac",
    story: "Flexible timings made it easier.",
    image: "path/to/image9.jpg",
  },
  {
    id: 10,
    name: "Jack",
    story: "Incredible support throughout my journey.",
    image: "path/to/image10.jpg",
  },
];

function Story() {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (testimonialsRef.current) {
        testimonialsRef.current.scrollBy({
          left: 300, // Scroll left by 300 pixels
          behavior: "smooth",
        });
      }
    }, 3000); // Adjust the interval for scrolling

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[500px] border flex-col black bg-gray-200 border-black">
      <div className="w-full p-4  flex-col justify-center border items-center">
        <h1 className="text-2xl font-bold text-center">Testimonial</h1>
        <p className=" text-center">
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
              <img
                src={testimonial.image}
                alt={`Testimonial ${testimonial.id}`}
                className="w-16 h-16 rounded-full mx-auto mb-2"
              />
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p>"{testimonial.story}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Story;
