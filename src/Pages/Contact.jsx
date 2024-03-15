import ContactForm from "@/components/ContactForm";
import React from "react";
import "./index.css";
import { fadeIn } from "../../animation";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="h-screen w-screen overflow-hidden" id="contact">
      <div className="flex flex-col md:flex-row h-screen justify-center mx-auto sections lg:px-24 ">
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView="show"
          className="w-full md:w-1/2 h-1/4 md:h-2/3 flex flex-col items-center mt-auto md:my-auto px-8 md:pt-12 pb-0 md:pr-3 lg:px-5 lg:pt-0 "
        >
          <div className="w-fit my-auto md:mt-32">
            <p className="header">Get In Touch</p>
            <p className="let-work">Let&apos;s Work Together</p>
          </div>
        </motion.div>
        <div className="w-full md:w-1/2 h-fit md:h-2/3 flex flex-col justify-center mb-auto md:my-auto px-8 md:pl-3 pt-0 lg:px-5 ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
