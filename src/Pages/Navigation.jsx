"use client";
import React from "react";

import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineProject, AiOutlineContacts } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi2";
import { RiServiceLine } from "react-icons/ri";

function Navigation({
  scrollToHome,
  scrollToAbout,
  scrollToWork,
  scrollToProject,
  scrollToContact,
  activeTab, // Assume activeTab is passed to determine which page is currently active
}) {
  return (
    <div className="flex justify-evenly items-center custom-color lg:w-1/2 xl:w-1/3 sm:w-1/2 w-5/6 mx-auto max-[1400px]:h-14 h-16 rounded-full menu">
      <button
        className={`sm:h-full text-xl py-2 h-fit  ${
          activeTab === "home" ? "nav-btn-active" : "nav-btn"
        }`}
        onClick={scrollToHome}
      >
        <BiHomeAlt2 /> {/* Material-UI Home Icon */}
      </button>
      <button
        className={`sm:h-full text-xl py-2 h-fit  ${
          activeTab === "about" ? "nav-btn-active" : "nav-btn"
        }`}
        onClick={scrollToAbout}
      >
        <HiOutlineUser /> {/* Material-UI Info Icon */}
      </button>
      <button
        className={`sm:h-full text-xl py-2 h-fit ${
          activeTab === "work" ? "nav-btn-active" : "nav-btn"
        }`}
        onClick={scrollToWork}
      >
        <RiServiceLine /> {/* Material-UI Work Icon */}
      </button>
      <button
        className={`sm:h-full text-xl py-2 h-fit  ${
          activeTab === "project" ? "nav-btn-active" : "nav-btn"
        }`}
        onClick={scrollToProject}
      >
        <AiOutlineProject /> {/* Material-UI Project Icon */}
      </button>
      <button
        className={`sm:h-full text-xl py-2 h-fit  ${
          activeTab === "contact" ? "nav-btn-active" : "nav-btn"
        }`}
        onClick={scrollToContact}
      >
        <AiOutlineContacts /> {/* Material-UI Contact Icon */}
      </button>
    </div>
  );
}

export default Navigation;
