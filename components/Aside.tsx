import Link from "next/link";
import React from "react";
import { ImCross } from "react-icons/im";

type Props = {
  isVisible?: boolean;
  onClose?: () => void;
  isClose?: boolean;
};

const Aside = ({ isVisible, onClose, isClose }: Props) => {
  return (
    <aside
      className={`w-72 h-screen bg-white fixed right-0 duration-700 shadow-2xl ${
        isVisible ? "mr-0" : "-mr-72"
      } ${isClose ? "mr-0" : "-mr-72"}`}
    >
      <div>
        {/* Aside Closer */}
        <button className="m-8 float-right" onClick={onClose}>
          <ImCross className="text-xl" />
        </button>
        <nav className="pt-20">
          <ul className="space-y-5 m-9">
            <li onClick={onClose}>
              <Link href="#home">Home</Link>
            </li>
            <li onClick={onClose}>
              <Link href="#projects">Work</Link>
            </li>
            <li onClick={onClose}>
              <Link href="#">Testimonials</Link>
            </li>
            <li onClick={onClose}>
              <Link href="#">FAQ</Link>
            </li>
            <li onClick={onClose}>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Aside;
