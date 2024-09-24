"use client";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white py-10">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          {/* Left section: Logo, company name, and addresses */}
          <div className="flex flex-col items-center lg:items-start space-y-4 lg:space-y-6 w-full lg:w-1/3">
            <h1 className="text-2xl font-bold text-blue-500">TechDrive</h1>
            <p className="text-lg">
              A Subsidiary of Miilan Helping Hand India Pvt Ltd
            </p>

            {/* Corporate Address */}
            <div>
              <h2 className="text-sm font-bold">Corporate Address:</h2>
              <address className="text-sm not-italic leading-relaxed">
                5/164K Pahariya <br />
                Chauraha, Pandeypur, Aashapur Road, <br />
                Varanasi U.P. 221007
              </address>
            </div>

            {/* Local Office Address */}
            <div>
              <h2 className="text-sm font-bold">Local Office Address:</h2>
              <address className="text-sm not-italic leading-relaxed">
                TechDrive Office, Plot No. 21, <br />
                Sector 62, Noida, Uttar Pradesh 201301
              </address>
            </div>

            <p className="mt-2 text-sm">
              <span className="font-bold">Helpline:</span> +91-9120163229
            </p>
          </div>

          {/* Middle section: Quick Links */}
          <div className="flex flex-col lg:flex-row lg:w-2/3 justify-between">
            {/* Quick Links */}
            <div className="flex flex-col space-y-6 text-sm">
              <h2 className="text-lg font-bold">Quick Links</h2>

              {/* About, Blogs, Contact, Services */}
              <div>
                <h3 className="font-bold">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="About" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="Blogs" className="hover:underline">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a href="Contact" className="hover:underline">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="Services" className="hover:underline">
                      Services
                    </a>
                  </li>
                </ul>
              </div>

              {/* Careers */}
              <div>
                <h3 className="font-bold">Careers</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="Opening" className="hover:underline">
                      Open Positions
                    </a>
                  </li>
                  <li>
                    <a href="Internships" className="hover:underline">
                      Internships
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Graduate Program
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right section: Current City and Upcoming Cities */}
            <div className="text-sm mt-6 lg:mt-0 lg:ml-10">
              <h2 className="text-lg font-bold">Current Cities:</h2>
              <ul className="list-none">
                <li className="text-sm">Varanasi, UP</li>
                <li className="text-sm">Noida, UP</li>
                <li className="text-sm">Delhi</li>
              </ul>

              <h2 className="text-lg font-bold mt-4">Upcoming Cities:</h2>
              <ul className="text-sm list-disc list-inside">
                <li>Bengaluru</li>
                <li>Hyderabad</li>
                <li>Chennai</li>
                <li>Pune</li>
                <li>Mumbai</li>
                <li>Gurugram</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom: Copyright */}
        <div className="border-t border-gray-600 mt-10 pt-4">
          <p className="text-center text-gray-400 text-sm">
            &copy; Miilan Helping Hand India Pvt Ltd 2024
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
