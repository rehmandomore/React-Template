import React, { useState } from "react";
import Aside from "../components/Aside";
import GetInTouch from "../components/GetInTouch";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

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
      <GetInTouch />
      <Projects />
    </div>
  );
};

export default Home;
