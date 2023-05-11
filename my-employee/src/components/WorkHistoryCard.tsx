import React from "react";
import { useNavigate } from "react-router-dom";

interface CertificateCardProps {
  code: string;
  companyName: string;
  startWork: Date;
  endWork: Date;
  description: string;
}

export const WorkHistoryCard: React.FC<CertificateCardProps> = ({
  code,
  companyName,
  startWork,
  endWork,
  description,
}) => {
  const navagate = useNavigate();

  function deleteCertificate(code: string) {
    fetch(`http://localhost:8080/work/${code}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("tokenHeader")}`,
      },
    }).then((result) => {
      result.json();
    });
    window.location.reload();
  }

  const non = startWork.toString;

  return (
    <>
      <div className="col-span-4 bg-gray-100 justify-center mb-3">
        <div className="card bg-base-100 shadow-xl ">
          <div className="card-body">
            <div className=" mb-2">
              <label className="card-title justify-center">Company Name</label>
              <label className=" grid justify-center">{companyName}</label>
            </div>
            <div className=" mb-2">
              <label className="card-title justify-center">Start Work</label>
              <label className="grid justify-center">
                {startWork instanceof Date
                  ? startWork.toISOString()
                  : startWork}
              </label>
            </div>
            <div className=" mb-2">
              <label className="card-title justify-center">End Work</label>
              <label className="grid justify-center">
                {endWork instanceof Date ? endWork.toISOString() : endWork}
              </label>
            </div>
            <div className=" mb-2">
              <label className="card-title justify-center">Discription</label>
              <label className="grid justify-center">{description}</label>
            </div>
            <div className="card-actions justify-between">
              <button
                className="btn btn-primary"
                onClick={() => navagate(`/profile/work/edit/${code}`)}
              >
                Edit
              </button>
              <button
                className="btn btn-primary"
                onClick={() => deleteCertificate(code)}
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
