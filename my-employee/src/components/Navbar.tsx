import React from "react"

export const Navbar:React.FC = () =>  {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Employee</a>
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
            <button className="btn">Search</button>
          </div>

          <div className="">
            <button className="btn">Create Employee</button>
          </div>

          <div className="dropdown dropdown-end">
            <div className="btn">Logout</div>
          </div>
        </div>
      </div>
    </>
  )
}
