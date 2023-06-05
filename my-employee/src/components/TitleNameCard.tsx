import React from "react";
import { useNavigate } from "react-router-dom";

interface TitleNameCardProps {
  code: string;
  titleName: string;
}

export const TitleNameCard: React.FC<TitleNameCardProps> = ({
  code,
  titleName,
}) => {
  const navagate = useNavigate();

  function deleteTitleName(code: string) {
    fetch(`http://localhost:8080/admin/title/${code}`, {
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
            <h2 className="card-title justify-center">{titleName}</h2>
            <div className="card-actions justify-between">
              <button
                className="btn btn-primary"
                onClick={() => navagate(`/admin/home/title_name/edit/${code}`)}
              >
                Edit
              </button>
              <button
                className="btn btn-primary"
                onClick={() => deleteTitleName(code)}
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
