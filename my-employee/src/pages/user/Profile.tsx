import { useEffect, useMemo, useState } from "react";
import { NavbarUser } from "../../components";
import { getUserById } from "../../services";
import { Employee, ImageBase64 } from "../../types";
import { useNavigate, useParams } from "react-router-dom";

export const Profile = () => {
  const [employee, setEmployee] = useState<Employee>();
  const [imageBase64, setImageBase64] = useState<ImageBase64>();
  const navagate = useNavigate();
  const { code } = useParams();

  const getEmployeeByCode = () => {
    fetch(`http://localhost:8080/employee/${code}`)
      .then((res) => res.json())
      .then((res) => {
        setEmployee(res);
      });
  };

  const getImage = () => {
    fetch(`http://localhost:8080/file/${code}`)
      .then((Response) => Response.json())
      .then((imageBase64) => setImageBase64(imageBase64));
  };

  useEffect(() => {
    getEmployeeByCode();
    getImage();
  }, []);

  const employeeData = (key?: string) => {
    if (!key) return;
    if (["gender", "department", "position", "titleName"].includes(key))
      return <div>{employee?.[key]?.[key]}</div>;
    return <div>{employee?.[key]}</div>;
  };

  return (
    <>
      <NavbarUser />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2"></div>
        <div className="col-span-8 justify-center gap-4 shadow-xl bg-gray-50 mt-5">
          <div className="grid grid-cols-12 m-5">
            <div className="col-span-6 justify-start">
              <button className="btn flex" onClick={() => navagate(`/`)}>
                Back
              </button>
            </div>
            <div className="col-span-6 flex justify-end">
              <button
                className="btn"
                onClick={() => navagate(`/profile/edit/${code}`)}
              >
                Edit Profile
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <p className="text-2xl">Profile</p>
          </div>

          <div className="grid justify-center m-5">
            <img
              className="object-fill h-80 w-80 object-center bg-black "
              src={`data:jpg;base64,${imageBase64?.base64}`}
              alt="image"
            />
          </div>

          <div className="grid justify-center">
            <div className="grid gap-6 mb-6 md:grid-cols-2 m-4">
              {employee &&
                Object.keys(employee).map((key) => {
                  if (!["id", "image", "status"].includes(key))
                    return (
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          {key}
                        </label>
                        {employeeData(key)}
                      </div>
                    );
                })}
            </div>
          </div>

          <div className="grid grid-cols-12"></div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </>
  );
};
