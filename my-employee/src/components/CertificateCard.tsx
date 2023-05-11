import React from "react";
import { useNavigate } from "react-router-dom";

interface CertificateCardProps {
  code: string;
  topic: string;
  description: string;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({
  code,
  topic,
  description,
}) => {
  const navagate = useNavigate();

  function deleteCertificate(code: string) {
    fetch(`http://localhost:8080/certificate/${code}`, {
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
              <label className="card-title justify-center">Topic</label>
              <label className=" grid justify-center">{topic}</label>
            </div>
            <div className=" mb-2">
              <label className="card-title justify-center">Discription</label>
              <label className="grid justify-center">{description}</label>
            </div>
            <div className="card-actions justify-between">
              <button
                className="btn btn-primary"
                onClick={() => navagate(`/profile/certificate/edit/${code}`)}
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
