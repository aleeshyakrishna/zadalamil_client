import React from "react";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  PowerIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";

import logo from '../../../assets/images/logo.png';
import login from "../../../assets/images/login.png";
import { Link } from "react-router-dom";
 
// profile menu component
const profileMenuItems = [
  {
    label: "Admin Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];
 
function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const closeMenu = () => setIsMenuOpen(false);
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={login}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export function ComplexNavbar() {
  return (
    <Navbar className="max-w-none rounded-none z-50 bg-[#f6f6f6] fixed">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        {/* Logo */}
        <a href="#" className="mr-4 ml-2 cursor-pointer py-1.5">
        <Link to='/admin/dashboard'><img src={logo} alt="company logo" className="h-12 w-auto"/></Link>
          <h1 className="font-semibold text-sm">Zad Alamil</h1>
        </a>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
 
        <div className="flex items-center gap-4">
        <Button size="sm" variant="text">
            <span>ADMIN</span>
        </Button>
        <ProfileMenu />
        </div>
      </div>
    </Navbar>
  );
}