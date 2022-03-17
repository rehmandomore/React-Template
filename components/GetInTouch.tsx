import React from "react";
import { MdEmail } from "react-icons/md";

type Props = {
  name?: string;
};

const GetInTouch = ({ name }: Props) => {
  return (
    <div className="mt-28 px-10 flex flex-col items-center container mx-auto">
      <div className="flex items-center justify-between w-full">
        <div>
          <small className="text-[#6C717B] text-sm">Let's get in touch</small>
          <p className="font-semibold text-lg">softsons@gmail.com</p>
        </div>
        <button className="bg-gradient-to-b from-[#FFB340] to-[#FF873F] rounded-full border-4 border-[#F7E4CA] p-5 px-10 text-white hover:bg-gradient-to-b hover:from-[#FF873F] hover:to-[#FFB340] duration-1000 group sm:-mt-0 -mt-28">
          <MdEmail className="text-3xl group-hover:scale-125 duration-1000" />
        </button>
        <div className="text-right">
          <small className="text-[#6C717B] text-sm">Follow us</small>
          <ul className="flex font-semibold space-x-2">
            <li>TW</li>
            <li>FB</li>
            <li>IG</li>
            <li>DR</li>
            <li>BE</li>
          </ul>
        </div>
      </div>
      <hr className="w-full mt-5 bg-gray-300 h-[2px]" />
    </div>
  );
};

export default GetInTouch;
