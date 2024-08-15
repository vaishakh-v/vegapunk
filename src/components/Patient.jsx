import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { MdEvent, MdLocationOn } from "react-icons/md";

const Patient = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [preferredPlace, setPreferredPlace] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [showConfirmChangeGroup, setShowConfirmChangeGroup] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  const handleChangeGroupClick = () => {
    setShowConfirmChangeGroup(true);
  };

  const handleConfirmChangeGroup = () => {
    window.location.href = "/questions";
  };

  const events = [
    {
      name: "Mental Health Awareness Workshop",
      location: "Community Center, Downtown",
    },
  ];

  const handleRegister = () => {
    if (preferredPlace && preferredDate && preferredTime) {
      alert("Successfully registered for the event");
    } else {
      alert("Please select all preferences before registering");
    }
  };

  const getFutureDates = () => {
    const dates = [];
    const currentDate = new Date();
    for (let i = 1; i <= 20; i++) {
      const futureDate = new Date(currentDate);
      futureDate.setDate(currentDate.getDate() + i);
      dates.push(futureDate.toISOString().split("T")[0]);
    }
    return dates;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {/* Top Bar */}
      <div className="mb-5 flex items-center justify-between rounded-lg bg-white p-4 shadow-md">
        <h1 className="text-xl font-semibold">Group Name (Dummy)</h1>
        <div className="relative">
          <FaEllipsisV
            className="cursor-pointer text-gray-600"
            onClick={handleMenuToggle}
          />
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg">
              <ul className="py-1">
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                  onClick={handleProfileClick}
                >
                  Profile
                </li>
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                  onClick={handleChangeGroupClick}
                >
                  Change Group
                </li>
                <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">
                  Members
                </li>
                <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">
                  Previous Events
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Profile View */}
      {showProfile && (
        <div className="mb-5 rounded-lg bg-gray-50 p-5 shadow-md">
          <h2 className="text-xl font-semibold">Profile</h2>
          <div className="mt-4 flex flex-col items-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="h-24 w-24 rounded-full"
            />
            <p className="mt-2 text-lg font-semibold">Dr. John Smith</p>
            <p className="text-gray-600">Date of Birth: January 1, 1980</p>
            <p className="text-gray-600">Specialties: Psychiatry, Neurology</p>
            <p className="text-gray-600">Contact: john.smith@example.com</p>
            <button
              onClick={handleCloseProfile}
              className="mt-4 rounded bg-red-500 px-4 py-2 text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Change Group Confirmation */}
      {showConfirmChangeGroup && (
        <div className="mb-5 rounded-lg bg-yellow-50 p-5 shadow-md">
          <h2 className="text-xl font-semibold text-yellow-700">
            Are you sure?
          </h2>
          <p className="mt-2 text-yellow-700">
            If you proceed, you will have to take the survey questionnaire
            again.
          </p>
          <div className="mt-4 flex justify-end space-x-4">
            <button
              onClick={() => setShowConfirmChangeGroup(false)}
              className="rounded bg-gray-500 px-4 py-2 text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmChangeGroup}
              className="rounded bg-red-500 px-4 py-2 text-white"
            >
              Yes, Proceed
            </button>
          </div>
        </div>
      )}

      {/* Register for an Event */}
      <div className="rounded-lg bg-white p-4 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Register for an Event</h2>
        {events.map((event, index) => (
          <div
            key={index}
            className="mb-4 cursor-pointer rounded-lg border p-4 hover:bg-gray-100"
            onClick={() => handleEventSelect(event)}
          >
            <div className="mb-2 flex items-center">
              <MdEvent className="mr-2 text-xl text-blue-500" />
              <h3 className="text-lg font-semibold">{event.name}</h3>
            </div>
            <p className="mb-2 text-gray-700">
              <MdLocationOn className="mr-2 inline text-gray-500" />
              {event.location}
            </p>
          </div>
        ))}
        {selectedEvent && (
          <div className="mt-5 rounded-lg border bg-gray-50 p-4">
            <h3 className="mb-2 text-lg font-semibold">
              Registering for: {selectedEvent.name}
            </h3>
            <p className="mb-2 text-gray-700">
              <MdLocationOn className="mr-2 inline text-gray-500" />
              {selectedEvent.location}
            </p>

            {/* Preferred Place */}
            <div className="mb-4">
              <label className="mb-2 block text-gray-700">
                Select Preferred Meeting Place
              </label>
              <select
                value={preferredPlace}
                onChange={(e) => setPreferredPlace(e.target.value)}
                className="w-60 rounded-2xl bg-blue-500 px-4 py-2 text-lg font-semibold text-white"
              >
                <option value="">Select a place</option>
                <option value="park">Park</option>
                <option value="cafe">Cafe</option>
                <option value="public halls">Public Halls</option>
                <option value="public grounds">Public Grounds</option>
                <option value="hospital">Hospital</option>
              </select>
            </div>

            {/* Preferred Date */}
            <div className="mb-4">
              <label className="mb-2 block text-gray-700">
                Select Preferred Date
              </label>
              <select
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-60 rounded-2xl bg-blue-500 px-4 py-2 text-lg font-semibold text-white"
              >
                <option value="">Select a date</option>
                {getFutureDates().map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Time */}
            <div className="mb-4">
              <label className="mb-2 block text-gray-700">
                Select Preferred Time
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-60 rounded-2xl bg-blue-500 px-4 py-2 text-lg font-semibold text-white"
              >
                <option value="">Select a time</option>
                <option value="morning">Morning (8:00 AM)</option>
                <option value="afternoon">Afternoon (1:00 PM)</option>
                <option value="evening">Evening (6:00 PM)</option>
              </select>
            </div>

            <button
              onClick={handleRegister}
              className="w-full rounded-2xl bg-green-500 px-4 py-2 text-lg font-semibold text-white"
            >
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Patient;
