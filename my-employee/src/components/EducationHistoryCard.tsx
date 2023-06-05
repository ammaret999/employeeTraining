import React from "react";
import { useNavigate } from "react-router-dom";

interface EducationCardProps {
  code: string;
  levelId: {
    id: number;
    code: string;
    level: string;
  };
  institution: string;
  description: string;
}

export const EducationHistoryCard: React.FC<EducationCardProps> = ({
  code,
  levelId,
  institution,
  description,
}) => {
  const navagate = useNavigate();

  function deleteEducationHistory(code: string) {
    fetch(`http://localhost:8080/education/${code}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("tokenHeader")}`,
      },
    }).then((result) => {
      result.json();
    });
    window.location.reload();
  }

  return (
    <>
      <div className="col-span-4 bg-gray-100 justify-center mb-3">
        <div className="card bg-base-100 shadow-xl ">
          <div className="card-body">
            <div className=" mb-2">
              <label className="card-title justify-center">Level</label>
              <label className=" grid justify-center">{levelId.level}</label>
            </div>
            <div className=" mb-2">
              <label className="card-title justify-center">Institution</label>
              <label className=" grid justify-center">{institution}</label>
            </div>
            <div className=" mb-2">
              <label className="card-title justify-center">Discription</label>
              <label className="grid justify-center">{description}</label>
            </div>
            <div className="card-actions justify-between">
              <button
                className="btn btn-primary"
                onClick={() => navagate(`/profile/education/edit/${code}`)}
              >
                Edit
              </button>
              <button
                className="btn btn-primary"
                onClick={() => deleteEducationHistory(code)}
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
