import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;



export const projectsData = [
    {
      title: "Live Chat Application",
      description:
        "A Real live chat application, for users to chat with each other.",
      webUrl: "https://real-time-chat-xwu5.onrender.com",
      tags: ["Node.js", "React.js", "MongoDB", "Express.js", "Sockets", "JWT", "Chakra UI"],
      imageUrl: ""
    },
    {
      title: "E-commerce",
      description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
      webUrl: "https://ecommerce-nodsjs.vercel.app/",
      tags: ["Node.js", "JWT","EJS", "MongoDB", "S3 Bucket"],
      // imageUrl: "/ecommerce (1).png",
      imageUrl: "",

    },
    {
      title: "Rate Limiter",
      description:
        "A backend middleware used for restricting the API hit's for minute.",
      webUrl: "https://github.com/raghavaggarwal2000/rate_limit_middleware",
      tags: ["Node.js", "Express.js", "Redis", "IP Address"],
      imageUrl: "",
    },
  ] as const;


export const skillsData = [
  "Data Structures & Algorithm",
  "Node.js",
  "Express.js",
  "Nest.js",
  "React.js",,
  "C++",
  "Next.js",
  "Microservices",
  "Postman",
  "BullMQ",
  "Python",
  "Django",
  "Redis",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
] as const;


export const experiencesData = [
  {
    title: "Graduated BCA",
    location: "Greater Noida, India",
    description:
      "I completed my Bachelors from JIMS affiliated to IPU in 2021",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Graduated MCA",
    location: "Greater Noida, India",
    description:
      "I completed my post-graduation from Galgotias College",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Software Engineer",
    location: "Delhi, India",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - Aug 2023",
  },
  {
    title: "Software Engineer",
    location: "Noida, India",
    description:
      "I am currently working for Plutos One. Here I am currently working for chatbot as well as I am creating BBBPS and leading a team of 4 employees. ",
    icon: React.createElement(FaReact),
    date: "Sept 2023 - present",
  },
] as const;