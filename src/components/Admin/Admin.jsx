import React, { useState } from "react";
import { MdEvent, MdLocationOn, MdAccessTime } from "react-icons/md";

const Admin = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([
    {
      name: "Mental Health Awareness Workshop",
      location: "Community Center, Downtown",
      date: "2024-09-15",
      time: "10:00 AM - 02:00 PM",
      group: "Group A",
      status: "upcoming",
      members: ["Member 1", "Member 2"],
      doctors: ["Doctor 1"],
    },
    {
      name: "Yoga and Meditation Session",
      location: "Park Avenue, Uptown",
      date: "2024-09-20",
      time: "08:00 AM - 10:00 AM",
      group: "Group B",
      status: "ongoing",
      members: ["Member 3", "Member 4"],
      doctors: ["Doctor 2"],
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    name: "",
    location: "",
    group: "",
  });

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedEvents = [...events];
    updatedEvents[index].status = newStatus;
    setEvents(updatedEvents);
  };

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleCreateEvent = () => {
    // Logic for sending notifications and creating polls
    console.log("Event created", newEvent);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {/* Create Event Section */}
      <div className="mb-5 rounded-lg bg-white p-5 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Create Event</h2>
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={newEvent.name}
          onChange={handleInputChange}
          className="mb-2 w-full rounded-lg border p-2"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newEvent.location}
          onChange={handleInputChange}
          className="mb-2 w-full rounded-lg border p-2"
        />
        <input
          type="text"
          name="group"
          placeholder="Group"
          value={newEvent.group}
          onChange={handleInputChange}
          className="mb-4 w-full rounded-lg border p-2"
        />
        <button
          className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
          onClick={handleCreateEvent}
        >
          Create Event
        </button>
      </div>

      {/* Events Status Section */}
      <div className="rounded-lg bg-white p-5 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Events Status</h2>
        {events.map((event, index) => (
          <div
            key={index}
            className="mb-4 cursor-pointer rounded-lg border p-4 hover:bg-gray-100"
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
            <div className="mt-2 flex gap-2">
              <button
                className={`rounded-lg px-3 py-1 ${
                  event.status === "upcoming"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleStatusChange(index, "upcoming");
                }}
              >
                Upcoming
              </button>
              <button
                className={`rounded-lg px-3 py-1 ${
                  event.status === "ongoing"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleStatusChange(index, "ongoing");
                }}
              >
                Ongoing
              </button>
              <button
                className={`rounded-lg px-3 py-1 ${
                  event.status === "completed"
                    ? "bg-red-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleStatusChange(index, "completed");
                }}
              >
                Completed
              </button>
            </div>
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
            <p className="mb-2 text-gray-700">Group: {selectedEvent.group}</p>
            <p className="mb-2 text-gray-700">
              Members: {selectedEvent.members.join(", ")}
            </p>
            <p className="mb-2 text-gray-700">
              Doctors: {selectedEvent.doctors.join(", ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
