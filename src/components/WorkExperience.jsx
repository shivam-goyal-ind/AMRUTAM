import React from "react";
import { MdOutlineAddHomeWork } from "react-icons/md";

const WorkExperience = () => {
  const experiences = [
    { place: "Midtown Medical Clinic", role: "Senior Doctor", duration: "2016-Present" },
    { place: "Midtown Medical Clinic", role: "Senior Doctor", duration: "2010-2015" },
  ];

  return (
    <div className="bg-[#FEFDF9] rounded-lg shadow-md border-grey-900 border-solid border-2">
      <h2 className="text-xl font-semibold mb-4 bg-[#F8F9E9] rounded-t-lg p-4">My Work Experience</h2>
      <p className="text-green-900 mb-4 p-4 text-xl font-bold">I have been in practice for 7+ years</p>
      <div className="flex-1 border-t border-gray-300"></div>
      <div className="p-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 mb-4 flex items-center gap-8"
          >
            <MdOutlineAddHomeWork className="h-8 w-8"/>
            <div className="flex items-center justify-between w-full">
              <div>
                <h3 className="text-gray-700 font-semibold">{exp.place}</h3>
                <p className="text-sm text-gray-500">{exp.role}</p>
              </div>
              <p className="text-sm text-gray-500">{exp.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
