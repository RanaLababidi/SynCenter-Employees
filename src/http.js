import React from "react";
import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect,
  Link,
  useParams,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";

export async function fetchToken({ password, email }) {
  const response = await fetch("https://mibo-backend.r-link.io/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  //handle response
  if (!response.ok) {
    throw new Error("API request failed");
  } else {
    const responseData = await response.json();
    return responseData;
  }
}
