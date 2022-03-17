import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
type Props = {
  name?: string;
  onMenuClick?: () => void;
};

const Navbar = ({ onMenuClick }: Props) => {
  return (
    <div className="p-5 fixed top-0 w-full">
      <div className=" bg-white shadow-md rounded-xl w-full flex items-center">
        <div className="p-5">
          <img
            className="w-9"
            src="https://assets.website-files.com/609cb31ed014c633e4f63d41/609ccb87901f5afe4f758cb0_Logo.png"
            alt="logo"
          />
        </div>
        <hr className="bg-gray-400 h-20 w-[1.4px]" />
        <h1 className="text-2xl ml-3 font-light">Softsons</h1>
        <div className="ml-auto px-10 flex">
          <nav className="md:block hidden">
            <ul className="flex gap-10">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#projects">Work</a>
              </li>
              <li>Testimonials</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </nav>
          <button className="ml-3 md:hidden block" onClick={onMenuClick}>
            <HiMenuAlt3 className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
