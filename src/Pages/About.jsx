import Timeline from "@/components/Timeline";
import React from "react";

const About = () => {
  return (
    <div className="h-screen w-screen overflow-hidden" name="work">
      <div className="flex flex-col h-screen justify-center mx-auto sections lg:px-24 ">
        <div className="justify-center w-full  h-full flex flex-col ">
          <div className="h-full flex items-center justify-center">
            <Timeline />
          </div>
        </div>
        {/* <div className="justify-center w-full h-2/5">
          <div>
            <IndexPage />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
