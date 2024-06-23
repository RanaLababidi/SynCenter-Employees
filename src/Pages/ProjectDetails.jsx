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

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");
    console.log(proceed);
    if (proceed) {
      submit(null, { method: "DELETE" });
    }
  }

  return (
    <div className="text-white">
      <h1> ProjectDetails</h1>
      <p>{params.projectId} </p>

      {/* relative path: back passed on the path
       * relative route: path to the parent declared in the createBrowserRouter()*/}
      <Link to=".." relative="path">
        Back
      </Link>
      <Form>
        <button onClick={startDeleteHandler}>Delete</button>
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
