import React from "react";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";
import ActiveFilters from "../components/ActiveFilters";
import DoctorCard from "../components/DoctorCard";

const HomePage = () => {
  const doctors = [
    {
      name: "Dr. Prerna Narang",
      specialization: "Male-Female Infertility",
      experience: "7 years of Experience",
      languages: "English, Hindi, Marathi",
      rating: 4.5,
      videoConsultation: "₹800",
      chatConsultation: "Free",
      profileImage: "https://media.istockphoto.com/id/1285872850/photo/close-up-portrait-of-young-female-doctor-wear-smiling-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=5clbDZW4GHOgECbiTrnuASjgVLKgwWp_7u-5eXpw6Cg=",
    },
    {
      name: "Dr. Prerna Narang",
      specialization: "Male-Female Infertility",
      experience: "7 years of Experience",
      languages: "English, Hindi, Marathi",
      rating: 4.5,
      videoConsultation: "₹800",
      chatConsultation: "Free",
      profileImage: "https://media.istockphoto.com/id/1285872850/photo/close-up-portrait-of-young-female-doctor-wear-smiling-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=5clbDZW4GHOgECbiTrnuASjgVLKgwWp_7u-5eXpw6Cg=",
    },
    {
      name: "Dr. Prerna Narang",
      specialization: "Male-Female Infertility",
      experience: "7 years of Experience",
      languages: "English, Hindi, Marathi",
      rating: 4.5,
      videoConsultation: "₹800",
      chatConsultation: "Free",
      profileImage: "https://media.istockphoto.com/id/1285872850/photo/close-up-portrait-of-young-female-doctor-wear-smiling-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=5clbDZW4GHOgECbiTrnuASjgVLKgwWp_7u-5eXpw6Cg=",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <FilterBar />
      <ActiveFilters filters={["Hair care", "Female", "₹0-₹500", "Hindi"]} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-8">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
