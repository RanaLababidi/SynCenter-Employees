import React, { useState } from "react";
import { useLocation, Link, useRouteLoaderData } from "react-router-dom";
import Title from "../components/Title";
import TaskInfo from "../components/TaskInfo";
import TaskAssignees from "../components/TaskAssignees";
import TimeSheet from "../components/TimeSheet";
import TimerToggle from "../components/TimerToggle";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TimerSharpIcon from "@mui/icons-material/TimerSharp";
import WhereToVoteOutlinedIcon from "@mui/icons-material/WhereToVoteOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
export default function TaskDetails() {
  const task = useRouteLoaderData("taskDetails");
  console.log(task);

  const [showDetails, setShowDetails] = useState(false);
  const handleOpenModal = (employee) => {
    setShowDetails(true);
  };

  const handleCloseModal = () => {
    setShowDetails(false);
  };
  return (
    <div className="ml-5 text-white">
      <div className="flex">
        <Title title={task.title} />
        <div className="ml-auto">
          <Link
            to="../"
            relative="path"
            className="text-white hover:bg-pistach"
          >
            <div>
              <ArrowCircleRightOutlinedIcon fontSize="large" />
            </div>
          </Link>
        </div>
      </div>
      <div className="text-white font-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
        <TaskInfo
          Icon={WhereToVoteOutlinedIcon}
          title="Status :"
          content={task.status_translation}
        />
        <TaskInfo
          Icon={CalendarMonthIcon}
          title="Start Date :"
          content={task.start_date}
        />
        <TaskInfo Icon={WorkOutlineIcon} title="Project :" content="project" />
        <TaskInfo
          Icon={CalendarMonthIcon}
          title="End Date :"
          content={task.end_date}
        />

        <div className="flex">
          <TaskInfo Icon={AccessTimeIcon} title="Track time :" />{" "}
          <div className="font-number">{task.total_duration}</div>
        </div>
        {/* employee */}
        <div className="flex">
          <TaskInfo Icon={SupervisedUserCircleIcon} title="Assignees :" />
          <div className="flex items-center">
            {task.employees.map((employee) => (
              <img
                key={employee.id}
                src={employee.image}
                alt={employee.name}
                className="w-7 h-7 rounded-full -ml-3 first:ml-0"
              />
            ))}
            <button
              className="hover:text-white"
              onClick={() => handleOpenModal(task)}
            >
              <MoreHorizIcon />
            </button>
            {showDetails && (
              <TaskAssignees
                employees={task.employees}
                onClose={handleCloseModal}
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex mt-5 mb-3">
        <TaskInfo Icon={AssignmentOutlinedIcon} title="Description :" />
        {task.description}
      </div>

      {task.status === 1 ? (
        <div className="flex mt-5 mb-3">
          <div className="mt-2">
            <TaskInfo Icon={TimerSharpIcon} title="Timer :" />
          </div>
          <TimerToggle id={task.id} />
        </div>
      ) : null}

      <TimeSheet timesheets={task.timesheets} />
    </div>
  );
}
