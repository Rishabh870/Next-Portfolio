"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import "./index.css";
import { fadeIn } from "../../animation";
import { motion } from "framer-motion";

const HomePage = ({ scrollToContact, scrollToProject }) => {
  return (
    <div className="h-screen w-screen " id="home">
      <div className="flex flex-col md:flex-row h-screen justify-center  mx-auto sections lg:px-24">
        <div className="h-full w-full sm:h-full flex flex-col justify-center">
          <div className="w-fit detail mx-auto px-8 sm:pr-3 lg:px-5 pt-4 ">
            <div className="">
              <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                className="name"
              >
                RISHABH<span> PARTH CHOUDHARY</span>
              </motion.h1>
            </div>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              className="w-full mb-3 flex subTitle"
            >
              <span className="mr-1">I am a </span>
              <Typewriter
                options={{
                  strings: [
                    "Front End Developer",
                    "Mern Stack Developer",
                    "Back End Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </motion.div>
            <div className="w-fit flex flex-col items-center sm:items-start">
              <motion.p
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView="show"
                className="mb-4 about"
              >
                Experienced MERN Stack Web Developer passionate about crafting
                seamless, user-centric applications. Proficient in React,
                Node.js, Express, and MongoDB. Committed to delivering
                high-quality, scalable solutions that elevate user experiences
                and drive business growth
              </motion.p>
            </div>
            {/*    <div className="flex items-center w-full justify-center">
              
              <GitHubIcon
                sx={{ fontSize: 20 }}
                className="mr-4 custom-color"
                onClick={() =>
                  window.open("https://github.com/Rishabh870", "_blank")
                }
              />
              <LinkedInIcon
                sx={{ fontSize: 20 }}
                className="mr-4 custom-color"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/rishabh-parth-choudhary-85b107247/",
                    "_blank"
                  )
                }
              />
              
              <LeetCodeIcon
                className="custom-color"
                sx={{ fontSize: 20 }}
                onClick={() =>
                  window.open("https://leetcode.com/Rishabh870/", "_blank")
                }
              />
            </div>  */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView="show"
              className="flex mt-5 justify-evenly"
            >
              <button
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1UZV1MEkzPv_2XMiC31g0DDL__JK4FRhq/view?usp=drivesdk ",
                    "_blank"
                  );
                }}
                className=" bg-btn py-2 px-5 md:px-8 rounded-full transition duration-300"
              >
                My Resume
              </button>
              <button
                onClick={scrollToContact}
                className="border-btn py-2 px-5 md:px-8 rounded-full"
              >
                Contact Me
              </button>
            </motion.div>
          </div>
        </div>
        <div className="h-full w-full md:h-screen md:flex justify-center items-center">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            className="w-full h-full p-10 pt-0 md:p-4 relative mx-auto flex justify-center items-center"
          >
            <div className="wrapper h-full w-full relative">
              <div
                className="box h-[22rem] w-[22rem] md:h-[24rem] md:w-[24rem]"
                style={{
                  background: `url(https://res.cloudinary.com/dsefier2u/image/upload/v1710501738/portfolio/Images/Profile_nzgkqj.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              ></div>
              <div className=" absolute h-[23rem] w-[22.5rem] md:h-[25rem] md:w-[24.5rem]  box -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
