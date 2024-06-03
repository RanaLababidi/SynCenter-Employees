import { useNavigate, Form, Link } from "react-router-dom";

function Logout({ icon, open }) {
  return (
    <>
      <div
        className={`${!open ? "flex items-center justify-center" : "hidden"}`}
      >
        <Link to="/auth" onClick={() => localStorage.removeItem("token")}>
          <i className={`${icon} w-10 h-10`} />
        </Link>
      </div>
      <div className={`${open ? "flex" : "hidden"}`}>
      <Link to="/auth" onClick={() => localStorage.removeItem("token")}>
          <i className={`${icon} w-10 h-10`} />
          Logout
        </Link>
      </div>
    </>
  );
}

export default Logout;
