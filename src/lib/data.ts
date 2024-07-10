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
        "A Real live chat application, for users to text with each other.",
      webUrl: "",
      tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
      imageUrl: "corpcommentImg",
    },
    {
      title: "rmtDev",
      description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
      webUrl: "",
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
      imageUrl: "rmtdevImg",
    },
    {
      title: "Word Analytics",
      description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
      webUrl: "",
      tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
      imageUrl: "wordanalyticsImg",
    },
  ] as const;


export const skillsData = [
  "Node.js",
  "Express.js",
  "Nest.js",
  "React.js"
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
      "I am currently working for Plutos One, ",
    icon: React.createElement(FaReact),
    date: "Sept 2023 - present",
  },
] as const;