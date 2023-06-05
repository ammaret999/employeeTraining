import React from "react";
import { useNavigate } from "react-router-dom";

export const NavbarAdmin: React.FC = () => {
  const navagate = useNavigate();
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a
            className="btn btn-ghost normal-case text-xl"
            onClick={() => navagate(`/admin/home`)}
          >
            Admin
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div className="dropdown dropdown-end">
              <a className="btn" href="http://localhost:8080/logout">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
