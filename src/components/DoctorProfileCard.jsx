import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const DoctorProfileCard = () => {
  return (
    <div className="bg-[rgb(253,239,202)] shadow-md p-6 rounded-lg flex items-center space-x-6 ">
      {/* Doctor's Image */}
      <div className="rounded-full border-4 border-green-600 overflow-hidden absolute -translate-y-20">
        <img
          src="https://media.istockphoto.com/id/1285872850/photo/close-up-portrait-of-young-female-doctor-wear-smiling-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=5clbDZW4GHOgECbiTrnuASjgVLKgwWp_7u-5eXpw6Cg="
          alt="Doctor"
          className="w-32 h-32 object-cover"
        />
      </div>

      {/* Doctor's Details */}
      <div className="flex pl-56 gap-40">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold">Dr. Bruce Willis</h2>
            <RiVerifiedBadgeFill />
          </div>
          <p className="text-green-900">Gynecologist</p>
          <div className="flex items-center mt-2 gap-6">
            <span className="text-green-900">4.2 </span>
            <span className="text-yellow-500 scale-125"> ★ ★ ★ ★</span>
          </div>
        </div>
        <div className="flex mt-4 space-x-6 text-green-900">
          <div className="flex flex-col items-center">
            <p className="font-extrabold">850</p>
            <p>Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-extrabold">18K</p>
            <p>Following</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-extrabold">250</p>
            <p>Posts</p>
          </div>
        </div>
        <div>
          {/* Appointment Button */}
          <button className="px-6 py-4 bg-green-900 text-white rounded hover:bg-green-800">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileCard;
