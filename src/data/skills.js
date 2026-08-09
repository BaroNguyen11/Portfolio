import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiSpringboot,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiPostman,
  SiIntellijidea,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

export const skills = [
  {
    category: "Frontend",
    description: "Building responsive and interactive web interfaces.",
    skills: [
      {
        name: "HTML",
        icon: FaHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "#F7DF1E",
      },
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
    ],
  },

  {
    category: "Backend",
    description: "Developing APIs and server-side applications.",
    skills: [
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
    ],
  },

  {
    category: "Database",
    description: "Working with relational and NoSQL databases.",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    ],
  },

  {
    category: "Tools",
    description: "Tools I use during development.",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "VS Code", icon: BiLogoVisualStudio, color: "#007ACC" },
      { name: "IntelliJ IDEA", icon: SiIntellijidea, color: "#FE2857" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];
