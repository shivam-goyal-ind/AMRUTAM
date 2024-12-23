import React, { useState } from "react";

const AppointmentFee = () => (
  <div className="flex items-center justify-between rounded-lg bg-[#FEFDF9] border-grey-900 border-solid border-2 px-4 py-2">
    <h2 className="text-xl font-bold">Appointment Fee</h2>
    <p className="text-green-700 text-lg font-bold">₹699.00</p>
  </div>
);

const SessionMode = ({ selectedMode, onSelectMode }) => {
  const modes = [
    { label: "In-Clinic", duration: "45 Mins" },
    { label: "Video", duration: "45 Mins" },
    { label: "Chat", duration: "10 Mins" },
  ];

  return (
    <div>
      <div className="flex items-center space-x-4 mt-6">
        <div className="text-lg font-bold">
          Select your mode of session
        </div>
        <div className="bg-[rgb(186,197,191)] h-0.5 flex-grow"></div>
      </div>
      <div className="flex items-center justify-between mt-4 border-grey-900 border-solid border-2 rounded-lg p-2">
        {modes.map((mode) => (
          <button
            key={mode.label}
            className={`px-8 py-2 border rounded font-bold ${
              selectedMode === mode.label
                ? "bg-green-400 text-white border-grey-900 border-solid border-2"
                : "border-grey-900 border-solid border-2 text-green-700 hover:bg-green-100"
            }`}
            onClick={() => onSelectMode(mode.label)}
          >
            {mode.label} <span className="text-sm block font-normal">{mode.duration}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const TimeSlotSelector = ({ selectedDate, onSelectDate, selectedSlot, onSelectSlot }) => {
  const dates = [
    { day: "Mon", date: "10 Oct", slots: 10 },
    { day: "Tue", date: "11 Oct", slots: 2 },
    { day: "Wed", date: "12 Oct", slots: 5 },
  ];

  const slots = [
    { time: "09:00 AM", period: "Morning" },
    { time: "09:30 AM", period: "Morning" },
    { time: "10:00 AM", period: "Morning" },
    { time: "10:30 AM", period: "Morning" },
    { time: "11:00 AM", period: "Morning" },
    { time: "04:00 PM", period: "Evening" },
    { time: "04:15 PM", period: "Evening" },
    { time: "04:30 PM", period: "Evening" },
    { time: "04:45 PM", period: "Evening" },
    { time: "05:15 PM", period: "Evening" },
  ];

  return (
    <div>
      <div className="flex items-center space-x-4 mt-6">
        <div className="text-lg font-bold">
          Pick a time slot
        </div>
        <div className="bg-[rgb(186,197,191)] h-0.5 flex-grow"></div>
        <div className="flex items-center">
          <input
            type="date"
            className="ml-2 border border-gray-300 rounded p-1 text-gray-600"
          />
        </div>
      </div>
      <div className="flex space-x-4 mt-4 border-grey-900 border-solid border-2 rounded-lg justify-between p-2">
        {dates.map((date) => (
          <button
            key={date.date}
            className={`px-2 py-2 border rounded ${
              selectedDate === date.date
                ? "bg-green-400 text-white border-grey-900 border-solid border-2"
                : "border-grey-900 border-solid border-2 text-green-700 hover:bg-green-100"
            }`}
            onClick={() => onSelectDate(date.date)}
          >
            <span className="block font-bold">{date.day}, {date.date}</span>
            <span className="text-s">{date.slots} slots</span>
          </button>
        ))}
      </div>
      <div className="mt-4">
        {["Morning", "Evening"].map((period) => (
          <div key={period} className="mb-4 border-grey-900 border-solid border-2 rounded-lg justify-between p-2">
            <h4 className="text-md font-semibold">{period}</h4>
            <div className="flex space-x-4 mt-2 border-grey-900 border-solid border-2 rounded-lg justify-between p-2">
              {slots
                .filter((slot) => slot.period === period)
                .map((slot) => (
                  <button
                    key={slot.time}
                    className={`px-2 py-2 border rounded ${
                      selectedSlot === slot.time
                        ? "bg-green-400 text-white border-grey-900 border-solid border-2"
                        : "border-grey-900 border-solid border-2 text-green-700 hover:bg-green-100"
                    }`}
                    onClick={() => onSelectSlot(slot.time)}
                  >
                    {slot.time}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AppointmentBooking = () => {
  const [selectedMode, setSelectedMode] = useState("Video");
  const [selectedDate, setSelectedDate] = useState("10 Oct");
  const [selectedSlot, setSelectedSlot] = useState("11:00 AM");

  return (
    <div className="bg-[#FEFDF9] p-6 rounded-lg shadow-md max-w-md mx-auto border-grey-900 border-solid border-2">
      <AppointmentFee />
      <SessionMode selectedMode={selectedMode} onSelectMode={setSelectedMode} />
      <TimeSlotSelector
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
        selectedSlot={selectedSlot}
        onSelectSlot={setSelectedSlot}
      />
      <button className="w-full mt-6 px-4 py-4 bg-green-900 text-white font-bold rounded hover:bg-green-800">
        Make An Appointment
      </button>
    </div>
  );
};

export default AppointmentBooking;
