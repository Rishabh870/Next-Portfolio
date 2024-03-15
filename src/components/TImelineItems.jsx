// components/TimelineItem.js
import React from "react";
import { fadeIn } from "../../animation";
import { motion } from "framer-motion";
const TimelineItem = ({ title, date, description, index }) => {
  return (
    <div
      className={`flex items-center relative mx-auto  ${
        index % 2 === 0
          ? "flex-col-reverse  custom-top"
          : "flex-col custom-bottom"
      }  w-3/4 h-fit`}
    >
      <div
        className={` order-2  ${
          index % 2 === 0 ? " custom-l-margin " : "custom-r-margin"
        } `}
      >
        <div className=" w-5 h-5 rounded-full z-10 custom-bg-color flex items-center justify-center">
          {/* Dot */}
          <div className="w-2 h-2 rounded-full bg-black"></div>
        </div>
      </div>

      <motion.div
        variants={fadeIn(
          `${index % 2 === 0 ? "up" : "down"}`,
          `${0.3 + index / 10}`
        )}
        initial="hidden"
        whileInView={"show"}
        className={` h-fit order-1 overflow-hidden px-3 rounded-lg shadow-md shadow-slate-900 ${
          index % 2 === 0 ? "mt-3" : "mb-3"
        }`}
      >
        {/* Content */}
        <h3 className="font-bold text-lg ">{title}</h3>
        <p className="text-sm custom-color">{date}</p>
        <p className="text-sm text-ellipsis h-40 text-gray-500">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default TimelineItem;
