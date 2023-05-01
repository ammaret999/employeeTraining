import { useEffect, useState } from "react";
import { NavbarUser } from "../../components";
import { EducationCreate, Level } from "../../types";
import { useNavigate, useParams } from "react-router-dom";

export const CreateEducation = () => {
  const [level, setLevel] = useState<Level[]>([]);
  const [formData, setFormData] = useState<EducationCreate>({
    levelId: 0,
    institution: "",
    description: "",
  });

  const navagate = useNavigate();
  const { code } = useParams();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(value);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    try {
      e.preventDefault();
      const response = await fetch(`http://localhost:8080/education/${code}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 200) {
        alert("User create successfully");
        navagate(`/profile/${code}`);
      } else {
        alert("User create error");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getLevel = () => {
    fetch(`http://localhost:8080/admin/level`)
      .then((res) => res.json())
      .then((res) => {
        setLevel(res);
      });
  };

  useEffect(() => {
    getLevel();
  }, []);

  return (
    <>
      <NavbarUser />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2"></div>

        <div className="col-span-8 justify-center gap-4 shadow-xl bg-gray-50 mt-5">
          <div className="flex justify-center mt-5">
            <p className="text-2xl">Create Education</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 grid-cols-2 m-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Level
                </label>
                <select
                  name="levelId"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleChange}
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
                  value={formData.description}
                  onChange={handleInputChange}
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
                  onClick={() => navagate(`/profile/${code}`)}
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
