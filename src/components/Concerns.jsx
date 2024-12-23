import React from "react";

const Concerns = () => {
  const concerns = [
    "Skin Treatment",
    "Pregnancy",
    "Period Doubts",
    "Endometriosis",
    "Pelvic Pain",
    "Ovarian Cysts",
  ];

  return (
    <div className="bg-[#FEFDF9] rounded-lg shadow-md border-grey-900 border-solid border-2">
      <h2 className="text-xl font-semibold mb-4 bg-[#F8F9E9] rounded-t-lg p-4">The Concerns I Treat</h2>
      <div className="flex flex-wrap p-8 gap-6">
        {concerns.map((concern, index) => (
          <span
            key={index}
            className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-m"
          >
            {concern}
          </span>
        ))}
        <span className="text-green-700 cursor-pointer px-3 py-1 rounded-full text-m">+ 5 More</span>
      </div>
    </div>
  );
};

export default Concerns;
