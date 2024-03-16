"use client";
import React, { useState } from "react";
import "../Pages/index.css";
import { fadeIn } from "../../animation";
import { motion } from "framer-motion";
import nodemailer from "nodemailer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "testworking760@gmail.com",
            pass: "kmnmhwjcarusalyk",
          },
        });

        const formData = req.body;
        console.log(formData);
        const mailOption = {
          from: "moses87@ethereal.email",
          to: "choudharyrishabh870@gmail.com",
          subject: "Email Verification Code",
          text: `name:${formData.name}\nemail:${formData.email}\ncontent:${formData.content}`,
        };

        const info = await transporter.sendMail(mailOption);

        console.log("Email sent: " + info.response);
        res.status(200).json({ message: "Email sent" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }

      formData.name = "";
      formData.email = "";
      formData.content = "";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.form
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      onSubmit={handleSubmit}
      className=" h-full md:h-fit md:p-6 w-full md:w-11/12 flex flex-col"
    >
      <div className="flex justify-center mb-8">
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          className="w-full rounded bg-transparent px-3 py-2 form-input"
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-center mb-8">
        <input
          type="email"
          required
          id="email"
          placeholder="E-mail"
          className="w-full rounded bg-transparent px-3 py-2 form-input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-center  mb-8">
        <textarea
          className="w-full rounded bg-transparent px-3 py-2 form-input"
          required
          id="content"
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-center ">
        <button
          className="border px-5 py-3 mt-4 rounded-full w-44 form-submit"
          type="submit"
        >
          Submit
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
