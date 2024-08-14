import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import Title from "../components/Title";
import StatisticsCard from "../components/StatisticsCard";
import WorkOutlineSharpIcon from "@mui/icons-material/WorkOutlineSharp";
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp";
import TasksChart from "../components/TasksChart"; 

export default function Statistics() {
  const data = useRouteLoaderData("statistics");
// "projects_count": 6,
//         "tasks_count": 26,
//         "todo_tasks_count": 14,
//         "doing_tasks_count": 3,
//         "tocheck_tasks_count": 8,
//         "done_tasks_count": 1
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <Title title="Statistics" />
      </div>
      <div className="text-white font-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-2">
    
        <StatisticsCard
          title="Projects count"
          Icon={WorkOutlineSharpIcon}
          content={data.projects_count}
          disc="The total number of projects you are working on ."
        />
       
        <StatisticsCard
          title="Tasks count"
          Icon={GroupsSharpIcon}
          content={data.tasks_count}
          disc="Total number of tasks that is assigned to you from all projects."
        />
        <div className="bg-gray mt-1 block w-full rounded-2xl shadow-sm focus:ring-2 focus:ring-inset col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2">
        <TasksChart data={data} />
        </div>
      </div>
    </div>
  );
}
