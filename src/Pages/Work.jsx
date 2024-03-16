import React, { useState } from "react";
import { fadeIn } from "../../animation";
import { motion } from "framer-motion";

const services = [
  {
    name: "Front End Web Developer",
    description:
      "As a Front-End Web Developer, I specialize in crafting engaging user interfaces and optimizing user experiences through the implementation of cutting-edge technologies such as HTML, CSS, and JavaScript frameworks like React.js. ",
  },
  {
    name: "Back End Web Developer",
    description:
      "In my role as a Back-End Web Developer, I excel in building robust and scalable server-side applications and databases using technologies such as Node.js, Express.js, and MongoDB. I am proficient in designing efficient APIs",
  },
  {
    name: "MERN Stack Developer",
    description:
      "As a MERN Stack Developer, I bring together my expertise in both front-end and back-end development to create full-stack applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
  },
];
const Work = ({ scrollToProject }) => {
  const [clickedIndex, setClickedIndex] = useState(null);
  return (
    <div className="h-screen w-screen overflow-hidden" name="work">
      <div className="flex flex-col sm:flex-row h-screen justify-center mx-auto sections lg:px-24 ">
        <div className="justify-center w-full lg:w-1/2 h-fit flex flex-col px-8 md:pr-3 lg:px-5 mb-4 mt-auto sm:my-auto ">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView="show"
            className="md:h-[449px] lg:h-[390px]"
          >
            <div className="">
              <p className=" header">WHAT I DO</p>
            </div>
            <div className="mt-2">
              <p>
                I&apos;m a recent graduate specializing in MERN development,
                proficient in full-stack web development, and currently seeking
                opportunities to apply my skills and knowledge in this field
              </p>
            </div>
            <div className="mt-5">
              <button
                onClick={scrollToProject}
                className="border py-2 px-5 project-work-btn"
              >
                My Project
              </button>
            </div>
          </motion.div>
        </div>
        <div className="justify-center w-full lg:w-1/2 h-fit sm:h-1/2 lg:h-2/3 flex flex-col my-auto mt-0 sm:my-auto px-8 md:pl-3 pt-0 lg:px-5 py-aut0">
          <div className="w-full md:p-1 sm:relative py-8 mx-auto">
            {services.map((service, index) => {
              const { name, description, links } = service;
              const toggleDescription = (index) => {
                setClickedIndex(clickedIndex === index ? null : index); // Toggle clickedIndex state
              };
              return (
                <motion.div
                  variants={fadeIn("left", `${0.5 + index / 5}`)}
                  initial="hidden"
                  whileInView="show"
                  key={index}
                  className=" border-b-2 pb-3 mb-3 border-white "
                >
                  <p
                    className="work-title"
                    onClick={() => toggleDescription(index)}
                  >
                    {name}
                  </p>
                  {clickedIndex === index && (
                    <p className="work-desc md:hidden">{description}</p>
                  )}

                  <p className="work-desc hidden md:block">{description}</p>

                  {/* Show description only if showDescription state is true */}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
