"use client";
import { useEffect, useState } from "react";
import "./Projects.css";
import Image from "next/image";
import Img from "../Images/icon.png";

const ProjectShapeGenerater = () => {
  const [previousIndexes, setPreviousIndexes] = useState([]);
  const comb = [
    { configure: 1, roundness: 1 },
    { configure: 1, roundness: 2 },
    { configure: 1, roundness: 4 },
    { configure: 2, roundness: 2 },
    { configure: 2, roundness: 3 },
    { configure: 3, roundness: 3 },
  ];

  const getRandomNumber = (min, max, excluded) => {
    let num;
    do {
      num = Math.floor(Math.random() * (max - min + 1) + min);
    } while (excluded.includes(num));
    return num;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      let index;
      do {
        index = getRandomNumber(0, comb.length - 1, previousIndexes);
        console.log(index);
      } while (
        previousIndexes.length <= comb.length &&
        previousIndexes.includes(index)
      );
      setPreviousIndexes([...previousIndexes, index]);

      if (previousIndexes.length >= comb.length - 1) {
        console.log("reset");
        setPreviousIndexes([]);
      }
      const selectedComb = comb[index];

      const shapes = document.querySelectorAll(".shape");
      shapes.forEach((shape) => {
        const roundnessValue = selectedComb.roundness;
        shape.setAttribute("data-roundness", roundnessValue);
      });

      const wrapper = document.getElementById("wrapper");
      const configureValue = selectedComb.configure;
      wrapper.setAttribute("data-configure", configureValue);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [previousIndexes, comb]);

  const data = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="borders lg:px-24 -rotate-90 -scale-x-100 md:scale-x-100 md:rotate-0">
      <div id="wrapper" className="">
        {data.map((item) => (
          <div className="shape" key={item}>
            <div className="flex justify-center p-5 items-center h-full w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShapeGenerater;
