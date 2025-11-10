import React from "react";
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";



const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-20">
        <h1 className="text-[10rem] font-extrabold text-[#dd163b]">404</h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-6 text-center max-w-md">
          Oops! The page you are looking for does not exist or has been moved.
          Check another URL or return to the homepage.
        </p>
        <Link
          to="/"
          className="flex items-center bg-[#dd163b] hover:bg-[#eb3154] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          <FaHome className="mr-2" /> Go to Home
        </Link>
      </main>

      {/* Footer */}
      {/* <Footer/> */}
    </div>
  );
};

export default Error404;