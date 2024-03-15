// components/AutoScroller.js
import Image from "next/image";
import React, { useRef, useEffect } from "react";

const AutoScroller = ({ images, scrollSpeed }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        container.scrollLeft += 1; // Adjust the scroll speed by changing this value
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }, scrollSpeed);
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    container.addEventListener("mouseenter", stopScrolling);
    container.addEventListener("mouseleave", startScrolling);

    startScrolling();

    return () => {
      container.removeEventListener("mouseenter", stopScrolling);
      container.removeEventListener("mouseleave", startScrolling);
      clearInterval(scrollInterval);
    };
  }, [scrollSpeed]);

  // Dynamically duplicate images to ensure seamless scrolling
  const duplicatedImages = [...images, ...images];

  return (
    <div
      ref={containerRef}
      className="relative space-x-20 overflow-hidden whitespace-nowrap"
    >
      {duplicatedImages.map((image, index) => (
        <div className="h-20 w-20  inline-block mr-4" key={index}>
          <Image src={image} alt={`Image ${index}`} className="" />
        </div>
      ))}
    </div>
  );
};

export default AutoScroller;
