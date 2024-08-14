import React, { useState } from "react";
import { Link, Form, useRouteLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";
import EditNoteSharpIcon from '@mui/icons-material/EditNoteSharp';
import ChecklistIcon from '@mui/icons-material/Checklist';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
export default function Tabs() {
  const [activeTab, setActiveTab] = useState("info");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className=" ">
      <div className="flex ">
        <div className="flex text-white font-title text-4xl   ">
          <Link to={"info"}>
            <button
              className={`tab-button text-lg font-medium py-2 px-4 border-b-2 border-transparent hover:border-pistach focus:outline-none ${
                activeTab === "info" ? "border-pistach text-pistach" : ""
              }`}
              onClick={() => handleTabClick("info")}
            >
              <EditNoteSharpIcon/>
              Info
            
            </button>
          </Link>
          <Link to={"tasks"}>
            <button
              className={`tab-button text-lg font-medium py-2 px-4 border-b-2 border-transparent hover:border-pistach focus:outline-none ${
                activeTab === "tasks" ? "border-pistach text-pistach" : ""
              }`}
              onClick={() => handleTabClick("tasks")}
            >
              <ChecklistIcon/>
              Tasks
            </button>
          </Link>
          <Link to={"files"}>
            <button
              className={`tab-button text-lg font-medium py-2 px-4 border-b-2 border-transparent hover:border-pistach focus:outline-none ${
                activeTab === "files" ? "border-pistach text-pistach" : ""
              }`}
              onClick={() => handleTabClick("files")}
            >
              <FolderCopyOutlinedIcon className="pr-1"/>
            
              Files
            </button>
          </Link>
        </div>
      </div>
      <div className="min-h-screen ">
        <Outlet />
      </div>
    </div>
  );
}
