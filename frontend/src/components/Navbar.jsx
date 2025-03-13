import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';
import { BACKEND_URL } from "../../utils";
function Navbar() {
  const [show, setShow] = useState(false);

  const { profile, isAuthenticated, setIsAuthenticated } = useAuth();
  // console.log(profile);
  // console.log(isAuthenticated);

  const navigateTo = useNavigate();

   const handleLogout = async (e) => {
     e.preventDefault();
     try {
       const { data } = await axios.get(
         `${BACKEND_URL}/api/users/logout`,
         { withCredentials: true }
       );
      //  console.log(data);
      //  localStorage.removeItem("jwt"); // deleting token in localStorage so that if user logged out it will goes to login page
       toast.success(data?.message);
       Cookies.remove('token');
       setIsAuthenticated(false);
       navigateTo("/login");
     } catch (error) {
       console.log(error);
       toast.error("Failed to logout");
     }
   };

  return (
    <>
      <nav className=" w-full shadow-lg px-8 py-1">
        <div className="flex items-center justify-between container mx-auto">
          <div className="font-semibold text-lg">
            <span className="text-blue-500">Blogora </span>
          </div>
          <div className="mx-6">
            <ul className="hidden md:flex space-x-6 text-sm">
              <Link to="/" className="hover:text-blue-500">
                HOME
              </Link>
              <Link to="/blogs" className="hover:text-blue-500">
                BLOGS
              </Link>
              <Link to="/creators" className="hover:text-blue-500">
                CREATORS
              </Link>
              <Link to="/about" className="hover:text-blue-500">
                ABOUT
              </Link>
              <Link to="/contact" className="hover:text-blue-500">
                CONTACT
              </Link>
            </ul>
            <div className="md:hidden" onClick={() => setShow(!show)}>
              {show ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
          <div className="hidden md:flex space-x-2 text-sm">
            {isAuthenticated && profile?.user?.role === "admin" ? (
              <Link
                to="/dashboard"
                className="bg-blue-600 text-white font-semibold hover:bg-blue-800 duration-300 px-4 py-2 rounded"
              >
                DASHBOARD
              </Link>
            ) : (
              ""
            )}

            {!isAuthenticated ? (
              <Link
                to="/login"
                className="bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
              >
                LOGIN
              </Link>
            ) : (
              <div>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
                >
                  LOGOUT
                </button>
              </div>
            )}
          </div>
        </div>

        {/* mobile navbar */}
        {show && (
          <div className="bg-white">
            <ul className="flex flex-col h-screen items-center justify-center space-y-3 md:hidden text-xl">
              <Link
                to="/"
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-blue-500"
              >
                HOME
              </Link>
              <Link
                to="/blogs"
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-blue-500"
              >
                BLOGS
              </Link>
              <Link
                to="/creators"
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-blue-500"
              >
                CREATORS
              </Link>
              <Link
                to="/about"
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-blue-500"
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className="hover:text-blue-500"
              >
                CONTACT
              </Link>
              <div className="flex flex-col gap-3 justify-center items-center space-x-2 text-sm">
                {isAuthenticated && profile?.user?.role === "admin" ? (
                  <Link
                    to="/dashboard"
                    className="bg-blue-600 text-white font-semibold hover:bg-blue-800 duration-300 px-4 py-2 rounded"
                  >
                    DASHBOARD
                  </Link>
                ) : (
                  ""
                )}

                {!isAuthenticated ? (
                  <Link
                    to="/login"
                    className="bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
                  >
                    LOGIN
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={handleLogout}
                      className="bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
                    >
                      LOGOUT
                    </button>
                  </div>
                )}
              </div>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
