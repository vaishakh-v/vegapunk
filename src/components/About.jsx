import React from "react";
import { Button } from "./ui";
import { FaHandPointRight } from "react-icons/fa";
import AboutImg from "./Images/AboutImg.jpg"
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const handleClick = () => {
      window.scrollTo(0, 0); 
    navigate("/about");
  };
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 pt-28 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[220px]">
      <div className="max-h-[495px] max-w-[586px]">
        <img
          className="w-[450px]  "
          src={AboutImg}
          alt="About"
        />
      </div>

      <div className="flex flex-col items-start gap-4">
        <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
          About Us
        </h5>
        <h1 className="max-w-[485px] font-poppins text-[32px] font-semibold leading-normal text-[#031432]">
          Revolutionizing Mental Health Support Through Community and Innovation
        </h1>
        <p className="mb-4 max-w-[485px] text-para">
          Welcome to Care2Gather, where we believe in the power of community and
          support to enhance mental well-being. Our app connects patients and
          doctors through meaningful interactions and events, fostering a
          supportive environment for all
        </p>
        <Button title="Learn More" Icon={ FaHandPointRight } onClick={handleClick} />
      </div>
    </div>
  );
}
