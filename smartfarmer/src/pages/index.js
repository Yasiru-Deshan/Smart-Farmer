import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import Footer from "../components/Footer";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../components/InfoSection/Data";
import Technology from "../components/Technologies/technologies";
import Presentations from "../components/Presentations/Presentation";
import AboutUs from "../components/Objectives/objectives";
import Team from "../components/Team/team";
import Objectives from "../components/Objectives/objectives";
import Contact from "../components/ContactUs/contact";
import Milestone from "../components/Milestone/milestones";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      {/* <div style={{ padding:'40px',
      fontSize:'25px',
      backgroundColor: "black", color: "white" }}>
        <center>
          <h1>Research Project Scope</h1>
        </center>
      </div> */}
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Objectives />
      <InfoSection {...homeObjFour} />
      <Technology />
      <Milestone />
      <Services />
      <Presentations />
      <Team />
      <Contact />

      <Footer />
    </>
  );
};

export default Home;
