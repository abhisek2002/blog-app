import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
function Footer() {
  return (
    <>
      <footer className="border">
        <div className="container flex gap-16 flex-col md:flex-row md:justify-between px-20 py-2">
          <div className=" text-center md:text-start">
            <h2 className="text-md font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              <li>
                <p className="text-gray-400 hover:text-gray-600">
                  Content Strategy & Creation
                </p>
              </li>
              <li>
                <p className="text-gray-400 hover:text-gray-600">
                  Monetization & Marketing
                </p>
              </li>
              <li>
                <p className="text-gray-400 hover:text-gray-600">
                  Analytics & Reporting
                </p>
              </li>
              <li>
                <p className="text-gray-400 hover:text-gray-600">
                  Consulting & Training
                </p>
              </li>
            </ul>
          </div>

          <div className=" text-center md:text-start">
            <h2 className="text-md font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-start">
            <h2 className="text-md font-semibold mb-4">Get In Touch</h2>
            <ul className="space-y-2">
              <li>
                <div className="flex gap-2 items-center">
                  <span className="text-green-500">
                    <FaPhoneAlt />
                  </span>
                  <p>+91-9693 314 965</p>
                </div>
              </li>
              <li>
                <div className="flex gap-2 items-center">
                  <span className="text-lg">
                    <IoMdMail />
                  </span>
                  <p>abhisek20022008@gmail.com</p>
                </div>
              </li>
              <li>
                <div className="flex gap-2 items-center">
                  <span className="text-lg">
                    <FaLocationDot />
                  </span>
                  <p>Blogora Office, New Delhi, India - 110011</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className=" container mx-auto  flex flex-col md:flex-row justify-between items-center px-10 py-2">
        <div className="text-lg font-semibold hidden md:flex">
          <span className="text-blue-500 font-bold">Blogora</span>
        </div>
        <div className="text-gray-400 text-sm hidden md:flex">
          <p>&copy; 2025 Blogora PVT. LTD. All rights reserved</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#">
            <FaGithub className="h-6" />
          </a>
          <a href="#">
            <BsYoutube className="h-6" />
          </a>

          <a href="#">
            <FaLinkedin className="h-6" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
