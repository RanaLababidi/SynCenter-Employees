import React, { useState } from "react";
import {
  Form,
  Link,
  useRouteLoaderData,
  useSubmit,
  useParams,
} from "react-router-dom";
import Title from "../components/Title";

function Projects() {
  const data = useRouteLoaderData("projects");
  const formatDate = (datetime) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(datetime);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <Title title="Projects" />
        <div className="inline"></div>
      </div>
      <p className="text-white font-content ">The projects assigned to you:</p>
      <div className=" text-white font-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((project) => (
          <div
            className="bg-lightgray mt-1 block w-full border-2   rounded-lg py-1.5 shadow-sm focus:ring-2 focus:ring-inset focus:ring-pistach sm:text-sm sm:leading-6 hover:border-pistach"
            key={project.id}
          >
            <div className="m-5">
              <Link to={`${project.id}/info`}>
                <img className="w-full h-56 object-cover " src={project.logo} />
                <div className="  ">
                  <h5 className="text-xl font-bold mb-2 mt">{project.name}</h5>
                  <div className="flex items-center ">
                    <div className="pl-2">
                      <div className="text-shade text-xs">
                        {formatDate(project.created_at)}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
