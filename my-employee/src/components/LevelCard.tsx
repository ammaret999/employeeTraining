import React from "react";
import { useNavigate } from "react-router-dom";
interface LevelCardProps {
  code: string;
  level: string;
}
export const LevelCard: React.FC<LevelCardProps> = ({ code, level }) => {
  const navagate = useNavigate();

  function deleteLevel(code: string) {
    fetch(`http://localhost:8080/admin/level/${code}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("tokenHeader")}`,
      },
    }).then((result) => {
      result.json();
    });
  }
  return (
    <>
      <div className="col-span-4 bg-gray-100 justify-center">
        <div className="card bg-base-100 shadow-xl ">
          <div className="card-body">
            <h2 className="card-title justify-center">{level}</h2>
            <div className="card-actions justify-between">
              <button
                className="btn btn-primary"
                onClick={() => navagate(`/admin/home/level/edit/${code}`)}
              >
                Edit
              </button>
              <button
                className="btn btn-primary"
                onClick={() => deleteLevel(code)}
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
