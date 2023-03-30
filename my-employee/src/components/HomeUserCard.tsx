import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Employee, ImageBase64 } from "../types";

export const HomeUserCard: React.FC<Employee> = ({
  id,
  code,
  titleName,
  firstName,
  lastName,
  status,
  department,
  position,
}) => {
  const navagate = useNavigate();

  const [imageBase64, setImageBase64] = useState<ImageBase64>();

  useEffect(() => {
    try {
      fetch(`http://localhost:8080/file/${code}`)
        .then((Response) => Response.json())
        .then((imageBase64) => setImageBase64(imageBase64));
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl m-4 col-span-12">
        <figure>
          <img
            className="object-fill h-80 w-80 object-center bg-black "
            src={`data:jpg;base64,${imageBase64?.base64}`}
            alt=""
          />
        </figure>
        <div className="card-body ">
          <div className="card-actions justify-end">
            <h1 className="card-title col-span-4">{status}</h1>
          </div>

          <div className="grid grid-cols-12">
            <h1 className="card-title col-span-4">{titleName.titleName}</h1>
            <h1 className="card-title col-span-4">{firstName}</h1>
            <h1 className="card-title col-span-4">{lastName}</h1>
          </div>

          <div className="grid grid-cols-12">
            <h1 className="card-title col-span-4">Department</h1>
            <h1 className="card-title col-span-8">{department.department}</h1>
          </div>

          <div className="grid grid-cols-12">
            <h1 className="card-title col-span-4">Position</h1>
            <h1 className="card-title col-span-8">{position.position}</h1>
          </div>

          <div className="card-actions justify-end ">
            <button
              className="btn "
              onClick={() => navagate(`/profile/${code}`)}
            >
              Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
