import { useEffect, useState } from "react";
import { NavbarAdmin } from "../../components/NavbarAdmin";
import { DepartmentEdit } from "../../types";
import { useNavigate, useParams } from "react-router-dom";
import { CheckLogin } from "../../components";

export const EditDepartment = () => {
  const [edit, setEdit] = useState<DepartmentEdit>({
    code: "",
    department: "",
  });
  const navagate = useNavigate();
  const { code } = useParams();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEdit((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const getDepartmentByCode = () => {
    fetch(`http://localhost:8080/admin/department/${code}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("tokenHeader")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setEdit(res);
      });
  };

  useEffect(() => {
    getDepartmentByCode();
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    try {
      e.preventDefault();
      const response = await fetch(
        `http://localhost:8080/admin/department/${code}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("tokenHeader")}`,
          },
          body: JSON.stringify(edit),
        }
      );
      if (response.status === 200) {
        alert("User edit successfully");
        navagate("/admin/home/department");
      } else {
        alert("User edit error");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <CheckLogin />
      <NavbarAdmin />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2"></div>

        <div className="col-span-8 justify-center gap-4 shadow-xl bg-gray-50 mt-5">
          <div className="flex justify-between m-8">
            <button
              className="btn"
              onClick={() => navagate(`/admin/home/department`)}
            >
              {" "}
              Back{" "}
            </button>
          </div>
          <div className="flex justify-center mt-5">
            <p className="text-2xl">Edit Department</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 grid-cols-1 m-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  value={edit.department}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Department"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="col-span-6 justify-items-end grid">
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
              <div className="col-span-6 justify-items-start grid">
                <button
                  className="btn"
                  onClick={() => navagate(`/admin/home/department`)}
                >
                  Cancle
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-span-2"></div>
      </div>
    </>
  );
};
