import React from "react";
import { useNavigate } from "react-router-dom";

interface GenderCardProps {
  code: string;
  gender: string;
}

export const GenderCard: React.FC<GenderCardProps> = ({ code, gender }) => {
  const navagate = useNavigate();

  function deleteGender(code: string) {
    fetch(`http://localhost:8080/admin/gender/${code}`, {
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
            <h2 className="card-title justify-center">{gender}</h2>
            <div className="card-actions justify-between">
              <button
                className="btn btn-primary"
                onClick={() => navagate(`/admin/home/gender/edit/${code}`)}
              >
                Edit
              </button>
              <button
                className="btn btn-primary"
                onClick={() => deleteGender(code)}
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
