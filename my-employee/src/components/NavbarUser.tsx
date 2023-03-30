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
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>

          <div className="">
            <button className="btn" onClick={() => navagate(`/`)}>
              Search
            </button>
          </div>

          <div className="">
            <button className="btn" onClick={() => navagate(`/employee`)}>
              Create Employee
            </button>
          </div>

          <div className="dropdown dropdown-end">
            <div className="btn" onClick={() => navagate(`/`)}>
              Logout
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
