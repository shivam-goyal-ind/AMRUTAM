import React from "react";
import Navbar from "../components/Navbar";
import DoctorProfileCard from "../components/DoctorProfileCard";
import AboutMe from "../components/AboutMe";
import Specializations from "../components/Specializations";
import Concerns from "../components/Concerns";
import WorkExperience from "../components/WorkExperience";
import AppointmentBooking from "../components/AppointmentBooking";
import FeaturedReviews from "../components/FeaturedReviews";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="py-10 px-16">
        <div className="bg-[url(https://i.pinimg.com/736x/d1/fa/54/d1fa54a88d8a5ae34707cc022577ed50.jpg)] py-16 px-8 rounded-lg">
        </div>
        <div>
          <DoctorProfileCard />
        </div>
      </div>
      <div className="flex gap-6 px-16">
        <div className="flex-col space-y-8 w-[60%]">
          <AboutMe />
          <Specializations />
          <Concerns />
          <WorkExperience />
          <FeaturedReviews/>
        </div>
        <div className="w-[40%]">
          <AppointmentBooking />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
