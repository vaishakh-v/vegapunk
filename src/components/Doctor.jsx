import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import {
  MdArrowBack,
  MdLocationOn,
  MdAccessTime,
  MdEvent,
} from "react-icons/md";

const Doctor = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleProfileToggle = () => {
    setProfileOpen(!profileOpen);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleBackClick = () => {
    setSelectedEvent(null);
  };

  const handleRegister = (eventName) => {
    alert(`Registered for ${eventName}`);
  };

  const events = [
    {
      name: "Mental Health Awareness Workshop",
      location: "Community Center, Downtown",
      date: "2024-09-15",
      time: "10:00 AM - 02:00 PM",
      registeredPatients: 5,
      doctors: ["Dr. Alice", "Dr. Bob"],
      patients: [
        "John Doe",
        "Jane Smith",
        "Alice Johnson",
        "Michael Brown",
        "Emily Davis",
      ],
    },
    {
      name: "Stress Management Seminar",
      location: "Health Pavilion, Main Street",
      date: "2024-09-22",
      time: "09:00 AM - 01:00 PM",
      registeredPatients: 3,
      doctors: ["Dr. Carol", "Dr. Dave"],
      patients: ["Laura Lee", "George White", "Sophia Martinez"],
    },
    {
      name: "Self-Care Strategies Workshop",
      location: "Wellness Center, East Side",
      date: "2024-10-05",
      time: "11:00 AM - 03:00 PM",
      registeredPatients: 7,
      doctors: ["Dr. Eve", "Dr. Frank"],
      patients: ["David Brown", "Olivia Green", "Noah Clark", "Ava Taylor"],
    },
    {
      name: "Mindfulness Meditation Session",
      location: "Peace Park, North End",
      date: "2024-10-12",
      time: "08:00 AM - 10:00 AM",
      registeredPatients: 6,
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
    {
      name: "Healthy Eating Workshop",
      location: "Nutrition Hall, Westside",
      date: "2024-10-19",
      time: "01:00 PM - 05:00 PM",
      registeredPatients: 8,
      doctors: ["Dr. Ian", "Dr. Julia"],
      patients: [
        "Henry Ford",
        "Olivia King",
        "Liam Queen",
        "Sophia Prince",
        "Mason Knight",
        "Emma Bishop",
        "Lucas Duke",
        "Mia Baron",
      ],
    },
    {
      name: "Yoga and Relaxation Techniques",
      location: "Zen Studio, South Bay",
      date: "2024-10-26",
      time: "07:00 AM - 09:00 AM",
      registeredPatients: 4,
      doctors: ["Dr. Kevin", "Dr. Laura"],
      patients: ["Jacob Hall", "Ava Lane", "Ethan Road", "Isabella Street"],
    },
  ];

  const ProfileView = () => (
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
      </div>
    </div>
  );

  const EventDetails = ({ event }) => (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <div className="mb-4 flex items-center">
        <MdArrowBack
          className="mr-2 cursor-pointer text-gray-600"
          onClick={handleBackClick}
        />
        <h2 className="text-xl font-semibold">{event.name}</h2>
      </div>
      <p className="mb-2 text-gray-700">
        <MdLocationOn className="mr-2 inline text-gray-500" />
        {event.location}
      </p>
      <p className="mb-4 text-gray-700">
        <MdAccessTime className="mr-2 inline text-gray-500" />
        {event.date} | {event.time}
      </p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Doctors Registered</h3>
        <ul className="ml-5 list-disc">
          {event.doctors.map((doctor, index) => (
            <li key={index} className="text-gray-700">
              {doctor}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Patients Registered</h3>
        <ul className="ml-5 list-disc">
          {event.patients.map((patient, index) => (
            <li key={index} className="text-gray-700">
              {patient}
            </li>
          ))}
        </ul>
      </div>
      <button
        className="w-full rounded-lg bg-green-500 px-4 py-2 text-white"
        onClick={() => handleRegister(event.name)}
      >
        Register
      </button>
    </div>
  );

  const EventList = () => (
    <div className="mt-5 w-full">
      <h2 className="mb-4 text-xl font-semibold">Nearby Events</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex cursor-pointer flex-col justify-between rounded-lg border p-4 hover:bg-gray-100"
            onClick={() => handleEventClick(event)}
          >
            <div>
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
                {event.registeredPatients} patients registered
              </p>
            </div>
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
  );

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 p-5">
      <div className="w-full max-w-7xl rounded-lg bg-white p-5 shadow-lg">
        <div className="mb-5 flex items-center justify-between">
          <button
            onClick={handleProfileToggle}
            className="text-blue-500 hover:text-blue-700"
          >
            <FaUser className="text-2xl" />
          </button>
          <h1 className="text-2xl font-semibold">Events</h1>
        </div>
        <div className="mb-5">
          <h2 className="text-lg font-semibold">Welcome, Dr. John Smith!</h2>
          <p className="text-gray-700">
            Please select an event from the list below to view more details and
            register.
          </p>
        </div>
        {profileOpen && <ProfileView />}
        {selectedEvent && <EventDetails event={selectedEvent} />}
        {!selectedEvent && !profileOpen && <EventList />}
      </div>
    </div>
  );
};

export default Doctor;
