// cardItem.jsx

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { FaChevronRight } from "react-icons/fa";

const CardItem = ({ image, header, description, points, btnLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tilt
      className="relative rounded-lg overflow-hidden shadow-lg"
      glareEnable={true}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      glareColor={" white"}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background image */}
        <img
          className="object-cover w-full h-64 md:h-72 lg:h-80"
          src={image.src}
          alt="Card background"
        />

        {/* Glass-like effect on hover */}
        {isHovered && (
          <div className="absolute card inset-0 bg-gray-900 transition duration-300 hover:opacity-50"></div>
        )}

        {/* Card content */}
        <div
          className={`absolute inset-0 flex flex-col justify-center items-center text-center p-6 transition-opacity ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-2xl font-bold custom-color text-white capitalize mb-4">
            {header}
          </h2>
          <p className="text-white text-sm  mb-4">{description}</p>
          <ul className="text-white text-left list-disc mb-4">
            {points.map((point, index) => (
              <li className=" text-xs mb-2" key={index}>
                {point}
              </li>
            ))}
          </ul>
          <a
            href={btnLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex css-selector font-bold px-4 rounded-full h-10 w-10 transition duration-300 items-center"
          >
            <FaChevronRight />
          </a>
        </div>
      </div>
    </Tilt>
  );
};

export default CardItem;
