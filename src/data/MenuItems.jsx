import {
  TbHome,
  TbHash,
  TbUsers,
  TbUser,
  TbUsersGroup,
  TbFile,
  TbSettings,
  TbLogout2,
} from "react-icons/tb";
export const SidebarItems = [
  {
    icon: <TbHome size={24} />,
    name: "Home",
    to: "/home",
  },
  {
    icon: <TbHash size={24} />,
    name: "Explore",
    to: "/explore",
  },
  {
    icon: <TbUsers size={24} />,
    name: "Friends",
    to: "/friends",
  },
  {
    icon: <TbUser size={24} />,
    name: "Profile",
    to: "/profile",
  },
  {
    icon: <TbUsersGroup size={24} />,
    name: "Groups",
    to: "/groups",
  },
  {
    icon: <TbFile size={24} />,
    name: "Pages",
    to: "/pages",
  },
  {
    icon: <TbSettings size={24} />,
    name: "Settings",
    to: "/settings",
  },
  {
    icon: <TbLogout2 size={24} />,
    name: "Logout",
    to: "/lgout",
  },
];
