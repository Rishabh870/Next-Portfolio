// components/TimelineItem.js
import React from "react";
import { fadeIn } from "../../animation";
import { motion } from "framer-motion";
const TimelineItem = ({ title, date, description, index }) => {
  return (
    <div
      className={`flex items-center flex-row-reverse relative mx-auto ${
        index % 2 === 0
          ? "md:flex-col-reverse  md:mt-[14.5rem]"
          : "md:flex-col  md:mb-[14.5rem]"
      } w-full  md:w-3/4 h-fit`}
    >
      <div
        className={` order-2 relative w-fit mr-4 md:mr-0 h-full flex justify-center items-center ${
          index % 2 === 0 ? " md:custom-l-margin " : "md:custom-r-margin"
        } `}
      >
        <div className="w-1 h-full absolute bg-white"></div>
        <div className=" w-5 h-5 rounded-full z-10 custom-bg-color flex items-center justify-center">
          {/* Dot */}
          <div className="w-2 h-2 rounded-full bg-black"></div>
        </div>
      </div>

      {/* for medium screens */}
      <motion.div
        variants={fadeIn(
          `${index % 2 === 0 ? "up" : "down"}`,
          `${0.3 + index / 10}`
        )}
        initial="hidden"
        whileInView={"show"}
        className={` h-fit order-1 hidden md:block my-3 overflow-hidden px-3 py-3 md:py-0 rounded-lg shadow-md shadow-slate-900 ${
          index % 2 === 0 ? "mt-3" : "mb-3"
        }`}
      >
        {/* Content */}
        <h3 className="font-bold text-lg ">{title}</h3>
        <p className="text-sm custom-color">{date}</p>
        <p className="text-sm text-ellipsis md:h-40 text-gray-500">
          {description}
        </p>
      </motion.div>

      {/* for small screens */}
      <motion.div
        variants={fadeIn(`left`, `${0.3 + index / 10}`)}
        initial="hidden"
        whileInView={"show"}
        className={` h-fit order-1 md:hidden my-3 overflow-hidden px-3 py-3 md:py-0 rounded-lg shadow-md shadow-slate-900 ${
          index % 2 === 0 ? "mt-3" : "mb-3"
        }`}
      >
        {/* Content */}
        <h3 className="font-bold text-lg ">{title}</h3>
        <p className="text-sm custom-color">{date}</p>
        <p className="text-sm text-ellipsis md:h-40 text-gray-500">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default TimelineItem;
