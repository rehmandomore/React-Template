import React, { useState } from "react";
import Aside from "../components/Aside";
import GetInTouch from "../components/GetInTouch";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";

const Home = () => {
  let [showSideMenu, setSideMenu] = useState<boolean>(false);
  const toggleSidebar = () => {
    setSideMenu((showSideMenu = !showSideMenu));
  };

  return (
    <div>
      <Navbar onMenuClick={toggleSidebar} />
      <Aside
        isVisible={showSideMenu}
        isClose={showSideMenu}
        onClose={toggleSidebar}
      />
      <HeroSection />
      <div className="container mx-auto">
        <GetInTouch />
        <Projects />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
