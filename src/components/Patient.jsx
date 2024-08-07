import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { MdEvent, MdLocationOn, MdAccessTime } from "react-icons/md";

const Patient = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  const events = [
    {
      name: "Mental Health Awareness Workshop",
      location: "Community Center, Downtown",
      date: "2024-09-15",
      time: "10:00 AM - 02:00 PM",
    },
    {
      name: "Yoga and Meditation Session",
      location: "Park Avenue, Uptown",
      date: "2024-09-20",
      time: "08:00 AM - 10:00 AM",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {/* Top Bar */}
      <div className="mb-5 flex items-center justify-between rounded-lg bg-white p-4 shadow-md">
        <h1 className="text-xl font-semibold">Patient Group Chat</h1>
        <div className="relative">
          <FaEllipsisV
            className="cursor-pointer text-gray-600"
            onClick={handleMenuToggle}
          />
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg">
              <ul className="py-1">
                <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">
                  Profile
                </li>
                <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">
                  Change Group
                </li>
                <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">
                  Members
                </li>
                <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">
                  Events Nearby
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Chat Interface */}
      <div className="mb-5 flex flex-col rounded-lg bg-white p-4 shadow-md">
        <div className="mb-4 flex flex-col">
          <div className="mb-2 self-end rounded-lg bg-blue-500 p-2 text-white">
            Hello, I'm here to share my experiences.
          </div>
          <div className="mb-2 self-start rounded-lg bg-gray-300 p-2 text-gray-800">
            Hi! Welcome to the group.
          </div>
        </div>
        <input
          type="text"
          className="w-full rounded-lg border p-2"
          placeholder="Type a message..."
        />
      </div>

      {/* Nearby Events */}
      <div className="rounded-lg bg-white p-4 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Nearby Events</h2>
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
            <p className="text-gray-700">
              <MdAccessTime className="mr-2 inline text-gray-500" />
              {event.date} | {event.time}
            </p>
          </div>
        ))}
        {selectedEvent && (
          <div className="mt-5 rounded-lg border bg-gray-50 p-4">
            <h3 className="mb-2 text-lg font-semibold">
              Selected Event: {selectedEvent.name}
            </h3>
            <p className="mb-2 text-gray-700">
              <MdLocationOn className="mr-2 inline text-gray-500" />
              {selectedEvent.location}
            </p>
            <p className="mb-2 text-gray-700">
              <MdAccessTime className="mr-2 inline text-gray-500" />
              {selectedEvent.date} | {selectedEvent.time}
            </p>
            <button
              className="w-full rounded-lg bg-green-500 px-4 py-2 text-white"
              onClick={() => alert("Registered for the event")}
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
