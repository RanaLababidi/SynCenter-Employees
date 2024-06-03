import React, { useState } from "react";
import { Link, useRouteLoaderData, json } from "react-router-dom";
import { fetchToken } from "../http";
const projects = [
  { id: "1", title: "e-commerce" },
  { id: "2", title: "task mangment" },
  { id: "3", title: "tracking" },
];
function Projects() {
  const data = useRouteLoaderData("projects");
  if (data.isError) {
    return <p>{data.message}</p>;
  }
  return (
    <>
      <h1> Project page</h1>

      <ul>
        {projects.map((project) => (
          <li>
            <Link to={`${project.id}`} key={project.id}>
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Projects;
