import * as React from "react";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MainNavigation from "../components/MainNavigation";
import NavLink from "../components/NavLink";
const MiniDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex">
      <div
        className={`transition-all duration-700 ${
          open ? "w-56" : "w-16"
        } bg-gray-900 text-white flex-shrink-0  min-h-screen`}
      >
        <div>
          <button onClick={handleDrawerOpen} className={`${open && "hidden"}`}>
            <MenuIcon />
          </button>
          <button
            onClick={handleDrawerClose}
            className={` ${!open && "hidden"}`}
          >
            <ChevronLeftIcon />
          </button>
        </div>
        <div>
          <ul>
            <li>
              <NavLink
                to="projects"
                icon="fa-solid fa-diagram-project"
                open={open}
              />
               <NavLink
                to="projects"
                icon="fa-solid fa-diagram-project"
                open={open}
              />
               <NavLink
                to="projects"
                icon="fa-solid fa-diagram-project"
                open={open}
              /> <NavLink
              to="projects"
              icon="fa-solid fa-diagram-project"
              open={open}
            />
            </li>
          </ul>
        </div>
        <div className="py-3"></div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className={`bg-gray-900 text-white ${open && "pl-64"}`}>
          <div className="p-3">
            <h1 className="text-2xl font-semibold">Search bar here</h1>
          </div>
        </div>
        <div className="p-3">
          <h1 className="text-2xl font-semibold">Content goes here</h1>
          <p>
           عاااااااااااا
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiniDrawer;
