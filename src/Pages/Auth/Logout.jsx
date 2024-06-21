import { useNavigate, Form, Link } from "react-router-dom";

function Logout({ Icon, open }) {
  return (
    <div className=" text-white font-title ">
      <div
        className={`${
          !open ? "flex items-center justify-center pr-4" : "hidden"
        }`}
      >
        <Link to="/auth" onClick={() => localStorage.removeItem("token")}>
          <Icon className="w-10 h-10  transition duration-500 ease-in-out transform hover:scale-150 rotate-180 active:pistach " />
        </Link>
      </div>
      <div className={`${open ? "flex" : "hidden"}`}>
        <Link
          to="/auth"
          onClick={() => localStorage.removeItem("token")}
          className="flex items-center  transition duration-300 ease-in-out transform hover:scale-150  "
        >
          <Icon className="w-10 h-10  transition duration-500 ease-in-out transform hover:scale-150 rotate-180" />
          <div className="ml-3"></div>
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Logout;
