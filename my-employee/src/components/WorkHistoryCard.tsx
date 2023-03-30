import React from "react"

export const TitleNameCard: React.FC = ({
}) => {
  return (
    <>
      <div className="col-span-4 grid justify-center m-3">

        <div className="col-span-12 text-gray-900 dark:text-white shadow mb-2 ">
          <div className="grid grid-cols-12">
            <label className="m-2 col-span-6 ">Company</label>
            <div className="m-2 col-span-6">Appman</div>
          </div>

          <div className="grid grid-cols-12">
            <label className="m-2 col-span-6 ">Start work</label>
            <div className="m-2 col-span-6">09/09/2545</div>
          </div>

          <div className="grid grid-cols-12">
            <label className="m-2 col-span-6 ">End work</label>
            <div className="m-2 col-span-6">09/09/2545</div>
          </div>

          <div className="grid grid-cols-12">
            <label className="m-2 col-span-6 ">Discription</label>
            <div className="m-2 col-span-12">--------------</div>
          </div>

          <div className="grid grid-cols-12">
            <div className="m-2 col-span-6">
              <button className="btn">Edit</button>
            </div>
            <div className="m-2 col-span-6">
              <button className="btn">Delete</button>
            </div>
          </div>
        </div>

        <div className="col-span-12">
          <div className="grid grid-cols-12 justify-center">
            <button className="btn ">+</button>
          </div>
        </div>
      </div>
    </>
  );
};