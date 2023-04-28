import { ChangeEvent, useEffect, useState } from "react";
import { NavbarUser } from "../../components";
import {
  Department,
  EmployeeEdit,
  EmployeeTest,
  Gender,
  Position,
  TitleName,
} from "../../types";
import { useNavigate, useParams } from "react-router-dom";

export const EditEmployee = () => {
  const [formData, setFormData] = useState<EmployeeTest>({
    titleName: {
      id: 0,
      code: "",
      titleName: "",
    },
    firstName: "",
    lastName: "",
    nickName: "",
    birthday: new Date(),
    gender: {
      id: 0,
      code: "",
      gender: "",
    },
    slackName: "",
    phoneNumber: 0,
    email: "",
    startDate: new Date(),
    endDate: new Date(),
    department: {
      id: 0,
      code: "",
      department: "",
    },
    position: {
      id: 0,
      code: "",
      position: "",
      salaryMin: 0,
      salaryMax: 0,
    },
  });

  const [titleNameList, setTitleNameList] = useState<TitleName[]>([]);
  const [genderList, setGenderList] = useState<Gender[]>([]);
  const [departmentList, setDepartmentList] = useState<Department[]>([]);
  const [positionList, setPositionList] = useState<Position[]>([]);
  const [file, setFile] = useState<File>();
  const defaultValue = new Date(formData.birthday).toLocaleDateString();
  const { code } = useParams();
  const navagate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile);
    console.log(selectedFile?.name);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:8080/employee/${code}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fileSubmit = async () => {
    if (file) {
      try {
        const formImage = new FormData();
        formImage.append("file", file);
        console.log(formImage);
        const response = await fetch(`http://localhost:8080/upload/${code}`, {
          method: "POST",
          headers: {},
          body: formImage,
        });

        const data = await response.json();
        console.log(data);
        if (response.status === 200) {
          alert("User upload image successfully");
          navagate(`/profile/${code}`);
          window.location.reload();
        } else {
          alert("User upload image error");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getTitleName = () => {
    fetch(`http://localhost:8080/admin/title`)
      .then((res) => res.json())
      .then((res) => {
        setTitleNameList(res);
      });
  };

  const getTitleGender = () => {
    fetch(`http://localhost:8080/admin/gender`)
      .then((res) => res.json())
      .then((res) => {
        setGenderList(res);
      });
  };

  const getTitleDepartment = () => {
    fetch(`http://localhost:8080/admin/department`)
      .then((res) => res.json())
      .then((res) => {
        setDepartmentList(res);
      });
  };

  const getTitlePosition = () => {
    fetch(`http://localhost:8080/admin/position`)
      .then((res) => res.json())
      .then((res) => {
        setPositionList(res);
      });
  };

  const getEmployeeByCode = () => {
    fetch(`http://localhost:8080/employee/${code}`)
      .then((res) => res.json())
      .then((res) => {
        setFormData(res);
      });
  };

  function deleteEmployee() {
    fetch(`http://localhost:8080/employee/${code}`, {
      method: "DELETE",
    }).then((result) => {
      result.json();
    });
  }

  useEffect(() => {
    getTitleName();
    getTitleGender();
    getTitleDepartment();
    getTitlePosition();
    getEmployeeByCode();
  }, []);

  return (
    <>
      <NavbarUser />

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2"></div>
        <div className="col-span-8 justify-center gap-4 shadow-xl bg-gray-50 mt-5">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 justify-items-end grid m-3">
              <button
                className="btn"
                type="submit"
                onClick={() => {
                  deleteEmployee();
                }}
              >
                Delete Employee
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <p className="text-2xl">Edit Employee</p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-2xl rounded-lg ">
              <div className="m-4">
                <label className="inline-block mb-2 text-gray-500"></label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7">
                      <svg
                        className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      ></svg>
                      <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                        Attach a image
                      </p>
                      <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                        {file?.name}
                      </p>
                    </div>
                    <input
                      name="file"
                      type="file"
                      className="opacity-0"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-3 m-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Title name
                </label>
                <select
                  onChange={handleSelectChange}
                  name="titleName"
                  value={formData.titleName.id}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option>{}</option>
                  {titleNameList.map((data) => (
                    <option key={data.id} value={data.id}>
                      {data.titleName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="First name"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="last name"
                  required
                />
              </div>
            </div>

            <div className="grid gap-6 mb-6 md:grid-cols-2 m-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nick name
                </label>
                <input
                  type="text"
                  name="nickName"
                  value={formData.nickName}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nick name"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Bright day
                </label>
                <input
                  type="date"
                  name="birthday"
                  value={
                    formData.birthday instanceof Date
                      ? formData.birthday.toISOString()
                      : formData.birthday
                  }
                  datatype="yyyy-MM-dd"
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Gender
                </label>
                <select
                  onChange={handleSelectChange}
                  name="gender"
                  value={formData.gender.id}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option>{}</option>
                  {genderList.map((data) => (
                    <option key={data.id} value={data.id}>
                      {data.gender}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Slack name
                </label>
                <input
                  type="text"
                  name="slackName"
                  value={formData.slackName}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Slack name"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Phone number
                </label>
                <input
                  type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Phone number"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  StartDate
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={
                    formData.startDate instanceof Date
                      ? formData.startDate.toISOString()
                      : formData.startDate
                  }
                  datatype="yyyy-MM-dd"
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  EndDate
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={
                    formData.endDate instanceof Date
                      ? formData.endDate.toISOString()
                      : formData.endDate
                  }
                  datatype="yyyy-MM-dd"
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Department
                </label>
                <select
                  onChange={handleSelectChange}
                  name="department"
                  value={formData.department.id}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>{}</option>
                  {departmentList.map((data) => (
                    <option key={data.id} value={data.id}>
                      {data.department}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Position
                </label>
                <select
                  onChange={handleSelectChange}
                  name="position"
                  value={formData.position.id}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option>{}</option>
                  {positionList.map((data) => (
                    <option key={data.id} value={data.id}>
                      {data.position}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="col-span-6 justify-items-end grid">
                <button
                  className="btn"
                  type="submit"
                  onClick={() => {
                    fileSubmit();
                  }}
                >
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
