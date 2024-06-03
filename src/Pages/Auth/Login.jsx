import React from "react";
import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect,
  Link,
} from "react-router-dom";
import "../../css/all.css"; // Adjust the path accordingly
import "@fortawesome/fontawesome-free/css/all.css";
import Error from "../../components/Error.jsx";
import AuthFrorm from "../../components/AuthForm.jsx";
import { fetchToken } from "../../http.js";
function Login() {
  return <AuthFrorm />;
}

export default Login;
export async function Action({ request, params }) {
  const data = await request.formData();
  const eventData = {
    email: data.get("email"),
    password: data.get("password"),
  };


  const response = await fetch("https://mibo-backend.r-link.io/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  // Handle error responses (status codes 422, 401, 400)
  if (
    response.status === 422 ||
    response.status === 401 ||
    response.status === 400
  ) {
    return response;
  }

  // Handle non-OK responses
  if (!response.ok) {
    // Return a JSON response with an error message
    return json(
      { message: "Could not login to your account." },
      { status: 500 }
    );
  }
  const responseData = await response.json();
  const token = responseData.access_token;

  localStorage.setItem("token", token);

  // Redirect on successful login
  return redirect("/home/statistics");
}
