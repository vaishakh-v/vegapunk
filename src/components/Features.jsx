import React from "react";
import { Button } from "./ui";
import { FaHandPointRight } from "react-icons/fa";
import FeaturesImg from "./Images/FeaturesImg.png"
import { useNavigate } from "react-router-dom";


export default function Features() {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate("/features");
  };
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-center gap-5 px-3 pb-28 pt-28 md:flex-row md:pb-[180px] lg:gap-6 lg:px-0 lg:pt-[140px]">
      <div className="flex flex-col items-start gap-4">
        <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
          Features
        </h5>
        <h1 className="max-w-[485px] font-poppins text-[32px] font-semibold leading-normal text-[#031432]">
          Explore the Innovative Features That Make Care2Gather Essential for
          Mental Health Support
        </h1>
        <p className="mb-4 max-w-[485px] text-para">
          At Care2Gather, we offer a range of cutting-edge features designed to
          enhance your mental well-being.
        </p>
        <Button
          title="Learn More"
          Icon={FaHandPointRight}
          onClick={handleClick}
        />
      </div>

      <div className="max-h-[660px] max-w-[622px]">
        <img
          className="custom-animate size-[85%] object-contain md:size-full"
          src={FeaturesImg}
          alt="About"
        />
      </div>
    </div>
  );
}
