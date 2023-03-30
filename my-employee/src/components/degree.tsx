import React from "react";

export const TitleNameCard: React.FC = ({}) => {
  return (
    <>
      <div className="col-span-4 grid justify-center">
        <div className="col-span-4 grid justify-center justify-items-start m-3">
          <div className="col-span-12 text-gray-900 dark:text-white shadow mb-2 ">
            <div className="grid grid-cols-12">
              <label className="m-2 col-span-6 ">Level</label>
              <div className="m-2 col-span-6">height school</div>
            </div>

            <div className="grid grid-cols-12">
              <label className="m-2 col-span-6 ">institution</label>
              <div className="m-2 col-span-6">G.6</div>
            </div>

            <div className="grid grid-cols-12">
              <label className="m-2 col-span-6 ">Description</label>
              <div className="m-2 col-span-12">-------</div>
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
      </div>
      ;
    </>
  );
};
