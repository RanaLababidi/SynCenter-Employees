import { React, useState } from "react";
import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect,
  Link,
} from "react-router-dom";

import user from "../assets/user.gif";
import FormComponent from "./FormComponent";
import ButtonComponent from "./ButtonComponent";
export default function AuthForm() {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state == "submitting";
  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-[url('./assets/aa.jpg')] bg-no-repeat bg-cover">
        <div className="sm:mx-auto justify-center  rounded-3xl shadow-2xl  backdrop-blur-xl border-double border-4 p-10  ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          {/* <i className="fas fa-user text-white block text-6xl " /> */}
          <img src={user} className="w-1/2 mx-auto" alt="Forgot Password" />
          <h1 className=" font-title text-center  text-4xl font-bold leading-9 tracking-tight text-white">
            Sign in
          </h1>
          {/* <div>{data && data.message && <div>{data.message}</div>}</div> */}
          <div className="font-content text-pistach">
            {data && data.message && (
              <div>
                {Object.keys(data.message).map((key, index) => (
                  <div key={index}>{data.message[key]}</div>
                ))}
              </div>
            )}
          </div>
          <h3 className="font-title text-center mt-4 text-white">
            Sign in and start managing your company
          </h3>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form className="space-y-6" method="POST">
            <FormComponent label="Email Adress" id="email" type="email" />
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="font-content block text-sm  text-white"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="forgetPassword"
                    className=" font-title text-pistach hover:text-white"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-lg py-1.5 shadow-sm focus:ring-2 focus:ring-inset focus:ring-pistach sm:text-sm sm:leading-6 "
                />
              </div>
            </div>
               <ButtonComponent label="Sign in" />

          </Form>
        </div>
      </div>
    </div>
  );
}
/*<fetcher.Form> send action but without navigating to another page
 */
