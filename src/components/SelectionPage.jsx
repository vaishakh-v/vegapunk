import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserDoctor } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const SelectionPage = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleSelectRole = (role) => {
    setSelectedRole(role);
  };

  const handleDoctorSubmit = (event) => {
    event.preventDefault();
    navigate("/doctor");
  };

  const handlePatientSubmit = (event) => {
    event.preventDefault();
    navigate("/patient");
  };

  return (
    <div className="pt-18 mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 transition-all duration-500 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[100px]">
      <div className="flex flex-col items-start gap-4">
        <h5 className="font-poppins text-[32px] font-medium tracking-[0.44px] text-secondary">
          Welcome to Care2Gather!
        </h5>
        {selectedRole === null && (
          <h1 className="max-w-[485px] font-poppins text-[30px] font-semibold leading-normal text-[#031432]">
            Please select your role:
          </h1>
        )}
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
          <div
            className={`flex flex-col items-center gap-2 transition-transform duration-500 ${
              selectedRole === "doctor" ? "-translate-y-4 transform" : ""
            } ${selectedRole === "patient" ? "-translate-y-3 transform" : ""}`}
          >
            <button
              className="flex flex-col items-center gap-2 rounded-lg bg-white p-4 shadow-lg transition-transform duration-500 hover:bg-gray-100"
              onClick={() => handleSelectRole("doctor")}
            >
              <FaUserDoctor className="text-4xl text-blue-500" />
              <span className="text-lg font-semibold">Doctor</span>
            </button>
            {selectedRole === null && (
              <p className="text-center text-sm text-gray-600">
                Select this option if you are a healthcare professional looking
                to offer support and volunteer in events.
              </p>
            )}
          </div>
          <div
            className={`flex flex-col items-center gap-2 transition-transform duration-500 ${
              selectedRole === "patient" ? "-translate-y-4 transform" : ""
            } ${selectedRole === "doctor" ? "-translate-y-3 transform" : ""}`}
          >
            <button
              className="flex flex-col items-center gap-2 rounded-lg bg-white p-4 shadow-lg transition-transform duration-500 hover:bg-gray-100"
              onClick={() => handleSelectRole("patient")}
            >
              <CgProfile className="text-4xl text-green-500" />
              <span className="text-lg font-semibold">Patient</span>
            </button>
            {selectedRole === null && (
              <p className="text-center text-sm text-gray-600">
                Select this option if you are seeking mental health support and
                want to participate in community events.
              </p>
            )}
          </div>
        </div>
        <div className="mt-5 flex w-full justify-center">
          {selectedRole === "doctor" && (
            <div className="mt-0 w-full max-w-md rounded-lg bg-white p-5 shadow-lg">
              <h2 className="mb-4 text-2xl font-semibold">
                Doctor Registration
              </h2>
              <form onSubmit={handleDoctorSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border px-4 py-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border px-4 py-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border px-4 py-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Specialization</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border px-4 py-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Doctor Registration Number
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border px-4 py-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Location - Area</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border px-4 py-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Zip Code</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border px-4 py-2"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white"
                >
                  Register
                </button>
              </form>
            </div>
          )}
          {selectedRole === "patient" && (
            <div className="mt-0 w-full max-w-md rounded-lg bg-white p-5 shadow-lg">
              <h2 className="mb-4 text-2xl font-semibold">
                Patient Registration
              </h2>
              <form onSubmit={handlePatientSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border px-4 py-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border px-4 py-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border px-4 py-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    className="w-full rounded-lg border px-4 py-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Gender</label>
                  <select
                    className="w-full rounded-lg border px-4 py-2"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Location - Area</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border px-4 py-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Zip Code</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border px-4 py-2"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-green-500 px-4 py-2 text-white"
                >
                  Register
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;
