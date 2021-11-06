import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GoIcons from "react-icons/go";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Educations",
    path: "/education",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  
  {
    title: "About Notice",
    path: "/skill",
    icon: <IoIcons.IoMdCodeWorking />,
    cName: "nav-text",
  },
  {
    title: "Top Student",
    path: "/project",
    icon: <GoIcons.GoProject />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/adminabout",
    icon: <GoIcons.GoProject />,
    cName: "nav-text",
  },
  {
    title: "Teacher",
    path: "/adminteacher",
    icon: <GoIcons.GoProject />,
    cName: "nav-text",
  },
  {
    title: "Social Link",
    path: "/sociallink",
    icon: <GoIcons.GoProject />,
    cName: "nav-text",
  },
  {
    title: "Slider",
    path: "/slideradmin",
    icon: <GoIcons.GoProject />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/support",
    icon: <IoIcons.IoMdLogOut />,
    cName: "nav-text",
  },
];
