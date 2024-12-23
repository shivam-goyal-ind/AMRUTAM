import React from "react";
import { RxCross1 } from "react-icons/rx";

const ActiveFilters = ({ filters }) => {
  return (
    <div className="px-6 py-6 flex justify-end">
      <div className="flex flex-wrap gap-6">
        {filters.map((filter, index) => (
          <div
            key={index}
            className="flex items-center bg-zinc-200 text-green-700 px-3 py-1 rounded-full text-m relative"
          >
            <span>{filter}</span>
            <button className="ml-2 text-red-500">
              <RxCross1 />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveFilters;
