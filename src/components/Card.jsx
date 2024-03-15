// card.jsx

import React from "react";
import CardItem from "./CardItems";
import Discord from "../Images/Discord.png";
import NexusCart from "../Images/NexusCart.png"; // Import image2
import PulseTweet from "../Images/PulseTweet.png"; // Import image2
import { fadeIn } from "../../animation";
import { motion } from "framer-motion";
const Card = () => {
  const cardData = [
    {
      image: Discord,
      header: "Discorded",
      description: " Shadcn, Prisma , Clerk, UploadThing, Socket.io",
      points: [
        "It showcasing proficiency in full-stack development and real-time communication technologies.",
        "Implemented user management features like server creation, member invitations, and role assignments.",
        "Integrated real-time functionalities such as text messaging, group video calls, voice calls, and direct messaging with Socket.IO",
      ],
      btnText: "Learn More",
      btnLink: "https://discord-clone-production-ad73.up.railway.app/",
    },
    {
      image: NexusCart, // Use imported image2
      header: "Nexus Cart",
      description: "JavaScript, Bootstrap, React, MongoDb, Node",
      points: [
        "A feature-rich MERN-based ecommerce platform for seamless online shopping and sales.",
        "Ensures a user-friendly shopping experience across devices.",
        "Simplifies inventory management, order processing, and website administration.",
      ],
      btnText: "Learn More",
      btnLink: "https://nexus-cart.netlify.app/",
    },
    {
      image: PulseTweet, // Use imported image2
      header: "Pulse Tweet",
      description: " Rest API, JavaScript, Bootstrap, React, Git ",
      points: [
        "A MERN-based Twitter clone for real-time microblogging, complete with tweets, profiles, and more.",
        "Interactive, likes, retweets, and comments to enhance user interaction.",
        "Intuitive design for easy navigation, profile management, and tweeting.",
      ],
      btnText: "Learn More",
      btnLink: "https://github.com/Rishabh870/PluseTweets",
    },
    // {
    //   image: Reactogram, // Use imported image2
    //   header: "Card 2 Header",
    //   description: "Description for card 2",
    //   points: ["Point 1", "Point 2", "Point 3"],
    //   btnText: "Learn More",
    //   btnLink: "https://example.com",
    // },
    // Add more card data as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          variants={fadeIn(
            `${index % 2 == 0 ? "up" : "down"}`,
            `${0.4 + index * 0.2}`
          )}
          initial="hidden"
          whileInView="show"
        >
          <CardItem {...card} />
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
