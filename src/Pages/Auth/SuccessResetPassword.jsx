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
import success from "../../assets/Animation - 1716113873825 (1).gif";

export default function SuccessResetPassword() {
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
        <div className="sm:max-w-sm text-center">
          <img src={success} className="w-1/2 mx-auto" alt="Forgot Password" />
          <h1 className="font-title text-center mb-3 text-4xl font-bold leading-9 tracking-tight text-white">
            Successfully...
          </h1>
          <div>
            <h3 className="font-content text-center mt-5 text-white">
              Your password account has been successfully reset, now you can
              login using your new password.
            </h3>
          </div>
        </div>
        <div className=" flex justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center w-full">
            <Link
              to="/auth"
              className="font-title text-center mb-3 text-4xl font-bold leading-9 tracking-tight text-pistach hover:text-white underline"
            >
              Go to login?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
