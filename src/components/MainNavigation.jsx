import * as React from "react";
import { Link, Form, useRouteLoaderData } from "react-router-dom";
import Logout from "../Pages/Auth/Logout";
import NavLink from "./NavLink";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from '@mui/material/Divider';

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Outlet } from "react-router-dom";
import DataObjectIcon from '@mui/icons-material/DataObject';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import EditCalendarSharpIcon from '@mui/icons-material/EditCalendarSharp';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import PortraitSharpIcon from '@mui/icons-material/PortraitSharp';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import WorkOutlineSharpIcon from '@mui/icons-material/WorkOutlineSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
const drawerWidth = 200;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MainNavigation() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const token = useRouteLoaderData("root");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div variant="h6" noWrap component="div">
            search bar here
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
          <Divider />

        </DrawerHeader>
        <List>
          {token && (
            <nav className="pl-6 h-screen ">
              <ul className="flex flex-col h-full space-y-20">
              <li className="">
                  <NavLink
                    to="statistics"
                    Icon={AutoGraphOutlinedIcon}
                    open={open}
                  />
                </li>
                <li className="">
                  <NavLink
                    to="projects"
                    Icon={ WorkOutlineSharpIcon}
                    open={open}
                  />
                </li>
                <li className="">
                  <NavLink
                    to="Employees"
                    Icon={EngineeringOutlinedIcon}
                    open={open}
                  />
                </li>
                <li className="">
                  <NavLink
                    to="clients"
                    Icon={SwitchAccountOutlinedIcon}
                    open={open}
                  />
                </li>
                

                <li>
                  <Logout icon= {LogoutSharpIcon}
                  open={open} />
                </li>
                {!token && (
                  <li>
                    <Form action="/auth">
                      <button>Log in</button>
                    </Form>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet /> {/* Render route content here instead of Typography */}
      </Box>
    </Box>
  );
}

// import { React, useState } from "react";
// import { Link, Form, useRouteLoaderData } from "react-router-dom";
// import NavLink from "./NavLink";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

// function MainNavigation() {
//   const token = useRouteLoaderData("root");
//   const [open, setOpen] = useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div className="flex">
//       <div
//         className={`transition-all duration-700 ${
//           open ? "w-48" : "w-16"
//         } bg-gray-900 text-white flex-shrink-0    h-screen `}
//       >
//         <div
//           className={`${
//             !open ? "flex items-center justify-center pr-5" : "hidden"
//           }`}
//         >
//           <button onClick={handleDrawerOpen}>
//             <MenuIcon />
//           </button>
//         </div>
//         <div>
//           <button
//             onClick={handleDrawerClose}
//             className={` ${!open && "hidden"}`}
//           >
//             <ChevronLeftIcon />
//           </button>
//         </div>
//         <div>
//           {token && (
//             <nav>
//               <ul>
//                 <li>
//                   <NavLink
//                     to="projects"
//                     icon="fa-solid fa-diagram-project"
//                     open={open}
//                   />
//                 </li>
//                 <li>
//                   <NavLink
//                     to="Employees"
//                     icon="fa-solid fa-users-gear"
//                     open={open}
//                   />
//                 </li>
//                 <li>
//                   <NavLink
//                     to="clients"
//                     icon="fa-solid fa-users-gear"
//                     open={open}
//                   />
//                 </li>
//                 <li>
//                   <NavLink
//                     to="statistics"
//                     icon="fa-solid fa-users-gear"
//                     open={open}
//                   />
//                 </li>
//                 {/* <li>
//                 <Form action="logout" method="post">
//                   <button>Log out</button>
//                 </Form>
//               </li> */}
//                 {!token && (
//                   <li>
//                     <Form action="/auth">
//                       <button>Log in</button>
//                     </Form>
//                   </li>
//                 )}
//               </ul>
//             </nav>
//           )}
//         </div>
//         <div className="py-3"></div>
//       </div>
//     </div>
//   );
// }
// export default MainNavigation;
