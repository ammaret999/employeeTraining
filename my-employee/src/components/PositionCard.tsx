import React from "react";
import { useNavigate } from "react-router-dom";

interface PositionCardProps {
  code: string;
  position: string;
  salaryMin: number;
  salaryMax: number;
}

export const PositionCard: React.FC<PositionCardProps> = ({
  code,
  position,
  salaryMax,
  salaryMin,
}) => {
  const navagate = useNavigate();

  function deletePosition(code: string) {
    fetch(`http://localhost:8080/admin/position/${code}`, {
      method: "DELETE",
    }).then((result) => {
      result.json();
    });
  }

  return (
    <>
      <div className="col-span-4 bg-gray-100 justify-center">
        <div className="card bg-base-100 shadow-xl ">
          <div className="card-body ">
            <h1 className="card-title justify-center">{position}</h1>
            <div className="flex justify-center">
              <h2 className="card-title justify-center m-2">{salaryMin}</h2>
              <h3 className="card-title justify-center m-2">-</h3>
              <h2 className="card-title justify-center m-2">{salaryMax}</h2>
            </div>
            <div className="card-actions justify-between">
              <button
                className="btn btn-primary"
                onClick={() => navagate(`/admin/home/position/edit/${code}`)}
              >
                Edit
              </button>
              <button
                className="btn btn-primary"
                onClick={() => deletePosition(code)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
