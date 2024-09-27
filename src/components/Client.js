"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function Client() {
  return (
    <div className="w-full h-[900px] bg-gray-100 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center overflow-hidden">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mt-10 mb-6 text-center leading-loose">
          Our Car Dealership
        </h1>

        <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6 text-center leading-loose">
          Join the dealerships that have boosted their sales by partnering with
          us!
        </p>

        <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-8 text-center leading-loose">
          Increase your sales today by connecting with us. Click the button
          below!
        </p>
        <Link href="/Contact">
          <motion.button
            className="relative bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 mb-8 drip-effect overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Increase Your Sales</span>
          </motion.button>
        </Link>
      </div>

      <div className="relative w-full overflow-hidden bottom-5">
        <div className="flex space-x-4 animate-scroll ">
          {/* Client Card 1 */}
          <motion.div
            className="bg-red-200 p-4 rounded-lg shadow-3xl border text-center flex-shrink-0 w-[200px] sm:w-[250px] md:w-[300px]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-red-800">
              Badshah Car Delership
            </h2>
            <p className="text-gray-700">
              Experience a 3x increase in sales through TechDrive!
            </p>
          </motion.div>

          {/* Client Card 2 */}
          <motion.div
            className="bg-green-200 p-4 rounded-lg shadow-3xl border text-center flex-shrink-0 w-[200px] sm:w-[250px] md:w-[300px]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-green-800">
              Shree Car Bajar
            </h2>
            <p className="text-gray-700">
              Experience a 3x increase in sales through TechDrive!
            </p>
          </motion.div>

          {/* Client Card 3 */}
          <motion.div
            className="bg-blue-200 p-4 rounded-lg shadow-3xl border text-center flex-shrink-0 w-[200px] sm:w-[250px] md:w-[300px]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-blue-800">
              Galaxy Motors
            </h2>
            <p className="text-gray-700">
              Experience a 3x increase in sales through TechDrive!
            </p>
          </motion.div>

          {/* Client Card 4 */}
          <motion.div
            className="bg-yellow-200 p-4 rounded-lg shadow-3xl border text-center flex-shrink-0 w-[200px] sm:w-[250px] md:w-[300px]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-yellow-800">
              Renault Varanasi
            </h2>
            <p className="text-gray-700">
              Experience a 3x increase in sales through TechDrive!
            </p>
          </motion.div>

          {/* Client Card 5 */}
          <motion.div
            className="bg-purple-200 p-4 rounded-lg shadow-3xl border text-center flex-shrink-0 w-[200px] sm:w-[250px] md:w-[300px]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-purple-800">
              Aditya automovers Pvt Ltd
            </h2>
            <p className="text-gray-700">
              Experience a 3x increase in sales through TechDrive!
            </p>
          </motion.div>
          <motion.div
            className="bg-purple-200 p-4 rounded-lg shadow-3xl border text-center flex-shrink-0 w-[200px] sm:w-[250px] md:w-[300px]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-purple-800">
              Kashi Motors
            </h2>
            <p className="text-gray-700">
              Experience a 3x increase in sales through TechDrive!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Client;
