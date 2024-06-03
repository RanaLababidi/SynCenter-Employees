import React, { useState } from "react";
import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect,
  Link,
} from "react-router-dom";
import forgot from "../../assets/reset.gif";
import FormComponent from "../../components/FormComponent";
import ButtonComponent from "../../components/ButtonComponent";

export default function ResetPassword() {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [otp, setOtp] = useState("");

  const handleOtpChange = (otp) => {
    setOtp(otp);
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-[url('./assets/aa.jpg')] bg-no-repeat bg-cover">
      <div className="sm:mx-auto justify-center rounded-3xl shadow-2xl backdrop-blur-xl border-double border-4 p-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <img src={forgot} className="mx-auto w-1/2" alt="Forgot Password" />
          <h1 className="font-title text-center mt-3 mb-3 text-4xl font-bold leading-9 tracking-tight text-white">
            Reset Password?
          </h1>
          <div className="font-content text-pistach">
            {data && data.message && (
              <div>
                {Object.keys(data.message).map((key, index) => (
                  <div key={index}>{data.message[key]}</div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form className="space-y-6" method="POST">
            <FormComponent
              label="New password"
              id="new_password"
              type="password"
            />

            <FormComponent
              label="Confirm Password"
              id="confirmed"
              type="password"
            />
            <ButtonComponent label="Save" />
          </Form>
        </div>
      </div>
    </div>
  );
}
export async function Action({ request, params }) {
  const email = localStorage.getItem("email");
  const code = localStorage.getItem("code");

  const data = await request.formData();
  const eventData = {
    email: email,
    code: code,
    new_password: data.get("new_password"),
    new_password_confirmation: data.get("confirmed"),
  };

  const response = await fetch(
    "https://mibo-backend.r-link.io/admin/edit-password",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    }
  );

  if (
    response.status === 422 ||
    response.status === 401 ||
    response.status === 400
  ) {
    const errorData = await response.json();
    return json(errorData, { status: response.status });
  }

  if (!response.ok) {
    return json({ message: "Could not send." }, { status: 500 });
  }
  localStorage.removeItem("email");
  localStorage.removeItem("code");

  return redirect("/auth/forgetPassword/successRestPasword");
}
