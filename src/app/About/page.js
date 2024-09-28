"use client"; // use client
import React, { useEffect } from "react";
import Image from "next/image"; // Import Image from next/image
import Head from "next/head"; // Import Head from next/head

const teamMembers = [
  { name: "Shivam Singh", position: "CEO", imageUrl: "" },
  { name: "Manish Kumar", position: "CTO", imageUrl: "" },
  {
    name: "Rahul Singh",
    position: "CMO",
    imageUrl: "",
  },
  { name: "Sunny Singh", position: "CFO", imageUrl: "" },
];

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Meta information goes in Head */}
      <Head>
        <title>About TechDrive - Learn More About Us</title>
        <meta
          name="description"
          content="Learn more about TechDrive, our mission to make driving education easy and affordable, and the expert team behind our services."
        />
        <meta
          name="keywords"
          content="about TechDrive, driving lessons company, driving school, about driving services"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="About TechDrive - Driving School Services"
        />
        <meta
          property="og:description"
          content="Learn more about TechDrive, our mission, and the team behind it."
        />
        <meta property="og:url" content="https://techdriveapp.in/about" />
      </Head>

      {/* Page layout */}
      <div className="bg-gray-50 min-h-screen mt-10">
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
            <p className="mt-4 text-lg text-gray-600">
              We are committed to delivering the best solutions for your
              business needs.
            </p>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold text-center text-gray-800">
              Our Story
            </h2>
            <p className="mt-6 text-center text-lg text-gray-600">
              Founded in 2024, our journey began with a simple yet powerful
              idea: to bridge the gap between traditional driving education and
              modern technological solutions. As passionate advocates for road
              safety and skill development, we recognized the need for a more
              flexible, accessible, and effective way to teach driving. In a
              rapidly evolving world, we understood that conventional driving
              schools often fell short in meeting the diverse needs of learners.
              Our commitment to innovation led us to create a platform that
              connects aspiring drivers with qualified instructors, offering
              tailored lessons that fit into busy lifestyles. From humble
              beginnings, we have grown into a trusted name in driving
              education. Our platform has helped thousands of learners gain the
              skills and confidence needed to navigate the roads safely. By
              embracing technology, we have streamlined the learning process,
              allowing users to schedule lessons at their convenience, track
              their progress, and receive real-time feedback from experienced
              instructors. Our story is one of resilience, adaptability, and a
              relentless pursuit of excellence.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Our Mission
                </h3>
                <p className="mt-4 text-gray-600">
                  At the heart of our company is a mission to empower
                  individuals by providing world-class driving education that
                  enhances safety and fosters confidence behind the wheel. We
                  believe that learning to drive should be an enjoyable and
                  stress-free experience, which is why we prioritize
                  personalized instruction and flexible scheduling. Our mission
                  is to make quality driving education accessible to everyone,
                  regardless of their background or experience level.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Our Vision
                </h3>
                <p className="mt-4 text-gray-600">
                  We envision a future where every individual has the
                  opportunity to learn to drive safely and confidently. Our
                  vision is to become the global leader in innovative driving
                  education solutions, transforming the way people learn to
                  drive. We aspire to expand our reach beyond borders, making
                  our platform available to learners worldwide.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Our Values
                </h3>
                <p className="mt-4 text-gray-600">
                  Integrity, Innovation, and Excellence are the core values that
                  guide our operations and shape our culture. Integrity: We
                  believe in transparency and honesty in all our interactions,
                  whether with our students, instructors, or partners. We are
                  committed to upholding the highest ethical standards in our
                  business practices. Innovation: In an ever-changing world, we
                  embrace change and continuously seek new ways to improve our
                  services. Our focus on innovation drives us to explore new
                  technologies and methodologies that enhance the learning
                  experience for our students.
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
                  className="p-6 bg-gray-100 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105"
                >
                  {/* <Image
                  src={member.imageUrl} // Use Image component
                  alt={member.name}
                  width={128} // Specify width
                  height={128} // Specify height
                  className="mx-auto rounded-full object-cover"
                /> */}
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
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
