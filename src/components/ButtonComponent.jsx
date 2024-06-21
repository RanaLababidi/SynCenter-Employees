import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
export default function ButtonComponent({ label, onClick }) {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <button
        type="submit"
        disabled={isSubmitting}
        variant="outlined"
        className="flex space-y-6 w-full justify-center text-center rounded-md bg-gray  px-3 py-1.5  font-content leading-6 text-white  hover:bg-pistach focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={onClick}
      >
        {isSubmitting ? "Submitting..." : label}
      </button>
    </>
  );
}
