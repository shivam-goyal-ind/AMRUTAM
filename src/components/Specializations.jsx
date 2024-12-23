import React from "react";

const Specializations = () => {
  const specialties = [
    {
      name: "Women's Health",
      image: "src/assets/Screenshot 2024-12-23 204055.png",
    },
    {
      name: "Skin Care",
      image: "src/assets/Screenshot 2024-12-23 204105.png",
    },
    {
      name: "Immunity",
      image: "src/assets/Screenshot 2024-12-23 204114.png",
    },
    {
      name: "Hair Care",
      image: "src/assets/Screenshot 2024-12-23 204126.png",
    },
  ];

  return (
    <div className="bg-[#FEFDF9] rounded-lg shadow-md border-grey-900 border-solid border-2">
      <h2 className="text-xl font-semibold mb-4 bg-[#F8F9E9] rounded-t-lg p-4">
        I Specialize In
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
        {specialties.map((specialty, index) => (
          <div
            key={index}
            className="text-center p-4 bg-green-50 rounded-lg hover:shadow-lg"
          >
            <img
              className="w-24 h-24 object-cover bg-gray-300 rounded-full mx-auto mb-4"
              src={specialty.image}
              alt={specialty.name}
            />
            <p className="text-gray-700 font-medium">{specialty.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specializations;
