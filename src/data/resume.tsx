import type React from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Nandita Shukla",
  initials: "NS",
  url: "https://nanditashukla.dev",
  location: "Lucknow, India",
  locationLink: "https://www.google.com/maps/place/lucknow",
  description:
    "Computer Science Engineering student with experience in full-stack web development, Web3 & cloud technologies, and building responsive applications.",
  summary:
    "I'm a B.Tech CSE student at Shri Ramswaroop Memorial College of Engineering and Management with a Diploma in Information Technology. I've completed internships in web development at APT Technosoft, AI & Cloud Technologies at AICTE Edunet Foundation (IBM Collaboration), and full-stack development at SRDT Pvt. Ltd. I enjoy building full-stack web applications with Python, Flask, Node.js, and modern frontend technologies.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "JavaScript", icon: Typescript },
    { name: "C", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "HTML, CSS, Bootstrap", icon: ReactLight },
    { name: "Flask", icon: Python },
    { name: "Express.js", icon: Nodejs },
    { name: "MySQL", icon: Postgresql },
    { name: "MongoDB", icon: Postgresql },
    { name: "Git, GitHub Actions", icon: Docker },
    { name: "AWS, Google Cloud", icon: Docker },
    { name: "DSA, OOP, DBMS, OS, CN", icon: ReactLight },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "nanditashukla2205@gmail.com",
    tel: "+91-7676909515",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Nandita1822",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/nandita-shukla22",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:nanditashukla2205@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "APT Technosoft Pvt. Ltd.",
      href: "https://apttechnosoft.com",
      badges: [],
      location: "Lucknow, India",
      title: "Web Development Intern",
      logoUrl: "/apt-technosoft.png",
      start: "August 2022",
      end: "September 2022",
      description:
        "Completed web development training focused on building responsive websites. Assisted in developing and optimizing user-friendly web interfaces. Collaborated with development team to debug and improve code quality. Designed and integrated frontend interfaces with backend APIs. Implemented MySQL database operations for efficient data management.",
    },
    {
      company: "AICTE Edunet Foundation (IBM Collaboration)",
      href: "https://edunetfoundation.org",
      badges: [],
      location: "Remote",
      title: "AI & Cloud Technologies Intern",
      logoUrl: "/aicte.png",
      start: "September 2025",
      end: "October 2025",
      description:
        "Participated in national-level internship focused on Cloud Computing and Artificial Intelligence. Received industry-oriented training in emerging technologies.",
    },
    {
      company: "SRDT Pvt. Ltd.",
      href: "#",
      badges: [],
      location: "Lucknow, Uttar Pradesh, India",
      title: "Full-Stack Developer Intern",
      logoUrl: "/srdt.png",
      start: "September 2025",
      end: "September 2025",
      description:
        "Completed on-site internship training in full-stack development. Worked using Python and Flask to build and understand web application workflows. Assisted in backend integration and basic database operations. Gained practical exposure to real-world development environment and deployment practices.",
    },
  ],
  education: [
    {
      school: "Shri Ramswaroop Memorial College of Engineering and Management",
      href: "https://srmcem.ac.in/",
      degree: "Bachelor of Technology - Computer Science Engineering",
      logoUrl: "/srmcem.png",
      start: "2024",
      end: "2027",
    },
    {
      school: "Government Polytechnic Lucknow",
      href: "https://gplucknow.ac.in",
      degree: "Diploma - Information Technology • 71.43%",
      logoUrl: "/govt-polytechnic-lucknow.png",
      start: "2021",
      end: "2024",
    },
    {
      school: "Arvind Academy (CBSE)",
      href: "#",
      degree: "Class X • 87%",
      logoUrl: "/arvind-academy.png",
      start: "2020",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Meal Management & Nutrition Tracker",
      href: "https://nandita2205.pythonanywhere.com",
      dates: "2024",
      active: true,
      description:
        "Developed full-stack web application to track daily nutrition intake and promote healthy habits. Implemented user authentication and CRUD operations for meal record management. Designed responsive frontend for seamless user interaction. Integrated Flask backend with MySQL database for reliable data storage and retrieval.",
      technologies: [
        "Python",
        "Flask",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://nandita2205.pythonanywhere.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/meal-tracker.png",
      video: "",
    },
    {
      title: "Fake News Detector for Students",
      href: "https://huggingface.co/spaces/Nandita2205",
      dates: "2024",
      active: true,
      description:
        "Developed an AI-based fake news detector tailored for students to identify misinformation. Utilized natural language processing techniques to analyze and classify news articles.",
      technologies: [
        "Python",
        "Flask",
        "Artificial Intelligence",
        "OpenAI",
      ],
      links: [
        {
          type: "Hugging Face",
          href: "https://huggingface.co/spaces/Nandita2205",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fake-news-detector.png",
      video: "",
    },
    {
      title: "Coaching Website",
      href: "https://github.com/Nandita1822/Apt-Technosoft",
      dates: "2023",
      active: false,
      description:
        "Created coaching website to showcase placements, fees, courses, and registration details using HTML, CSS, JavaScript, and Bootstrap.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Nandita1822/Apt-Technosoft",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/coaching-website.png",
      video: "",
    },
    {
      title: "Vocational Website",
      href: "https://nandita-project-wanderlust.onrender.com",
      dates: "2023",
      active: false,
      description:
        "Developed vocational website enabling users to share vocational places and their prices, utilizing HTML, CSS, JavaScript, Bootstrap, MongoDB, and Node.js.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "MongoDB",
        "Node.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://nandita-project-wanderlust.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  achievements: [
    "Certificate of Participation in Round 1: Quiz of Asian Paints INSPIRA",
    "Artificial Intelligence Fundamentals",
    "Certificate of Participation in DATA CHAT",
    "Certificate of Participation in Online Assessment of Flipkart Runway: Season 5",
  ],
  hackathons: [] as Array<{
    title: string;
    dates?: string;
    location?: string;
    description?: string;
    image?: string;
    links?: Array<{ title: string; icon: React.ReactNode; href: string }>;
  }>,
} as const;
