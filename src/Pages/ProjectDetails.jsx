import React, { useState } from "react";
import {
  Form,
  Link,
  useParams,
  useRouteLoaderData,
  useNavigate,
  redirect,
} from "react-router-dom";
import Title from "../components/Title";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

function ProjectDetailsInfo() {
  const data = useRouteLoaderData("projectsDetails");

  const formatDate = (datetime) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(datetime);
    return date.toLocaleDateString("en-US", options); // Adjust locale as needed
  };

  return (
    <div className="pt-5">
      <div className="flex">
        <img className="w-80 h-80 rounded-xl" src={data.logo} alt="Client" />
        <div className="pl-5 pt-5 pb-5 font-content text-white">
          <Title title={data.name} />
          <p className="pb-3">{data.description}</p>
          <div className="flex items-center pb-5 "></div>
          <p className=" text-sm pb-3 pt-3">
            created at: {formatDate(data.created_at)}
          </p>
          <p className=" text-sm pb-3">
            last update: {formatDate(data.updated_at)}
          </p>
        </div>
        <div className="ml-auto">
          <Link
            to="../../"
            relative="path"
            className="text-white hover:bg-pistach"
          >
            <div>
              <ArrowCircleRightOutlinedIcon fontSize="large" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsInfo;
