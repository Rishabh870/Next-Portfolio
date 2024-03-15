import React from "react";
import TimelineItem from "./TImelineItems";
const items = [
  {
    title: "Matriculation",
    date: "July 1, 2017",
    description:
      "Matriculated with distinction [67.6%] from Vision Public School, demonstrating solid academic performance and dedication to studies.",
  },
  {
    title: "Intermediate",
    date: "June 15, 2019",
    description:
      "Completed intermediate studies [55.4%] at Vision Public School, showcasing commitment to education and foundational knowledge in various subjects.",
  },
  {
    title: "Traning Course",
    date: "August 19, 2023",
    description:
      "Completed Intershala Training Course [91%], acquiring practical skills and knowledge in MERN Stack Development, demonstrating dedication to professional development.",
  },
  {
    title: "Graduation",
    date: "September 19, 2023",
    description:
      "Graduated with distinction [8.5 CGPA] from RITEE, showcasing academic excellence and proficiency in B-Tech, with a demonstrated commitment to learning and achievement.",
  },
];

const Timeline = () => {
  return (
    <div className="px-5 h-fit relative flex justify-evenly  items-center ">
      <div className="w-11/12 h-1 absolute bg-white"></div>
      {items?.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          date={item.date}
          description={item.description}
          index={index}
        />
      ))}
    </div>
  );
};

export default Timeline;
