import React from "react";

type Props = {
  name?: string;
};

const HeroSection = ({ name }: Props) => {
  return (
    // Hero Main Div
    <div
      className="h-full bg-cover bg-no-repeat bg-center w-full main"
      id="home"
    >
      {/* Hero Img & Things */}
      <div className="flex justify-center items-center w-full pt-40">
        <div className="lg:flex hidden flex-col items-end space-y-14 mt-5">
          <span className="hero-things w-48">
            <img
              className="w-12 h-12"
              src="https://assets.website-files.com/609cb31ed014c633e4f63d41/609e2ff8bb713d42bec6abe6_emoji-notebook.png"
              alt=""
            />
            <p className="font-semibold text-xl">UI/UX</p>
          </span>
          <span className="hero-things w-56 xl:mr-16">
            <img
              className="w-12 h-12"
              src="https://assets.website-files.com/609cb31ed014c633e4f63d41/609e2ff8b33bcefa7371b0c8_emoji-target.png"
              alt=""
            />
            <p className="text-xl">Illustrations</p>
          </span>
          <span className="hero-things h-24 w-24">
            <img
              className="w-12 h-12"
              src="https://assets.website-files.com/609cb31ed014c633e4f63d41/609e2ff88c500051d111df23_emoji-surfing.png"
              alt=""
            />
          </span>
        </div>
        {/* Hero Img */}
        <div className="md:px-0 px-16">
          <img
            className="rounded-full "
            src="https://assets.website-files.com/609cb31ed014c633e4f63d41/609cd8e1d0401591fae2cee2_hero-photo-p-500.jpeg"
            alt=""
          />
        </div>
        <div className="lg:flex hidden flex-col items-start space-y-14">
          <span className="hero-things w-48">
            <img
              className="w-12 h-12"
              src="https://assets.website-files.com/609cb31ed014c633e4f63d41/609e2ff8b5f04c9dfa1b1eaf_emoji-hello.png"
              alt=""
            />
            <p className="font-semibold text-xl">Hi there!</p>
          </span>
          <span className="hero-things w-56 xl:ml-14">
            <img
              className="w-10 h-10"
              src="https://assets.website-files.com/609cb31ed014c633e4f63d41/609e2ff845bc8418f8dbfe67_emoji-camera.png"
              alt=""
            />
            <p className="text-xl">Photography</p>
          </span>
          <span className="hero-things w-64">
            <img
              className="w-12 h-12"
              src="https://assets.website-files.com/609cb31ed014c633e4f63d41/609e2ff88f07e7d52fe27c2c_emoji-mailbox.png"
              alt=""
            />
            <span className="flex flex-col">
              <small className="text-gray-500">Work with me</small>
              <p>Request a quote</p>
            </span>
          </span>
        </div>
      </div>
      <div
        id="projects"
        className="flex flex-col items-center justify-center mt-16 space-y-7 container mx-auto"
      >
        <h3 className="text-orange-500 text-lg font-semibold tracking-wider">
          Hi THERE,I'M AR
        </h3>
        <h1 className="text-center lg:text-5xl text-3xl">
          A <b>Front end Developer</b> with <br className="lg:block hidden" />{" "}
          passion to web
        </h1>
        <p className="text-[#6C717B] text-xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
