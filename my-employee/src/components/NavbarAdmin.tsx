import React from "react"

export const Navbar:React.FC = () =>  {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Admin</a>
        </div>
        <div className="flex-none gap-2">

          <div className="dropdown dropdown-end">
            <div className="dropdown dropdown-end">
            <div className="btn">Logout</div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
