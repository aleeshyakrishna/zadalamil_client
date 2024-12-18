import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
  Input,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
  Bars3Icon
} from "@heroicons/react/24/solid";
import {
  HeartIcon,
  ShoppingCartIcon
} from "@heroicons/react/24/outline";
import logo from '../assets/images/logo.png';
import login from "../assets/images/login.png";
 
// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
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
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto "
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={login}
            // src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
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
 
// nav list menu
const navListMenuItems = [
  {
    title: "All",
  },
  {
    title: "Brands",
  },
  {
    title: "New Arrivals",
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
    </ul>
  );
}

export function SecondaryNavbar() {
    return (
      <Navbar className="hidden lg:flex bg-[#f6f6f6] py-2 px-6 max-w-none rounded-none fixed top-32 z-40">
        <div className="flex justify-center items-center w-full gap-80">
          {/* Left Section */}
          <div className="flex items-center gap-1">
            <Menu>
          <MenuHandler>
            <div className="flex items-center gap-1 cursor-pointer">
              <Bars3Icon className="h-6 w-6 text-black hover:text-blue-500" />
              <Typography
                as="a"
                href="#all"
                variant="small"
                className="font-medium text-black hover:text-blue-500"
              >
                All
              </Typography>
            </div>
          </MenuHandler>
          <MenuList className="bg-[#f6f6f6] border border-gray-200 shadow-lg rounded-md">
            <MenuItem>Mobiles & Tablets</MenuItem>
            <MenuItem>Wearables & Smart Watches</MenuItem>
            <MenuItem>TV & Audio</MenuItem>
            <MenuItem>Appliances</MenuItem>
            <MenuItem>Personal Care</MenuItem>
            <MenuItem>Computing</MenuItem>
            <MenuItem>Routers</MenuItem>
            <MenuItem>Photography</MenuItem>
            <MenuItem>Gaming</MenuItem>
            <MenuItem>Accessories</MenuItem>
          </MenuList>
        </Menu>
          </div>

          {/* Center Section */}
          <Typography
            as="a"
            href="#brands"
            variant="small"
            className="font-medium text-black cursor-pointer hover:text-blue-500"
          >
            Brands
          </Typography>

          {/* Right Section */}
          <Typography
            as="a"
            href="#new-arrivals"
            variant="small"
            className="font-medium text-black cursor-pointer hover:text-blue-500"
          >
            New Arrivals
          </Typography>
        </div>
      </Navbar>
    );
}
 
export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
 
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
 
  return (
    <>
    <Navbar className="max-w-none rounded-none z-50 bg-[#f6f6f6] fixed">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">

        {/* Logo */}
        <a href="#" className="mr-4 ml-2 cursor-pointer py-1.5">
          <img src={logo} alt="company logo" className="h-16 w-auto"/>
          <h1 className="ml-3 font-semibold">Zad Alamil</h1>
        </a>

          {/* search */}
        <div className="hidden lg:flex flex-grow justify-center ">
          <div className="relative flex w-full gap-2 md:w-max ">
            <Input
              type="search"
              placeholder="find your product here...."
              containerProps={{
                className: "min-w-[480px]",
              }}
              className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="!absolute left-3 top-[13px]">
              <svg
                width="13"
                height="14"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                  fill="#CFD8DC"
                />
                <path
                  d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                  stroke="#CFD8DC"
                  // stroke-width="2"
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          </div>
       
        <div className="hidden lg:block">
          <NavList />
        </div>

        {/* Wishlist and Cart Icons */}
      <div className="flex items-center gap-5">
        <IconButton variant="text" color="black">
          <HeartIcon className="h-6 w-6" />
        </IconButton>
        <IconButton variant="text" color="black" className="mr-4">
          <ShoppingCartIcon className="h-6 w-6 " />
        </IconButton>
      </div>

        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
 
        {/* <Button size="sm" variant="text">
          <span>Log In</span>
        </Button> */}
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
    <SecondaryNavbar/>
    </>
  );
}