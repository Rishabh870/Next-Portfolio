"use client";
import React, { useRef, useState, useEffect } from "react";
import Navigation from "@/Pages/Navigation";
import HomePage from "@/Pages/HomePage";
import Work from "@/Pages/Work";
import Project from "@/Pages/Project";
import Contact from "@/Pages/Contact";
import About from "@/Pages/About";

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const [activeTab, setActiveTab] = useState("home"); // Initialize the active tab state

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < aboutRef.current.offsetTop) {
        setActiveTab("home");
      } else if (
        scrollPosition >= aboutRef.current.offsetTop &&
        scrollPosition < workRef.current.offsetTop
      ) {
        setActiveTab("about");
      } else if (
        scrollPosition >= workRef.current.offsetTop &&
        scrollPosition < projectRef.current.offsetTop
      ) {
        setActiveTab("work");
      } else if (
        scrollPosition >= projectRef.current.offsetTop &&
        scrollPosition < contactRef.current.offsetTop
      ) {
        setActiveTab("project");
      } else {
        setActiveTab("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="overflow-x-hidden relative">
      <div ref={homeRef}>
        <HomePage
          scrollToProject={() => scrollToRef(projectRef)}
          scrollToContact={() => scrollToRef(contactRef)}
        />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={workRef}>
        <Work scrollToProject={() => scrollToRef(projectRef)} />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div className="fixed bottom-7 w-screen">
        <Navigation
          scrollToHome={() => scrollToRef(homeRef)}
          scrollToAbout={() => scrollToRef(aboutRef)}
          scrollToWork={() => scrollToRef(workRef)}
          scrollToProject={() => scrollToRef(projectRef)}
          scrollToContact={() => scrollToRef(contactRef)}
          activeTab={activeTab} // Pass the activeTab state to Navigation component
        />
      </div>
    </main>
  );
}
