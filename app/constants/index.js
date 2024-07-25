import { FaHome } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { HiOutlinePhoto } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import { BiSolidDashboard } from "react-icons/bi";

import {
  BriefcaseBusiness,
  Cpu,
  Facebook,
  Github,
  HandPlatter,
  Home,
  Instagram,
  LayoutDashboard,
  Linkedin,
  Send,
  SquarePlus,
  Store,
  UserRound,
  Users,
} from "lucide-react";
export const menu = [
  {
    href: "#home",
    label: "Home",
    icon: <Home strokeWidth={1.8} />,
  },

  {
    href: "#about",
    label: "About",
    icon: <UserRound strokeWidth={1.8} />,
  },
  {
    href: "#technologies",
    label: "Tech",
    icon: <Cpu strokeWidth={1.8} />,
  },
  {
    href: "#services",
    label: "Services",
    icon: <HandPlatter strokeWidth={1.8} />,
  },
  {
    href: "#portfolio",
    label: "Portfolio",
    icon: <BriefcaseBusiness strokeWidth={1.8} />,
  },
  {
    href: "#contact",
    label: "Contact",
    icon: <Send strokeWidth={1.8} />,
  },
];

export const adminMenu = [
  {
    label: "dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard size={21} strokeWidth={1.8} />,
  },
  {
    label: "header",
    href: "/dashboard/header",
    icon: <Store size={21} strokeWidth={1.8} />,
  },
  {
    label: "about",
    href: "/dashboard/about",
    icon: <UserRound size={21} strokeWidth={1.8} />,
    submenu: [
      {
        label: "contact",
        href: "/dashboard/about/contact",
        icon: <UserRound size={21} strokeWidth={1.8} />,
      },
      {
        label: "experience",
        href: "/dashboard/about/experience",
        icon: <UserRound size={21} strokeWidth={1.8} />,
      },
    ],
  },
  {
    label: "projects",
    href: "/dashboard/projects",
    icon: <BriefcaseBusiness size={21} strokeWidth={1.8} />,
  },
  {
    label: "Categories",
    href: "/dashboard/add_category",
    icon: <SquarePlus size={21} strokeWidth={1.8}></SquarePlus>,
  },
  {
    label: "services",
    href: "/dashboard/services",
    icon: <HandPlatter size={21} strokeWidth={1.8}></HandPlatter>,
  },
  {
    label: "tech",
    href: "/dashboard/tech",
    icon: <Cpu size={21} strokeWidth={1.8} />,
  },
  {
    label: "profile",
    href: "/dashboard/profile",
    icon: <Users size={21} strokeWidth={1.8} />,
  },
];

export const Socialicons = [
  {
    icon: <Github></Github>,
    path: "/",
  },
  {
    icon: <Linkedin></Linkedin>,
    path: "/",
  },
  {
    icon: <Instagram></Instagram>,
    path: "/",
  },
  {
    icon: <Facebook></Facebook>,
    path: "/",
  },
];

export const qualificationData = [
  {
    title: "education",
    data: [
      {
        destination: "Lahore Leads University",
        designation: "BS-IT",
        years: "2019-2022",
      },
      {
        destination: "Lahore Leads University",
        designation: "BS-IT",
        years: "2019-2022",
      },
      {
        destination: "Lahore Leads University",
        designation: "BS-IT",
        years: "2019-2022",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        destination: "Think Tech Solution",
        designation: "Full stack delevloper",
        years: "2021-2022",
      },
      {
        destination: "Invexup",
        designation: "Frontend Developer",
        years: "2022-2023",
      },
      {
        destination: "System",
        designation: "Mern Stack Developer",
        years: "2022-2024",
      },
    ],
  },
];
