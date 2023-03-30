import React from "react"

interface GenderCardProps {
  gender: string;
}

export const GenderCard: React.FC<GenderCardProps> = ({
  gender
}) => {
  return (
    <>
      <div className="col-span-4 bg-gray-100 justify-center">
        <div className="card bg-base-100 shadow-xl ">
          <div className="card-body">
            <h2 className="card-title justify-center">{gender}</h2>
            <div className="card-actions justify-between">
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};