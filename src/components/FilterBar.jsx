import React from "react";
import { FaLocationDot, FaArrowRight } from "react-icons/fa6";

const FilterBar = () => {
  return (
    <div>
        <div className="bg-[url(https://i.pinimg.com/736x/d1/fa/54/d1fa54a88d8a5ae34707cc022577ed50.jpg)] py-10 px-10">
            <h1 className="text-2xl font-mono font-extrabold text-center mb-4 tracking-widest">
                Find Expert Doctors For An In-Clinic Session Here
            </h1>
            <div className="flex flex-wrap justify-center gap-4 py-3">
                <div className="flex items-center gap-2">
                    <div className="absolute ml-4">
                        <FaLocationDot />
                    </div>
                    <div>
                        <select className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-54">
                        <option>Select Location</option>
                        </select>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="absolute ml-72">
                        <FaArrowRight />
                    </div>
                    <div>
                    <input
                        type="text"
                        placeholder="eg. Doctor, speciaisation, clinic name"
                        className="border border-gray-300 rounded-lg px-4 py-2 w-80"
                        />
                    </div>
                </div>
                
            </div>
        </div>
        <div className="px-8 py-4 flex justify-center gap-16"> 
            <select className="border border-gray-300 rounded-lg px-6 py-2">
            <option>Expertise</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-6 py-2">
            <option>Gender</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-6 py-2">
            <option>Fees</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-6 py-2">
            <option>Languages</option>
            </select>
            <select className="bg-green-200 text-green px-6 py-2 rounded-lg">
            <option>All filters</option>
            </select>
        </div>
        <div className="bg-[#e3e3e0] h-0.5">

        </div>
    </div>
  );
};

export default FilterBar;
