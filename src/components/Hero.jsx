import { Button } from "./ui";
import heroimg from "./Images/HeroImg.jpg"
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();

    const handleClick = () => {
      window.scrollTo(0, 0);
      navigate("/Selection");
    };
  return (
    <div className="pd:pb-[90px] mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-between gap-4 px-3 pb-10 pt-[60px] md:flex-row lg:gap-[72px] lg:px-0 lg:pt-[108px]">
      <div className="mt-10 flex flex-col items-start gap-6 md:mt-0">
        {/* <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
          Dr. Matthew Anderson
        </h5> */}
        <h1 className="font-poppins text-4xl font-bold text-[#031432] md:text-5xl md:leading-[120%]">
          Empowering Mental Health <br />
          Through Community.
        </h1>
        <p className="max-w-[452px] text-para">
          Connect with others, join events, and improve your mental well-being.
        </p>
        <Button title="Join Now" onClick={handleClick} />
      </div>

      <div className="max-h-[306px] max-w-[578px]">
        <img
          className="w-[100%] rounded-[1.5rem] object-cover"
          src={heroimg}
          alt="Hero"
        />
      </div>
    </div>
  );
}
