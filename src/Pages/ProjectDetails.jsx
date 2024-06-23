import React, { useState } from "react";
import {
  Form,
  Link,
  useParams,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import getAuthToken from "../util/auth"
function ProjectDetails() {
  const params = useParams();
  const data = useRouteLoaderData("projects");
  const submit = useSubmit();


  return (
    <div className="text-white">
      <h1> ProjectDetails</h1>
      <p>{params.projectId} </p>
      <Link to=".." relative="path">
        Back
      </Link>
      <Form>
      </Form>
    </div>
  );
}
export default ProjectDetails;

export async function action({ params, request }) {
  const projectId = params.projectId;
  const  token = getAuthToken();
  const response = await fetch(
    "http://192.168.1.5:8000/company/projects/" + projectId,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          'Bearer '+ token,
      },
    }
  );

  if (!response.ok) {
    throw json(
      { message: "Could not delete project." },
      {
        status: 500,
      }
    );
  }
  return redirect("/projects");
}
