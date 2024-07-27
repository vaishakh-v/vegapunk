import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Button from "./ui/Button";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import logo from "./Images/Logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate("/Selection");
  };

  return (
    <div className="sticky top-0 z-50 bg-[black] bg-opacity-80 p-1 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <Link to="/">
          <img
            className="h-[80px] w-[246px] object-cover"
            src={logo}
            alt="Logo"
          />
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          <li>
            <Link
              to="/"
              className="text-primary-start hover:text-primary-start hover:opacity-100"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/howitworks"
              className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
            >
              How it works
            </Link>
          </li>
        </ul>

        <Button className="hidden md:flex" onClick={handleClick} />

        {/* Mobile Screen */}
        <div className="relative md:hidden">
          {isOpen ? (
            <IoMdClose
              onClick={() => setIsOpen(false)}
              className="size-7 cursor-pointer text-primary-end"
            />
          ) : (
            <HiMiniBars3BottomRight
              onClick={() => setIsOpen(true)}
              className="size-7 cursor-pointer text-primary-end"
            />
          )}

          {isOpen && (
            <div className="absolute right-2 top-8 min-w-[220px] rounded-2xl border bg-white p-4 shadow-lg">
              <ul className="mb-8 flex flex-col items-center gap-6">
                <li>
                  <Link
                    to="/"
                    className="text-primary-start hover:text-primary-start hover:opacity-100"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features"
                    className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
                  >
                    How It Works
                  </Link>
                </li>
              </ul>

              <Button className="w-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
