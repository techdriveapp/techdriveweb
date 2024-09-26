import React from "react";

function Main() {
  return (
    <div className="relative w-full flex-col h-screen overflow-hidden bg-white">
      <div className="absolute bottom-0 top-2 w-full animate-scrollUp p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 text-center">
          Welcome to TechDrive
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-600 underline">
          DRIVE RIGHT.
          <p className="text-xl md:text-3xl no-underline">DRIVE SAFE.</p>
        </h2>
        <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-700">
          We, at TechDrive, believe that everyone deserves to be safe on the
          road and this very concept has inspired us to launch TechDrive. Our
          mission is to transform you into a responsible driver who navigates
          the streets with confidence and ease. With TechDrive, you’re not just
          learning to drive you’re becoming road ready.
        </p>
        <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-700">
          At TechDrive Team, we offer a range of personalized driving courses
          tailored to meet your individual needs. Our expert trainers provide
          hands-on instruction that ensures you receive the support you need to
          succeed. Our curriculum focuses on three key aspects of driving:
          identification, judgment, and execution.
        </p>
        <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-700">
          Our START program is designed with empathy for novice drivers,
          ensuring you feel supported every step of the way. For those looking
          to enhance their skills our SMART program fine-tunes your abilities to
          help you become a professional driver. With TechDrive’s driving
          courses you ll learn to drive safely and confidently equipped with the
          skills necessary for the road ahead.
        </p>
      </div>
    </div>
  );
}

export default Main;
