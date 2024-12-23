import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="bg-[#FEFDF9] rounded-lg shadow-md border border-gray-300">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-[#F8F9E9] rounded-t-lg p-4">
        <h2 className="text-lg font-semibold text-gray-800">A Little About me</h2>
        <button className="flex bg-[#FEFDF9] items-center px-4 py-1 border border-green-700 text-green-700 rounded-full hover:bg-green-100">
          Follow +
        </button>
      </div>

      {/* About Section */}
      <div className="p-4">
        <p className="text-gray-700 leading-relaxed">
          Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat.
          love to work with all my hospital staff and senior doctors. Completed my
          graduation in Gynaecologist Medicine from the...
        </p>
      </div>

      {/* Replacing hr with a styled div */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex-1 border-t border-gray-300"></div>
        <button className="text-green-700 font-medium ml-2 hover:underline">
          Read More
        </button>
      </div>

      {/* Languages Spoken */}
      <div className="p-4 flex items-center gap-10">
        <h4 className="text-gray-600 text-m font-bold mb-2">Language Spoken</h4>
        <div className="space-x-10 ">
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-m">
            English
          </span>
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-m">
            Hindi
          </span>
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-m">
            Telugu
          </span>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-6 p-6">
        <FaFacebook className="text-gray-600 w-10 h-10 hover:text-green-700 cursor-pointer border-4 border-solid border-grey-900 rounded-full" />
        <FaInstagram className="text-gray-600 w-10 h-10 hover:text-green-700 cursor-pointer border-4 border-solid border-grey-900 rounded-full" />
        <FaYoutube className="text-gray-600 w-10 h-10 hover:text-green-700 cursor-pointer border-4 border-solid border-grey-900 rounded-full" />
        <FaTwitter className="text-gray-600 w-10 h-10 hover:text-green-700 cursor-pointer border-4 border-solid border-grey-900 rounded-full" />
      </div>
    </div>
  );
};

export default AboutMe;
