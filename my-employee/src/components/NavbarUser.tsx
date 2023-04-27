import React from "react";
import { useNavigate } from "react-router-dom";

export const NavbarUser: React.FC = () => {
  const navagate = useNavigate();
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a
            className="btn btn-ghost normal-case text-xl"
            onClick={() => navagate(`/`)}
          >
            Employee
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="">
            <button className="btn" onClick={() => navagate(`/search`)}>
              Search
            </button>
          </div>

          <div className="">
            <button className="btn" onClick={() => navagate(`/employee`)}>
              Create Employee
            </button>
          </div>

          <div className="dropdown dropdown-end">
            <a className="btn" href="http://localhost:8080/logout">
              Logout
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
