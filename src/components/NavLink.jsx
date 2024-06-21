
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavLink({ to, Icon, open }) {
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname.includes(to));
  }, [location, to]);

  return (
    <div className="text-white font-title ">
      <div
        className={`${
          !open ? "flex items-center justify-center pr-3" : "hidden"
        }`}
      >
        <Link to={to}>
          <Icon
            className={`w-10 h-10 text-${
              active ? "pistach" : "wight"
            } transition duration-500 ease-in-out transform hover:scale-150`}
          />
        </Link>
      </div>
      <div className={`${open ? "flex items-center " : "hidden"}`}>
        <Link
          to={to}
          className={`w-10 h-10 text-${
            active ? "pistach" : "wight"
          } transition duration-300 ease-in-out transform hover:scale-150 flex`}
        >
          <Icon
            className={`w-10 h-10 text-${
              active ? "pistach" : "wight"
            } transition duration-500 ease-in-out transform hover:scale-150`}
          />
          <div className="  ml-3" />
          {to}
        </Link>
      </div>
    </div>
  );
}
