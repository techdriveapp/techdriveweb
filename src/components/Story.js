"use client"; // use client
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Testimonial data (Add images here)
const testimonials = [
  {
    id: 1,
    name: "Ashwani Rai",
    story:
      "This service changed my life! The instructors were patient and the lessons were easy to follow. I remember struggling with parallel parking, but my instructor worked with me until I mastered it. Now, I can park anywhere with confidence!",
    city: "Mirzapur",
    age: 25,
  },
  {
    id: 2,
    name: "Subham Mishra",
    story:
      "I learned to drive in no time! The flexible scheduling was perfect for my busy life. I appreciated being able to book lessons during my lunch breaks. The convenience allowed me to fit driving into my hectic routine without stress.",
    city: "Noida",
    age: 30,
  },
  {
    id: 3,
    name: "Vipin Soni",
    story:
      "Great experience with the instructors. I was able to overcome my fear of driving. After my first few lessons, I felt a sense of accomplishment. The instructors were always encouraging, and they helped me regain my confidence on the road.",
    city: "Varanasi",
    age: 28,
  },
  {
    id: 4,
    name: "Manoj Kumar",
    story:
      "I passed my driving test on the first try thanks to the expert guidance I received. The practice sessions focused on the specific areas I needed help with, making me feel well-prepared on test day. The feeling of driving away with my license was exhilarating!",
    city: "Noida",
    age: 22,
  },
  {
    id: 5,
    name: "Sonu Singh",
    story:
      "The learning process was smooth and hassle-free. I would recommend it to anyone! The instructors were not only knowledgeable but also made every lesson enjoyable. I particularly liked the real-time feedback during my practice drives.",
    city: "Varanasi",
    age: 27,
  },
  {
    id: 6,
    name: "Rahul Bind",
    story:
      "The instructors were incredibly helpful and made the lessons enjoyable. I looked forward to each session because they incorporated fun exercises that made learning easier. I even got to drive on scenic routes, which made practice feel less like a chore!",
    city: "Delhi",
    age: 35,
  },
  {
    id: 7,
    name: "Pinky",
    story:
      "Affordable and flexible! I was able to take lessons after work and on weekends. This was a game changer for me as I have a full-time job. The instructors tailored each lesson to my needs, which helped me learn at my own pace.",
    city: "Delhi",
    age: 29,
  },
  {
    id: 8,
    name: "Sunny",
    story:
      "I was able to learn at my own pace, and the app made everything so convenient. I loved how I could review my lessons on the app anytime, which reinforced what I learned during my sessions. The resources were truly invaluable.",
    city: "varanasi",
    age: 33,
  },
  {
    id: 9,
    name: "Shivam",
    story:
      "The best way to learn how to drive! I now feel confident on the road. The instructors personalized my learning experience, and I felt fully prepared for my driving test. Now I enjoy long drives, exploring new places!",
    city: "Noida",
    age: 24,
  },
  {
    id: 10,
    name: "Amit Kumar",
    story:
      "Excellent service! The flexibility and affordable lessons really helped me. I was impressed by how the instructors adapted to my learning style. They encouraged me to ask questions, which made me feel comfortable and engaged.",
    city: "Noida",
    age: 26,
  },
];

function Story() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Adjust the interval time for scrolling (3 seconds here)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[600px] flex-col bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-center relative text-white">
      <div className="w-full p-4">
        <h1 className="text-3xl font-bold drop-shadow-lg md:text-4xl">
          Testimonial
        </h1>
        <p className="text-md mt-2 md:text-lg">
          Our platform connects learners with driving schools, providing a
          flexible and affordable way to learn to drive.
        </p>
      </div>

      <div className="flex justify-center items-center relative">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-6 text-5xl md:text-6xl text-gray-800 bg-white p-1 md:p-2 rounded-full shadow-lg hover:bg-gray-300"
        >
          <AiOutlineLeft />
        </button>

        <div className="w-full flex justify-center items-center overflow-hidden">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 md:p-6 rounded-lg shadow-xl w-[90%] md:w-[500px] h-[350px] md:h-[300px] text-center text-black"
          >
            {/* Removed Image Component */}
            <p className="text-sm md:text-lg mt-2">
              {testimonials[currentIndex].story}
            </p>
            <h3 className="font-semibold text-xl md:text-2xl">
              {testimonials[currentIndex].name},{" "}
              {testimonials[currentIndex].age}
            </h3>
            <p className="text-sm md:text-lg mt-2 text-gray-600">
              {testimonials[currentIndex].city}
            </p>
          </motion.div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-6 text-5xl md:text-6xl text-gray-800 bg-white p-1 md:p-2 rounded-full shadow-lg hover:bg-gray-300"
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
}

export default Story;
