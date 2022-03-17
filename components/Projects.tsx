import React, { useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { motion } from "framer-motion";

type Props = {
  name?: string;
};
const Slider1 = [
  {
    id: 1,
    image:
      "https://assets.website-files.com/609cb31ed014c633e4f63d41/60a898c32c2e014b669dbb85_floria-gallery-image-06.jpg",
  },
  {
    id: 2,
    image:
      "https://assets.website-files.com/609cb31ed014c633e4f63d41/609f606e845875e3136f8ccc_floria-gallery-image-01.jpg",
  },
  {
    id: 3,
    image:
      "https://assets.website-files.com/609cb31ed014c633e4f63d41/60a898a09285521e3d7bceec_floria-gallery-image-04.jpg",
  },
  {
    id: 4,
    image:
      "https://assets.website-files.com/609cb31ed014c633e4f63d41/60a89cc1b61ccfc404145d0b_gallery-image-03.jpg",
  },
];
const Slider2 = [
  {
    id: 1,
    image:
      "https://assets.website-files.com/609cb31ed014c633e4f63d41/609f60f14853cf059cf96eff_gallery-image-01.jpg",
  },
  {
    id: 2,
    image:
      "https://assets.website-files.com/609cb31ed014c633e4f63d41/60a89cae73e2d745093e2b94_gallery-image-02.jpg",
  },
  {
    id: 3,
    image:
      "https://assets.website-files.com/609cb31ed014c633e4f63d41/60a89c5c5cd4203dc75087c3_gallery-image-05.jpg",
  },
  {
    id: 4,
    image:
      "https://assets.website-files.com/609cb31ed014c633e4f63d41/609f60de86b4691c9fb74229_gallery-image-01.jpg",
  },
];

const Projects = ({ name }: Props) => {
  // Slider 1
  const [value, setValue] = useState(0);

  const next = () => {
    value === 0 ? setValue(3) : setValue(value - 1);
  };
  const prev = () => {
    value === 3 ? setValue(0) : setValue(value + 1);
  };
  // Slider 2
  const [value2, setValue2] = useState(0);

  const next2 = () => {
    value2 === 0 ? setValue2(3) : setValue2(value2 - 1);
  };
  const prev2 = () => {
    value2 === 3 ? setValue2(0) : setValue2(value2 + 1);
  };
  return (
    // Main Div
    <div className="pb-20">
      {/* Title */}
      <div className="flex items-center mt-36 space-x-5">
        <hr className="bg-[#40B2B5] h-1 w-32 rounded-lg" />
        <h1 className="whitespace-nowrap md:text-5xl text-3xl">
          Recent Projects
        </h1>
      </div>
      {/* Slider 1 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="rounded-xl mt-20 shadow-md"
      >
        {/* Slide Image */}
        <div className="p-7">
          <img
            className="rounded-md"
            src={Slider1[value].image}
            alt="slider-img"
          />
        </div>
        <div className="pb-16 p-10 flex justify-evenly md:flex-row flex-col items-center space-x-10 gap-5">
          <div>
            {/* Slide Buttons */}
            <div className="p-5 space-x-3">
              <button
                type="button"
                onClick={next}
                className="rounded-full p-4 shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-gray-500 duration-100 active:bg-gray-200"
              >
                <GrLinkPrevious />
              </button>
              <button
                type="button"
                onClick={prev}
                className="rounded-full p-4 shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-gray-500 duration-100 active:bg-gray-200"
              >
                <GrLinkNext />
              </button>
            </div>
            <div className="flex flex-col items-center border-2 border-gray-200 md:w-72 w-96 rounded-lg divide-y-2 divide-gray-200">
              <span className="flex justify-evenly items-center w-full p-2">
                <h3 className="text-gray-400 text-base">Client</h3>
                <hr className="h-10 w-[2px] bg-gray-200 ml-9" />
                <h3 className="text-base">Design</h3>
              </span>
              <span className="flex justify-evenly items-center w-full p-2">
                <h3 className="text-gray-400 text-base font-light">
                  Release Date
                </h3>
                <hr className="h-10 w-[2px] bg-gray-200" />
                <h3 className="text-base">Jan,2021</h3>
              </span>
            </div>
          </div>
          <div className="lg:w-7/12 w-full">
            <h1>Floria UI Kit</h1>
            <p className="text-gray-500 mt-2">
              Certe, inquam, pertinax non recusandae itaque aiunt hanc quasi
              involuta aperiri, Quae fuerit causa, mox videro; interea hoc
              epicurus in ea quid malum, sensu.
            </p>
            <div className="flex items-center mt-5 space-x-4">
              <span className=" bg-gray-200 h-7 w-16 rounded-2xl font-medium text-sm flex items-center justify-center">
                WEB
              </span>
              <span className=" bg-gray-200 h-7 w-16 rounded-2xl font-medium text-sm flex items-center justify-center gap-2">
                UI/UX
              </span>
              <span className=" bg-gray-200 h-7 w-36 rounded-2xl font-medium text-sm flex items-center justify-center gap-2">
                PHOTOGRAPHY
              </span>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Slider 2 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="rounded-xl mt-20 shadow-md"
      >
        {/* Slide Image */}
        <div className="p-7">
          <img
            className="rounded-md"
            src={Slider2[value2].image}
            alt="slider-img"
          />
        </div>
        <div className="pb-16 p-10 flex justify-evenly md:flex-row flex-col items-center space-x-10 gap-5">
          <div>
            {/* Slide Buttons */}
            <div className="p-5 space-x-3">
              <button
                type="button"
                onClick={next2}
                className="rounded-full p-4 shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-gray-500 duration-100 active:bg-gray-200"
              >
                <GrLinkPrevious />
              </button>
              <button
                type="button"
                onClick={prev2}
                className="rounded-full p-4 shadow-lg hover:scale-105 hover:shadow-2xl hover:shadow-gray-500 duration-100 active:bg-gray-200"
              >
                <GrLinkNext />
              </button>
            </div>
            <div className="flex flex-col items-center border-2 border-gray-200 md:w-72 w-96 rounded-lg divide-y-2 divide-gray-200">
              <span className="flex justify-evenly items-center w-full p-2">
                <h3 className="text-gray-400 text-base ml-1">Client</h3>
                <hr className="h-10 w-[2px] bg-gray-200 ml-16" />
                <h3 className="text-base">WebDesign</h3>
              </span>
              <span className="flex justify-evenly items-center w-full p-2">
                <h3 className="text-gray-400 text-base font-light">
                  Release Date
                </h3>
                <hr className="h-10 w-[2px] bg-gray-200" />
                <h3 className="text-base">Jan,2022</h3>
              </span>
            </div>
          </div>
          <div className="lg:w-7/12 w-full">
            <h1>Photographer Theme</h1>
            <p className="text-gray-500 mt-2">
              Certe, inquam, pertinax non recusandae itaque aiunt hanc quasi
              involuta aperiri, Quae fuerit causa, mox videro; interea hoc
              epicurus in ea quid malum, sensu.
            </p>
            <div className="flex items-center mt-5 space-x-4">
              <span className=" bg-gray-200 h-7 w-16 rounded-2xl font-medium text-sm flex items-center justify-center">
                WEB
              </span>
              <span className=" bg-gray-200 h-7 w-16 rounded-2xl font-medium text-sm flex items-center justify-center gap-2">
                UI/UX
              </span>
              <span className=" bg-gray-200 h-7 w-36 rounded-2xl font-medium text-sm flex items-center justify-center gap-2">
                PHOTOGRAPHY
              </span>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex lg:flex-row flex-col items-center justify-evenly lg:p-7 p-0 mt-20 border-2 border-gray-200 rounded-3xl">
        <div className="flex space-x-3 p-5">
          <h1 className="text-[#40b2b5] font-semibold">5+</h1>
          <span>
            <p className="font-medium">Years Experience</p>
            <small>over 40 projects</small>
          </span>
        </div>
        <hr className="w-[2px] h-20 bg-gray-200 lg:block hidden" />
        <hr className="h-[2px] w-full bg-gray-200 lg:hidden block" />
        <div className="flex space-x-3 p-5">
          <h1 className="text-[#40b2b5] font-semibold">12</h1>
          <span>
            <p className="font-medium">Features & Awards</p>
            <small>from design community</small>
          </span>
        </div>
        <hr className="w-[2px] h-20 bg-gray-200 lg:block hidden" />
        <hr className="h-[2px] w-full bg-gray-200 lg:hidden block" />
        <div className="flex space-x-3 p-5">
          <h1 className="text-[#40b2b5] font-semibold">98%</h1>
          <span>
            <p className="font-medium">Clients Rating</p>
            <small>30+ testimonials</small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
