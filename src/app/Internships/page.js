"use client";
import React from "react";

function page() {
  const internships = [
    {
      interncode: "I001",
      title: "Frontend Development Internship",
      duration: "3 months",
      description:
        "Gain hands-on experience in frontend development using React.js, CSS, and JavaScript. You will work closely with senior developers on real-world projects.",
      applyEmail: "miilan.india.in@gmail.com",
    },
    {
      interncode: "I002",
      title: "Backend Development Internship",
      duration: "3 months",
      description:
        "In this internship, you'll develop backend systems and APIs using Node.js and databases like MongoDB. Perfect for learning about scalable architecture.",
      applyEmail: "miilan.india.in@gmail.com",
    },
    {
      interncode: "I003",
      title: "HR Internship",
      duration: "1 month",
      description:
        "This HR internship is ideal for MBA students specializing in Human Resources. You'll assist with recruitment, onboarding, and employee engagement initiatives.",
      applyEmail: "miilan.india.in@gmail.com",
    },
    {
      interncode: "I004",
      title: "Accounts Internship",
      duration: "1 month",
      description:
        "Join us for a 1-month internship in Accounts, ideal for MBA Finance students. Gain practical experience in financial reporting, budgeting, and analysis.",
      applyEmail: "miilan.india.in@gmail.com",
    },
    {
      interncode: "I005",
      title: "React Native Developer Training",
      duration: "2 months",
      description:
        "Participate in a 2-month training program focused on React Native development. Ideal for those looking to build mobile applications and learn about cross-platform solutions.",
      applyEmail: "miilan.india.in@gmail.com",
    },
  ];

  const graduateProgram = {
    title: "Graduate Program 2024",
    description:
      "Our Graduate Program is designed for recent graduates looking to kickstart their careers in technology. The program spans across various domains, including software development, product management, and UI/UX design.",
    details: [
      "Duration: 1 year",
      "Mentorship with senior staff",
      "Cross-functional team projects",
      "Opportunities for full-time employment",
    ],
    applyEmail: "miilan.india.in@gmail.com",
  };

  return (
    <div className="container mx-auto px-6 lg:px-12 py-10">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">
        Internships & Graduate Program
      </h1>

      {/* Internships Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Internships</h2>
        <div className="grid gap-8">
          {internships.map((internship, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold">{internship.title}</h3>
              <p className="text-gray-600">{internship.duration}</p>
              <p className="mt-2 text-sm">{internship.description}</p>
              <a
                href={`mailto:${internship.applyEmail}?subject=Application for ${internship.title} - Job Code: ${internship.interncode}`}
                className="mt-4 inline-block text-blue-500 underline"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Graduate Program Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Graduate Program</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold">{graduateProgram.title}</h3>
          <p className="mt-2">{graduateProgram.description}</p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-sm">
            {graduateProgram.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <a
            href={`mailto:${graduateProgram.applyEmail}?subject=Application for ${graduateProgram.title}`}
            className="mt-4 inline-block text-blue-500 underline"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
