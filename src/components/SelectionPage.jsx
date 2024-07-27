import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

import { Button } from "./ui";

const SelectionPage = () => {
  return (
    <div className="pt-18 mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[100px]">
      <div className="flex flex-col items-start gap-4">
        <h5 className="font-poppins text-[32px] font-medium tracking-[0.44px] text-secondary">
          Welcome to Care2Gather!
        </h5>
        <h1 className="max-w-[485px] font-poppins text-[30px] font-semibold leading-normal text-[#031432]">
          Please select your role:
        </h1>
        <div className="pt-18 mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[40px]">
          {/* Doctor Button */}
          <div className="flex flex-col items-center gap-2">
            <Button title="Doctor" Icon={FaUserDoctor} />
            <p className="text-center text-sm text-gray-600">
              Select this option if you are a healthcare professional looking to
              offer support and volunteer in events.
            </p>
          </div>

          {/* Patient Button */}
          <div className="flex flex-col items-center gap-2">
            <Button title="Patient" Icon={CgProfile} />
            <p className="text-center text-sm text-gray-600">
              Select this option if you are seeking mental health support and
              want to participate in community events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;
