import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import {
  MdEvent,
  MdLocationOn,
  MdAccessTime,
  MdArrowBack,
} from "react-icons/md";

const Patient = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showMembers, setShowMembers] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowMembers(false); // Hide members list if an event is selected
    setShowProfile(false); // Hide profile if an event is selected
    setMenuOpen(false); // Close menu if an event is selected
  };

  const handleBackClick = () => {
    setSelectedEvent(null);
  };

  const handleShowMembers = () => {
    setShowMembers(true);
    setSelectedEvent(null); // Hide event details if members list is selected
    setShowProfile(false); // Hide profile if members list is selected
    setMenuOpen(false); // Close menu if members list is selected
  };

  const handleShowProfile = () => {
    setShowProfile(true);
    setShowMembers(false); // Hide members list if profile is selected
    setSelectedEvent(null); // Hide event details if profile is selected
    setMenuOpen(false); // Close menu if profile is selected
  };

  const events = [
    {
      name: "Mental Health Awareness Workshop",
      location: "Community Center, Downtown",
      date: "2024-09-15",
      time: "10:00 AM - 02:00 PM",
      doctors: ["Dr. John Doe", "Dr. Jane Smith"],
      patients: ["Alice", "Bob", "Charlie"],
    },
    {
      name: "Yoga and Meditation Session",
      location: "Park Avenue, Uptown",
      date: "2024-09-20",
      time: "08:00 AM - 10:00 AM",
      doctors: ["Dr. Emily Johnson"],
      patients: ["Dave", "Eve"],
    },
    {
      name: "Group Therapy Session",
      location: "Health Clinic, Suburb",
      date: "2024-09-25",
      time: "03:00 PM - 05:00 PM",
      doctors: ["Dr. Michael Brown"],
      patients: ["Frank", "Grace"],
    },
    {
      name: "Stress Management Seminar",
      location: "Health Pavilion, Main Street",
      date: "2024-09-22",
      time: "09:00 AM - 01:00 PM",
      doctors: ["Dr. Carol", "Dr. Dave"],
      patients: ["Laura Lee", "George White", "Sophia Martinez"],
    },
    {
      name: "Self-Care Strategies Workshop",
      location: "Wellness Center, East Side",
      date: "2024-10-05",
      time: "11:00 AM - 03:00 PM",
      doctors: ["Dr. Eve", "Dr. Frank"],
      patients: ["David Brown", "Olivia Green", "Noah Clark", "Ava Taylor"],
    },
    {
      name: "Mindfulness Meditation Session",
      location: "Peace Park, North End",
      date: "2024-10-12",
      time: "08:00 AM - 10:00 AM",
      doctors: ["Dr. Grace", "Dr. Hank"],
      patients: [
        "Samuel Green",
        "Jessica Blue",
        "Aaron White",
        "Megan Black",
        "Natalie Pink",
        "Chris Grey",
      ],
    },
  ];

  const members = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank", "Grace"];

  const profile = {
    profilePicture: "https://via.placeholder.com/150",
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1990-01-01",
    groupName: "Support Group A",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {/* Top Bar */}
      <div className="mb-5 flex items-center justify-between rounded-lg bg-white p-4 shadow-md">
        <h1 className="text-xl font-semibold">Support Group</h1>
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
                  onClick={handleShowProfile}
                >
                  Profile
                </li>
                <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">
                  Change Group
                </li>
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                  onClick={handleShowMembers}
                >
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

      {/* Profile View */}
      {showProfile && (
        <div className="rounded-lg bg-white p-4 shadow-md">
          <div className="mb-4 flex items-center">
            <MdArrowBack
              className="mr-2 cursor-pointer text-gray-600"
              onClick={() => setShowProfile(false)}
            />
            <h2 className="text-xl font-semibold">Profile</h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={profile.profilePicture}
              alt="Profile"
              className="mb-4 h-32 w-32 rounded-full"
            />
            <p className="text-lg font-semibold">
              {profile.firstName} {profile.lastName}
            </p>
            <p className="mb-2 text-gray-600">
              Date of Birth: {profile.dateOfBirth}
            </p>
            <p className="mb-2 text-gray-600">Group: {profile.groupName}</p>
            <button className="rounded-lg bg-blue-500 px-4 py-2 text-white">
              Edit
            </button>
          </div>
        </div>
      )}

      {/* Members List */}
      {showMembers && (
        <div className="rounded-lg bg-white p-4 shadow-md">
          <div className="mb-4 flex items-center">
            <MdArrowBack
              className="mr-2 cursor-pointer text-gray-600"
              onClick={() => setShowMembers(false)}
            />
            <h2 className="text-xl font-semibold">Group Members</h2>
          </div>
          <ul className="ml-5 list-disc">
            {members.map((member, index) => (
              <li key={index} className="text-gray-700">
                {member}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Event Details */}
      {selectedEvent && (
        <div className="rounded-lg bg-white p-4 shadow-md">
          <div className="mb-4 flex items-center">
            <MdArrowBack
              className="mr-2 cursor-pointer text-gray-600"
              onClick={handleBackClick}
            />
            <h2 className="text-xl font-semibold">{selectedEvent.name}</h2>
          </div>
          <p className="mb-2 text-gray-700">
            <MdLocationOn className="mr-2 inline text-gray-500" />
            {selectedEvent.location}
          </p>
          <p className="mb-4 text-gray-700">
            <MdAccessTime className="mr-2 inline text-gray-500" />
            {selectedEvent.date} | {selectedEvent.time}
          </p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Doctors Registered</h3>
            <ul className="ml-5 list-disc">
              {selectedEvent.doctors.map((doctor, index) => (
                <li key={index} className="text-gray-700">
                  {doctor}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Patients Registered</h3>
            <ul className="ml-5 list-disc">
              {selectedEvent.patients.map((patient, index) => (
                <li key={index} className="text-gray-700">
                  {patient}
                </li>
              ))}
            </ul>
          </div>
          <button
            className="w-full rounded-lg bg-green-500 px-4 py-2 text-white"
            onClick={() => alert(`Registered for ${selectedEvent.name}`)}
          >
            Register
          </button>
        </div>
      )}

      {/* Nearby Events */}
      {!selectedEvent && !showMembers && !showProfile && (
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">
            Welcome, Name! Select an event from below to participate.
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-lg border p-4 hover:bg-gray-100"
                onClick={() => handleEventClick(event)}
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
                <p className="mt-2 text-gray-700">
                  {event.patients.length} patients registered
                </p>
                <button
                  className="mt-2 w-full rounded-lg bg-blue-500 px-4 py-2 text-white"
                  onClick={() => handleEventClick(event)}
                >
                  Interested
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Patient;
