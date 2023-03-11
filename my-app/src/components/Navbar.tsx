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
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://hips.hearstapps.com/hmg-prod/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg?crop=0.444xw:1.00xh;0.129xw,0&resize=980:*" />
              </div>
            </label>
            <ul
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
