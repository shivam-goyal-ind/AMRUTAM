import React from "react";
import { GrAttachment } from "react-icons/gr";
import { PiStudentFill } from "react-icons/pi";
import { MdOutlineMessage } from "react-icons/md";

const DoctorCard = ({
  name,
  specialization,
  experience,
  languages,
  rating,
  videoConsultation,
  chatConsultation,
  profileImage,
}) => {
  return (
    <div className="bg-[#FFF7E2] max-w-sm mx-auto p-8 rounded-2xl shadow-lg text-center border border-gray-200">
      {/* Profile Image */}
      <div className="relative">
        <img
          src={profileImage}
          alt={name}
          className="w-28 h-28 mx-auto rounded-full mb-4 border-4 border-white shadow-sm scale-125"
        />
        <div className="absolute top-28 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-full flex items-center">
          <span>{rating}</span>
          <span className="ml-1 text-yellow-400">★</span>
        </div>
      </div>
      {/* Name and Details */}
      <h3 className="text-2xl font-bold text-gray-800 mt-6">{name}</h3>
      <div className="flex flex-col items-start gap-2 mt-2 ml-16">
        <div className="flex items-center gap-2">
          <GrAttachment />
          <p className="text-sm text-gray-600">{specialization}</p>
        </div>
        <div className="flex items-center gap-2">
          <PiStudentFill />
          <p className="text-sm text-gray-600">{experience}</p>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineMessage />
          <p className="text-sm text-gray-600 mb-4">Speaks: {languages}</p>
        </div>
      </div>

      {/* Consultation Options */}
      <div className="flex justify-center gap-4 mb-4">
        <div className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700">
          <p className="font-medium">Video Consultation</p>
          <p className="text-green-900 font-semibold">{videoConsultation}</p>
        </div>
        <div className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700">
          <p className="font-medium">Chat Consultation</p>
          <p className="text-green-900 font-semibold">{chatConsultation}</p>
        </div>
      </div>
      {/* Buttons */}
      <button className="bg-white border border-green-900 text-green-900 font-semibold px-4 py-2 rounded-lg mb-2 w-full">
        View Profile
      </button>
      <button className="bg-green-900 text-white font-semibold px-4 py-2 rounded-lg w-full">
        Book a consultation
      </button>
    </div>
  );
};

export default DoctorCard;
