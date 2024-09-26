"use client";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white py-6">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-4 lg:gap-8">
          {/* Left section: Logo, company name, and addresses */}
          <div className="flex flex-col items-center lg:items-start space-y-2 w-full lg:w-1/3">
            <h1 className="text-lg font-bold text-blue-500">TechDrive</h1>
            <p className="text-xs text-center lg:text-left">
              A Subsidiary of Miilan Helping Hand India Pvt Ltd
            </p>

            {/* Corporate Address */}
            <div className="text-center lg:text-left">
              <h2 className="text-xs">Corporate Address:</h2>
              <address className="text-xs not-italic leading-snug">
                5/164K Pahariya <br />
                Chauraha, Pandeypur, Aashapur Road, <br />
                Varanasi U.P. 221007
              </address>
            </div>

            {/* Local Office Address */}
            <div className="text-center lg:text-left">
              <h2 className="text-xs">Local Office Address:</h2>
              <address className="text-xs not-italic leading-snug">
                TechDrive Office, Plot No. 21, <br />
                Sector 62, Noida, Uttar Pradesh 201301
              </address>
            </div>

            <p className="mt-1 text-xs text-center lg:text-left">
              <span className="font-bold">Helpline:</span> +91-9120163229
            </p>
          </div>

          {/* Middle and Right sections */}
          <div className="flex flex-row lg:w-2/3 justify-between text-xs mt-6 lg:mt-0">
            {/* Quick Links */}
            <div className="flex flex-col space-y-4 text-center lg:text-left">
              <h2 className="text-base font-semibold text-blue-500">
                Quick Links
              </h2>
              <ul className="space-y-1">
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

            {/* Careers Section */}
            <div className="flex flex-col space-y-4 text-center lg:text-left lg:ml-8">
              <h2 className="text-base font-semibold text-blue-500">Careers</h2>
              <ul className="space-y-1">
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

            {/* Cities Section */}
            <div className="flex flex-col space-y-4 text-center lg:text-left lg:ml-8">
              <h2 className="text-base font-semibold text-blue-500">
                Current Cities
              </h2>
              <ul className="list-none">
                <li>Varanasi, UP</li>
                <li>Noida, UP</li>
                <li>Delhi</li>
              </ul>

              <h2 className="text-base font-semibold text-blue-500 mt-4">
                Upcoming Cities
              </h2>
              <ul className="list-disc list-inside">
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
        <div className="border-t border-gray-600 mt-6 pt-2">
          <p className="text-center text-gray-400 text-xs">
            &copy; Miilan Helping Hand India Pvt Ltd 2024
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
