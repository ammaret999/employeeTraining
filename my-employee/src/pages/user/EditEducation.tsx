import { useNavigate, useParams } from "react-router-dom";
import { CheckLogin, NavbarUser } from "../../components";
import { EducationEdit, Level } from "../../types";
import { useEffect, useState } from "react";

export const EditEducation = () => {
  const [formData, setFormData] = useState<EducationEdit>({
    employeeId: {
      id: 0,
      code: "",
    },
    levelId: 0,
    institution: "",
    description: "",
  });
  const [level, setLevel] = useState<Level[]>([]);

  const navagate = useNavigate();
  const { code } = useParams();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const getEducationByCode = () => {
    fetch(`http://localhost:8080/education/${code}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("tokenHeader")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        Object.keys(res).map((key) => {
          const isHaveId = ["levelId"].includes(key);
          setFormData((prevFormData) => ({
            ...prevFormData,
            [key]: isHaveId ? res[key].id : res[key],
          }));
        });
      });
  };

  const getLevel = () => {
    fetch(`http://localhost:8080/admin/level`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("tokenHeader")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setLevel(res);
      });
  };

  useEffect(() => {
    getEducationByCode();
    getLevel();
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    try {
      e.preventDefault();
      const response = await fetch(`http://localhost:8080/education/${code}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("tokenHeader")}`,
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 200) {
        alert("User edit successfully");
        navagate(-1);
      } else {
        alert("User edit error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <CheckLogin />
      <NavbarUser />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2"></div>

        <div className="col-span-8 justify-center gap-4 shadow-xl bg-gray-50 mt-5">
          <div className="flex justify-center mt-5">
            <p className="text-2xl">Edit Education</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 grid-cols-2 m-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Level
                </label>
                <select
                  name="levelId"
                  value={formData.levelId}
                  onChange={handleSelectChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option>{}</option>
                  {level.map((data) => (
                    <option key={data.id} value={data.id}>
                      {data.level}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Institution
                </label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Institution"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Discription
                </label>
                <input
                  type="text"
                  name="description"
                  onChange={handleInputChange}
                  value={formData.description}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Discription"
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
                  onClick={() =>
                    navagate(`/profile/${formData.employeeId.code}`)
                  }
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
