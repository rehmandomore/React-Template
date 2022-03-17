import React from "react";

type Props = {
  name?: string;
};

const Testimonials = ({ name }: Props) => {
  return (
    <div className="mt-28 pb-20" id="testimonials">
      <div className="flex flex-col items-center">
        <small className="text-gray-600 tracking-widest text-sm">
          TESTIMONIALS
        </small>
        <h1 className="text-4xl mt-3">Clients about my work</h1>
        <hr className="bg-[#40b2b5] w-44 h-1 mt-4" />
      </div>
      <div className="flex"></div>
    </div>
  );
};

export default Testimonials;
